<script lang="ts">
  import { carsStore } from '$lib/stores/cars.svelte';
  import { filtersStore } from '$lib/stores/filters.svelte';
  import { modalStore } from '$lib/stores/modal.svelte';
  import CarCard from './CarCard.svelte';
  import type { Car } from '$lib/types';

  const filters = $derived(filtersStore.state);

  const filteredCars = $derived(
    carsStore.all.filter((car: Car) => {
      if (filters.type && car.type !== filters.type) return false;
      if (filters.drive && car.drive !== filters.drive) return false;
      if (car.basePrice < filters.minPrice || car.basePrice > filters.maxPrice) return false;
      return true;
    })
  );
</script>

<section class="container my-5">
  <h2 class="text-center mb-4">Gama naszych samochodów</h2>
  <div class="row g-4">
    {#each filteredCars as car (car.id)}
      <div class="col-12 col-md-6 col-lg-4">
        <CarCard {car} onselect={(selectedCar: Car) => modalStore.open(selectedCar)} />
      </div>
    {/each}
  </div>
  {#if filteredCars.length === 0}
    <div class="text-center text-muted py-5">
      <p>Nie znaleziono samochodów spełniających wybrane kryteria.</p>
    </div>
  {/if}
</section>
