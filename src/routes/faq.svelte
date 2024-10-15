<script>
	import { base } from '$app/paths';
	import Home from '@svicons/ionicons-solid/home.svelte';
	import Footer from '../components/Footer.svelte';
	import faq from '../eventdata/faq';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="p-8 md:p-12">
		<a href="{base}/"><Home width="32px" class="text-[#A7D0F1] hover:text-[#83BDEC]" /></a>
		<div class="flex items-center mt-8">
			<div class="flex bg-[#A7D0F1] rounded-2xl h-16 w-16 items-center mr-4">
				<div class="m-auto font-black text-blackberry-800 text-center text-4xl">?</div>
			</div>
			<h1 class="text-5xl font-black text-white">FAQ</h1>
		</div>
		<div class="w-full mt-8 space-y-8">
			{#each faq as { category, questions }}
				<div class="bg-blackberry-800 rounded-lg overflow-hidden">
					<h2 class="text-2xl font-bold text-white p-4 bg-blackberry-700">{category}</h2>
					<div class="space-y-2 p-4">
						{#each questions as { question, answer, answerComponent }}
							<details class="bg-blackberry-600 rounded-lg overflow-hidden">
								<summary class="flex justify-between items-center p-4 cursor-pointer">
									<h3 class="font-bold text-xl text-white">{question}</h3>
									<svg class="w-6 h-6 text-white transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</summary>
								<div class="p-4 bg-blackberry-500 text-white">
									{#if answer}
										<p>{answer}</p>
									{:else if answerComponent}
										<svelte:component this={answerComponent} />
									{/if}
								</div>
							</details>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<Footer class="mt-8" />
</section>

<style>
	details > summary::-webkit-details-marker {
		display: none;
	}

	details[open] > summary > svg {
		transform: rotate(180deg);
	}
</style>