<script lang="ts">
  import GalleryThumbnail from './GalleryThumbnail.svelte';

  interface Props {
    main: string;
    gallery: string[];
    alt: string;
  }

  let { main, gallery, alt }: Props = $props();

  let mainImage = $state(main);
</script>

<div>
  <img src={mainImage} {alt} class="img-fluid rounded mb-3" />
  <div class="row g-2">
    {#each gallery as image, index (image)}
      <div class="col-4">
        <GalleryThumbnail
          src={image}
          alt="{alt} - gallery {index + 1}"
          active={mainImage === image}
          onclick={() => (mainImage = image)}
        />
      </div>
    {/each}
  </div>
</div>
