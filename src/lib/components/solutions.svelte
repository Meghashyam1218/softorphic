<script>
	import { Solutions1 } from '$lib/stores/solutions.js';
	console.log(Solutions1);
</script>

<section
	class="solutions bg-zinc-50/20 shadow-xl p-4 md:p-8 my-20 flex flex-col gap-5 w-[90vw] max-w-[1440px] mx-auto rounded-2xl"
>
	<div>
		<h1 class="text-4xl font-bold text-rose-600">
			{$Solutions1.name}
		</h1>
		<p class="font-medium text-neutral-600 my-2">
			{$Solutions1.description}
		</p>
	</div>
	<div class="solutionsgrid grid md:grid-cols-3  lg:grid-cols-4 align-middle items-center justify-items-center gap-3">
		{#each $Solutions1.list as solution, i}
			<div
				class="solution m-2 p-1 md:p-4 font-semibold{' justify-self-stretch h-[100%]'}
                {' border-4 max-md:border-l-rose-500 md:border-r-rose-500'}
                {"transition-all ease-in"}
                {'hover:bg-rose-500 hover:text-slate-50 hover:border-rose-500'}
                flex justify-center items-center rounded-xl"
			>
				<h1 class="text-center max-md:text-sm ">{solution}</h1>
			</div>
		{/each}
	</div>
</section>

<style>
	.solutions {
		/* background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */
		/* background-image: url("../images/2946.jpg"); */
		/* background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%); */
	}
	.solutionsgrid {
		grid-auto-rows: 1fr;
	}
	.solution {
		/* background-image: linear-gradient(to top, #dfe9f3b9 0%, rgba(255, 255, 255, 0.76) 100%); */
		/* background: linear-gradient(90deg, #E3FDF5, #FFE6FA);    */
		/* background: linear-gradient(220.55deg, #FFF6EB 0%, #DFD1C5 100%); */
		/* background-image:url("../images/Grad_03.png") ; */
		/* background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
		/* background: linear-gradient(to bottom, #d5dee7 0%, #e8ebf2 50%, #e2e7ed 100%), */
		/* linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.02) 50%,
				rgba(255, 255, 255, 0.02) 61%,
				rgba(0, 0, 0, 0.02) 73%
			),
			linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
		background-blend-mode: normal, color-burn; */
	}
</style>
