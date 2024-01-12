<script>
	import { pricingItems } from '../../lib/stores/pricing';
	import Navbar from '../../lib/components/navbar.svelte';
	import Footer from '../../lib/components/footer.svelte';

</script>

<Navbar x="true" />
<section id="aboutus" class="h-full md:p-8 bg-gray-50/50 ">
	<div
		class="lg:max-w-[1300px] pt-[75px] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"
	>
		<div
			data-aos="fade-up"
			class="basis-1/2 text-neutral-700 font-medium flex flex-col  justify-center p-6 "
		>
			<h1 class="text-4xl xl:text-5xl text-blue-700 mb-5  font-serif text-center md:text-start">
				Let's Talk
			</h1>
            <form class="bg-blue-100/50 p-8  flex flex-col gap-4 rounded-lg">
                <textarea class="p-4 h-32 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500" placeholder="Something we can help you with?"></textarea>
                <div class="grid md:grid-cols-2 gap-4">
                    <input type="text" class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500" placeholder="Full Name">
                    <input type="text" class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500" placeholder="Company">
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                    <input type="eamil" class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500" placeholder="Work Email">
                    <input type="tel" class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500" placeholder="Telephone">
                </div>
                <input type="submit" class="my-2 bg-blue-400 hover:bg-blue-500 p-4 rounded-md">
            </form>
		</div>
		<div data-aos="fade-in" class="basis-1/2 lg:block hidden p-4">
			<img src="./contactus.svg" alt="" class=" sticky max-lg:h-[300px]" />
		</div>
	</div>
</section>
<Footer/>
