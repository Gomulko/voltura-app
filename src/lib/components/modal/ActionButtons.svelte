<script lang="ts">
	import { Button } from '$lib/components/ui';

	interface Props {
		onfinddealer: () => void;
		onfindsalepoint: () => void;
	}

	let { onfinddealer, onfindsalepoint }: Props = $props();
</script>

<div class="d-flex gap-2 justify-content-end">
	<Button variant="outline-primary" onclick={onfinddealer}>Znajdź dealera</Button>
	<Button variant="primary" onclick={onfindsalepoint}>Znajdź punkt sprzedaży</Button>
</div>
