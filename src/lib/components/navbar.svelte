<script>
	/* Set the width of the side navigation to 250px */
	function openNav() {
		document.getElementById('mySidenav').style.width = '250px';
	}

	/* Set the width of the side navigation to 0 */
	function closeNav() {
		document.getElementById('mySidenav').style.width = '0';
	}
	let y;
	export let x;
</script>

<svelte:window bind:scrollY={y} />
<nav
	class=" {x === 'true' || y > 50
		? 'bg-white shadow-md'
		: 'bg-transparent'}  transition-all easin-in z-[99] p-4 px-6 flex justify-between text-blue-600 font-medium fixed w-[100vw]"
>
	<!-- <div href="/"
		class="flex flex-col lg:basis-1/3 cursor-pointer"
	>
		<p href="/#" class="font-black text-xs">SOFTORPHIC</p>
		<p href="/#" class="font-bold text-xs text-justify">SFOTWARE SOLUTIONS</p>
	</div> -->
	<a href="/"><img alt="logo" src="/logo-g-h-40.png" /></a>
	<div class="lg:basis-2/3 flex justify-end items-center gap-4 text-xl">
		<div class="dropdown1 hidden md:inline-block">
			<a
				class="navbtn text-sm lg:text-base hidden md:inline-flex items-center gap-1 lg:p-2"
				href="/">Home</a
			>

			<a
				class="navbtn text-sm lg:text-base dropbtn inline-flex items-center gap-1 lg:p-2"
				href="/aboutus"
				>About Us
			</a>
		</div>

		<a
			class="navbtn text-sm lg:text-base dropbtn hidden md:inline-flex items-center gap-1 lg:p-2"
			href="/#services"
			>Services
		</a>

		<a
			class="navbtn text-sm lg:text-base hidden md:inline-flex items-center gap-1 lg:p-2"
			href="/pricing">Pricing</a
		>
		<a
			class="navbtn text-sm lg:text-base hidden md:inline-flex items-center gap-1 lg:p-2"
			href="/contactus">Contact Us</a
		>
		<a
			href="/getpricing"
			class=" text-sm text-center hidden md:block p-2 min-w-[132px] bg-blue-600 text-gray-100 rounded-md hover:text-blue-600 hover:bg-transparent hover:border-blue-600 border-2 hover:font-semibold transition-all ease-in"
		>
			Get Started
		</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span class="md:hidden" style="font-size:30px;cursor:pointer" on:click={openNav}>&#9776;</span>
	</div>
</nav>
<div id="mySidenav" class="sidenav">
	<a class="navbtn closebtn" href="#" on:click={closeNav}>&times;</a>
	<a class="navbtn" href="/">Home</a>
	<a class="navbtn" href="/aboutus">About Us</a>
	<a class="navbtn" href="/#services">Services</a>
	<a class="navbtn" href="/pricing">Pricing</a>
	<a class="navbtn" href="/contactus">Contact Us</a>
	<a class="navbtn" href="/getpricing"> Get Started </a>
	<a class="navbtn !text-sm" href="/policies#refund"> Refund policies</a>
	<a class="navbtn !text-sm " href="/policies"> Terms and Conditions</a>
</div>

<style>
	.navbtn {
		background: linear-gradient(to right, rgba(44, 105, 105, 0), rgba(100, 200, 200, 0)),
			linear-gradient(to right, rgb(255, 0, 0), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
		background-size: 100% 0.1em, 0 0.1em;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 400ms;
	}

	.navbtn:hover,
	.navbtn:focus {
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

	.dropdown:hover .dropdown-content {
		display: block;
	}
	/* ################################################################ */
	/* The side navigation menu */
	.sidenav {
		height: 100%; /* 100% Full-height */
		width: 0; /* 0 width - change this with JavaScript */
		position: fixed; /* Stay in place */
		z-index: 99; /* Stay on top */
		top: 0; /* Stay at the top */
		right: 0;
		background-color: rgb(243 244 246); /* Black*/
		overflow-x: hidden; /* Disable horizontal scroll */
		padding-top: 60px; /* Place content 60px from the top */
		transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
	}

	/* The navigation menu links */
	.sidenav .navbtn {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 25px;
		color: rgb(37 99 235);
		display: block;
		transition: 0.3s;
	}

	/* When you mouse over the navigation links, change their color */
	.sidenav .navbtn:hover {
		color: black;
	}

	/* Position and style the close button (top right corner) */
	.sidenav .closebtn {
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		margin-left: 50px;
	}

	/* Style page content - use this if you want to push the page content to the right when you open the side navigation */

	/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
	@media screen and (max-height: 450px) {
		.sidenav {
			padding-top: 15px;
		}
		.sidenav a {
			font-size: 18px;
		}
	}
</style>
