<script lang="ts">
  import { formatPrice } from '$lib/utils/formatters';

  interface Props {
    totalPrice: number;
  }

  let { totalPrice }: Props = $props();
</script>

<div class="mb-3 p-3 bg-light rounded">
  <div class="d-flex justify-content-between align-items-center">
    <span class="fw-bold">Cena całkowita:</span>
    <h4 class="text-success mb-0">{formatPrice(totalPrice)}</h4>
  </div>
</div>
