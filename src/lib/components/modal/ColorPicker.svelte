<script lang="ts">
  import type { ColorType } from '$lib/types';
  import ColorOption from './ColorOption.svelte';

  interface Props {
    colors: ColorType[];
    selected: ColorType;
    onselect: (color: ColorType) => void;
  }

  let { colors, selected, onselect }: Props = $props();
</script>

<div class="mb-3">
  <label class="form-label fw-bold">Kolor</label>
  <div class="d-flex gap-2">
    {#each colors as color (color)}
      <ColorOption {color} active={selected === color} onclick={() => onselect(color)} />
    {/each}
  </div>
</div>
