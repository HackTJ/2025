<script>
	import { base } from '$app/paths';

	import Home from '@svicons/ionicons-solid/home.svelte';
	import WinnerCard from '../components/Winners/WinnerCard.svelte';
	import Footer from '../components/Footer.svelte';
	import pastwinners from '../eventdata/winners';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="p-8 md:p-12">
		<a href="{base}/"><Home width="32px" class="text-theme-100 hover:text-theme-200" /></a>
		<h1 class="text-5xl font-black text-white mt-8">Past Winners</h1>
		<h2 class="block text-4xl my-5 font-semibold text-theme-100">2024</h2>
        <div
			class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
		>
        
			{#each pastwinners as { title, description, name, picture, winners, icon}}
				<WinnerCard {title} {name} {description} {picture} {winners} {icon} />
			{/each}
		</div>
	</div>
	<Footer class="mt-8" />
</section>
