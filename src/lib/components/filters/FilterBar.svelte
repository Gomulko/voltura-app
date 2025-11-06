<script lang="ts">
	import { filtersStore } from '$lib/stores/filters.svelte';
	import TypeFilter from './TypeFilter.svelte';
	import DriveFilter from './DriveFilter.svelte';
	import PriceRangeFilter from './PriceRangeFilter.svelte';
	import type { BodyType, DriveType } from '$lib/types';

	let filters = $derived(filtersStore.state);

	function handleTypeChange(value: BodyType | null): void {
		filtersStore.setType(value);
	}

	function handleDriveChange(value: DriveType | null): void {
		filtersStore.setDrive(value);
	}

	function handlePriceChange(min: number, max: number): void {
		filtersStore.setPriceRange(min, max);
	}
</script>

<section class="container my-4">
	<div class="card card-body bg-light">
		<div class="row g-3 align-items-end">
			<div class="col-md-4">
				<TypeFilter value={filters.type} onchange={handleTypeChange} />
			</div>
			<div class="col-md-4">
				<DriveFilter value={filters.drive} onchange={handleDriveChange} />
			</div>
			<div class="col-md-4">
				<PriceRangeFilter
					min={filters.minPrice}
					max={filters.maxPrice}
					onchange={handlePriceChange}
				/>
			</div>
		</div>
	</div>
</section>
