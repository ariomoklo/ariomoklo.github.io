<script lang="ts">
	import { asset } from '$app/paths';

	const playerCss = asset('resources/react-crt-video-player/index-DoCiQvoG.css');
	const playerJs = asset('resources/react-crt-video-player/index-D9JujyeQ.js');
</script>

<svelte:head>
	<link rel="stylesheet" href={playerCss} />
	{@html `<script type="module" src="${playerJs}"></script>`}
</svelte:head>

<div id="root"></div>
