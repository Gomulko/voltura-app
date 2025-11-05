<script lang="ts">
	import type { CarSpecs as CarSpecsType } from '$lib/types';

	interface Props {
		specs: CarSpecsType;
	}

	let { specs }: Props = $props();
</script>

<div class="mb-3">
	<h6 class="fw-bold mb-2">Specyfikacja techniczna</h6>
	<ul class="list-unstyled small text-muted">
		<li><strong>0-100 km/h:</strong> {specs.acceleration}</li>
		<li><strong>Prędkość maksymalna:</strong> {specs.topSpeed}</li>
		<li><strong>Ładowanie:</strong> {specs.charging}</li>
		<li><strong>Bateria:</strong> {specs.batteryCapacity}</li>
		<li><strong>Gwarancja:</strong> {specs.warranty}</li>
	</ul>
</div>
