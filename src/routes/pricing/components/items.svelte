<script>
	import { pricingItems } from '../../../lib/stores/pricing';
	
</script>

<section class="lg:w-[90vw] py-[100px] max-w-[1600px] mx-auto p-4 overflow-x-hidden">
	<h1 class="font-serif text-3xl text-blue-600">How much will your project cost?</h1>
	<p class="text-neutral-600 my-3">
		Choose one of the options below to get an accurate price estimation for your project:
	</p>
	<div class="grid gap-10 md:grid-cols-2 justify-center xl:grid-cols-3">
		{#each $pricingItems as item, index}
			<div data-aos="zoom-out"
				class="border-2 shadow-lg shadow-blue-600/10 md:border-l-blue-500 max-md:border-t-blue-500 border-l-4 gap-2 p-4 flex justify-between flex-col"
			>
				<div class="flex flex-col h-[130px] p-2 justify-center items-center gap-2">
					{@html item.svg}
					<h1 class="text-2xl text-center text-gray-700 font-bold">{item.name}</h1>
				</div>
				<p class="text-gray-700 p-4">{item.description}</p>
				<a
					href="#"
					class="text-base text-blue-600 stroke-blue-600 font-bold stroke-2 inline-flex justify-end items-center p-2 mt-2"
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
				</a>
			</div>
		{/each}
	</div>
</section>
<style>
    svg{
        transition: transform 0.3s ease-out;
    }
    a:hover svg{
        -webkit-transform: translateX(4px);
            -moz-transform: translateX(4px);
            -ms-transform: translateX(4px);
            -o-transform: translateX(4px);
            transform: translateX(4px);
    }
</style>