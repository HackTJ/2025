<script>
	export let title, description, name, picture, winners, icon ;
    function shortdesc(desc){
        return desc.length > 80 ? desc.slice(0,80) + '...' : desc;
    }
    console.log(picture)
</script>

<div class="relative p-6 bg-blueberry-200 text-blackberry-800 rounded-2xl min-h-min h-[40vh] overflow-hidden flex flex-col justify-center items-center group transition-all duration-300">
    <div>
        <h1 class="font-bold text-2xl">{title}: <span class="font-semibold text-2xl text-blueberry-600">{name}</span></h1>
       
    </div>

	{#if picture !== 'na'}
    <div
        class="absolute inset-0 bg-center bg-cover opacity-10"
        style="background-image: url({picture});"
    ></div>
    {/if}

    <div class="z-10 w-[50%] h-[50%] flex justify-center items-center my-5  group-hover:hidden"> 
        <svelte:component this={icon} class="text-blueberry-600 w-[100%] h-auto" />
    </div>

    <div class="transition-all duration-300 hidden group-hover:block">
        <p class="mt-2"><strong>Winners:</strong> {winners}</p>
        <p class="mt-2"><strong>Description:</strong> {description}</p>
    </div>

</div>
<style>
	/* Ensures that the winners and description are initially hidden */
	.hidden {
		display: none;
	}
    
</style>