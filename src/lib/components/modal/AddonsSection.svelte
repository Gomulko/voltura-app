<script lang="ts">
  import type { CarAddon } from '$lib/types';
  import AddonCheckbox from './AddonCheckbox.svelte';

  interface Props {
    addons: CarAddon[];
    selected: string[];
    ontoggle: (addonId: string, checked: boolean) => void;
  }

  let { addons, selected, ontoggle }: Props = $props();

  const winterAddons = $derived(addons.filter((addon) => addon.category === 'winter'));
  const accessoryAddons = $derived(addons.filter((addon) => addon.category === 'accessories'));
</script>

<div class="mb-3">
  <label class="form-label fw-bold">Dodatki</label>

  {#if winterAddons.length > 0}
    <div class="mb-3">
      <h6 class="small text-muted">Koła zimowe</h6>
      {#each winterAddons as addon (addon.id)}
        <AddonCheckbox
          {addon}
          checked={selected.includes(addon.id)}
          onchange={(checked: boolean) => ontoggle(addon.id, checked)}
        />
      {/each}
    </div>
  {/if}

  {#if accessoryAddons.length > 0}
    <div>
      <h6 class="small text-muted">Akcesoria</h6>
      {#each accessoryAddons as addon (addon.id)}
        <AddonCheckbox
          {addon}
          checked={selected.includes(addon.id)}
          onchange={(checked: boolean) => ontoggle(addon.id, checked)}
        />
      {/each}
    </div>
  {/if}
</div>
