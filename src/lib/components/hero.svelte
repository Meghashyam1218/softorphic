<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Button from './button.svelte';
	let ready = false;

	onMount(() => (ready = true));
</script>

<section
	class="hero cursor-default overflow-hidden bg-gray-950 max-h-[500px] lg:max-h-[100vh]  h-[100vh] bg-cover bg-center flex flex-col gap-4 justify-center max-md:items-center"
>
	<div class="welcome-text flex flex-col gap-4  w-[90%] ml-auto">
		{#if ready}
			<h1
				transition:fade={{ delay: 250, duration: 300 }}
				class=" font-bold welcome text-left text-xl md:text-2xl lg:text-3xl text-rose-700"
			>
				SOFTORPHIC <br /> SOFTWARE SOLUTIONS
			</h1>
		{/if}
		{#if ready}
			<h1
				transition:fade={{ delay: 450, duration: 300 }}
				class="vasista md:text-7xl  lg:text-8xl text-neutral-700 tracking-tighter font-bold text-5xl"
			>
				Your Growth
			</h1>
			<h1
				transition:fade={{ delay: 650, duration: 300 }}
				class="vasista md:text-7xl lg:text-8xl text-neutral-700 tracking-tighter font-bold text-5xl "
			>
				Our Success
			</h1>
		{/if}
		<!-- <h1 class="kitchen text-[#f3de9d] text-[11rem] z-0  relative bottom-48 right-[-10rem] font-extralight">Kitchen</h1> -->
	</div>
	<div class="   w-[90%] ml-auto">
		{#if ready}
			<Button/>
			
		{/if}
		<!-- <a href="#menu" class="text-[#ffffff] p-4 mx-4 text-3xl hover:bg-white hover:text-black ">Browse Menu</a> -->
	</div>
</section>

<style>
	.hero {
		background: url('../images/v904-nunny-012.jpg'), url('../images/Grad_13-removebg-preview.png');
		background-size: cover, contain;
		background-position-y: 0, 35vh;
		background-position-x: 0, 65vw;
		background-repeat: no-repeat;
		background-blend-mode: color-burn;
	}
</style>
