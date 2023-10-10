<script>
	import Navbar from '../../lib/components/navbar.svelte';
	import Footer from '../../lib/components/footer.svelte';
	import { selectedPricing, pricingItems } from '../../lib/stores/pricing.js';
	console.log($selectedPricing);
	let select = selectedPricing
	selectedPricing.subscribe((value) => {
		select = value;
	});
	console.log(select)
	let items = pricingItems
	pricingItems.subscribe((v)=>{
		items=v
	})
	let arr = []
	for (let i=0;i<items.length;i++){
		arr.push(items[i].name)
	}
	arr.push("Revise Pricing")
	console.log(arr)
	$: console.log(select)
</script>


<Navbar x="true" />
<section id="getpricing" class="h-full md:p-8 bg-gray-50/50">
	<div
		class="lg:max-w-[1300px] pt-[75px] 2md:flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"
	>
		<div
			data-aos="fade-up"
			class="lg:basis-1/2 text-neutral-700 font-medium flex flex-col p-4 md:p-8 justify-center"
		>
			<h1 class="text-4xl xl:text-5xl text-blue-700 mb-5 font-serif text-center md:text-start">
				Let's get started
			</h1>
			<form class="bg-blue-100 p-4 flex flex-col gap-4 rounded-lg">
				<select bind:value={select} id="item" class="p-4 border-2 border-blue-300 hover:border-blue-500" name="item">
					{#each arr as value}<option {value}>{value}</option>{/each}
				</select>
				{#if select === 'Revise Pricing'}
					<input
						type="text"
						class=" p-4 border-2 border-blue-300 hover:border-blue-500"
						placeholder="Temporary Invoice ID"
					/>
				{/if}
				<textarea
					class="p-4 h-32 border-2 border-blue-300 hover:border-blue-500"
					placeholder="Write about your requirements in detail..."
				/>
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
						placeholder="Telephone"
					/>
				</div>
				<input type="submit" class="my-2 bg-blue-400 hover:bg-blue-500 p-4 rounded-md" />
			</form>
		</div>
		<div data-aos="fade-in" class="basis-1/2 lg:block hidden p-4">
			<img src="./pricing.svg" alt="" class=" sticky max-lg:h-[300px]" />
		</div>
	</div>
</section>
<Footer />

<style>
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		/* background: transparent; */
		background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
		background-repeat: no-repeat;
		background-position-x: 99%;
		background-position-y: center;
		border: 1px solid #dfdfdf;
		border-radius: 2px;
		/* margin-right: 2rem; */
		padding: 1rem;
		padding-right: 2rem;
	}
</style>
