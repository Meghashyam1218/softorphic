<script>
	import { pricingItems, selectedPricing } from '../../../lib/stores/pricing';
	let select = selectedPricing;
	selectedPricing.subscribe((value) => {
		select = value;
	});
	function selectOption(a) {
		selectedPricing.update((n) => a);
		selectedPricing.subscribe((value) => {
			select = value;
		});
	}
	$: console.log(select)
</script>

<section class="lg:w-[90vw] mb-[100px] max-w-[1600px] mx-auto p-4 overflow-x-hidden">
	<h1 class="font-serif text-3xl text-blue-600">How much will your project cost?</h1>
	<p class="text-neutral-600 my-3">
		Choose one of the options below to get an accurate price estimation for your project:
	</p>
	<div class="grid gap-10 md:grid-cols-2 justify-center xl:grid-cols-3">
		<div
			data-aos="zoom-in"
			class="item rounded-xl border-blue-200 border-4 shadow-lg hover:shadow-blue-600/10 text-neutral-600 gap-2 p-4 flex flex-col justify-between"
		>
			<p class="p-4 font-serif text-xl 2xs:text-2xl text-neutral-700 text-center">
				Already got a pricing?
			</p>
			<p class="font-mono text-xs px-8 text-center">
				If you had already contacted us and had your requirements priced then you can either revise
				or proceed to payment
			</p>
			<div class="grid gap-4 px-4 m-4">
				<a
					on:click={() => {
						selectOption("Revise Pricing")
						console.log(select)
					}}
					class="  bg-slate-100/70 text-gray-500 hover:border-b-gray-400 border-b-2 border-transparent text-center font-semibold p-3 rounded-lg"
					href="/getpricing">Revise Pricing</a
				>
				<a
					class=" bg-blue-100 text-blue-700 hover:border-b-blue-600 border-b-2 border-transparent font-bold tracking-wide text-center p-3 rounded-lg"
					href="/payment">Proceed to Payment</a
				>
			</div>
		</div>
		{#each $pricingItems as item, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<a href="/getpricing" on:click={(item) => {
				selectOption($pricingItems[index].name)
				console.log(select)
			}}
				data-aos="zoom-in"
				class="item border-2 cursor-pointer shadow-lg shadow-blue-600/10 md:border-l-blue-500 max-md:border-t-blue-500 border-l-4 gap-2 p-4 flex justify-between flex-col"
			>
				<div class="flex flex-col p-2 justify-center items-center gap-2">
					{@html item.svg}
					<h1 class="text-2xl text-center text-gray-700 font-bold">{item.name}</h1>
				</div>
				<p class="text-gray-700 text-center p-4">{item.description}</p>
				<div
					href="#"
					class="text-base max-w-max mx-auto md:ml-auto rounded-lg bg-blue-50 text-blue-600 stroke-blue-600 font-bold stroke-2 inline-flex justify-end items-center p-2 mt-2"
				>
					<span class="  ">Get Pricing</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13 18L17.4665 12.6402C17.7216 12.3341 17.8491 12.181 17.8491 12C17.8491 11.819 17.7216 11.6659 17.4665 11.3598L13 6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M6 18L10.4665 12.6402C10.7216 12.3341 10.8491 12.181 10.8491 12C10.8491 11.819 10.7216 11.6659 10.4665 11.3598L6 6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	svg {
		transition: transform 0.3s ease-out;
	}
	.item:hover div svg {
		-webkit-transform: translateX(4px);
		-moz-transform: translateX(4px);
		-ms-transform: translateX(4px);
		-o-transform: translateX(4px);
		transform: translateX(4px);
	}
</style>
