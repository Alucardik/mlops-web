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

    return JSON.stringify({
        "neighbourhood": params.neighbourhood,
        "room_type": params.roomType,
        "property_type": params.propertyType,
        "bedrooms": params.bedrooms,
        "accommodates": params.guests,
        "bathrooms": params.bathrooms,
        "minimum_nights": params.minNights,
        "host_listings_count": params.listingsCount,
        "beds": params.beds,
        amenities: params.amenities,
    })
}