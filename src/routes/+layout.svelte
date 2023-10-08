<script>
	import './styles.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css'; // You can also use <link> for styles
	import { onMount } from 'svelte';
	// ..
	onMount(() => {
		AOS.init();
	});
</script>

<slot />

<style lang="postcss">
	:global(html) {
		/* background-color: theme(colors.gray.100); */
	}
</style>
