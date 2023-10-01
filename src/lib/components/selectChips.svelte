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
</script>

<div class="selection flex flex-row w-[80vw] max-w-[750px] justify-evenly">
	<div
		on:click={() => {
			selectOption(1);
		}}
		class="button-container mx-2 {count_value == 1
			? 'border-[#ebba50]'
			: 'border-neutral-800'} border-2 rounded-full"
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

		<div class="button-text-container {count_value == 1 ? 'md:w-[170px]' : 'md:w-0'} w-0">
			<span class="text-neutral-800">Big Data Analysis</span>
		</div>
	</div>
	<div
		on:click={() => {
			selectOption(2);
		}}
		class="button-container mx-2 {count_value == 2
			? 'border-[#ebba50]'
			: 'border-neutral-800'} border-2 rounded-full"
		id="myButton"
	>
		<button class="button-icon-container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z" fill="black" />
			</svg>
		</button>

		<div class="button-text-container {count_value == 2 ? ' md:w-[200px]' : 'md:w-0'} w-0">
			<span class="text-neutral-800">Artificial Intelligence</span>
		</div>
	</div>
	<div
		on:click={() => {
			selectOption(3);
		}}
		class="button-container mx-2 {count_value == 3
			? 'border-[#ebba50]'
			: 'border-neutral-800'} border-2 rounded-full"
		id="myButton"
	>
		<button class="button-icon-container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8zm-9-2h16V8H4v11zm9-9h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4v3h3a3 3 0 1 1-3-3zM2 3h20v2H2V3z"
					fill="black"
				/>
			</svg>
		</button>

		<div class="button-text-container {count_value == 3 ? 'md:w-[150px]' : 'md:w-0'} w-0">
			<span class="text-neutral-800">Computer Vision</span>
		</div>
	</div>
	<div
		on:click={() => {
			selectOption(4);
		}}
		class="button-container mx-2 {count_value == 4
			? 'border-[#ebba50]'
			: 'border-neutral-800'} border-2 rounded-full"
		id="myButton"
	>
		<button class="button-icon-container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.772a.4.4 0 0 1 0 .674L7.615 15.11A.4.4 0 0 1 7 14.77V9.23c0-.221.18-.4.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z"
					fill="black"
				/>
			</svg>
		</button>

		<div class="button-text-container {count_value == 4 ? 'md:w-[200px]' : 'md:w-0'} w-0">
			<span class="text-neutral-800">Internet of Things</span>
		</div>
	</div>
	<div
		on:click={() => {
			selectOption(5);
		}}
		class="button-container mx-2 {count_value == 5
			? 'border-[#ebba50]'
			: 'border-neutral-800'} border-2 rounded-full"
		id="myButton"
	>
		<button class="button-icon-container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.772a.4.4 0 0 1 0 .674L7.615 15.11A.4.4 0 0 1 7 14.77V9.23c0-.221.18-.4.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z"
					fill="black"
				/>
			</svg>
		</button>

		<div class="button-text-container {count_value == 5 ? 'md:w-[200px]' : 'md:w-0'} w-0">
			<span class="text-neutral-800">Mixed Reality</span>
		</div>
	</div>
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
