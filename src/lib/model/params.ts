const neighbourhoods = [
    "Sant Martí", "La Sagrada Família", "Vila de Gràcia",
    "Horta-Guinardó", "Camp d'en Grassot i Gràcia Nova", "Gràcia",
    "Les Corts", "El Gòtic", "Ciutat Vella",
    "Eixample", "L'Antiga Esquerra de l'Eixample", "La Barceloneta",
    "El Poble-sec", "El Raval", "Sants-Montjuïc",
    "El Clot", "Sant Antoni", "Diagonal Mar - La Mar Bella",
    "El Poblenou", "Dreta de l'Eixample", "El Besòs i el Maresme",
    "La Nova Esquerra de l'Eixample", "La Salut",
    "Sant Pere/Santa Caterina", "Vallcarca i els Penitents",
    "el Fort Pienc", "Sant Gervasi - Galvany",
    "Sant Martí de Provençals", "El Camp de l'Arpa del Clot", "Sarrià",
    "La Vila Olímpica", "Vilapicina i la Torre Llobeta", "El Born",
    "Sarrià-Sant Gervasi", "Glòries - El Parc", "Sant Andreu",
    "El Baix Guinardó", "Nou Barris", "El Putget i Farró",
    "La Prosperitat", "La Font d'en Fargues", "Horta",
    "La Maternitat i Sant Ramon", "Provençals del Poblenou",
    "La Sagrera", "Sant Gervasi - la Bonanova",
    "La Guineueta - Canyelles", "La Teixonera", "Can Baro", "Navas",
    "Sant Andreu de Palomar", "El Coll", "Guinardó", "Carmel",
    "La Verneda i La Pau", "El Congrés i els Indians",
    "Les Tres Torres", "Turó de la Peira - Can Peguera", "Montbau",
    "La Vall d'Hebron", "Sant Genís dels Agudells", "El Bon Pastor",
    "Verdum - Los Roquetes", "Pedralbes", "Porta", "Trinitat Nova",
    "La Trinitat Vella", "Torre Baró",
]

const propertyTypes = [
    "Apartment", "Loft", "Bed and breakfast", "Condominium",
    "Serviced apartment", "Boat", "Other", "House", "Aparthotel",
    "Guesthouse", "Boutique hotel", "Townhouse", "Guest suite",
    "Hostel", "Villa", "Tiny house", "Casa particular (Cuba)", "Hotel",
    "Chalet", "Dorm", "Camper/RV", "Cabin", "Farm stay", "Barn",
    "Dome house", "Earth house", "Cottage",
]

const amenities = [
    "breakfast",
    "bathtub_with_bath_chair",
    "pool",
    "extra_space_around_bed",
    "washer___dryer",
    "sound_system",
    "washer",
    "sun_loungers",
    "disabled_parking_spot",
    "lock_on_bedroom_door",
    "ski_in_ski_out",
    "full_kitchen",
    "electric_profiling_bed",
    "walk_in_shower",
    "wide_doorway_to_guest_bathroom",
    "outlet_covers",
    "game_console",
    "paid_parking_off_premises",
    "wide_entrance",
    "safety_card",
    "heat_lamps",
    "waterfront",
    "children_s_dinnerware",
    "gas_oven",
    "projector_and_screen",
    "air_purifier",
    "shower_chair",
    "kitchenette",
    "fixed_grab_bars_for_shower",
    "baby_bath",
    "fixed_grab_bars_for_toilet",
    "refrigerator",
    "double_oven",
    "long_term_stays_allowed",
    "roll_in_shower",
    "cleaning_before_checkout",
    "room_darkening_shades",
    "outdoor_seating",
    "memory_foam_mattress",
    "single_level_home",
    "private_bathroom",
    "flat_path_to_guest_entrance",
    "pets_allowed",
    "elevator",
    "beach_essentials",
    "alfresco_bathtub",
    "wide_hallways",
    "smart_tv",
    "wide_clearance_to_shower",
    "gym",
    "stair_gates",
    "suitable_for_events",
    "hammock",
    "accessible_height_toilet",
    "luggage_dropoff_allowed",
    "mountain_view",
    "private_hot_tub",
    "bathtub",
    "shared_pool",
    "dog_s_",
    "cable_tv",
    "dvd_player",
    "dishes_and_silverware",
    "window_guards",
    "dryer",
    "warming_drawer",
    "self_check_in",
    "terrace",
    "other",
    "wide_entryway",
    "touchless_faucets",
    "buzzer_wireless_intercom",
    "lake_access",
    "air_conditioning",
    "shared_gym",
    "en_suite_bathroom",
    "printer",
    "toilet_paper",
    "convection_oven",
    "fireplace_guards",
    "ev_charger",
    "cat_s_",
    "wifi",
    "heating",
    "doorman",
    "bbq_grill",
    "bedroom_comforts",
    "body_soap",
    "bidet",
    "private_living_room",
    "free_street_parking",
    "central_air_conditioning",
    "baby_monitor",
    "patio_or_balcony",
    "table_corner_guards",
    "ground_floor_access",
    "beach_view",
    "smoke_detector",
    "tennis_court",
    "formal_dining_area",
    "bathroom_essentials",
    "tv",
    "outdoor_kitchen",
    "exercise_equipment",
    "high_chair",
    "mobile_hoist",
    "microwave",
    "bed_linens",
    "hot_water_kettle",
    "heated_floors",
    "cooking_basics",
    "accessible_height_bed",
    "steam_oven",
    "pillow_top_mattress",
    "pocket_wifi",
    "hangers",
    "handheld_shower_head",
    "hot_water",
    "keypad",
    "dishwasher",
    "pool_with_pool_hoist",
    "shampoo",
    "balcony",
    "high_resolution_computer_monitor",
    "kitchen",
    "toilet",
    "internet",
    "stove",
    "laptop_friendly_workspace",
    "well_lit_path_to_entrance",
    "family_kid_friendly",
    "carbon_monoxide_detector",
    "fire_extinguisher",
    "hbo_go",
    "ethernet_connection",
    "other_pet_s_",
    "sauna",
    "private_entrance",
    "netflix",
    "hot_tub",
    "building_staff",
    "changing_table",
    "bath_towel",
    "children_s_books_and_toys",
    "mudroom",
    "coffee_maker",
    "wheelchair_accessible",
    "soaking_tub",
    "rain_shower",
    "pool_cover",
    "24_hour_check_in",
    "smart_lock",
    "amazon_echo",
    "heated_towel_rack",
    "first_aid_kit",
    "no_stairs_or_steps_to_enter",
    "pets_live_on_this_property",
    "beachfront",
    "breakfast_table",
    "babysitter_recommendations",
    "indoor_fireplace",
    "garden_or_backyard",
    "day_bed",
    "outdoor_parking",
    "ceiling_fan",
    "free_parking_on_premises",
    "oven",
    "hair_dryer",
    "mini_fridge",
    "smoking_allowed",
    "jetted_tub",
    "extra_pillows_and_blankets",
    "firm_mattress",
    "iron",
    "crib",
    "espresso_machine",
    "murphy_bed",
    "paid_parking_on_premises",
    "essentials",
    "pack__n_play_travel_crib",
    "standing_valet",
    "wide_entrance_for_guests",
    "host_greets_you",
    "fax_machine",
    "lockbox",
]

const roomTypes = ["Entire home/apt", "Private room", "Shared room"]

export {
    neighbourhoods,
    propertyTypes,
    amenities,
    roomTypes,
}