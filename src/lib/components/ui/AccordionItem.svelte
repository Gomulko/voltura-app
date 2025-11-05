<script lang="ts">
  interface Props {
    id: string;
    title: string;
    expanded?: boolean;
    children: import('svelte').Snippet;
  }

  let { id, title, expanded = false, children }: Props = $props();
</script>

<div class="accordion-item">
  <h2 class="accordion-header">
    <button
      class="accordion-button {expanded ? '' : 'collapsed'}"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#{id}"
      aria-expanded={expanded}
      aria-controls={id}
    >
      {title}
    </button>
  </h2>
  <div id={id} class="accordion-collapse collapse {expanded ? 'show' : ''}" data-bs-parent="#accordionFAQ">
    <div class="accordion-body">
      {@render children()}
    </div>
  </div>
</div>
