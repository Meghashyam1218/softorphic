<script>
	import { activeTab } from '$lib/stores/selecctChips.js';

	let count_value = activeTab;
	activeTab.subscribe((value) => {
		count_value = value;
	});
	function selectOption(a) {
		activeTab.update((n) => a);
		activeTab.subscribe((value) => {
			count_value = value;
		});
	}
	let services = [
		'Big Data',
		'Artificial Intelligence',
		'Computer Vision',
		'Internet Of Things',
		'Blockchain',
		'Mixed Reality'
	];
</script>

<div class="selection flex flex-row max-lg:hidden p-4 justify-evenly">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	{#each services as service, i}
		<div
			on:click={() => {
				selectOption(i+1);
			}}
			class="button-container mx-2 {count_value == (i+1)
				? 'border-blue-500'
				: 'border-r-blue-300'} border-4 rounded-full"
			id="myButton"
		>
			<button class="button-icon-container">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0H24V24H0z" />
					<path
						d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"
						fill="black"
					/>
				</svg>
			</button>

			<div class="button-text-container {count_value == (i+1) ? 'md:w-[200px]' : 'md:w-0'} w-0">
				<span class="text-neutral-800 font-semibold">{service}</span>
			</div>
		</div>
	{/each}
</div>

<style>
	.button-container {
		padding: 5px;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	}

	.button-text-container {
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap; /*Keep text always one line*/
		overflow: hidden;
		/* width: 0; */
		transition: width 1s;
	}

	.button-icon-container {
		width: 48px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
	}
</style>
