<script>
	let arr = [1, 2, 3, 4, 5];
</script>

<div class="flex flex-wrap bg-gray-500 w-[90%] mx-auto mt-[20px] p-4">
	{#each arr as numbers, index}
		<h1 class="font-bold text-7xl">Hello world! {index} {numbers}</h1>
	{/each}
</div>
