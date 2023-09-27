<nav class=" p-4 px-6 flex text-rose-600 font-medium fixed w-[100vw] ">
	<div class="flex flex-col basis-1/3 cursor-pointer">
		<p href="/#" class="font-black text-2xl">SOFTORPHIC</p>
		<p href="/#" class="font-bold text-sm text-justify">SFOTWARE SOLUTIONS</p>
	</div>
	<div class="basis-2/3 flex justify-end items-center gap-4 text-xl ">
		<div class="dropdown">
			<a  class="dropbtn inline-flex items-center gap-1 p-2" href="/#">About Us <svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg
			></a>
			<div class="dropdown-content">
				<a href="/#">Link 1</a>
				<a href="/#">Link 2</a>
				<a href="/#">Link 3</a>
			</div>
		</div>
		<div class="dropdown">
			<a  class="dropbtn inline-flex items-center gap-1 p-2" href="/#">Services<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg
			></a>
			<div class="dropdown-content">
				<a href="/#">Link 1</a>
				<a href="/#">Link 2</a>
				<a href="/#">Link 3</a>
			</div>
		</div>
		<a class="inline-flex items-center gap-1 p-2" href="/#">Pricing</a>
		<a class="inline-flex items-center gap-1 p-2" href="/#">Contact Us </a>
		<button
			class="p-2 bg-rose-600 text-gray-100 rounded-md hover:text-rose-600 hover:bg-transparent hover:border-rose-600 border-2 hover:font-semibold  transition-all ease-in"
		>
			Get Started
		</button>
		
	</div>
</nav>

<style>
	a {
		background: linear-gradient(to right, rgba(44, 105, 105, 0), rgba(100, 200, 200, 0)),
			linear-gradient(to right, rgb(255, 0, 0), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
		background-size: 100% 0.1em, 0 0.1em;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 400ms;
	}

	a:hover,
	a:focus {
		background-size: 0 0.1em, 100% 0.1em;
	}
	/* .dropbtn {
		background-color: #04aa6d;
		color: white;
		padding: 16px;
		font-size: 16px;
		border: none;
	} */

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f1f1f1;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #e6e6e6;
	}

	.dropdown:hover  .dropdown-content {
		display: block;
	}

	
</style>
