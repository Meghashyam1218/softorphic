<script>
	import SelectChips from "./selectChips.svelte";
    import {activeTab} from "$lib/stores/selecctChips.js"
    let select = activeTab;
    activeTab.subscribe((value) => {
			select = value;
		});
</script>

<section class="flex flex-col justify-center items-center align-middle p-4 my-5">
	<SelectChips/>
    {#if select === 1}
        <h1>hello</h1>
    {/if}
    {#if select === 2}
        <h1>hello2</h1>
    {/if}
    {#if select === 3}
        <h1>hello3</h1>
    {/if}
</section>
