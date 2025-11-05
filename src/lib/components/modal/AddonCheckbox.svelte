<script lang="ts">
  import type { CarAddon } from '$lib/types';
  import { formatPrice } from '$lib/utils/formatters';

  interface Props {
    addon: CarAddon;
    checked: boolean;
    onchange: (checked: boolean) => void;
  }

  let { addon, checked, onchange }: Props = $props();

  function handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    onchange(target.checked);
  }
</script>

<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    id={addon.id}
    {checked}
    onchange={handleChange}
  />
  <label class="form-check-label" for={addon.id}>
    {addon.name} - {formatPrice(addon.price)}
  </label>
</div>
