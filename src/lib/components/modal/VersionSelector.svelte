<script lang="ts">
  import type { CarVersion } from '$lib/types';

  interface Props {
    versions: CarVersion[];
    selected: string;
    onselect: (version: string) => void;
  }

  let { versions, selected, onselect }: Props = $props();
</script>

<div class="mb-3">
  <label class="form-label fw-bold">Wersja</label>
  <div class="btn-group w-100" role="group">
    {#each versions as version (version.name)}
      <button
        type="button"
        class="btn {selected === version.name ? 'btn-primary' : 'btn-outline-primary'}"
        onclick={() => onselect(version.name)}
      >
        {version.name}
      </button>
    {/each}
  </div>
</div>
