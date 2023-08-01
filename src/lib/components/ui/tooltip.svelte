<script>
    export let text = 'Tooltip Text'
</script>

<div class="tooltip tooltip-error" data-tip="{text}">
  <slot></slot>
</div>