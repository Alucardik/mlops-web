import { neighbourhoods, propertyTypes, roomTypes, amenities } from "./params"

export interface InferenceParams {
    neighbourhood: string,
    propertyType: string,
    roomType: string,
    amenities: string[],
    bedrooms: number,
    bathrooms: number,
    beds: number,
    guests: number,
    minNights: number,
    listingsCount: number,
}

export const CreateInferenceRequest = (params: InferenceParams): string => {
    // fields order:
    // 'index', 'host_is_superhost', 'host_listings_count', 'neighbourhood',
    // 'latitude', 'longitude', 'property_type', 'room_type', 'accommodates',
    // 'bathrooms', 'bedrooms', 'beds', 'minimum_nights', 'availability_30',
    // 'availability_60', 'availability_90', 'availability_365',
    // 'number_of_reviews_ltm', 'review_scores_rating' and then has_{amenity}

    const data: (number | string)[] = [
        0, 1, params.listingsCount, neighbourhoods.indexOf(params.neighbourhood)+1,
        41.40889, 2.18555, propertyTypes.indexOf(params.propertyType)+1, roomTypes.indexOf(params.roomType)+1, params.guests,
        params.bathrooms, params.beds, params.minNights, 1,
        1, 1, 1,
        85, 85,
    ]

    const selectedAmenitiesSet = new Set()

    for (const amenity of params.amenities) {
        selectedAmenitiesSet.add(amenity)
    }

    for (const amenity of amenities) {
        if (selectedAmenitiesSet.has(amenity)) {
            data.push(1)
            continue
        }

        data.push(0)
    }

    // fake
    data.push(0)

    return JSON.stringify({
        inputs: [{
            name: "predict",
            shape: [data.length],
            datatype: "FP32",
            data,
        }]
    })
}