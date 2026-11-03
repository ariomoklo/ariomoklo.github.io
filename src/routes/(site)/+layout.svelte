<script lang="ts">
	import type { Snippet } from 'svelte';
	import { asset } from '$app/paths';
	import '../../app.css';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="shortcut icon" id="emojicon" href={asset('favicon.png')} />
	{@html '<script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script><script src="https://unpkg.com/emojicon"></script><script>emojicon.set("👻")</script>'}
</svelte:head>

<div data-sveltekit-preload-data="hover" style="display: contents">
	{@render children()}
</div>
