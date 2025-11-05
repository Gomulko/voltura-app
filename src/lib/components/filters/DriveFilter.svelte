<script lang="ts">
	import type { DriveType } from '$lib/types';

	interface Props {
		value: DriveType | null;
		onchange: (value: DriveType | null) => void;
	}

	let { value, onchange }: Props = $props();

	function handleChange(event: Event): void {
		const target = event.target as HTMLSelectElement;
		const newValue = target.value === '' ? null : (target.value as DriveType);
		onchange(newValue);
	}
</script>

<div>
	<label for="driveFilter" class="form-label small text-muted">Napęd</label>
	<select id="driveFilter" class="form-select" value={value ?? ''} onchange={handleChange}>
		<option value="">Wszystkie</option>
		<option value="AWD">AWD</option>
		<option value="RWD">RWD</option>
		<option value="FWD">FWD</option>
	</select>
</div>
