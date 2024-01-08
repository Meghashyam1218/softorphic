<script>
	import Footer from '../../lib/components/footer.svelte';
	import Navbar from '../../lib/components/navbar.svelte';
	let inputValue
	function formatNumber(n) {
		return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function formatCurrency(event, blur) {
		let input = event.target;
		let input_val = input.value;

		if (input_val === '') {
			return;
		}

		let original_len = input_val.length;
		let caret_pos = input.selectionStart;

		if (input_val.indexOf('.') >= 0) {
			let decimal_pos = input_val.indexOf('.');
			let left_side = input_val.substring(0, decimal_pos);
			let right_side = input_val.substring(decimal_pos);

			left_side = formatNumber(left_side);
			right_side = formatNumber(right_side);

			if (blur === 'blur') {
				right_side += '00';
			}

			right_side = right_side.substring(0, 2);

			input_val = '₹ ' + left_side + '.' + right_side;
		} else {
			input_val = formatNumber(input_val);
			input_val = '₹ ' + input_val;

			if (blur === 'blur') {
				input_val += '.00';
			}
		}

		input.value = input_val;

		let updated_len = input_val.length;
		caret_pos = updated_len - original_len + caret_pos;
		input.setSelectionRange(caret_pos, caret_pos);
	}
</script>

<Navbar x="true" />
<section id="aboutus" class="h-full md:p-8 bg-gray-50/50">
	<div
		class="lg:max-w-[1300px] pt-[75px] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"
	>
		<div
			data-aos="fade-up"
			class="basis-1/2 text-neutral-700 font-medium flex flex-col justify-center p-6"
		>
			<h1 class="text-4xl xl:text-5xl text-blue-700 mb-5 font-serif text-center md:text-start">
				Payment
			</h1>
			<form class="bg-blue-100/50 max-w-[500px] p-8 flex flex-col gap-4 rounded-lg">
				<div class="grid md:grid-cols-2 gap-4">
					<input
						type="text"
						class=" p-4 border-2 border-blue-300 hover:border-blue-500"
						placeholder="Full Name"
					/>
					<input
						type="text"
						class=" p-4 border-2 border-blue-300 hover:border-blue-500"
						placeholder="Company"
					/>
				</div>
				<div class="grid md:grid-cols-2 gap-4">
					<input
						type="eamil"
						class=" p-4 border-2 border-blue-300 hover:border-blue-500"
						placeholder="Work Email"
					/>
					<input
						type="tel"
						class=" p-4 border-2 border-blue-300 hover:border-blue-500"
						placeholder="+91 99XXXYYY17"
					/>
				</div>
				<input
				bind:value="{inputValue}" on:keyup="{(e) => formatCurrency(e)}" on:blur="{() => formatCurrency(event, 'blur')}"
					class=" p-4 border-2 border-blue-300 hover:border-blue-500"
					placeholder="₹ 10,000.00"
				/>
				<input type="submit" class="my-2 bg-blue-400 hover:bg-blue-500 p-4 rounded-md" />
			</form>
		</div>
		<div data-aos="fade-in" class="basis-1/2 lg:block hidden p-4">
			<img src="./payment.svg" alt="" class=" sticky max-lg:h-[300px]" />
		</div>
	</div>
</section>
<Footer />
