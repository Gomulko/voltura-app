<script lang="ts">
	import { formatPrice } from '$lib/utils/formatters';

	interface Props {
		min: number;
		max: number;
		onchange: (min: number, max: number) => void;
	}

	let { min, max, onchange }: Props = $props();

	let localMin = $state(min);
	let localMax = $state(max);
	let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

	$effect(() => {
		localMin = min;
		localMax = max;
	});

	function debounce(callback: () => void, delay: number): void {
		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}
		debounceTimeout = setTimeout(callback, delay);
	}

	function handleMinChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		localMin = Number(target.value);
		debounce(() => onchange(localMin, localMax), 300);
	}

	function handleMaxChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		localMax = Number(target.value);
		debounce(() => onchange(localMin, localMax), 300);
	}
</script>

<div>
	<label class="form-label small text-muted">
		Cena: {formatPrice(localMin)} - {formatPrice(localMax)}
	</label>
	<div class="d-flex gap-2">
		<input
			type="range"
			class="form-range"
			min="50000"
			max="250000"
			step="10000"
			value={localMin}
			oninput={handleMinChange}
		/>
		<input
			type="range"
			class="form-range"
			min="50000"
			max="250000"
			step="10000"
			value={localMax}
			oninput={handleMaxChange}
		/>
	</div>
</div>
