<script lang="ts">
  import type { ColorType } from '$lib/types';

  interface Props {
    color: ColorType;
    active: boolean;
    onclick: () => void;
  }

  let { color, active, onclick }: Props = $props();

  const colorMap: Record<ColorType, string> = {
    black: '#000000',
    white: '#FFFFFF',
    green: '#1a4d3e',
    blue: '#1e3a8a',
    silver: '#C0C0C0'
  };
</script>

<button
  type="button"
  class="border {active ? 'border-primary border-3' : 'border-secondary'} p-0"
  style="width: 40px; height: 40px; background-color: {colorMap[color]}; cursor: pointer;"
  onclick={onclick}
  aria-label={color}
></button>
