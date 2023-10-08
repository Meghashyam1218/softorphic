<script>
	import About from "./components/about.svelte";
	import Navbar from '../../lib/components/navbar.svelte';
	import Testimonials from '../../lib/components/testimonials.svelte';
	import Footer from '../../lib/components/footer.svelte';
	import Numbers from "./components/numbers.svelte";
	import Serve from "./components/serve.svelte";
	import Industries from "./components/industries.svelte";
	import Work from "./components/work.svelte";
</script>

<Navbar x="true"/>
<About/>
<Numbers/>
<Serve/>
<Industries/>
<Work/>
<!-- <Testimonials/> -->
<Footer/>