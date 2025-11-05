<script lang="ts">
  interface Props {
    variant?: 'primary' | 'outline-primary' | 'success';
    type?: 'button' | 'submit';
    onclick?: () => void;
    class?: string;
    children: import('svelte').Snippet;
  }

  let { variant = 'primary', type = 'button', onclick, class: className = '', children }: Props = $props();
</script>

<button type={type} class="btn btn-{variant} {className}" onclick={onclick}>
  {@render children()}
</button>
