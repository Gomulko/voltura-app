<script lang="ts">
  import { filtersStore } from '$lib/stores/filters.svelte';
  import TypeFilter from './TypeFilter.svelte';
  import DriveFilter from './DriveFilter.svelte';
  import PriceRangeFilter from './PriceRangeFilter.svelte';
  import { Button } from '$lib/components/ui';
  import type { BodyType, DriveType } from '$lib/types';

  let filters = $derived(filtersStore.state);

  let localType = $state<BodyType | null>(filters.type);
  let localDrive = $state<DriveType | null>(filters.drive);
  let localMinPrice = $state(filters.minPrice);
  let localMaxPrice = $state(filters.maxPrice);

  function applyFilters(): void {
    filtersStore.setType(localType);
    filtersStore.setDrive(localDrive);
    filtersStore.setPriceRange(localMinPrice, localMaxPrice);
  }
</script>

<section class="container my-4">
  <div class="card card-body bg-light">
    <div class="row g-3 align-items-end">
      <div class="col-md-3">
        <TypeFilter value={localType} onchange={(value: BodyType | null) => (localType = value)} />
      </div>
      <div class="col-md-3">
        <DriveFilter value={localDrive} onchange={(value: DriveType | null) => (localDrive = value)} />
      </div>
      <div class="col-md-3">
        <PriceRangeFilter
          min={localMinPrice}
          max={localMaxPrice}
          onchange={(min: number, max: number) => {
            localMinPrice = min;
            localMaxPrice = max;
          }}
        />
      </div>
      <div class="col-md-3">
        <Button variant="success" class="w-100" onclick={applyFilters}>Filtruj</Button>
      </div>
    </div>
  </div>
</section>
