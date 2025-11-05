<script lang="ts">
  import type { Car } from '$lib/types';
  import { formatPrice, formatRange } from '$lib/utils/formatters';
  import { Button } from '$lib/components/ui';

  interface Props {
    car: Car;
    onselect: (car: Car) => void;
  }

  let { car, onselect }: Props = $props();
</script>

<div class="card h-100">
  <img src={car.images.thumbnail} class="card-img-top" alt={car.name} />
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">{car.name}</h5>
    <h4 class="text-success mb-3">{formatPrice(car.basePrice)}</h4>
    <div class="small text-muted mb-3">
      <div>Zasięg: {formatRange(car.range)}</div>
      <div>Przyspieszenie: {car.specs.acceleration}</div>
      <div>Napęd: {car.drive}</div>
    </div>
    <div class="mt-auto">
      <Button variant="primary" class="w-100" onclick={() => onselect(car)}>Sprawdź</Button>
    </div>
  </div>
</div>
