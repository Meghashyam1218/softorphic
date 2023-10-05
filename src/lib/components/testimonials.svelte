<script>
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	let testimonials = [
		{
			name: 'Lillian Murray',
			designation: 'Senior Solution Architect',
			testimonial:
				'ScienceSoft proved to be a professional service provider from the outset. We appreciate their proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels. We know we can always rely on ScienceSoft’s various competencies when our clients require quality software which would facilitate their business success.'
		},
		{
			name: 'Jeffery Jensen',
			designation: 'Director',
			testimonial:
				'ScienceSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. Over the past three years, Lixar was very pleased with the service provided by ScienceSoft development teams and executive management. For accelerated project timelines which require skilled resources, ScienceSoft is a company that your team should consider.'
		},
		{
			name: 'Lloyd Freeman',
			designation: 'Chief Financial Officer',
			testimonial:
				'When we first contacted ScienceSoft, we needed expert advice on the creation of the centralized analytical solution to achieve company-wide transparent analytics and reporting. The system created by ScienceSoft automates data integration from different sources, invoice generation, and provides visibility into the invoicing process. We have already engaged ScienceSoft in supporting the solution and would definitely consider ScienceSoft as an IT vendor in the future.'
		},
		{
			name: 'Ernest Curry',
			designation: 'Founder & CEO',
			testimonial:
				'ScienceSoft powered Tieto with a competent team to develop products for banking services. The team has been delivering results within budget and time. I’m absolutely satisfied with the quality of their services, their development skills and responsibility as well as the way they manage communication with us and our clients. I fully recommend ScienceSoft as a reliable IT partner!'
		},
		{
			name: 'Cornelia BarberL',
			designation: 'Head of eBanking',
			testimonial:
				"Over the past 10 years we've worked on about ten mobile app development projects with ScienceSoft. It was our first encounter with an outsourcing company. The relationship turned out to be very good, so we saw no need to look for other suppliers. ScienceSoft is a professional and dedicated company. We would certainly recommend ScienceSoft as a highly skilled and reliable technology partner."
		}
	];
</script>

<section class="my-20 md:p-8 w-[90vw] max-w-[1440px] mx-auto">
	<div class=" mb-5 md:mb-10 max-md:text-center text-4xl font-black text-rose-600">
		What Our Customers Say
	</div>
	<swiper-container navigation="true" loop="true">
		{#each testimonials as testimonial, i}
			<swiper-slide class="p-8">
				<div
					class="testimonial rounded-2xl p-8 flex mx-auto justify-center items-center gap-6 flex-col max-w-[1000px]"
				>
					<img
						alt="avatar"
						src="./Sample-{i}.png"
						class=" h-[100px] w-[100px] md:h-[150px] md:w-[150px]"
					/>
					<p class="text-center max-md:text-sm p-4 text-gray-800">
						{testimonial.testimonial}
					</p>
					<div class="flex flex-col justify-center items-center gap-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							class="fill-rose-500"
							><path
								d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"
							/></svg
						>
						<div class="flex justify-center gap-1 flex-col">
							<h1 class="text-center font-bold text-rose-600 text-xl">{testimonial.name}</h1>
							<h1 class="text-center text-sm font-medium text-neutral-600">{testimonial.designation}</h1>
						</div>
					</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</section>

<style>
	* {
		--swiper-navigation-size: 30px;
		--swiper-navigation-top-offset: 50%;
		--swiper-navigation-sides-offset: 10px;
		--swiper-navigation-color: var(--swiper-theme-color);
	}
</style>
