import type { InferenceParams } from "./request"
import * as modelParamsValues from "./params"

const defaultTrue = new Set(["availability_30", "availability_60", "availability_90", "availability_365", "host_is_superhost"])
const default85 = new Set(["number_of_reviews_ltm", "review_scores_rating"])
const defaultCustom = new Map([
    ["latitude", 41.40889],
    ["longitude", 2.18555],
])

const stdScalerInputs = ["has_ev_charger", "has_day_bed", "has_baby_monitor",
    "has_touchless_faucets", "has_full_kitchen", "has_building_staff",
    "has_well-lit_path_to_entrance", "has_high_chair",
    "has_waterfront", "has_smart_tv", "has_doorman",
    "has_projector_and_screen", "availability_365", "has_hangers",
    "has_body_soap", "has_cleaning_before_checkout", "has_other",
    "has_paid_parking_on_premises", "has_standing_valet",
    "has_outlet_covers", "has_pets_live_on_this_property",
    "has_essentials", "has_bedroom_comforts",
    "has_lock_on_bedroom_door", "has_crib",
    "has_wide_clearance_to_shower", "has_toilet", "availability_30",
    "has_wide_entryway", "has_keypad", "has_pack_’n_play/travel_crib",
    "has_pool_with_pool_hoist", "has_printer", "has_ski-in/ski-out",
    "has_outdoor_parking", "has_room-darkening_shades",
    "has_other_pet(s)", "has_self_check-in", "has_host_greets_you",
    "review_scores_rating", "has_espresso_machine",
    "has_high-resolution_computer_monitor", "has_coffee_maker",
    "has_outdoor_seating", "has_soaking_tub", "has_fire_extinguisher",
    "has_extra_space_around_bed", "has_sun_loungers",
    "has_disabled_parking_spot", "has_ceiling_fan",
    "has_ground_floor_access", "has_bbq_grill", "has_murphy_bed",
    "has_pool_cover", "has_tennis_court", "has_indoor_fireplace",
    "has_alfresco_bathtub", "has_mobile_hoist", "has_netflix",
    "has_washer_/_dryer", "has_flat_path_to_guest_entrance",
    "host_is_superhost", "has_air_conditioning", "has_gas_oven",
    "has_family/kid_friendly", "has_buzzer/wireless_intercom",
    "has_hair_dryer", "has_bidet", "has_toilet_paper",
    "has_fax_machine", "number_of_reviews_ltm", "has_private_hot_tub",
    "has_jetted_tub", "has_bath_towel", "has_long_term_stays_allowed",
    "has_en_suite_bathroom", "has_dishwasher", "has_hot_water",
    "has_kitchen", "has_wide_doorway_to_guest_bathroom",
    "has_bathroom_essentials", "has_dvd_player", "has_smoke_detector",
    "has_sound_system", "has_babysitter_recommendations",
    "has_patio_or_balcony", "has_wifi", "has_beach_view",
    "has_exercise_equipment", "has_smoking_allowed",
    "has_warming_drawer", "has_safety_card",
    "has_wheelchair_accessible", "has_internet", "has_wide_hallways",
    "has_central_air_conditioning", "has_children’s_dinnerware",
    "has_fixed_grab_bars_for_toilet", "has_stove",
    "has_extra_pillows_and_blankets", "has_first_aid_kit",
    "has_lake_access", "has_shared_pool", "has_heated_floors",
    "latitude", "has_shower_chair", "has_shared_gym", "has_baby_bath",
    "has_luggage_dropoff_allowed", "has_handheld_shower_head",
    "has_gym", "has_oven", "has_microwave", "has_table_corner_guards",
    "beds", "has_game_console", "has_dryer", "has_mountain_view",
    "has_cooking_basics", "has_pets_allowed", "has_pocket_wifi",
    "has_air_purifier", "has_mudroom", "has_amazon_echo",
    "has_balcony", "has_private_living_room",
    "has_fixed_grab_bars_for_shower", "has_tv", "availability_90",
    "has_no_stairs_or_steps_to_enter", "has_garden_or_backyard",
    "has_hot_tub", "has_hot_water_kettle", "has_double_oven",
    "has_sauna", "has_lockbox", "longitude", "has_breakfast_table",
    "has_heat_lamps", "has_laptop_friendly_workspace",
    "has_memory_foam_mattress", "has_heated_towel_rack",
    "has_pillow-top_mattress", "has_pool",
    "has_free_parking_on_premises", "has_changing_table",
    "has_hammock", "has_smart_lock", "has_bathtub_with_bath_chair",
    "has_hbo_go", "has_accessible-height_bed", "has_terrace",
    "has_convection_oven", "has_rain_shower", "has_cat(s)",
    "has_dishes_and_silverware", "has_shampoo",
    "has_children’s_books_and_toys", "has_beach_essentials",
    "has_cable_tv", "availability_60", "has_bed_linens",
    "has_free_street_parking", "has_window_guards",
    "has_ethernet_connection", "has_dog(s)", "host_listings_count",
    "has_private_bathroom", "accommodates", "has_bathtub", "bathrooms",
    "bedrooms", "has_steam_oven", "has_roll-in_shower",
    "has_stair_gates", "has_fireplace_guards", "has_single_level_home",
    "minimum_nights", "has_kitchenette", "has_mini_fridge",
    "has_outdoor_kitchen", "has_refrigerator", "has_walk-in_shower",
    "has_firm_mattress", "has_wide_entrance", "has_iron",
    "has_suitable_for_events", "has_breakfast", "has_washer",
    "has_wide_entrance_for_guests", "has_carbon_monoxide_detector",
    "has_private_entrance", "has_elevator", "has_heating",
    "has_24-hour_check-in", "has_formal_dining_area",
    "has_accessible-height_toilet", "has_paid_parking_off_premises",
    "has_electric_profiling_bed", "has_beachfront"]

const stdScalerCoefs = [6.84171628e-02, 3.69260142e-02, 4.43660597e-02, 8.70916265e-03,
    1.24615223e-01, 1.63198903e-01, 2.92439620e-01, 3.23808415e-01,
    1.43423879e-01, 5.63539809e-02, 2.13640434e-01, 1.23161488e-02,
    1.26694769e+02, 3.87751697e-01, 1.00305966e-01, 1.62538388e-01,
    1.39567551e-01, 3.67218401e-01, 2.88740664e-02, 9.69123415e-02,
    1.84277038e-01, 2.30178183e-01, 1.02503457e-01, 4.01775360e-01,
    3.55243997e-01, 1.55529421e-01, 1.55529421e-01, 9.05585407e+00,
    2.23472761e-01, 9.01401911e-02, 2.50512548e-01, 1.00000000e+00,
    1.74163431e-02, 6.08530421e-02, 1.74163431e-02, 2.49461395e-01,
    2.46266906e-02, 2.26035360e-01, 4.89249615e-01, 8.35994681e+00,
    7.47113165e-02, 1.00000000e+00, 4.76920669e-01, 4.26287710e-02,
    1.94713248e-02, 3.97671574e-01, 2.22712023e-01, 2.13289583e-02,
    7.71793712e-02, 3.01568340e-02, 8.70916265e-03, 8.88896229e-02,
    2.46266906e-02, 8.70916265e-03, 1.00000000e+00, 1.21023081e-01,
    1.23161488e-02, 1.74163431e-02, 4.60373365e-02, 1.23161488e-02,
    2.21334468e-01, 3.88736617e-01, 4.95436767e-01, 2.46266906e-02,
    4.81815264e-01, 4.03173212e-01, 4.20438155e-01, 3.48168244e-02,
    1.00305966e-01, 1.00000000e+00, 1.81572974e+01, 8.70916265e-03,
    1.74163431e-02, 1.00305966e-01, 4.35704829e-01, 4.60373365e-02,
    3.90384478e-01, 4.88715283e-01, 3.18284041e-01, 1.70484778e-01,
    1.02503457e-01, 3.69260142e-02, 3.83811706e-01, 2.75313872e-02,
    1.70065921e-01, 4.08682293e-01, 1.55297466e-01, 1.50835678e-02,
    1.74163431e-02, 4.34933364e-01, 1.23161488e-02, 2.59343072e-01,
    2.03391301e-01, 4.38027295e-01, 2.45196707e-01, 3.01568340e-02,
    1.26949905e-01, 4.35061540e-02, 4.51408844e-01, 4.22903154e-01,
    4.23094384e-01, 3.13870364e-02, 8.70916265e-03, 1.23161488e-02,
    1.50809010e-02, 3.79364323e-02, 8.70916265e-03, 1.36129375e-01,
    4.06472350e-01, 2.08426757e-01, 9.95622284e-02, 4.65900908e-01,
    4.83973208e-01, 5.96027430e-02, 1.63037786e+00, 6.73097438e-02,
    4.29869536e-01, 2.46266906e-02, 4.71072709e-01, 3.10594506e-01,
    2.43163548e-01, 1.23161488e-02, 2.13289583e-02, 1.23161488e-02,
    6.32784811e-02, 3.21202234e-01, 9.13730784e-02, 4.60091386e-01,
    2.91276474e+01, 3.30126641e-01, 1.61430811e-01, 1.01044001e-01,
    6.84171628e-02, 1.50835678e-02, 1.00000000e+00, 1.05359117e-01,
    1.80196745e-02, 5.63539809e-02, 8.70916265e-03, 4.95820358e-01,
    4.35061540e-02, 3.98801092e-02, 3.98801092e-02, 1.48883545e-01,
    1.78231634e-01, 7.52115599e-02, 1.50835678e-02, 8.50239771e-02,
    4.17328083e-02, 1.00000000e+00, 2.44656701e-01, 4.52094853e-02,
    4.52094853e-02, 4.92084999e-02, 1.31764553e-01, 4.86298629e-01,
    4.84692786e-01, 1.97321118e-01, 1.62096372e-01, 3.07701844e-01,
    1.91233837e+01, 4.87066801e-01, 2.53244150e-01, 1.16367075e-01,
    2.33798808e-01, 1.06757013e-01, 5.19697625e+01, 1.23161488e-02,
    2.01444811e+00, 2.24230277e-01, 5.96719410e-01, 9.30926274e-01,
    1.50835678e-02, 1.19800231e-01, 6.08530421e-02, 4.08170424e-02,
    1.90653883e-01, 1.92163362e+01, 4.08170424e-02, 2.61195585e-02,
    8.70916265e-03, 4.91791191e-01, 4.35061540e-02, 1.74163431e-02,
    2.24381396e-01, 4.44843013e-01, 1.42661679e-01, 2.53502246e-01,
    4.22615739e-01, 2.63791775e-01, 3.24609944e-01, 3.30729665e-01,
    4.89956699e-01, 4.29643998e-01, 3.02382182e-01, 3.98801092e-02,
    2.15556008e-01, 4.32936033e-01, 2.13289583e-02, 1.43929570e-01]

const linModelCoefs = [ 1.82972101e-02, -6.55283817e-01,  2.13795020e-01,  7.16300119e-02,
    1.62054435e+00, -4.51260158e+00, -1.77995409e-01, -2.36291109e-01,
    -1.51195288e-01, -2.51083489e-01,  9.44061923e-01,  8.42690908e-01,
    -7.03516937e-02, -7.22298784e-01, -3.75091704e-01, -5.03097390e-01,
    7.55169581e-01, -6.33612184e-01,  1.07000036e+00, -6.22359216e-01,
    1.90815580e-02, -1.74791742e+00,  1.78604860e+00, -3.86067541e-01,
    1.23060763e+00,  1.49400505e-01,  1.49400505e-01,  3.08300787e+00,
    -7.24343233e-01, -2.55253530e+00,  9.74497345e-03,  5.88973315e-14,
    2.25724707e-01, -1.06321716e-01, -7.56735842e-01, -4.82741047e-01,
    7.26110501e-02,  7.46599116e+00, -5.57145376e-01,  1.12973552e+00,
    -1.34407490e+00, -4.17443857e-14,  6.71525291e-01,  1.05187430e+00,
    2.12907599e+00,  1.21944233e+00, -6.13098875e-01,  2.14408342e+00,
    -5.46569176e-01,  1.55174358e-01, -5.87668420e-02,  1.29242021e+00,
    -3.14337690e-02, -4.38221779e-02, -3.81916720e-14,  3.97320030e-02,
    3.73032415e-01,  1.19558827e-01,  6.13451647e-01, -3.30278387e-01,
    -1.55859593e-01,  1.41616466e+00,  3.94277341e+00,  4.13665464e-01,
    1.49637083e+00,  1.00496818e+00,  6.40497781e-01, -8.81480177e-01,
    -3.75091704e-01,  8.72635297e-14, -2.40303804e+00, -5.66004859e-01,
    3.12466759e-01, -3.75091704e-01, -3.18515634e+00,  1.09552897e+00,
    2.01735883e+00, -1.00638065e+00,  1.03504158e-01, -3.10112908e-02,
    1.78604860e+00,  1.27783912e+00,  2.03825223e+00,  5.60245785e-02,
    6.72657973e-01, -6.37265357e-01, -1.80471392e+00, -1.45448517e-02,
    5.43899997e-01, -1.03546805e+00, -4.39066225e-01,  4.12966014e-01,
    1.54551470e-01, -1.32055141e+00,  6.16063386e-01,  1.13197667e+00,
    1.71748640e-01, -1.25467453e-01, -8.33318116e-01, -2.04160033e+00,
    3.92891076e-01, -1.45826766e+00, -4.38221779e-02,  2.32216173e-01,
    -6.18545946e+00, -1.72252797e-02, -4.38221779e-02, -9.89919325e-01,
    1.30509442e+00, -1.40633494e-01,  3.07555721e-01,  1.13433122e+00,
    -5.59818841e-01, -9.81414926e-02, -1.54958392e+00,  3.56470449e-01,
    1.46796773e+00, -9.32009052e-03,  3.79624514e+00, -2.97864659e-01,
    -7.85096232e-01, -5.83164869e-01, -8.90227729e-02, -8.31791262e-01,
    3.83394990e-01,  7.76196462e-01,  8.29797930e-02, -1.72476174e-01,
    2.18555017e+00,  4.75109039e-01,  1.63808638e-02,  8.18788212e-01,
    -5.02817932e-01, -6.95593538e-01,  1.02584607e-13, -2.73151460e+00,
    2.49733377e+00,  4.37517086e-01, -5.66004859e-01, -1.06813325e-01,
    2.38925748e-01, -3.15598188e-01, -1.03445220e+00,  1.49993091e+00,
    1.25122843e+00, -3.18471024e-01, -2.44501723e+00, -3.80672364e+00,
    4.84488781e-01, -6.12287998e-14, -8.40010141e-01, -1.84490100e+00,
    7.50287407e-01, -7.20736600e-01,  1.26481671e-01, -2.76011612e+00,
    2.56547739e+00,  1.95023330e-01,  2.41884731e-02,  1.48887454e+00,
    2.01655423e+00,  1.12092010e+00, -9.72589518e-01,  8.18403459e-02,
    -8.52830206e-01,  4.80376945e-03, -1.05315252e+00, -7.08378968e-02,
    2.21016812e+01,  1.55375942e+00,  9.68447588e-01,  4.24692024e+00,
    -4.46477184e-01,  5.62884417e-01, -5.21435902e-01, -2.99478437e-01,
    3.90797127e-01, -8.61013823e+00,  5.58536007e-01,  1.26330862e+00,
    -1.31077691e+00, -2.97202791e+00, -1.16724913e-01, -5.71059239e-01,
    5.62708721e-01, -9.56325695e-02, -8.05647607e-01,  9.26748482e-01,
    -1.60358933e+00,  8.19498537e-01, -4.64741525e-01, -2.11303445e+00,
    9.66625898e-01, -2.42042792e-01, -7.63645350e-01, -7.03696687e-01,
    -8.63728515e-01,  1.04611799e+00,  4.61829191e-01,  4.46763696e-01,
    2.53082475e+00,  9.53847285e+00, -5.67196763e+00, -1.95803993e+00,
    8.23281916e+00,  1.92389340e+01,  6.59685749e+00, -3.82247044e+00,
    -1.04999837e+01, -2.80612397e+00, -5.62756469e+00, -4.70929739e+00,
    -1.37088660e+01,  2.90186985e+00, -2.99758639e+00,  1.21884693e+00,
    -1.14244824e+01,  1.46472282e+00, -1.50378905e+00, -5.10298649e+00,
    9.72947288e-01,  4.19745135e+00, -1.49920343e-01, -1.65558541e+00,
    -6.96853379e-01,  9.11686742e+00, -7.68119526e+00, -1.14214019e+01,
    -6.13566378e+00, -1.43735218e+01, -1.24451508e+00,  7.38199859e+00,
    -1.99325622e+00,  7.65391957e+00,  4.73875246e+00, -2.12987176e+01,
    -1.00596317e+01, -1.31613017e+00, -8.85539654e+00,  1.52673729e+01,
    -6.18448954e+00,  1.93213074e+01,  1.65646206e+01, -8.96902381e+00,
    5.98254677e+00, -6.78486371e+00,  1.08576306e+01, -1.50912253e+00,
    -3.82703711e+00,  2.87498288e+00, -3.27699010e+00,  1.17069738e+01,
    7.12368801e+00, -1.49026536e+01, -1.00182555e+00, -5.08235450e+00,
    -2.73997698e-01, -1.02095732e+01, -1.94181721e+00,  7.51161044e+00,
    2.36198600e+01, -1.84640984e+00, -1.11000466e+00, -4.97960256e+00,
    5.88920143e+00,  1.44700517e+01,  1.63958159e+00,  4.27730144e-01,
    -2.78819792e+01]

export const RunLinRegression = (params: InferenceParams): number => {
    let prediction = 0

    const selectedAmenities = new Set(params.amenities)

    for (let i = 0; i < stdScalerInputs.length; i++) {
        if (stdScalerInputs[i].startsWith("has_") && selectedAmenities.has(stdScalerInputs[i].substring(4))) {
            prediction += stdScalerCoefs[i] * linModelCoefs[i]
            continue
        }

        if (defaultTrue.has(stdScalerInputs[i])) {
            prediction += stdScalerCoefs[i] * linModelCoefs[i]
            continue
        }

        if (default85.has(stdScalerInputs[i])) {
            prediction += stdScalerCoefs[i]  * 85 * linModelCoefs[i]
            continue
        }

        if (defaultCustom.has(stdScalerInputs[i])) {
            prediction += stdScalerCoefs[i] * (defaultCustom.get(stdScalerInputs[i]) || 0) * linModelCoefs[i]
        }

        let val = 0

        switch (stdScalerInputs[i]) {
            case "bedrooms":
                val = params.bedrooms
                break
            case "beds":
                val = params.beds
                break
            case "bathrooms":
                val = params.bathrooms
                break
            case "accommodates":
                val = params.guests
                break
            case "minimum_nights":
                val = params.minNights
                break
            case "host_listings_count":
                val = params.listingsCount
                break
        }

        prediction += val * stdScalerCoefs[i] * linModelCoefs[i]
    }

    for (let i = 0; i < modelParamsValues.neighbourhoods.length; i++) {
        if (params.neighbourhood == modelParamsValues.neighbourhoods[i]) {
            prediction += linModelCoefs[i + stdScalerInputs.length]
            break
        }
    }

    prediction += modelParamsValues.propertyTypes.indexOf(params.propertyType) * linModelCoefs[linModelCoefs.length - 2]
    prediction += modelParamsValues.roomTypes.indexOf(params.roomType) * linModelCoefs[linModelCoefs.length - 1]
    prediction += 3025.2

    return prediction
}