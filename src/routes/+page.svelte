<script lang="ts">
    import ApartmentForm from "$lib/components/ApartmentForm/ApartmentForm.svelte";
    import type { PageData } from "./$types"

    let { data }: { data: PageData } = $props()
</script>

<div class="model-params">
    <ApartmentForm />
</div>

<style lang="scss">
    .model-params {
      display: flex;
      margin: auto;
      padding-bottom: 200px;
    }
</style>