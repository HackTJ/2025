<script>
	export let alt;
	export let srcLogo;
	export let href;
</script>

<a
	{href}
	target="_blank"
	rel="noopener"
	class="w-[225px] h-[125px] flex items-center justify-center flex-row mt-2 bg-black p-4 rounded-2xl shrink-0 hover:brightness-75"
>
	<img {alt} src={srcLogo} class="max-w-full max-h-full w-auto h-auto object-contain" />
</a>
