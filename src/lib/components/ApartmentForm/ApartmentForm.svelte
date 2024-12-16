<script lang="ts">
    import "./ApartmentForm.scss"
    import { neighbourhoods, propertyTypes } from "$lib/model/params"

    let chosenNeighbourhood: string
    let chosenPropertyType: string

</script>

<form class="apartment-form">
    <fieldset class="apartment-form__fields-row">
        <select bind:value={chosenNeighbourhood} class="apartment-form__input-field">
            {#each neighbourhoods as neighbourhood}
                <option value={neighbourhood}>{neighbourhood}</option>
            {/each}
        </select>
        <select bind:value={chosenPropertyType} class="apartment-form__input-field">
            {#each propertyTypes as propertyType}
                <option value={propertyType}>{propertyType}</option>
            {/each}
        </select>
    </fieldset>
</form>