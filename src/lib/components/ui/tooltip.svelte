<script lang="ts">
	import type { Snippet } from 'svelte';

	let { text = 'Tooltip Text', children }: { text?: string; children: Snippet } = $props();
</script>

<div class="tooltip tooltip-error" data-tip={text}>
	{@render children()}
</div>
