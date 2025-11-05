<script lang="ts">
	import type { BodyType } from '$lib/types';

	interface Props {
		value: BodyType | null;
		onchange: (value: BodyType | null) => void;
	}

	let { value, onchange }: Props = $props();

	function handleChange(event: Event): void {
		const target = event.target as HTMLSelectElement;
		const newValue = target.value === '' ? null : (target.value as BodyType);
		onchange(newValue);
	}
</script>

<div>
	<label for="typeFilter" class="form-label small text-muted">Typ nadwozia</label>
	<select id="typeFilter" class="form-select" value={value ?? ''} onchange={handleChange}>
		<option value="">Wszystkie</option>
		<option value="sedan">Sedan</option>
		<option value="suv">SUV</option>
		<option value="hatchback">Hatchback</option>
		<option value="coupe">Coupe</option>
	</select>
</div>
