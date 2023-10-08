<script>
	import SelectChips from './selectChips.svelte';
	import { activeTab } from '$lib/stores/selecctChips.js';
	import { OtherServices } from '$lib/stores/services.js';
	import { OtherServicesNames } from '$lib/stores/services.js';

	import AOS from 'aos';
	import 'aos/dist/aos.css'; // You can also use <link> for styles
	import { onMount } from 'svelte';
	// ..
	onMount(() => {
		AOS.init();
	});
	let select = activeTab;
	activeTab.subscribe((value) => {
		select = value;
	});
</script>

<section data-aos="fade-up" class="xl:flex lg:w-[80%] w-[90%] mx-auto max-w-[1250px]">
	<div class="p-4 basis-1/2 my-5 flex flex-col gap-6">
		<h1 class="text-4xl max-xl:text-center 2xl:text-5xl font-black text-blue-500">
			Improve and Innovate with the Tech Trends
		</h1>
		<p class="text-neutral-600 text-sm text-center xl:text-left xl:text-base font-medium">
			Our team can assist you in transforming your business with the latest tech capabilities to
			stay ahead of the curve.
		</p>
	</div>
	<div class=" grid basis-1/2 lg:min-w-[724px] my-5">
		<SelectChips />

		<div class="flex lg:grid overflow-scroll lg:overflow-hidden p-4 gap-2 md:gap-4">
			{#each $OtherServices as service, i}
				<div
					class="service {select != i + 1
						? 'lg:hidden visible'
						: 'block'} rounded-2xl shadow-lg min-w-[310px] lg:h-[225px] p-4"
				>
					<h1 class="text-2xl font-bold text-blue-600 mb-2">{OtherServicesNames[i]}</h1>
					<div class="flex flex-col gap-4">
						<p class=" font-medium text-xs text-neutral-600">
							{service.description}
						</p>
						<h1 class="lg:text-xl font-bold text-sm text-neutral-600">{service.name}</h1>
						<ol class="list-disc grid gap-4 md:grid-cols-2 pl-5">
							{#each service.list as item, i}
								<li class="font-medium text-sm text-neutral-700">{item}</li>
							{/each}
						</ol>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.service {
		background-image: url('../images/Grad_11.png');
		background-repeat: no-repeat;
		background-size: auto;
	}

	@media (min-width: 1024px) {
		.service {
			background-position: 350px 25px;
		}
	}
</style>
