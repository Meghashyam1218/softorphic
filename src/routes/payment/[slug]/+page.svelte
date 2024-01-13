<script>
	import Footer from '../../../lib/components/footer.svelte';
	import Navbar from '../../../lib/components/navbar.svelte';
	import axios from 'axios';
	import { page } from '$app/stores';
	import { loading } from '../../../lib/stores/transaction';
	let load_value = loading;

	loading.subscribe((value) => {
		load_value = value;
	});
	function setLoading(a) {
		loading.update((n) => a);
		loading.subscribe((value) => {
			load_value = value;
		});
	}
	var data = $page.params;

	var details = {
		success: '',
		code: '',
		message: '',
		data: {
			merchantId: '',
			merchantTransactionId: '',
			transactionId: '',
			amount: '',
			state: '',
			responseCode: '',
			paymentInstrument: {
				type: '',
				vpa: null,
				maskedAccountNumber: '',
				ifsc: '',
				utr: '',
				upiTransactionId: '',
				accountHolderName: ''
			}
		}
	};
	console.log($page.params.slug);
	var amount;
	function formatNumber(n) {
		return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	if (data.slug.charAt(0) === 'T') {
		console.log('calling api');
		try {
			axios
				.post(`https://softorphic-backend.vercel.app/api/status/${data.slug}/false`)
				.then((response) => {
					// window.location.href = response.data

					setLoading(false);
					details = response.data;
					console.log(details);
					amount = details.data.amount / 100;
					amount = amount.toString();
					let decimal_pos = amount.indexOf('.');
					console.log(decimal_pos);
					let left_side = amount.substring(0, decimal_pos);
					let right_side = amount.substring(decimal_pos);

					left_side = formatNumber(left_side);
					right_side = formatNumber(right_side);
					if (decimal_pos > -1) {
						amount = left_side + '.' + right_side;
					} else {
						amount = left_side + right_side;
					}
				});
			// console.log(res);
		} catch (err) {
			console.log(err);
		}
	}
</script>

<Navbar x="true" />
<section id="aboutus" class="h-full md:p-8 bg-gray-50/50">
	<div
		class="lg:max-w-[1300px] pt-[75px] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"
	>
		{#if !load_value}
			<div
				data-aos="fade-up"
				class="basis-1/2 text-neutral-700 font-medium flex flex-col justify-center p-6"
			>
				<h1 class="text-4xl xl:text-5xl text-blue-700 mb-5 font-serif text-center md:text-start">
					{#if details.success == true}
						Payment Complete
					{:else if details.data.state == 'FAILED'}
						Payment Failed
					{:else if details.data.state == 'PENDING'}
						Payemnt Pending
					{/if}
				</h1>
				<div
					id="paymentSlip"
					class="bg-blue-100/50 max-w-[500px] p-8 flex flex-col gap-4 rounded-lg"
				>
					<h1 class="text-blue-600 font-medium text-xl">
						<br /><span class="text-gray-500 font-bold text-base"> {details.message}</span>
					</h1>
					{#if details.data.responseCode != "SUCCESS"}
						<h1 class="text-blue-600 font-medium text-xl">
							<br /><span class="text-gray-500 font-bold text-base"> {details.data.responseCodeDescription}</span>
						</h1>
					{/if}
					<h1 class="text-blue-600 font-medium text-xl">
						Transaction Id: <br /><span class="text-gray-500 font-bold text-base">
							{'  ' + details.data.transactionId}</span
						>
					</h1>
					<h1 class="text-blue-600 font-medium text-xl">
						Amount: <br /><span class="text-gray-500 font-bold text-base"> ₹{'  ' + amount}</span>
					</h1>
					<h1 class="text-blue-600 font-medium text-xl">
						Referenec Id: <br /><span class="text-gray-500 font-bold text-base">
							{'  ' + details.data.merchantTransactionId}</span
						>
					</h1>
				</div>
			</div>
		{/if}
		{#if !load_value}
			<div data-aos="fade-in" class="basis-1/2 lg:block hidden p-4">
				{#if details.success == true}
					<img src="/paymentDone.svg" alt="" class=" sticky max-lg:h-[300px]" />
				{:else}
					<img src="/paymentFailed.svg" alt="" class=" sticky max-lg:h-[300px]" />
				{/if}
			</div>
		{:else}
			<div data-aos="fade-in" class="basis-1/2 lg:block hidden p-4">
				<img src="/loadingT.svg" alt="" class=" sticky max-lg:h-[300px]" />
			</div>
		{/if}
	</div>
</section>
<Footer />
