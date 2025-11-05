<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    active: boolean;
    onclick: () => void;
  }

  let { src, alt, active, onclick }: Props = $props();
</script>

<button type="button" class="border-0 p-0 bg-transparent" onclick={onclick}>
  <img
    {src}
    {alt}
    class="img-fluid rounded {active ? 'border border-primary border-3' : ''}"
    style="cursor: pointer;"
  />
</button>
