<script lang="ts">
    import ApartmentForm from "$lib/components/ApartmentForm/ApartmentForm.svelte";
    import type { InferenceParams } from "$lib/model/request"

    let currentPrice: number = $state(0)

    const onFormSubmit = async (modelInput: InferenceParams) => {
        console.log(modelInput)
        const resp = await fetch("/api/inference", {
            method: "POST",
            body: JSON.stringify(modelInput),
        })

        const res = await resp.text()

        console.log(res)

        currentPrice = parseFloat(res) || 10
    }
</script>

<div class="model-params">
    <h1 class="header">
        Calculate rent price per night for Barcelona's real estate
    </h1>
    <ApartmentForm {onFormSubmit} />
    <div class="price">Estimated price: <span>{currentPrice}</span>$</div>
</div>

<style>
    .model-params {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
      padding-bottom: 200px;
    }

    .header {
        color: var(--color-text-accent);
        text-align: center;
    }

    .price {
        width: 350px;
        padding: 10px;
        margin-top: 15px;
        background-color: var(--color-background-primary);
        text-align: center;
        border-radius: var(--border-radius);

        span {
            color: var(--color-text-accent);
        }
    }
</style>