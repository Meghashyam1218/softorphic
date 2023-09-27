<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let ready = false;
	
	onMount(() => (ready = true));
</script>

<section
	class="hero cursor-default overflow-hidden bg-gray-950 max-h-[550px] md:max-h-[100vh] h-[100vh] bg-cover bg-center flex flex-col justify-center max-md:items-center "
>
	<div class="welcome-text flex flex-col relative w-[90%] ml-auto ">
		{#if ready}
		<h1
			transition:fade={{ delay: 250, duration: 300 }}
			class=" font-bold welcome text-left text-3xl md:text-6xl  relative top-5 md:-top-10 right-[0rem] text-rose-700"
		>
			SOFTORPHIC <br> SOFTWARE SOLUTIONS
		</h1>
		{/if}
		{#if ready}
		<h1
			transition:fade={{ delay: 450, duration: 300 }}
			class="vasista text-[#e29d07] text-[6rem] 2xs:text-[6.5rem] sm:text-[9rem] md:text-[11rem] z-0 font-bold leading-[5rem]"
		>
			Your Growth
		</h1>
        <h1
			transition:fade={{ delay: 450, duration: 300 }}
			class="vasista text-[#e29d07] text-[6rem] 2xs:text-[6.5rem] sm:text-[9rem] md:text-[11rem] z-0 font-bold "
		>
			Our Success
		</h1>
		{/if}
		<!-- <h1 class="kitchen text-[#f3de9d] text-[11rem] z-0  relative bottom-48 right-[-10rem] font-extralight">Kitchen</h1> -->
	</div>
	<!-- <div class="flex justify-between relative z-10 items-center">
		{#if ready}
		<button transition:fade={{ delay: 650, duration: 300 }}
		class="text-white text-sm md:text-xl md:mt-[-30px] transition-all ease-in origin-right hover:bg-white hover:text-black border-white border-2 p-4"
		>Explore Kitchen</button
	>
		{/if}
		<a href="#menu" class="text-[#ffffff] p-4 mx-4 text-3xl hover:bg-white hover:text-black ">Browse Menu</a>
	</div> -->
</section>

<style>
	.hero {
		background: url("../images/v904-nunny-012.jpg"),
			url('../images/Grad_13-removebg-preview.png');
		background-size: cover,contain;
        background-position-y: 0 , 35vh;
        background-position-x: 0 , 65vw;
        background-repeat: no-repeat;
        background-blend-mode: color-burn;
	}
	

</style>
