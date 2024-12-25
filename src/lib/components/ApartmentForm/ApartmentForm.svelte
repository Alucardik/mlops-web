<script lang="ts">
    import "./ApartmentForm.scss"
    import { neighbourhoods, propertyTypes, amenities, roomTypes } from "$lib/model/params"

    let chosenNeighbourhood: string = $state("")
    let chosenPropertyType: string = $state("")
    let chosenRoomType: string = $state("")
    let chosenAmenities: string[] = $state([])
    let bedrooms: number = $state(1)
    let bathrooms: number = $state(1)
    let beds: number = $state(1)
    let guests: number = $state(1)
    let minNights: number = $state(1)
    let listingsCount: number = $state(1)

    const { onFormSubmit } = $props()

    const onSubmit = () => {
        onFormSubmit({
            neighbourhood: chosenNeighbourhood,
            propertyType: chosenPropertyType,
            roomType: chosenRoomType,
            amenities: chosenAmenities,
            bedrooms,
            bathrooms,
            beds,
            guests,
            minNights,
            listingsCount,
        })
    }
</script>

<form class="apartment-form" onsubmit={onSubmit}>
    <fieldset class="apartment-form__fields-row">
        <label class="apartment-form__input-name">
            <span>Neighbourhood</span>
            <select required bind:value={chosenNeighbourhood} class="apartment-form__input-field">
                {#each neighbourhoods as neighbourhood}
                    <option value={neighbourhood}>{neighbourhood}</option>
                {/each}
            </select>
        </label>
        <label class="apartment-form__input-name">
            <span>Property type</span>
            <select required bind:value={chosenPropertyType} class="apartment-form__input-field">
                {#each propertyTypes as propertyType}
                    <option value={propertyType}>{propertyType}</option>
                {/each}
            </select>
        </label>
        <label class="apartment-form__input-name">
            <span>Room type</span>
            <select required bind:value={chosenRoomType} class="apartment-form__input-field">
                {#each roomTypes as roomType}
                    <option value={roomType}>{roomType}</option>
                {/each}
            </select>
        </label>
    </fieldset>
    <fieldset class="apartment-form__fields-row">
        <label class="apartment-form__input-name">
            <span>Amenities</span>
            <select multiple bind:value={chosenAmenities} class="apartment-form__input-field">
                {#each amenities.sort() as amenity}
                    <option value={amenity}>{amenity}</option>
                {/each}
            </select>
        </label>
    </fieldset>
    <fieldset class="apartment-form__fields-row">
        <label class="apartment-form__input-name">
            <span>Bedrooms</span>
            <input type="number" min="1" bind:value={bedrooms} class="apartment-form__input-field">
        </label>
        <label class="apartment-form__input-name">
            <span>Bathrooms</span>
            <input type="number" min="1" bind:value={bathrooms} class="apartment-form__input-field">
        </label>
        <label class="apartment-form__input-name">
            <span>Number of beds</span>
            <input type="number" min="1" bind:value={beds} class="apartment-form__input-field">
        </label>
    </fieldset>
    <fieldset class="apartment-form__fields-row">
        <label class="apartment-form__input-name">
            <span>Number of guests</span>
            <input type="number" min="1" bind:value={guests} class="apartment-form__input-field">
        </label>
        <label class="apartment-form__input-name">
            <span>Min nights</span>
            <input type="number" min="1" bind:value={minNights} class="apartment-form__input-field">
        </label>
        <label class="apartment-form__input-name">
            <span>Number of your listings</span>
            <input type="number" min="1" bind:value={listingsCount} class="apartment-form__input-field">
        </label>
    </fieldset>
    <button type="submit" class="apartment-form__submit-button">Calculate rent</button>
</form>