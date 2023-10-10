<script>
	import Footer from '../../lib/components/footer.svelte';
	import Navbar from '../../lib/components/navbar.svelte';
</script>

<Navbar x="true" />
<section class="flex flex-col justify-between md:h-[100vh]">
	<div class="flex pt-[100px] max-md:flex-col p-8 text-center justify-center gap-5 items-center">
		<div>
			<h1 class="text-5xl text-blue-800 font-serif">Page Under Maintainance</h1>
			<p class="font-mono xs:text-xl p-4">for any enquiries <a class="underline underline-offset-4 font-bold text-blue-600" href="/contactus">Contact Us</a></p>
		</div>
		<img alt="yippy" src="./Yippy.svg" />
	</div>
	<Footer />
</section>
