<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Button from './button.svelte';
	let ready = false;

	onMount(() => (ready = true));
</script>

<section
	class="hero cursor-default overflow-hidden bg-gray-950 max-h-[100vh]  h-[100vh] bg-cover bg-center flex flex-col gap-4 justify-center max-md:items-center"
>
{#if ready}
	<div class="welcome-text flex flex-col gap-4  w-[90%] ml-auto">
		
			<h1
				transition:fade={{ delay: 0, duration: 300 }}
				class=" font-bold welcome text-left text-xl md:text-2xl lg:text-3xl text-blue-700"
			>
				SOFTORPHIC <br /> SOFTWARE SOLUTIONS
			</h1>
		
			<h1
				transition:fade={{ delay: 150, duration: 300 }}
				class="vasista md:text-7xl  lg:text-8xl text-neutral-700 tracking-tighter font-bold text-5xl"
			>
				Your Growth
			</h1>
			<h1
				transition:fade={{ delay: 250, duration: 300 }}
				class="vasista md:text-7xl lg:text-8xl text-neutral-700 tracking-tighter font-bold text-5xl "
			>
				Our Success
			</h1>
		
		<!-- <h1 class="kitchen text-[#f3de9d] text-[11rem] z-0  relative bottom-48 right-[-10rem] font-extralight">Kitchen</h1> -->
	</div>
	<div transition:fade={{ delay: 350, duration: 300 }} class="   w-[90%] ml-auto">
		
			<Button/>
			
		
		<!-- <a href="#menu" class="text-[#ffffff] p-4 mx-4 text-3xl hover:bg-white hover:text-black ">Browse Menu</a> -->
	</div>
	<div transition:fade={{ delay: 450, duration: 300 }} class=" w-[90%] ml-auto  flex ">
		<p class="para p-4 backdrop-blur-sm bg-white/70 rounded-[2rem] md:max-w-[70%] max-w-[85%] md:text-xl text-xs text-center font-semibold  text-gray-700 tracking-wide py-6   shadow-lg">
			" We transform businesses with powerful and adaptable digital solutions that satisfy the needs of
			today and unlock the opportunities of tomorrow. "
		</p>
	</div>
	{/if}
</section>


<style>
	.hero {
		background: url('../images/herobg.jpg'), url('../images/herobg2.png');
		background-size: cover, contain;
		background-position-y: 0, 35vh;
		background-position-x: 0, 65vw;
		background-repeat: no-repeat;
		background-blend-mode: color-burn;
	}
	.para{
		background-image: url("../images/parabg.png");
		background-size: cover;
		background-position-y: -20vh ;
		background-repeat: no-repeat;
	}
</style>
