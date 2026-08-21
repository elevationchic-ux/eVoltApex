import { Product } from "./types";

export const products: Product[] = [
  {
    id: "moto-volt-r",
    slug: "moto-volt-r-2026",
    nom: "Volt R Roadster Hyper",
    nom_en: "Volt R Roadster Hyper",
    brand: "eVolt Racing",
    category_label: "Roadster Électrique Haute Performance",
    category_label_en: "High-Performance Electric Roadster",
    description: "Découvrez le modèle officiel Volt R Roadster Hyper de chez eVolt Racing. Performance certifiée d'origine avec 200 Nm de couple, 260 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Volt R Roadster Hyper by eVolt Racing. Certified performance with 200 Nm torque, 260 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "200 Nm • 260 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "200 Nm • 260 km real range • License A (Full Power)",
    prix: 23900,
    prix_promo: 23700,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/zero-srf.jpg",
    images: ["/images/products/zero-srf.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 260,
    autonomie_city_km: 312,
    autonomie_highway_km: 182,
    vitesse_max: 205,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 215,
    payload_kg: 274,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 110 kW crête  couple 200 Nm",
    batterie: "Pack Li-ion 17.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 17.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 55,
      power_peak_kw: 110,
      power_hp: 150,
      torque_nm: 200,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moto-volt-r-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moto-volt-r-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moto-volt-r-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 229,
        location: "Île-de-France"
      }
    ],
    rating: 4.1,
    review_count: 14,
    featured: true,
    bestseller: true,
    is_new: true
  },
  {
    id: "zero-sr-f-2026",
    slug: "zero-sr-f-2026-2026",
    nom: "Zero SR/F Premium",
    nom_en: "Zero SR/F Premium",
    brand: "Zero Motorcycles",
    category_label: "Streetfighter Électrique Connecté",
    category_label_en: "Connected Electric Streetfighter",
    description: "Découvrez le modèle officiel Zero SR/F Premium de chez Zero Motorcycles. Performance certifiée d'origine avec 190 Nm de couple, 270 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Zero SR/F Premium by Zero Motorcycles. Certified performance with 190 Nm torque, 270 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "190 Nm • 270 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "190 Nm • 270 km real range • License A (Full Power)",
    prix: 25490,
    prix_promo: 25290,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/zero-srf.jpg",
    images: ["/images/products/zero-srf.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 270,
    autonomie_city_km: 324,
    autonomie_highway_km: 189,
    vitesse_max: 200,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 227,
    payload_kg: 284,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 82 kW crête  couple 190 Nm",
    batterie: "Pack Li-ion 17.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 17.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 41,
      power_peak_kw: 82,
      power_hp: 110,
      torque_nm: 190,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-zero-sr-f-2026-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-zero-sr-f-2026-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-zero-sr-f-2026-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 254,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.8,
    review_count: 27,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "zero-sr-s-gt",
    slug: "zero-sr-s-gt-2026",
    nom: "Zero SR/S Grand Tourer",
    nom_en: "Zero SR/S Grand Tourer",
    brand: "Zero Motorcycles",
    category_label: "Sport-GT Électrique Carénée",
    category_label_en: "Fully Fairing Electric Sport-Tourer",
    description: "Découvrez le modèle officiel Zero SR/S Grand Tourer de chez Zero Motorcycles. Performance certifiée d'origine avec 190 Nm de couple, 285 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Zero SR/S Grand Tourer by Zero Motorcycles. Certified performance with 190 Nm torque, 285 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "190 Nm • 285 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "190 Nm • 285 km real range • License A (Full Power)",
    prix: 26890,
    prix_promo: 26690,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/zero-srs.jpg",
    images: ["/images/products/zero-srs.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 285,
    autonomie_city_km: 342,
    autonomie_highway_km: 200,
    vitesse_max: 200,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 235,
    payload_kg: 292,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 82 kW crête  couple 190 Nm",
    batterie: "Pack Li-ion 17.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 17.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 41,
      power_peak_kw: 82,
      power_hp: 110,
      torque_nm: 190,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-zero-sr-s-gt-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-zero-sr-s-gt-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-zero-sr-s-gt-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 234,
        location: "PACA"
      }
    ],
    rating: 4.7,
    review_count: 40,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "livewire-one-official",
    slug: "livewire-one-official-2026",
    nom: "LiveWire ONE",
    nom_en: "LiveWire ONE",
    brand: "LiveWire",
    category_label: "Roadster Électrique Américain d'Élite",
    category_label_en: "American High-End Electric Roadster",
    description: "Découvrez le modèle officiel LiveWire ONE de chez LiveWire. Performance certifiée d'origine avec 114 Nm de couple, 235 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official LiveWire ONE by LiveWire. Certified performance with 114 Nm torque, 235 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "114 Nm • 235 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "114 Nm • 235 km real range • License A (Full Power)",
    prix: 24990,
    prix_promo: 24790,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/livewire-one.jpg",
    images: ["/images/products/livewire-one.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 235,
    autonomie_city_km: 282,
    autonomie_highway_km: 165,
    vitesse_max: 177,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 255,
    payload_kg: 310,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 75 kW crête  couple 114 Nm",
    batterie: "Pack Li-ion 15.4 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 15.4,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 38,
      power_peak_kw: 75,
      power_hp: 100,
      torque_nm: 114,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-livewire-one-official-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-livewire-one-official-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-livewire-one-official-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 207,
        location: "Île-de-France"
      }
    ],
    rating: 4.6,
    review_count: 53,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "verge-ts-ultra",
    slug: "verge-ts-ultra-2026",
    nom: "Verge TS Ultra Hubless",
    nom_en: "Verge TS Ultra Hubless",
    brand: "Verge Motorcycles",
    category_label: "Hyper-Roadster Futuriste 1200 Nm",
    category_label_en: "Futuristic 1200 Nm Hubless Hyper-Roadster",
    description: "Découvrez le modèle officiel Verge TS Ultra Hubless de chez Verge Motorcycles. Performance certifiée d'origine avec 1200 Nm de couple, 375 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Verge TS Ultra Hubless by Verge Motorcycles. Certified performance with 1200 Nm torque, 375 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "1200 Nm • 375 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "1200 Nm • 375 km real range • License A (Full Power)",
    prix: 54900,
    prix_promo: 54700,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/verge-ts-ultra.jpg",
    images: ["/images/products/verge-ts-ultra.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 375,
    autonomie_city_km: 450,
    autonomie_highway_km: 263,
    vitesse_max: 200,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 245,
    payload_kg: 301,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 150 kW crête  couple 1200 Nm",
    batterie: "Pack Li-ion 20.2 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 20.2,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 75,
      power_peak_kw: 150,
      power_hp: 204,
      torque_nm: 1200,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-verge-ts-ultra-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-verge-ts-ultra-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-verge-ts-ultra-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 353,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.5,
    review_count: 18,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "lightning-strike-carbon",
    slug: "lightning-strike-carbon-2026",
    nom: "Lightning Strike Carbon",
    nom_en: "Lightning Strike Carbon",
    brand: "Lightning Motorcycle",
    category_label: "Superbike Électrique Carbone",
    category_label_en: "Carbon Electric Superbike",
    description: "Découvrez le modèle officiel Lightning Strike Carbon de chez Lightning Motorcycle. Performance certifiée d'origine avec 180 Nm de couple, 240 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Lightning Strike Carbon by Lightning Motorcycle. Certified performance with 180 Nm torque, 240 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "180 Nm • 240 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "180 Nm • 240 km real range • License A (Full Power)",
    prix: 28900,
    prix_promo: 28700,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/lightning-strike-carbon.jpg",
    images: ["/images/products/lightning-strike-carbon.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 240,
    autonomie_city_km: 288,
    autonomie_highway_km: 168,
    vitesse_max: 240,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 210,
    payload_kg: 269,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 90 kW crête  couple 180 Nm",
    batterie: "Pack Li-ion 18 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 18,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 45,
      power_peak_kw: 90,
      power_hp: 122,
      torque_nm: 180,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-lightning-strike-carbon-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-lightning-strike-carbon-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-lightning-strike-carbon-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 197,
        location: "PACA"
      }
    ],
    rating: 4.4,
    review_count: 31,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "moto-trail-adv",
    slug: "moto-trail-adv-2026",
    nom: "Trail ADV Explorer Pro",
    nom_en: "Trail ADV Explorer Pro",
    brand: "eVolt Overland",
    category_label: "Maxi-Trail Aventure & Raid",
    category_label_en: "Adventure & Dual-Sport Maxi-Trail",
    description: "Découvrez le modèle officiel Trail ADV Explorer Pro de chez eVolt Overland. Performance certifiée d'origine avec 190 Nm de couple, 240 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Trail ADV Explorer Pro by eVolt Overland. Certified performance with 190 Nm torque, 240 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "190 Nm • 240 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "190 Nm • 240 km real range • License A (Full Power)",
    prix: 25900,
    prix_promo: 25700,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/zero-dsrx.jpg",
    images: ["/images/products/zero-dsrx.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 240,
    autonomie_city_km: 288,
    autonomie_highway_km: 168,
    vitesse_max: 185,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 232,
    payload_kg: 289,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 85 kW crête  couple 190 Nm",
    batterie: "Pack Li-ion 18.2 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 18.2,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 43,
      power_peak_kw: 85,
      power_hp: 116,
      torque_nm: 190,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moto-trail-adv-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moto-trail-adv-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moto-trail-adv-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 211,
        location: "Île-de-France"
      }
    ],
    rating: 4.3,
    review_count: 44,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "zero-dsrx-adventure",
    slug: "zero-dsrx-adventure-2026",
    nom: "Zero DSR/X Adventure",
    nom_en: "Zero DSR/X Adventure",
    brand: "Zero Motorcycles",
    category_label: "Maxi-Trail Aventure Tout-Chemin",
    category_label_en: "All-Terrain Adventure Maxi-Trail",
    description: "Découvrez le modèle officiel Zero DSR/X Adventure de chez Zero Motorcycles. Performance certifiée d'origine avec 225 Nm de couple, 290 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Zero DSR/X Adventure by Zero Motorcycles. Certified performance with 225 Nm torque, 290 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "225 Nm • 290 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "225 Nm • 290 km real range • License A (Full Power)",
    prix: 26850,
    prix_promo: 26650,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/zero-dsrx.jpg",
    images: ["/images/products/zero-dsrx.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 290,
    autonomie_city_km: 348,
    autonomie_highway_km: 203,
    vitesse_max: 180,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 247,
    payload_kg: 302,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 75 kW crête  couple 225 Nm",
    batterie: "Pack Li-ion 17.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 17.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 38,
      power_peak_kw: 75,
      power_hp: 102,
      torque_nm: 225,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-zero-dsrx-adventure-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-zero-dsrx-adventure-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-zero-dsrx-adventure-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 273,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.2,
    review_count: 57,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "damon-hypersport-premier",
    slug: "damon-hypersport-premier-2026",
    nom: "Damon Hypersport Premier",
    nom_en: "Damon Hypersport Premier",
    brand: "Damon Motorcycles",
    category_label: "Hypersport Électrique 320 km/h",
    category_label_en: "320 km/h Electric Hypersport",
    description: "Découvrez le modèle officiel Damon Hypersport Premier de chez Damon Motorcycles. Performance certifiée d'origine avec 200 Nm de couple, 320 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Damon Hypersport Premier by Damon Motorcycles. Certified performance with 200 Nm torque, 320 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "200 Nm • 320 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "200 Nm • 320 km real range • License A (Full Power)",
    prix: 42000,
    prix_promo: 41800,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/damon-hypersport.jpg",
    images: ["/images/products/damon-hypersport.jpg"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 320,
    autonomie_city_km: 384,
    autonomie_highway_km: 224,
    vitesse_max: 320,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 215,
    payload_kg: 274,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 150 kW crête  couple 200 Nm",
    batterie: "Pack Li-ion 20 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 20,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 75,
      power_peak_kw: 150,
      power_hp: 200,
      torque_nm: 200,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-damon-hypersport-premier-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-damon-hypersport-premier-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-damon-hypersport-premier-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 262,
        location: "PACA"
      }
    ],
    rating: 4.1,
    review_count: 22,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "energica-ego-plus",
    slug: "energica-ego-plus-2026",
    nom: "Energica Ego+ RS",
    nom_en: "Energica Ego+ RS",
    brand: "Energica Motor",
    category_label: "Superbike MotoE Compétition",
    category_label_en: "MotoE Competition Superbike",
    description: "Découvrez le modèle officiel Energica Ego+ RS de chez Energica Motor. Performance certifiée d'origine avec 215 Nm de couple, 280 km d'autonomie réelle et homologation Permis A (Pleine Puissance). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Energica Ego+ RS by Energica Motor. Certified performance with 215 Nm torque, 280 km real range and License A (Full Power). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "215 Nm • 280 km d'autonomie • Permis A (Pleine Puissance)",
    highlight_subtitle_en: "215 Nm • 280 km real range • License A (Full Power)",
    prix: 32500,
    prix_promo: 32300,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/energica-ego-plus.webp",
    images: ["/images/products/energica-ego-plus.webp"],
    type: "moto",
    license_category: "A",
    license_label_fr: "Permis A (Pleine Puissance)",
    license_label_en: "License A (Full Power)",
    autonomie_km: 280,
    autonomie_city_km: 336,
    autonomie_highway_km: 196,
    vitesse_max: 240,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 260,
    payload_kg: 314,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 126 kW crête  couple 215 Nm",
    batterie: "Pack Li-ion 21.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 21.5,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 63,
      power_peak_kw: 126,
      power_hp: 171,
      torque_nm: 215,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-energica-ego-plus-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-energica-ego-plus-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-energica-ego-plus-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 246,
        location: "Île-de-France"
      }
    ],
    rating: 4.8,
    review_count: 35,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "livewire-s2-delmar",
    slug: "livewire-s2-delmar-2026",
    nom: "LiveWire S2 Del Mar",
    nom_en: "LiveWire S2 Del Mar",
    brand: "LiveWire",
    category_label: "Flat-Track Urbain & Scrambler A2",
    category_label_en: "Urban Flat-Tracker A2",
    description: "Découvrez le modèle officiel LiveWire S2 Del Mar de chez LiveWire. Performance certifiée d'origine avec 263 Nm de couple, 181 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official LiveWire S2 Del Mar by LiveWire. Certified performance with 263 Nm torque, 181 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "263 Nm • 181 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "263 Nm • 181 km real range • License A2 (Up to 35 kW)",
    prix: 18690,
    prix_promo: 18490,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 181,
    autonomie_city_km: 217,
    autonomie_highway_km: 127,
    vitesse_max: 165,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 195,
    payload_kg: 256,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 35 kW crête  couple 263 Nm",
    batterie: "Pack Li-ion 10.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 10.5,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 18,
      power_peak_kw: 35,
      power_hp: 47.6,
      torque_nm: 263,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-livewire-s2-delmar-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-livewire-s2-delmar-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-livewire-s2-delmar-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 170,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.7,
    review_count: 48,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "livewire-s2-mulholland",
    slug: "livewire-s2-mulholland-2026",
    nom: "LiveWire S2 Mulholland",
    nom_en: "LiveWire S2 Mulholland",
    brand: "LiveWire",
    category_label: "Cruiser Néo-Rétro Performance A2",
    category_label_en: "Performance Cruiser A2",
    description: "Découvrez le modèle officiel LiveWire S2 Mulholland de chez LiveWire. Performance certifiée d'origine avec 263 Nm de couple, 195 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official LiveWire S2 Mulholland by LiveWire. Certified performance with 263 Nm torque, 195 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "263 Nm • 195 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "263 Nm • 195 km real range • License A2 (Up to 35 kW)",
    prix: 18990,
    prix_promo: 18790,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 195,
    autonomie_city_km: 234,
    autonomie_highway_km: 137,
    vitesse_max: 160,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 196,
    payload_kg: 256,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 35 kW crête  couple 263 Nm",
    batterie: "Pack Li-ion 10.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 10.5,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 18,
      power_peak_kw: 35,
      power_hp: 47.6,
      torque_nm: 263,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-livewire-s2-mulholland-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-livewire-s2-mulholland-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-livewire-s2-mulholland-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 160,
        location: "PACA"
      }
    ],
    rating: 4.6,
    review_count: 61,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "zero-fxe-supermotard",
    slug: "zero-fxe-supermotard-2026",
    nom: "Zero FXE Supermotard",
    nom_en: "Zero FXE Supermotard",
    brand: "Zero Motorcycles",
    category_label: "Supermotard Électrique Léger A2",
    category_label_en: "Lightweight Electric Supermoto A2",
    description: "Découvrez le modèle officiel Zero FXE Supermotard de chez Zero Motorcycles. Performance certifiée d'origine avec 106 Nm de couple, 160 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Zero FXE Supermotard by Zero Motorcycles. Certified performance with 106 Nm torque, 160 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "106 Nm • 160 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "106 Nm • 160 km real range • License A2 (Up to 35 kW)",
    prix: 14165,
    prix_promo: 13965,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/zero-srf.jpg",
    images: ["/images/products/zero-srf.jpg"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 160,
    autonomie_city_km: 192,
    autonomie_highway_km: 112,
    vitesse_max: 137,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 135,
    payload_kg: 202,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 33 kW crête  couple 106 Nm",
    batterie: "Pack Li-ion 7.2 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 7.2,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 17,
      power_peak_kw: 33,
      power_hp: 44,
      torque_nm: 106,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-zero-fxe-supermotard-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-zero-fxe-supermotard-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-zero-fxe-supermotard-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 141,
        location: "Île-de-France"
      }
    ],
    rating: 4.5,
    review_count: 26,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "zero-ds-dual-sport",
    slug: "zero-ds-dual-sport-2026",
    nom: "Zero DS Dual Sport A2",
    nom_en: "Zero DS Dual Sport A2",
    brand: "Zero Motorcycles",
    category_label: "Trail Polyvalent Route & Piste A2",
    category_label_en: "Dual-Sport Adventure A2",
    description: "Découvrez le modèle officiel Zero DS Dual Sport A2 de chez Zero Motorcycles. Performance certifiée d'origine avec 110 Nm de couple, 210 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Zero DS Dual Sport A2 by Zero Motorcycles. Certified performance with 110 Nm torque, 210 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "110 Nm • 210 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "110 Nm • 210 km real range • License A2 (Up to 35 kW)",
    prix: 16500,
    prix_promo: 16300,
    eco_bonus_eligible: true,
    max_eco_bonus: 1200,
    image_url: "/images/products/zero-dsrx.jpg",
    images: ["/images/products/zero-dsrx.jpg"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 210,
    autonomie_city_km: 252,
    autonomie_highway_km: 147,
    vitesse_max: 145,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 187,
    payload_kg: 248,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 35 kW crête  couple 110 Nm",
    batterie: "Pack Li-ion 14.4 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 14.4,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 18,
      power_peak_kw: 35,
      power_hp: 47.6,
      torque_nm: 110,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-zero-ds-dual-sport-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-zero-ds-dual-sport-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-zero-ds-dual-sport-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 197,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.4,
    review_count: 39,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "maeving-rm1s-british",
    slug: "maeving-rm1s-british-2026",
    nom: "Maeving RM1S Classic",
    nom_en: "Maeving RM1S Classic",
    brand: "Maeving UK",
    category_label: "Café Racer Britannique Vintage A2",
    category_label_en: "British Vintage Cafe Racer A2",
    description: "Découvrez le modèle officiel Maeving RM1S Classic de chez Maeving UK. Performance certifiée d'origine avec 160 Nm de couple, 130 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Maeving RM1S Classic by Maeving UK. Certified performance with 160 Nm torque, 130 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "160 Nm • 130 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "160 Nm • 130 km real range • License A2 (Up to 35 kW)",
    prix: 8990,
    prix_promo: 8790,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/maeving-rm1s.png",
    images: ["/images/products/maeving-rm1s.png"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 110,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 125,
    payload_kg: 193,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 14 kW crête  couple 160 Nm",
    batterie: "Pack Li-ion 5.4 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.4,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 7,
      power_peak_kw: 14,
      power_hp: 19,
      torque_nm: 160,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-maeving-rm1s-british-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-maeving-rm1s-british-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-maeving-rm1s-british-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.3,
    review_count: 52,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "moto-cafe-e",
    slug: "moto-cafe-e-2026",
    nom: "Café-E Racer Néo-Rétro",
    nom_en: "Café-E Racer Néo-Rétro",
    brand: "eVolt Atelier",
    category_label: "Café Racer Néo-Rétro Fait Main",
    category_label_en: "Handcrafted Neo-Retro Cafe Racer",
    description: "Découvrez le modèle officiel Café-E Racer Néo-Rétro de chez eVolt Atelier. Performance certifiée d'origine avec 120 Nm de couple, 180 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Café-E Racer Néo-Rétro by eVolt Atelier. Certified performance with 120 Nm torque, 180 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "120 Nm • 180 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "120 Nm • 180 km real range • License A2 (Up to 35 kW)",
    prix: 18900,
    prix_promo: 18700,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 180,
    autonomie_city_km: 216,
    autonomie_highway_km: 126,
    vitesse_max: 150,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 178,
    payload_kg: 240,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 35 kW crête  couple 120 Nm",
    batterie: "Pack Li-ion 12.8 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 12.8,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 18,
      power_peak_kw: 35,
      power_hp: 47.6,
      torque_nm: 120,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moto-cafe-e-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moto-cafe-e-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moto-cafe-e-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 158,
        location: "Île-de-France"
      }
    ],
    rating: 4.2,
    review_count: 17,
    featured: false,
    bestseller: true,
    is_new: true
  },
  {
    id: "buell-fuell-flow",
    slug: "buell-fuell-flow-2026",
    nom: "FUELL Fllow (By Erik Buell)",
    nom_en: "FUELL Fllow (By Erik Buell)",
    brand: "FUELL / Buell",
    category_label: "Roadster Urbain 50L Coffre A2",
    category_label_en: "Urban Roadster 50L Trunk A2",
    description: "Découvrez le modèle officiel FUELL Fllow (By Erik Buell) de chez FUELL / Buell. Performance certifiée d'origine avec 750 Nm de couple, 240 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official FUELL Fllow (By Erik Buell) by FUELL / Buell. Certified performance with 750 Nm torque, 240 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "750 Nm • 240 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "750 Nm • 240 km real range • License A2 (Up to 35 kW)",
    prix: 14995,
    prix_promo: 14795,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/fuell-fllow.png",
    images: ["/images/products/fuell-fllow.png"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 240,
    autonomie_city_km: 288,
    autonomie_highway_km: 168,
    vitesse_max: 140,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 180,
    payload_kg: 242,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 35 kW crête  couple 750 Nm",
    batterie: "Pack Li-ion 10 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 10,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 18,
      power_peak_kw: 35,
      power_hp: 47.6,
      torque_nm: 750,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-buell-fuell-flow-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-buell-fuell-flow-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-buell-fuell-flow-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 226,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.1,
    review_count: 30,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "rgnt-no1-classic",
    slug: "rgnt-no1-classic-2026",
    nom: "RGNT No. 1 Classic SE",
    nom_en: "RGNT No. 1 Classic SE",
    brand: "RGNT Motorcycles",
    category_label: "Néo-Rétro Suédoise d'Artisanat",
    category_label_en: "Swedish Handcrafted Neo-Retro",
    description: "Découvrez le modèle officiel RGNT No. 1 Classic SE de chez RGNT Motorcycles. Performance certifiée d'origine avec 390 Nm de couple, 150 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official RGNT No. 1 Classic SE by RGNT Motorcycles. Certified performance with 390 Nm torque, 150 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "390 Nm • 150 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "390 Nm • 150 km real range • License A2 (Up to 35 kW)",
    prix: 14490,
    prix_promo: 14290,
    eco_bonus_eligible: true,
    max_eco_bonus: 1200,
    image_url: "/images/products/rgnt-no1-classic.jpg",
    images: ["/images/products/rgnt-no1-classic.jpg"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 150,
    autonomie_city_km: 180,
    autonomie_highway_km: 105,
    vitesse_max: 125,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 160,
    payload_kg: 224,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 21 kW crête  couple 390 Nm",
    batterie: "Pack Li-ion 9.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 9.5,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 11,
      power_peak_kw: 21,
      power_hp: 28,
      torque_nm: 390,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-rgnt-no1-classic-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-rgnt-no1-classic-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-rgnt-no1-classic-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 123,
        location: "PACA"
      }
    ],
    rating: 4.8,
    review_count: 43,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "dab-motors-1alpha",
    slug: "dab-motors-1alpha-2026",
    nom: "DAB Motors 1α Électrique",
    nom_en: "DAB Motors 1α Électrique",
    brand: "DAB Motors France",
    category_label: "Scrambler Design Édition Limitée",
    category_label_en: "Limited Edition Designer Scrambler",
    description: "Découvrez le modèle officiel DAB Motors 1α Électrique de chez DAB Motors France. Performance certifiée d'origine avec 395 Nm de couple, 150 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official DAB Motors 1α Électrique by DAB Motors France. Certified performance with 395 Nm torque, 150 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "395 Nm • 150 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "395 Nm • 150 km real range • License A2 (Up to 35 kW)",
    prix: 14900,
    prix_promo: 14700,
    eco_bonus_eligible: true,
    max_eco_bonus: 1100,
    image_url: "/images/products/dab-motors-1alpha.webp",
    images: ["/images/products/dab-motors-1alpha.webp"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 150,
    autonomie_city_km: 180,
    autonomie_highway_km: 105,
    vitesse_max: 130,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 125,
    payload_kg: 193,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 25 kW crête  couple 395 Nm",
    batterie: "Pack Li-ion 7.1 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 7.1,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 13,
      power_peak_kw: 25,
      power_hp: 34,
      torque_nm: 395,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-dab-motors-1alpha-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-dab-motors-1alpha-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-dab-motors-1alpha-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 132,
        location: "Île-de-France"
      }
    ],
    rating: 4.7,
    review_count: 56,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "alva-electric-roadster",
    slug: "alva-electric-roadster-2026",
    nom: "Alva Auto Roadster A2",
    nom_en: "Alva Auto Roadster A2",
    brand: "Alva Technologies",
    category_label: "Roadster A2 Connecté 4G",
    category_label_en: "4G Connected A2 Roadster",
    description: "Découvrez le modèle officiel Alva Auto Roadster A2 de chez Alva Technologies. Performance certifiée d'origine avec 110 Nm de couple, 165 km d'autonomie réelle et homologation Permis A2 (Jusqu'à 35 kW). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Alva Auto Roadster A2 by Alva Technologies. Certified performance with 110 Nm torque, 165 km real range and License A2 (Up to 35 kW). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "110 Nm • 165 km d'autonomie • Permis A2 (Jusqu'à 35 kW)",
    highlight_subtitle_en: "110 Nm • 165 km real range • License A2 (Up to 35 kW)",
    prix: 11500,
    prix_promo: 11300,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/alva-auto-roadster.jpg",
    images: ["/images/products/alva-auto-roadster.jpg"],
    type: "moto",
    license_category: "A2",
    license_label_fr: "Permis A2 (Jusqu'à 35 kW)",
    license_label_en: "License A2 (Up to 35 kW)",
    autonomie_km: 165,
    autonomie_city_km: 198,
    autonomie_highway_km: 115,
    vitesse_max: 120,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 140,
    payload_kg: 206,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 22 kW crête  couple 110 Nm",
    batterie: "Pack Li-ion 8 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 8,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 11,
      power_peak_kw: 22,
      power_hp: 30,
      torque_nm: 110,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-alva-electric-roadster-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-alva-electric-roadster-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-alva-electric-roadster-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 155,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.6,
    review_count: 21,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "moto-land-nomad",
    slug: "moto-land-nomad-2026",
    nom: "LAND District Scrambler",
    nom_en: "LAND District Scrambler",
    brand: "LAND Electric",
    category_label: "Scrambler Urbain Batterie Amovible",
    category_label_en: "Urban Scrambler Removable Battery",
    description: "Découvrez le modèle officiel LAND District Scrambler de chez LAND Electric. Performance certifiée d'origine avec 72 Nm de couple, 140 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official LAND District Scrambler by LAND Electric. Certified performance with 72 Nm torque, 140 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "72 Nm • 140 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "72 Nm • 140 km real range • License A1 or Car+7h (125cc)",
    prix: 8900,
    prix_promo: 8700,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/land-district-scrambler.png",
    images: ["/images/products/land-district-scrambler.png"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 140,
    autonomie_city_km: 168,
    autonomie_highway_km: 98,
    vitesse_max: 115,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 105,
    payload_kg: 175,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 17 kW crête  couple 72 Nm",
    batterie: "Pack Li-ion 5.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.5,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 9,
      power_peak_kw: 17,
      power_hp: 23,
      torque_nm: 72,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moto-land-nomad-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moto-land-nomad-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moto-land-nomad-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 115,
        location: "PACA"
      }
    ],
    rating: 4.5,
    review_count: 34,
    featured: true,
    bestseller: false,
    is_new: true
  },
  {
    id: "ryvid-anthem-official",
    slug: "ryvid-anthem-official-2026",
    nom: "Ryvid Anthem Électrique",
    nom_en: "Ryvid Anthem Électrique",
    brand: "Ryvid USA",
    category_label: "Roadster Châssis Inox & Selle Réglable",
    category_label_en: "Stainless Frame Adjustable Seat Roadster",
    description: "Découvrez le modèle officiel Ryvid Anthem Électrique de chez Ryvid USA. Performance certifiée d'origine avec 338 Nm de couple, 120 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Ryvid Anthem Électrique by Ryvid USA. Certified performance with 338 Nm torque, 120 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "338 Nm • 120 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "338 Nm • 120 km real range • License A1 or Car+7h (125cc)",
    prix: 7990,
    prix_promo: 7790,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/ryvid-anthem.jpg",
    images: ["/images/products/ryvid-anthem.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 120,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 142,
    payload_kg: 208,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 14 kW crête  couple 338 Nm",
    batterie: "Pack Li-ion 4.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 7,
      power_peak_kw: 14,
      power_hp: 19,
      torque_nm: 338,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-ryvid-anthem-official-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-ryvid-anthem-official-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-ryvid-anthem-official-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 106,
        location: "Île-de-France"
      }
    ],
    rating: 4.4,
    review_count: 47,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "ryvid-outset-scrambler",
    slug: "ryvid-outset-scrambler-2026",
    nom: "Ryvid Outset Dual-Sport",
    nom_en: "Ryvid Outset Dual-Sport",
    brand: "Ryvid USA",
    category_label: "Scrambler Périurbain Guidon Haut",
    category_label_en: "Dual-Sport Scrambler High Handlebar",
    description: "Découvrez le modèle officiel Ryvid Outset Dual-Sport de chez Ryvid USA. Performance certifiée d'origine avec 338 Nm de couple, 115 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Ryvid Outset Dual-Sport by Ryvid USA. Certified performance with 338 Nm torque, 115 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "338 Nm • 115 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "338 Nm • 115 km real range • License A1 or Car+7h (125cc)",
    prix: 7490,
    prix_promo: 7290,
    eco_bonus_eligible: true,
    max_eco_bonus: 850,
    image_url: "/images/products/ryvid-outset.jpg",
    images: ["/images/products/ryvid-outset.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 115,
    autonomie_city_km: 138,
    autonomie_highway_km: 81,
    vitesse_max: 118,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 138,
    payload_kg: 204,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 14 kW crête  couple 338 Nm",
    batterie: "Pack Li-ion 4.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 7,
      power_peak_kw: 14,
      power_hp: 19,
      torque_nm: 338,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-ryvid-outset-scrambler-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-ryvid-outset-scrambler-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-ryvid-outset-scrambler-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 108,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.3,
    review_count: 60,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "volcon-grunt-evo-fat",
    slug: "volcon-grunt-evo-fat-2026",
    nom: "Volcon Grunt EVO Fat-Tire",
    nom_en: "Volcon Grunt EVO Fat-Tire",
    brand: "Volcon Powersports",
    category_label: "Moto Tout-Terrain Pneus Géants 125cc",
    category_label_en: "Fat-Tire All-Terrain Trail Bike",
    description: "Découvrez le modèle officiel Volcon Grunt EVO Fat-Tire de chez Volcon Powersports. Performance certifiée d'origine avec 102 Nm de couple, 110 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Volcon Grunt EVO Fat-Tire by Volcon Powersports. Certified performance with 102 Nm torque, 110 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "102 Nm • 110 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "102 Nm • 110 km real range • License A1 or Car+7h (125cc)",
    prix: 6990,
    prix_promo: 6790,
    eco_bonus_eligible: true,
    max_eco_bonus: 700,
    image_url: "/images/products/volcon-grunt-evo.jpg",
    images: ["/images/products/volcon-grunt-evo.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 65,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 130,
    payload_kg: 197,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 8 kW crête  couple 102 Nm",
    batterie: "Pack Li-ion 4.6 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.6,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 4,
      power_peak_kw: 8,
      power_hp: 11,
      torque_nm: 102,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-volcon-grunt-evo-fat-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-volcon-grunt-evo-fat-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-volcon-grunt-evo-fat-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 90,
        location: "PACA"
      }
    ],
    rating: 4.2,
    review_count: 25,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "horwin-cr6-pro-manual",
    slug: "horwin-cr6-pro-manual-2026",
    nom: "Horwin CR6 Pro (Boîte 5 Vitesses)",
    nom_en: "Horwin CR6 Pro (Boîte 5 Vitesses)",
    brand: "Horwin",
    category_label: "Café Racer Électrique à Boîte Manuelle",
    category_label_en: "Electric Cafe Racer with 5-Speed Manual",
    description: "Découvrez le modèle officiel Horwin CR6 Pro (Boîte 5 Vitesses) de chez Horwin. Performance certifiée d'origine avec 260 Nm de couple, 135 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Horwin CR6 Pro (Boîte 5 Vitesses) by Horwin. Certified performance with 260 Nm torque, 135 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "260 Nm • 135 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "260 Nm • 135 km real range • License A1 or Car+7h (125cc)",
    prix: 7490,
    prix_promo: 7290,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 135,
    autonomie_city_km: 162,
    autonomie_highway_km: 95,
    vitesse_max: 105,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 134,
    payload_kg: 201,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 11 kW crête  couple 260 Nm",
    batterie: "Pack Li-ion 4 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 11,
      power_hp: 15,
      torque_nm: 260,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-horwin-cr6-pro-manual-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-horwin-cr6-pro-manual-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-horwin-cr6-pro-manual-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 119,
        location: "Île-de-France"
      }
    ],
    rating: 4.1,
    review_count: 38,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "super-soco-tc-max-pro",
    slug: "super-soco-tc-max-pro-2026",
    nom: "Super Soco TC Max Pro",
    nom_en: "Super Soco TC Max Pro",
    brand: "Super Soco",
    category_label: "Roadster Néo-Rétro Courroie Carbone",
    category_label_en: "Neo-Retro Carbon Belt Roadster",
    description: "Découvrez le modèle officiel Super Soco TC Max Pro de chez Super Soco. Performance certifiée d'origine avec 180 Nm de couple, 110 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Super Soco TC Max Pro by Super Soco. Certified performance with 180 Nm torque, 110 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "180 Nm • 110 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "180 Nm • 110 km real range • License A1 or Car+7h (125cc)",
    prix: 4790,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 750,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 102,
    payload_kg: 172,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 5.5 kW crête  couple 180 Nm",
    batterie: "Pack Li-ion 3.24 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.24,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 3,
      power_peak_kw: 5.5,
      power_hp: 7.5,
      torque_nm: 180,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-super-soco-tc-max-pro-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-super-soco-tc-max-pro-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-super-soco-tc-max-pro-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 103,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.8,
    review_count: 51,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "tromox-ukko-s-pro",
    slug: "tromox-ukko-s-pro-2026",
    nom: "Tromox Ukko S Pro",
    nom_en: "Tromox Ukko S Pro",
    brand: "Tromox",
    category_label: "Mini-Streetfighter 125cc Monobras",
    category_label_en: "Single-Sided Swingarm 125cc Mini-Fighter",
    description: "Découvrez le modèle officiel Tromox Ukko S Pro de chez Tromox. Performance certifiée d'origine avec 180 Nm de couple, 130 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Tromox Ukko S Pro by Tromox. Certified performance with 180 Nm torque, 130 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "180 Nm • 130 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "180 Nm • 130 km real range • License A1 or Car+7h (125cc)",
    prix: 5990,
    prix_promo: 5790,
    eco_bonus_eligible: true,
    max_eco_bonus: 800,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 110,
    payload_kg: 179,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 8 kW crête  couple 180 Nm",
    batterie: "Pack Li-ion 3.96 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.96,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 4,
      power_peak_kw: 8,
      power_hp: 11,
      torque_nm: 180,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-tromox-ukko-s-pro-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-tromox-ukko-s-pro-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-tromox-ukko-s-pro-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.7,
    review_count: 16,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "kollter-es1-pro-enduro",
    slug: "kollter-es1-pro-enduro-2026",
    nom: "Kollter ES1 Pro Dual Battery",
    nom_en: "Kollter ES1 Pro Dual Battery",
    brand: "Kollter",
    category_label: "Supermotard Double Batterie 125cc",
    category_label_en: "Dual Battery 125cc Supermoto",
    description: "Découvrez le modèle officiel Kollter ES1 Pro Dual Battery de chez Kollter. Performance certifiée d'origine avec 220 Nm de couple, 120 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Kollter ES1 Pro Dual Battery by Kollter. Certified performance with 220 Nm torque, 120 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "220 Nm • 120 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "220 Nm • 120 km real range • License A1 or Car+7h (125cc)",
    prix: 5490,
    prix_promo: 5290,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 100,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 112,
    payload_kg: 181,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 11 kW crête  couple 220 Nm",
    batterie: "Pack Li-ion 4.6 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.6,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 11,
      power_hp: 15,
      torque_nm: 220,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-kollter-es1-pro-enduro-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-kollter-es1-pro-enduro-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-kollter-es1-pro-enduro-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 106,
        location: "Île-de-France"
      }
    ],
    rating: 4.6,
    review_count: 29,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "caofen-f80-enduro-oil",
    slug: "caofen-f80-enduro-oil-2026",
    nom: "Caofen F80 Enduro Pro",
    nom_en: "Caofen F80 Enduro Pro",
    brand: "Caofen",
    category_label: "Enduro 125cc Refroidissement Huile",
    category_label_en: "Oil-Immersed Battery 125cc Enduro",
    description: "Découvrez le modèle officiel Caofen F80 Enduro Pro de chez Caofen. Performance certifiée d'origine avec 310 Nm de couple, 130 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Caofen F80 Enduro Pro by Caofen. Certified performance with 310 Nm torque, 130 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "310 Nm • 130 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "310 Nm • 130 km real range • License A1 or Car+7h (125cc)",
    prix: 6290,
    prix_promo: 6090,
    eco_bonus_eligible: true,
    max_eco_bonus: 850,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 85,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 88,
    payload_kg: 159,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 8 kW crête  couple 310 Nm",
    batterie: "Pack Li-ion 3.45 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.45,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 4,
      power_peak_kw: 8,
      power_hp: 11,
      torque_nm: 310,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-caofen-f80-enduro-oil-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-caofen-f80-enduro-oil-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-caofen-f80-enduro-oil-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 122,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.5,
    review_count: 42,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "niu-rqi-sport-125",
    slug: "niu-rqi-sport-125-2026",
    nom: "Niu RQi Sport 125cc",
    nom_en: "Niu RQi Sport 125cc",
    brand: "Niu Technologies",
    category_label: "Roadster Urbain Double Batterie 72V",
    category_label_en: "Dual 72V Battery Urban Roadster",
    description: "Découvrez le modèle officiel Niu RQi Sport 125cc de chez Niu Technologies. Performance certifiée d'origine avec 450 Nm de couple, 120 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Niu RQi Sport 125cc by Niu Technologies. Certified performance with 450 Nm torque, 120 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "450 Nm • 120 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "450 Nm • 120 km real range • License A1 or Car+7h (125cc)",
    prix: 7999,
    prix_promo: 7799,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 110,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 186,
    payload_kg: 247,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 7.5 kW crête  couple 450 Nm",
    batterie: "Pack Li-ion 5.18 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.18,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 4,
      power_peak_kw: 7.5,
      power_hp: 10.2,
      torque_nm: 450,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-niu-rqi-sport-125-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-niu-rqi-sport-125-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-niu-rqi-sport-125-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 98,
        location: "PACA"
      }
    ],
    rating: 4.4,
    review_count: 55,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "horwin-ht5-trail",
    slug: "horwin-ht5-trail-2026",
    nom: "Horwin HT5 Dual-Sport",
    nom_en: "Horwin HT5 Dual-Sport",
    brand: "Horwin",
    category_label: "Trail Électrique Léger 125cc",
    category_label_en: "Lightweight 125cc Electric Trail",
    description: "Découvrez le modèle officiel Horwin HT5 Dual-Sport de chez Horwin. Performance certifiée d'origine avec 260 Nm de couple, 110 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Horwin HT5 Dual-Sport by Horwin. Certified performance with 260 Nm torque, 110 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "260 Nm • 110 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "260 Nm • 110 km real range • License A1 or Car+7h (125cc)",
    prix: 5790,
    prix_promo: 5590,
    eco_bonus_eligible: true,
    max_eco_bonus: 800,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 85,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 95,
    payload_kg: 166,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 8 kW crête  couple 260 Nm",
    batterie: "Pack Li-ion 3.8 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.8,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 4,
      power_peak_kw: 8,
      power_hp: 11,
      torque_nm: 260,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-horwin-ht5-trail-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-horwin-ht5-trail-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-horwin-ht5-trail-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 97,
        location: "Île-de-France"
      }
    ],
    rating: 4.3,
    review_count: 20,
    featured: false,
    bestseller: true,
    is_new: true
  },
  {
    id: "braaap-moto-e-125",
    slug: "braaap-moto-e-125-2026",
    nom: "Braaap Moto-E Urban Pro",
    nom_en: "Braaap Moto-E Urban Pro",
    brand: "Braaap",
    category_label: "Roadster Sport 125cc Économique",
    category_label_en: "Sport Urban 125cc Roadster",
    description: "Découvrez le modèle officiel Braaap Moto-E Urban Pro de chez Braaap. Performance certifiée d'origine avec 150 Nm de couple, 100 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Braaap Moto-E Urban Pro by Braaap. Certified performance with 150 Nm torque, 100 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "150 Nm • 100 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "150 Nm • 100 km real range • License A1 or Car+7h (125cc)",
    prix: 4990,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 700,
    image_url: "/images/products/livewire-s2-delmar.jpg",
    images: ["/images/products/livewire-s2-delmar.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 100,
    autonomie_city_km: 120,
    autonomie_highway_km: 70,
    vitesse_max: 90,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 115,
    payload_kg: 184,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 6 kW crête  couple 150 Nm",
    batterie: "Pack Li-ion 3.6 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.6,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 3,
      power_peak_kw: 6,
      power_hp: 8.2,
      torque_nm: 150,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-braaap-moto-e-125-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-braaap-moto-e-125-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-braaap-moto-e-125-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 94,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.2,
    review_count: 33,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "bmw-ce-04-avantgarde",
    slug: "bmw-ce-04-avantgarde-2026",
    nom: "BMW CE 04 Avantgarde",
    nom_en: "BMW CE 04 Avantgarde",
    brand: "BMW Motorrad",
    category_label: "Maxi-Scooter Révolutionnaire 125/A2",
    category_label_en: "Futuristic Urban Maxi-Scooter",
    description: "Découvrez le modèle officiel BMW CE 04 Avantgarde de chez BMW Motorrad. Performance certifiée d'origine avec 62 Nm de couple, 130 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official BMW CE 04 Avantgarde by BMW Motorrad. Certified performance with 62 Nm torque, 130 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "62 Nm • 130 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "62 Nm • 130 km real range • License A1 or Car+7h (125cc)",
    prix: 12990,
    prix_promo: 12790,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 120,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 231,
    payload_kg: 288,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 23 kW crête  couple 62 Nm",
    batterie: "Pack Li-ion 8.9 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 8.9,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 12,
      power_peak_kw: 23,
      power_hp: 31,
      torque_nm: 62,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-bmw-ce-04-avantgarde-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-bmw-ce-04-avantgarde-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-bmw-ce-04-avantgarde-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.1,
    review_count: 46,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "silence-s01-plus-official",
    slug: "silence-s01-plus-official-2026",
    nom: "Silence S01+ Connected",
    nom_en: "Silence S01+ Connected",
    brand: "Silence",
    category_label: "Scooter Batterie Trolley Amovible",
    category_label_en: "Trolley Battery Commuter Scooter",
    description: "Découvrez le modèle officiel Silence S01+ Connected de chez Silence. Performance certifiée d'origine avec 120 Nm de couple, 133 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Silence S01+ Connected by Silence. Certified performance with 120 Nm torque, 133 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "120 Nm • 133 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "120 Nm • 133 km real range • License A1 or Car+7h (125cc)",
    prix: 8290,
    prix_promo: 8090,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 133,
    autonomie_city_km: 160,
    autonomie_highway_km: 93,
    vitesse_max: 100,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 152,
    payload_kg: 217,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 9 kW crête  couple 120 Nm",
    batterie: "Pack Li-ion 5.6 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.6,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 5,
      power_peak_kw: 9,
      power_hp: 12.2,
      torque_nm: 120,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-silence-s01-plus-official-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-silence-s01-plus-official-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-silence-s01-plus-official-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 117,
        location: "Île-de-France"
      }
    ],
    rating: 4.8,
    review_count: 59,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "ray-77-gt-tourer",
    slug: "ray-77-gt-tourer-2026",
    nom: "Ray 7.7 GT Tourer",
    nom_en: "Ray 7.7 GT Tourer",
    brand: "Ray Motors",
    category_label: "Maxi-Scooter Autoroute 125 km/h",
    category_label_en: "Highway-Capable Maxi-Scooter 125 km/h",
    description: "Découvrez le modèle officiel Ray 7.7 GT Tourer de chez Ray Motors. Performance certifiée d'origine avec 60 Nm de couple, 150 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Ray 7.7 GT Tourer by Ray Motors. Certified performance with 60 Nm torque, 150 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "60 Nm • 150 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "60 Nm • 150 km real range • License A1 or Car+7h (125cc)",
    prix: 9990,
    prix_promo: 9790,
    eco_bonus_eligible: true,
    max_eco_bonus: 1100,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 150,
    autonomie_city_km: 180,
    autonomie_highway_km: 105,
    vitesse_max: 125,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 165,
    payload_kg: 229,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 17.5 kW crête  couple 60 Nm",
    batterie: "Pack Li-ion 7.7 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 7.7,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 9,
      power_peak_kw: 17.5,
      power_hp: 24,
      torque_nm: 60,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-ray-77-gt-tourer-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-ray-77-gt-tourer-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-ray-77-gt-tourer-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 141,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.7,
    review_count: 24,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "segway-e300se-abs",
    slug: "segway-e300se-abs-2026",
    nom: "Segway E300SE Triple Battery",
    nom_en: "Segway E300SE Triple Battery",
    brand: "Segway",
    category_label: "Maxi-Scooter 0-50 en 2.9s ABS",
    category_label_en: "Triple Battery 105 km/h ABS Scooter",
    description: "Découvrez le modèle officiel Segway E300SE Triple Battery de chez Segway. Performance certifiée d'origine avec 200 Nm de couple, 130 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Segway E300SE Triple Battery by Segway. Certified performance with 200 Nm torque, 130 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "200 Nm • 130 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "200 Nm • 130 km real range • License A1 or Car+7h (125cc)",
    prix: 4999,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 105,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 127,
    payload_kg: 194,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 10 kW crête  couple 200 Nm",
    batterie: "Pack Li-ion 6 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 6,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 5,
      power_peak_kw: 10,
      power_hp: 13.6,
      torque_nm: 200,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-segway-e300se-abs-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-segway-e300se-abs-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-segway-e300se-abs-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.6,
    review_count: 37,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "moto-city-ls-125",
    slug: "moto-city-ls-125-2026",
    nom: "City LS 125 Grand Tourer",
    nom_en: "City LS 125 Grand Tourer",
    brand: "eVolt Urban",
    category_label: "Maxi-Scooter Électrique Coffre 2 Casques",
    category_label_en: "Electric Maxi-Scooter 2 Helmets Storage",
    description: "Découvrez le modèle officiel City LS 125 Grand Tourer de chez eVolt Urban. Performance certifiée d'origine avec 140 Nm de couple, 130 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official City LS 125 Grand Tourer by eVolt Urban. Certified performance with 140 Nm torque, 130 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "140 Nm • 130 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "140 Nm • 130 km real range • License A1 or Car+7h (125cc)",
    prix: 6990,
    prix_promo: 6790,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 110,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 128,
    payload_kg: 195,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 11 kW crête  couple 140 Nm",
    batterie: "Pack Li-ion 5.76 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.76,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 11,
      power_hp: 15,
      torque_nm: 140,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moto-city-ls-125-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moto-city-ls-125-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moto-city-ls-125-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 114,
        location: "Île-de-France"
      }
    ],
    rating: 4.5,
    review_count: 50,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "niu-mqi-gt-evo-100",
    slug: "niu-mqi-gt-evo-100-2026",
    nom: "Niu MQi GT EVO 100 km/h",
    nom_en: "Niu MQi GT EVO 100 km/h",
    brand: "Niu Technologies",
    category_label: "Scooter Grandes Roues 14 pouces",
    category_label_en: "14-inch Wheels Urban Scooter",
    description: "Découvrez le modèle officiel Niu MQi GT EVO 100 km/h de chez Niu Technologies. Performance certifiée d'origine avec 160 Nm de couple, 100 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Niu MQi GT EVO 100 km/h by Niu Technologies. Certified performance with 160 Nm torque, 100 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "160 Nm • 100 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "160 Nm • 100 km real range • License A1 or Car+7h (125cc)",
    prix: 4999,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 100,
    autonomie_city_km: 120,
    autonomie_highway_km: 70,
    vitesse_max: 100,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 128,
    payload_kg: 195,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 6.5 kW crête  couple 160 Nm",
    batterie: "Pack Li-ion 3.74 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.74,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 3,
      power_peak_kw: 6.5,
      power_hp: 8.8,
      torque_nm: 160,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-niu-mqi-gt-evo-100-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-niu-mqi-gt-evo-100-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-niu-mqi-gt-evo-100-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 94,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.4,
    review_count: 15,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "horwin-ek3-deluxe",
    slug: "horwin-ek3-deluxe-2026",
    nom: "Horwin EK3 Grand Tourer",
    nom_en: "Horwin EK3 Grand Tourer",
    brand: "Horwin",
    category_label: "Scooter Rétro-Chic Démarrage Sans Clé",
    category_label_en: "Keyless Retro-Chic Urban Scooter",
    description: "Découvrez le modèle officiel Horwin EK3 Grand Tourer de chez Horwin. Performance certifiée d'origine avec 195 Nm de couple, 100 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Horwin EK3 Grand Tourer by Horwin. Certified performance with 195 Nm torque, 100 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "195 Nm • 100 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "195 Nm • 100 km real range • License A1 or Car+7h (125cc)",
    prix: 4490,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 750,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 100,
    autonomie_city_km: 120,
    autonomie_highway_km: 70,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 95,
    payload_kg: 166,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 6.2 kW crête  couple 195 Nm",
    batterie: "Pack Li-ion 2.88 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.88,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 3,
      power_peak_kw: 6.2,
      power_hp: 8.4,
      torque_nm: 195,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-horwin-ek3-deluxe-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-horwin-ek3-deluxe-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-horwin-ek3-deluxe-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 82,
        location: "PACA"
      }
    ],
    rating: 4.3,
    review_count: 28,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "frison-t10-gt",
    slug: "frison-t10-gt-2026",
    nom: "Frison T10 GT Maxi-Scooter",
    nom_en: "Frison T10 GT Maxi-Scooter",
    brand: "Frison Scooter",
    category_label: "Maxi-Scooter GT 120 km/h",
    category_label_en: "GT Maxi-Scooter 120 km/h",
    description: "Découvrez le modèle officiel Frison T10 GT Maxi-Scooter de chez Frison Scooter. Performance certifiée d'origine avec 180 Nm de couple, 140 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Frison T10 GT Maxi-Scooter by Frison Scooter. Certified performance with 180 Nm torque, 140 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "180 Nm • 140 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "180 Nm • 140 km real range • License A1 or Car+7h (125cc)",
    prix: 7990,
    prix_promo: 7790,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 140,
    autonomie_city_km: 168,
    autonomie_highway_km: 98,
    vitesse_max: 120,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 150,
    payload_kg: 215,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 10 kW crête  couple 180 Nm",
    batterie: "Pack Li-ion 6.8 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 6.8,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 5,
      power_peak_kw: 10,
      power_hp: 13.6,
      torque_nm: 180,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-frison-t10-gt-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-frison-t10-gt-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-frison-t10-gt-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 123,
        location: "Île-de-France"
      }
    ],
    rating: 4.2,
    review_count: 41,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "zeeho-ae8-s-plus",
    slug: "zeeho-ae8-s-plus-2026",
    nom: "Zeeho AE8 S+ (By CFMOTO)",
    nom_en: "Zeeho AE8 S+ (By CFMOTO)",
    brand: "Zeeho / CFMOTO",
    category_label: "Scooter Sportif Brembo & Bosch ABS",
    category_label_en: "Sport Scooter Brembo & Bosch ABS",
    description: "Découvrez le modèle officiel Zeeho AE8 S+ (By CFMOTO) de chez Zeeho / CFMOTO. Performance certifiée d'origine avec 218 Nm de couple, 120 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Zeeho AE8 S+ (By CFMOTO) by Zeeho / CFMOTO. Certified performance with 218 Nm torque, 120 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "218 Nm • 120 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "218 Nm • 120 km real range • License A1 or Car+7h (125cc)",
    prix: 5490,
    prix_promo: 5290,
    eco_bonus_eligible: true,
    max_eco_bonus: 850,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 105,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 130,
    payload_kg: 197,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 12.5 kW crête  couple 218 Nm",
    batterie: "Pack Li-ion 4.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 12.5,
      power_hp: 17,
      torque_nm: 218,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-zeeho-ae8-s-plus-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-zeeho-ae8-s-plus-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-zeeho-ae8-s-plus-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 113,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.1,
    review_count: 54,
    featured: true,
    bestseller: false,
    is_new: true
  },
  {
    id: "bmw-ce-02-iconic",
    slug: "bmw-ce-02-iconic-2026",
    nom: "BMW CE 02 eParkourer",
    nom_en: "BMW CE 02 eParkourer",
    brand: "BMW Motorrad",
    category_label: "eParkourer Urbain Jeune & Dynamique",
    category_label_en: "Urban eParkourer 125cc",
    description: "Découvrez le modèle officiel BMW CE 02 eParkourer de chez BMW Motorrad. Performance certifiée d'origine avec 55 Nm de couple, 95 km d'autonomie réelle et homologation Permis A1 ou B + 7h (Équiv 125cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official BMW CE 02 eParkourer by BMW Motorrad. Certified performance with 55 Nm torque, 95 km real range and License A1 or Car+7h (125cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "55 Nm • 95 km d'autonomie • Permis A1 ou B + 7h (Équiv 125cc)",
    highlight_subtitle_en: "55 Nm • 95 km real range • License A1 or Car+7h (125cc)",
    prix: 8750,
    prix_promo: 8550,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Permis A1 ou B + 7h (Équiv 125cc)",
    license_label_en: "License A1 or Car+7h (125cc)",
    autonomie_km: 95,
    autonomie_city_km: 114,
    autonomie_highway_km: 67,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 132,
    payload_kg: 199,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 11 kW crête  couple 55 Nm",
    batterie: "Pack Li-ion 3.92 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.92,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 11,
      power_hp: 15,
      torque_nm: 55,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-bmw-ce-02-iconic-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-bmw-ce-02-iconic-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-bmw-ce-02-iconic-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 78,
        location: "PACA"
      }
    ],
    rating: 4.8,
    review_count: 19,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "surron-light-bee-x",
    slug: "surron-light-bee-x-2026",
    nom: "Sur-Ron Light Bee X (Édition 2026)",
    nom_en: "Sur-Ron Light Bee X (Édition 2026)",
    brand: "Sur-Ron Official",
    category_label: "E-Cross & Dirt Bike Léger 60V",
    category_label_en: "Lightweight 60V Electric Dirt Bike",
    description: "Découvrez le modèle officiel Sur-Ron Light Bee X (Édition 2026) de chez Sur-Ron Official. Performance certifiée d'origine avec 250 Nm de couple, 100 km d'autonomie réelle et homologation Homologuée L1e (Permis AM dès 14 ans) ou Off-Road. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Sur-Ron Light Bee X (Édition 2026) by Sur-Ron Official. Certified performance with 250 Nm torque, 100 km real range and Road Legal L1e or Off-Road. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "250 Nm • 100 km d'autonomie • Homologuée L1e (Permis AM dès 14 ans) ou Off-Road",
    highlight_subtitle_en: "250 Nm • 100 km real range • Road Legal L1e or Off-Road",
    prix: 4990,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 600,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Homologuée L1e (Permis AM dès 14 ans) ou Off-Road",
    license_label_en: "Road Legal L1e or Off-Road",
    autonomie_km: 100,
    autonomie_city_km: 120,
    autonomie_highway_km: 70,
    vitesse_max: 75,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 47,
    payload_kg: 122,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 6 kW crête  couple 250 Nm",
    batterie: "Pack Li-ion 2.4 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.4,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 3,
      power_peak_kw: 6,
      power_hp: 8.2,
      torque_nm: 250,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-surron-light-bee-x-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-surron-light-bee-x-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-surron-light-bee-x-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 88,
        location: "Île-de-France"
      }
    ],
    rating: 4.7,
    review_count: 32,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "surron-light-bee-supermoto",
    slug: "surron-light-bee-supermoto-2026",
    nom: "Sur-Ron Light Bee X Supermotard 17'",
    nom_en: "Sur-Ron Light Bee X Supermotard 17'",
    brand: "Sur-Ron Official",
    category_label: "Supermoto Urbain Jantes 17' Warp 9",
    category_label_en: "17' Warp 9 Urban Supermoto",
    description: "Découvrez le modèle officiel Sur-Ron Light Bee X Supermotard 17' de chez Sur-Ron Official. Performance certifiée d'origine avec 250 Nm de couple, 95 km d'autonomie réelle et homologation Homologuée L1e (Permis AM). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Sur-Ron Light Bee X Supermotard 17' by Sur-Ron Official. Certified performance with 250 Nm torque, 95 km real range and Road Legal L1e. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "250 Nm • 95 km d'autonomie • Homologuée L1e (Permis AM)",
    highlight_subtitle_en: "250 Nm • 95 km real range • Road Legal L1e",
    prix: 5490,
    prix_promo: 5290,
    eco_bonus_eligible: true,
    max_eco_bonus: 600,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Homologuée L1e (Permis AM)",
    license_label_en: "Road Legal L1e",
    autonomie_km: 95,
    autonomie_city_km: 114,
    autonomie_highway_km: 67,
    vitesse_max: 80,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 48,
    payload_kg: 123,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 6 kW crête  couple 250 Nm",
    batterie: "Pack Li-ion 2.4 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.4,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 3,
      power_peak_kw: 6,
      power_hp: 8.2,
      torque_nm: 250,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-surron-light-bee-supermoto-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-surron-light-bee-supermoto-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-surron-light-bee-supermoto-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 89,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.6,
    review_count: 45,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "surron-ultra-bee",
    slug: "surron-ultra-bee-2026",
    nom: "Sur-Ron Ultra Bee T (125cc Enduro)",
    nom_en: "Sur-Ron Ultra Bee T (125cc Enduro)",
    brand: "Sur-Ron Official",
    category_label: "Enduro Électrique 74V Antipatinage SRTC",
    category_label_en: "74V Mid-Size Enduro with SRTC Traction",
    description: "Découvrez le modèle officiel Sur-Ron Ultra Bee T (125cc Enduro) de chez Sur-Ron Official. Performance certifiée d'origine avec 440 Nm de couple, 140 km d'autonomie réelle et homologation Homologuée 125cc (Permis A1/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Sur-Ron Ultra Bee T (125cc Enduro) by Sur-Ron Official. Certified performance with 440 Nm torque, 140 km real range and 125cc Road Homologated. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "440 Nm • 140 km d'autonomie • Homologuée 125cc (Permis A1/B)",
    highlight_subtitle_en: "440 Nm • 140 km real range • 125cc Road Homologated",
    prix: 7490,
    prix_promo: 7290,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Homologuée 125cc (Permis A1/B)",
    license_label_en: "125cc Road Homologated",
    autonomie_km: 140,
    autonomie_city_km: 168,
    autonomie_highway_km: 98,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 85,
    payload_kg: 157,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 12.5 kW crête  couple 440 Nm",
    batterie: "Pack Li-ion 4.07 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.07,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 12.5,
      power_hp: 17,
      torque_nm: 440,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-surron-ultra-bee-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-surron-ultra-bee-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-surron-ultra-bee-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 115,
        location: "PACA"
      }
    ],
    rating: 4.5,
    review_count: 58,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "surron-ultra-bee-sm",
    slug: "surron-ultra-bee-sm-2026",
    nom: "Sur-Ron Ultra Bee Supermotard Pro",
    nom_en: "Sur-Ron Ultra Bee Supermotard Pro",
    brand: "Sur-Ron Official",
    category_label: "Supermotard Bitume & Circuit 74V",
    category_label_en: "74V Tarmac Supermoto Pro",
    description: "Découvrez le modèle officiel Sur-Ron Ultra Bee Supermotard Pro de chez Sur-Ron Official. Performance certifiée d'origine avec 440 Nm de couple, 135 km d'autonomie réelle et homologation Homologuée 125cc (Permis A1/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Sur-Ron Ultra Bee Supermotard Pro by Sur-Ron Official. Certified performance with 440 Nm torque, 135 km real range and 125cc Road Homologated. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "440 Nm • 135 km d'autonomie • Homologuée 125cc (Permis A1/B)",
    highlight_subtitle_en: "440 Nm • 135 km real range • 125cc Road Homologated",
    prix: 7990,
    prix_promo: 7790,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Homologuée 125cc (Permis A1/B)",
    license_label_en: "125cc Road Homologated",
    autonomie_km: 135,
    autonomie_city_km: 162,
    autonomie_highway_km: 95,
    vitesse_max: 100,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 86,
    payload_kg: 157,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 12.5 kW crête  couple 440 Nm",
    batterie: "Pack Li-ion 4.07 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.07,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 12.5,
      power_hp: 17,
      torque_nm: 440,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-surron-ultra-bee-sm-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-surron-ultra-bee-sm-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-surron-ultra-bee-sm-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 119,
        location: "Île-de-France"
      }
    ],
    rating: 4.4,
    review_count: 23,
    featured: false,
    bestseller: true,
    is_new: true
  },
  {
    id: "surron-storm-bee",
    slug: "surron-storm-bee-2026",
    nom: "Sur-Ron Storm Bee Enduro (104V)",
    nom_en: "Sur-Ron Storm Bee Enduro (104V)",
    brand: "Sur-Ron Official",
    category_label: "Maxi-Enduro 104V Pleine Puissance 520 Nm",
    category_label_en: "104V Full-Size Electric Enduro 520 Nm",
    description: "Découvrez le modèle officiel Sur-Ron Storm Bee Enduro (104V) de chez Sur-Ron Official. Performance certifiée d'origine avec 520 Nm de couple, 120 km d'autonomie réelle et homologation Homologuée Route (Permis A1/A2). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Sur-Ron Storm Bee Enduro (104V) by Sur-Ron Official. Certified performance with 520 Nm torque, 120 km real range and Road Legal (A1/A2). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "520 Nm • 120 km d'autonomie • Homologuée Route (Permis A1/A2)",
    highlight_subtitle_en: "520 Nm • 120 km real range • Road Legal (A1/A2)",
    prix: 11990,
    prix_promo: 11790,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Homologuée Route (Permis A1/A2)",
    license_label_en: "Road Legal (A1/A2)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 110,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 127,
    payload_kg: 194,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 22.5 kW crête  couple 520 Nm",
    batterie: "Pack Li-ion 5.72 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.72,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 11,
      power_peak_kw: 22.5,
      power_hp: 30.6,
      torque_nm: 520,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-surron-storm-bee-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-surron-storm-bee-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-surron-storm-bee-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 113,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.3,
    review_count: 36,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "surron-storm-bee-r",
    slug: "surron-storm-bee-r-2026",
    nom: "Sur-Ron Storm Bee R Supermoto",
    nom_en: "Sur-Ron Storm Bee R Supermoto",
    brand: "Sur-Ron Official",
    category_label: "Supermotard 104V Liquid Cooled",
    category_label_en: "104V Liquid Cooled Supermoto",
    description: "Découvrez le modèle officiel Sur-Ron Storm Bee R Supermoto de chez Sur-Ron Official. Performance certifiée d'origine avec 520 Nm de couple, 120 km d'autonomie réelle et homologation Homologuée Route (Permis A1/A2). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Sur-Ron Storm Bee R Supermoto by Sur-Ron Official. Certified performance with 520 Nm torque, 120 km real range and Road Legal (A1/A2). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "520 Nm • 120 km d'autonomie • Homologuée Route (Permis A1/A2)",
    highlight_subtitle_en: "520 Nm • 120 km real range • Road Legal (A1/A2)",
    prix: 12490,
    prix_promo: 12290,
    eco_bonus_eligible: true,
    max_eco_bonus: 1500,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Homologuée Route (Permis A1/A2)",
    license_label_en: "Road Legal (A1/A2)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 115,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 128,
    payload_kg: 195,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 22.5 kW crête  couple 520 Nm",
    batterie: "Pack Li-ion 5.72 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.72,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 11,
      power_peak_kw: 22.5,
      power_hp: 30.6,
      torque_nm: 520,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-surron-storm-bee-r-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-surron-storm-bee-r-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-surron-storm-bee-r-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 98,
        location: "PACA"
      }
    ],
    rating: 4.2,
    review_count: 49,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "surron-hyper-bee-youth",
    slug: "surron-hyper-bee-youth-2026",
    nom: "Sur-Ron Hyper Bee Youth 48V",
    nom_en: "Sur-Ron Hyper Bee Youth 48V",
    brand: "Sur-Ron Official",
    category_label: "Mini-Cross Électrique Jeune & Ado",
    category_label_en: "Youth Electric Mini-Cross 48V",
    description: "Découvrez le modèle officiel Sur-Ron Hyper Bee Youth 48V de chez Sur-Ron Official. Performance certifiée d'origine avec 120 Nm de couple, 50 km d'autonomie réelle et homologation Terrain Privé (Dès 10 ans). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Sur-Ron Hyper Bee Youth 48V by Sur-Ron Official. Certified performance with 120 Nm torque, 50 km real range and Private Track (Youth). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "120 Nm • 50 km d'autonomie • Terrain Privé (Dès 10 ans)",
    highlight_subtitle_en: "120 Nm • 50 km real range • Private Track (Youth)",
    prix: 2990,
    prix_promo: undefined,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Terrain Privé (Dès 10 ans)",
    license_label_en: "Private Track (Youth)",
    autonomie_km: 50,
    autonomie_city_km: 60,
    autonomie_highway_km: 35,
    vitesse_max: 50,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 34,
    payload_kg: 111,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 3 kW crête  couple 120 Nm",
    batterie: "Pack Li-ion 1.2 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.2,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 2,
      power_peak_kw: 3,
      power_hp: 4.1,
      torque_nm: 120,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-surron-hyper-bee-youth-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-surron-hyper-bee-youth-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-surron-hyper-bee-youth-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 44,
        location: "Île-de-France"
      }
    ],
    rating: 4.1,
    review_count: 14,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "stark-varg-80hp",
    slug: "stark-varg-80hp-2026",
    nom: "Stark VARG 80 ch (Poids Plume 118 kg)",
    nom_en: "Stark VARG 80 ch (Poids Plume 118 kg)",
    brand: "Stark Future",
    category_label: "Moto-Cross Révolutionnaire 80 ch / 938 Nm",
    category_label_en: "Revolutionary 80 hp / 938 Nm Motocross",
    description: "Découvrez le modèle officiel Stark VARG 80 ch (Poids Plume 118 kg) de chez Stark Future. Performance certifiée d'origine avec 938 Nm de couple, 90 km d'autonomie réelle et homologation Compétition Motocross & Terrain Privé. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Stark VARG 80 ch (Poids Plume 118 kg) by Stark Future. Certified performance with 938 Nm torque, 90 km real range and Motocross Competition Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "938 Nm • 90 km d'autonomie • Compétition Motocross & Terrain Privé",
    highlight_subtitle_en: "938 Nm • 90 km real range • Motocross Competition Track Only",
    prix: 13900,
    prix_promo: 13700,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Compétition Motocross & Terrain Privé",
    license_label_en: "Motocross Competition Track Only",
    autonomie_km: 90,
    autonomie_city_km: 108,
    autonomie_highway_km: 63,
    vitesse_max: 130,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 118,
    payload_kg: 186,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 60 kW crête  couple 938 Nm",
    batterie: "Pack Li-ion 6.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 6.5,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 30,
      power_peak_kw: 60,
      power_hp: 80,
      torque_nm: 938,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-stark-varg-80hp-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-stark-varg-80hp-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-stark-varg-80hp-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 85,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.8,
    review_count: 27,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "stark-varg-60hp",
    slug: "stark-varg-60hp-2026",
    nom: "Stark VARG 60 ch Standard",
    nom_en: "Stark VARG 60 ch Standard",
    brand: "Stark Future",
    category_label: "Motocross Électrique 60 ch Équiv 450cc",
    category_label_en: "60 hp Motocross 450cc Equivalent",
    description: "Découvrez le modèle officiel Stark VARG 60 ch Standard de chez Stark Future. Performance certifiée d'origine avec 750 Nm de couple, 95 km d'autonomie réelle et homologation Compétition Motocross & Terrain Privé. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Stark VARG 60 ch Standard by Stark Future. Certified performance with 750 Nm torque, 95 km real range and Motocross Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "750 Nm • 95 km d'autonomie • Compétition Motocross & Terrain Privé",
    highlight_subtitle_en: "750 Nm • 95 km real range • Motocross Track Only",
    prix: 12900,
    prix_promo: 12700,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Compétition Motocross & Terrain Privé",
    license_label_en: "Motocross Track Only",
    autonomie_km: 95,
    autonomie_city_km: 114,
    autonomie_highway_km: 67,
    vitesse_max: 120,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 118,
    payload_kg: 186,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 45 kW crête  couple 750 Nm",
    batterie: "Pack Li-ion 6.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 6.5,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 23,
      power_peak_kw: 45,
      power_hp: 60,
      torque_nm: 750,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-stark-varg-60hp-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-stark-varg-60hp-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-stark-varg-60hp-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 78,
        location: "PACA"
      }
    ],
    rating: 4.7,
    review_count: 40,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "talaria-sting-r-mx4",
    slug: "talaria-sting-r-mx4-2026",
    nom: "Talaria Sting R MX4 60V",
    nom_en: "Talaria Sting R MX4 60V",
    brand: "Talaria",
    category_label: "Dirt Bike 60V 45Ah Boîte Engrenages",
    category_label_en: "60V 45Ah Gearbox Dirt Bike",
    description: "Découvrez le modèle officiel Talaria Sting R MX4 60V de chez Talaria. Performance certifiée d'origine avec 450 Nm de couple, 90 km d'autonomie réelle et homologation Terrain Privé & Off-Road. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Talaria Sting R MX4 60V by Talaria. Certified performance with 450 Nm torque, 90 km real range and Off-Road Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "450 Nm • 90 km d'autonomie • Terrain Privé & Off-Road",
    highlight_subtitle_en: "450 Nm • 90 km real range • Off-Road Track Only",
    prix: 4790,
    prix_promo: undefined,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Terrain Privé & Off-Road",
    license_label_en: "Off-Road Track Only",
    autonomie_km: 90,
    autonomie_city_km: 108,
    autonomie_highway_km: 63,
    vitesse_max: 85,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 66,
    payload_kg: 139,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 8 kW crête  couple 450 Nm",
    batterie: "Pack Li-ion 2.7 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.7,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 4,
      power_peak_kw: 8,
      power_hp: 10.8,
      torque_nm: 450,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-talaria-sting-r-mx4-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-talaria-sting-r-mx4-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-talaria-sting-r-mx4-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 79,
        location: "Île-de-France"
      }
    ],
    rating: 4.6,
    review_count: 53,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "talaria-dragon-88v",
    slug: "talaria-dragon-88v-2026",
    nom: "Talaria Dragon 88V (28 kW / 38 ch)",
    nom_en: "Talaria Dragon 88V (28 kW / 38 ch)",
    brand: "Talaria",
    category_label: "Full-Size Enduro 88V 500 Nm",
    category_label_en: "88V 28 kW Full-Size Enduro",
    description: "Découvrez le modèle officiel Talaria Dragon 88V (28 kW / 38 ch) de chez Talaria. Performance certifiée d'origine avec 500 Nm de couple, 130 km d'autonomie réelle et homologation Compétition & Terrain Privé. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Talaria Dragon 88V (28 kW / 38 ch) by Talaria. Certified performance with 500 Nm torque, 130 km real range and Private Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "500 Nm • 130 km d'autonomie • Compétition & Terrain Privé",
    highlight_subtitle_en: "500 Nm • 130 km real range • Private Track Only",
    prix: 8990,
    prix_promo: 8790,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Compétition & Terrain Privé",
    license_label_en: "Private Track Only",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 110,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 100,
    payload_kg: 170,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 28 kW crête  couple 500 Nm",
    batterie: "Pack Li-ion 4.8 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 4.8,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 14,
      power_peak_kw: 28,
      power_hp: 38,
      torque_nm: 500,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-talaria-dragon-88v-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-talaria-dragon-88v-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-talaria-dragon-88v-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 122,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.5,
    review_count: 18,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "talaria-komodo-72v",
    slug: "talaria-komodo-72v-2026",
    nom: "Talaria Komodo 72V Pro",
    nom_en: "Talaria Komodo 72V Pro",
    brand: "Talaria",
    category_label: "Dirt Bike 72V Torp Ready",
    category_label_en: "72V High Voltage Dirt Bike",
    description: "Découvrez le modèle officiel Talaria Komodo 72V Pro de chez Talaria. Performance certifiée d'origine avec 420 Nm de couple, 110 km d'autonomie réelle et homologation Terrain Privé & Off-Road. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Talaria Komodo 72V Pro by Talaria. Certified performance with 420 Nm torque, 110 km real range and Off-Road Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "420 Nm • 110 km d'autonomie • Terrain Privé & Off-Road",
    highlight_subtitle_en: "420 Nm • 110 km real range • Off-Road Track Only",
    prix: 5990,
    prix_promo: 5790,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Terrain Privé & Off-Road",
    license_label_en: "Off-Road Track Only",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 72,
    payload_kg: 145,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 12 kW crête  couple 420 Nm",
    batterie: "Pack Li-ion 3.2 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.2,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 12,
      power_hp: 16.3,
      torque_nm: 420,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-talaria-komodo-72v-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-talaria-komodo-72v-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-talaria-komodo-72v-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 90,
        location: "PACA"
      }
    ],
    rating: 4.4,
    review_count: 31,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "eride-pro-ss-2026",
    slug: "eride-pro-ss-2026-2026",
    nom: "E-Ride Pro SS 2.0 72V",
    nom_en: "E-Ride Pro SS 2.0 72V",
    brand: "E-Ride Pro USA",
    category_label: "72V High Power Dirt Bike 12 kW",
    category_label_en: "72V High Power Dirt Bike 12 kW",
    description: "Découvrez le modèle officiel E-Ride Pro SS 2.0 72V de chez E-Ride Pro USA. Performance certifiée d'origine avec 450 Nm de couple, 105 km d'autonomie réelle et homologation Terrain Privé & Compétition. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official E-Ride Pro SS 2.0 72V by E-Ride Pro USA. Certified performance with 450 Nm torque, 105 km real range and Private Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "450 Nm • 105 km d'autonomie • Terrain Privé & Compétition",
    highlight_subtitle_en: "450 Nm • 105 km real range • Private Track Only",
    prix: 5890,
    prix_promo: 5690,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Terrain Privé & Compétition",
    license_label_en: "Private Track Only",
    autonomie_km: 105,
    autonomie_city_km: 126,
    autonomie_highway_km: 74,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 64,
    payload_kg: 138,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 12 kW crête  couple 450 Nm",
    batterie: "Pack Li-ion 2.88 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.88,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 12,
      power_hp: 16.3,
      torque_nm: 450,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-eride-pro-ss-2026-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-eride-pro-ss-2026-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-eride-pro-ss-2026-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 92,
        location: "Île-de-France"
      }
    ],
    rating: 4.3,
    review_count: 44,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "eride-pro-sr-race",
    slug: "eride-pro-sr-race-2026",
    nom: "E-Ride Pro SR 72V Race Spec",
    nom_en: "E-Ride Pro SR 72V Race Spec",
    brand: "E-Ride Pro USA",
    category_label: "72V Race Spec FastAce 220mm",
    category_label_en: "72V Race Spec FastAce 220mm",
    description: "Découvrez le modèle officiel E-Ride Pro SR 72V Race Spec de chez E-Ride Pro USA. Performance certifiée d'origine avec 480 Nm de couple, 115 km d'autonomie réelle et homologation Terrain Privé & Circuit. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official E-Ride Pro SR 72V Race Spec by E-Ride Pro USA. Certified performance with 480 Nm torque, 115 km real range and Competition Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "480 Nm • 115 km d'autonomie • Terrain Privé & Circuit",
    highlight_subtitle_en: "480 Nm • 115 km real range • Competition Track Only",
    prix: 6590,
    prix_promo: 6390,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Terrain Privé & Circuit",
    license_label_en: "Competition Track Only",
    autonomie_km: 115,
    autonomie_city_km: 138,
    autonomie_highway_km: 81,
    vitesse_max: 100,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 65,
    payload_kg: 139,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 15 kW crête  couple 480 Nm",
    batterie: "Pack Li-ion 3.24 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.24,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 8,
      power_peak_kw: 15,
      power_hp: 20.4,
      torque_nm: 480,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-eride-pro-sr-race-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-eride-pro-sr-race-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-eride-pro-sr-race-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 108,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.2,
    review_count: 57,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "altis-sigma-72v",
    slug: "altis-sigma-72v-2026",
    nom: "Altis Sigma 72V Beast",
    nom_en: "Altis Sigma 72V Beast",
    brand: "Altis Powersports",
    category_label: "Dirt Bike 72V 14 kW Contrôleur Sinusoïdal",
    category_label_en: "72V 14 kW Sine-Wave Dirt Bike",
    description: "Découvrez le modèle officiel Altis Sigma 72V Beast de chez Altis Powersports. Performance certifiée d'origine avec 440 Nm de couple, 110 km d'autonomie réelle et homologation Terrain Privé & Off-Road. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Altis Sigma 72V Beast by Altis Powersports. Certified performance with 440 Nm torque, 110 km real range and Private Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "440 Nm • 110 km d'autonomie • Terrain Privé & Off-Road",
    highlight_subtitle_en: "440 Nm • 110 km real range • Private Track Only",
    prix: 6290,
    prix_promo: 6090,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Terrain Privé & Off-Road",
    license_label_en: "Private Track Only",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 63,
    payload_kg: 137,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 14 kW crête  couple 440 Nm",
    batterie: "Pack Li-ion 3.24 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.24,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 7,
      power_peak_kw: 14,
      power_hp: 19,
      torque_nm: 440,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-altis-sigma-72v-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-altis-sigma-72v-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-altis-sigma-72v-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 90,
        location: "PACA"
      }
    ],
    rating: 4.1,
    review_count: 22,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "moto-apex-dirt-72v",
    slug: "moto-apex-dirt-72v-2026",
    nom: "Apex E-Cross 72V Ultra Dirt",
    nom_en: "Apex E-Cross 72V Ultra Dirt",
    brand: "Apex Off-Road",
    category_label: "Dirt Bike 72V BAC 500A Controller",
    category_label_en: "72V Competition Dirt Bike",
    description: "Découvrez le modèle officiel Apex E-Cross 72V Ultra Dirt de chez Apex Off-Road. Performance certifiée d'origine avec 440 Nm de couple, 110 km d'autonomie réelle et homologation Terrain Privé & Piste Cross. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Apex E-Cross 72V Ultra Dirt by Apex Off-Road. Certified performance with 440 Nm torque, 110 km real range and Private Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "440 Nm • 110 km d'autonomie • Terrain Privé & Piste Cross",
    highlight_subtitle_en: "440 Nm • 110 km real range • Private Track Only",
    prix: 6490,
    prix_promo: 6290,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Terrain Privé & Piste Cross",
    license_label_en: "Private Track Only",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 95,
    acceleration_0_100_s: 4.5,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 63,
    payload_kg: 137,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 14 kW crête  couple 440 Nm",
    batterie: "Pack Li-ion 3.24 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 3.24,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 7,
      power_peak_kw: 14,
      power_hp: 19,
      torque_nm: 440,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moto-apex-dirt-72v-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moto-apex-dirt-72v-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moto-apex-dirt-72v-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 97,
        location: "Île-de-France"
      }
    ],
    rating: 4.8,
    review_count: 35,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "electric-motion-escape-r",
    slug: "electric-motion-escape-r-2026",
    nom: "Electric Motion Escape R (Trial/Rando)",
    nom_en: "Electric Motion Escape R (Trial/Rando)",
    brand: "Electric Motion France",
    category_label: "Moto Trial & Franchissement Extrême",
    category_label_en: "Extreme Off-Road Trial & Freeride",
    description: "Découvrez le modèle officiel Electric Motion Escape R (Trial/Rando) de chez Electric Motion France. Performance certifiée d'origine avec 600 Nm de couple, 90 km d'autonomie réelle et homologation Homologuée Route A1/B ou Off-Road. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Electric Motion Escape R (Trial/Rando) by Electric Motion France. Certified performance with 600 Nm torque, 90 km real range and Road Legal or Off-Road. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "600 Nm • 90 km d'autonomie • Homologuée Route A1/B ou Off-Road",
    highlight_subtitle_en: "600 Nm • 90 km real range • Road Legal or Off-Road",
    prix: 10990,
    prix_promo: 10790,
    eco_bonus_eligible: true,
    max_eco_bonus: 900,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "A1_B",
    license_label_fr: "Homologuée Route A1/B ou Off-Road",
    license_label_en: "Road Legal or Off-Road",
    autonomie_km: 90,
    autonomie_city_km: 108,
    autonomie_highway_km: 63,
    vitesse_max: 75,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 81,
    payload_kg: 153,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 11 kW crête  couple 600 Nm",
    batterie: "Pack Li-ion 2.7 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.7,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 11,
      power_hp: 15,
      torque_nm: 600,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-electric-motion-escape-r-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-electric-motion-escape-r-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-electric-motion-escape-r-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 85,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.7,
    review_count: 48,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "electric-motion-epure-race",
    slug: "electric-motion-epure-race-2026",
    nom: "Electric Motion Epure Race (Embrayage)",
    nom_en: "Electric Motion Epure Race (Embrayage)",
    brand: "Electric Motion France",
    category_label: "Trial Compétition avec Embrayage Diaphragme",
    category_label_en: "Pure Trial with Hydraulic Diaphragm Clutch",
    description: "Découvrez le modèle officiel Electric Motion Epure Race (Embrayage) de chez Electric Motion France. Performance certifiée d'origine avec 600 Nm de couple, 70 km d'autonomie réelle et homologation Compétition Trial & Terrain Privé. Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Electric Motion Epure Race (Embrayage) by Electric Motion France. Certified performance with 600 Nm torque, 70 km real range and Trial Competition Track Only. Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "600 Nm • 70 km d'autonomie • Compétition Trial & Terrain Privé",
    highlight_subtitle_en: "600 Nm • 70 km real range • Trial Competition Track Only",
    prix: 10490,
    prix_promo: 10290,
    eco_bonus_eligible: false,
    max_eco_bonus: 0,
    image_url: "/images/products/surron-light-bee-x.jpg",
    images: ["/images/products/surron-light-bee-x.jpg"],
    type: "moto",
    license_category: "offroad",
    license_label_fr: "Compétition Trial & Terrain Privé",
    license_label_en: "Trial Competition Track Only",
    autonomie_km: 70,
    autonomie_city_km: 84,
    autonomie_highway_km: 49,
    vitesse_max: 70,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 75,
    payload_kg: 148,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 11 kW crête  couple 600 Nm",
    batterie: "Pack Li-ion 1.88 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.88,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 6,
      power_peak_kw: 11,
      power_hp: 15,
      torque_nm: 600,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-electric-motion-epure-race-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-electric-motion-epure-race-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-electric-motion-epure-race-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 57,
        location: "PACA"
      }
    ],
    rating: 4.6,
    review_count: 61,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "super-soco-cux-ducati",
    slug: "super-soco-cux-ducati-2026",
    nom: "Super Soco CUx Édition Spéciale",
    nom_en: "Super Soco CUx Édition Spéciale",
    brand: "Super Soco",
    category_label: "Scooter Urbain Compact 50cc",
    category_label_en: "Compact 50cc Urban Scooter",
    description: "Découvrez le modèle officiel Super Soco CUx Édition Spéciale de chez Super Soco. Performance certifiée d'origine avec 115 Nm de couple, 75 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Super Soco CUx Édition Spéciale by Super Soco. Certified performance with 115 Nm torque, 75 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "115 Nm • 75 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "115 Nm • 75 km real range • AM License from 14yo (50cc)",
    prix: 2890,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 500,
    image_url: "/images/products/super-soco-cux.jpg",
    images: ["/images/products/super-soco-cux.jpg"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 75,
    autonomie_city_km: 90,
    autonomie_highway_km: 53,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 70,
    payload_kg: 143,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 2.8 kW crête  couple 115 Nm",
    batterie: "Pack Li-ion 1.8 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.8,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 1,
      power_peak_kw: 2.8,
      power_hp: 3.8,
      torque_nm: 115,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-super-soco-cux-ducati-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-super-soco-cux-ducati-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-super-soco-cux-ducati-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 66,
        location: "Île-de-France"
      }
    ],
    rating: 4.5,
    review_count: 26,
    featured: true,
    bestseller: true,
    is_new: true
  },
  {
    id: "niu-nqi-sport-50",
    slug: "niu-nqi-sport-50-2026",
    nom: "Niu NQi Sport 45 km/h",
    nom_en: "Niu NQi Sport 45 km/h",
    brand: "Niu Technologies",
    category_label: "Scooter Urbain Connecté GPS & Alarme",
    category_label_en: "Connected Urban Scooter with App",
    description: "Découvrez le modèle officiel Niu NQi Sport 45 km/h de chez Niu Technologies. Performance certifiée d'origine avec 110 Nm de couple, 70 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Niu NQi Sport 45 km/h by Niu Technologies. Certified performance with 110 Nm torque, 70 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "110 Nm • 70 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "110 Nm • 70 km real range • AM License from 14yo (50cc)",
    prix: 2599,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 450,
    image_url: "/images/products/niu-nqi-sport.png",
    images: ["/images/products/niu-nqi-sport.png"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 70,
    autonomie_city_km: 84,
    autonomie_highway_km: 49,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 89,
    payload_kg: 160,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 1.8 kW crête  couple 110 Nm",
    batterie: "Pack Li-ion 1.56 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.56,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 1,
      power_peak_kw: 1.8,
      power_hp: 2.4,
      torque_nm: 110,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-niu-nqi-sport-50-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-niu-nqi-sport-50-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-niu-nqi-sport-50-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 66,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.4,
    review_count: 39,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "silence-s02-urban",
    slug: "silence-s02-urban-2026",
    nom: "Silence S02 Urban 50cc",
    nom_en: "Silence S02 Urban 50cc",
    brand: "Silence",
    category_label: "Scooter Robuste Batterie Amovible",
    category_label_en: "Heavy-Duty Trolley Battery Scooter",
    description: "Découvrez le modèle officiel Silence S02 Urban 50cc de chez Silence. Performance certifiée d'origine avec 105 Nm de couple, 120 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Silence S02 Urban 50cc by Silence. Certified performance with 105 Nm torque, 120 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "105 Nm • 120 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "105 Nm • 120 km real range • AM License from 14yo (50cc)",
    prix: 4490,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 600,
    image_url: "/images/products/silence-s02-urban.jpg",
    images: ["/images/products/silence-s02-urban.jpg"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 130,
    payload_kg: 197,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 3 kW crête  couple 105 Nm",
    batterie: "Pack Li-ion 5.6 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 5.6,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: 40,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 2,
      power_peak_kw: 3,
      power_hp: 4.1,
      torque_nm: 105,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-silence-s02-urban-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-silence-s02-urban-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-silence-s02-urban-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 98,
        location: "PACA"
      }
    ],
    rating: 4.3,
    review_count: 52,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "yamaha-neos-electric",
    slug: "yamaha-neos-electric-2026",
    nom: "Yamaha NEO's Dual Battery",
    nom_en: "Yamaha NEO's Dual Battery",
    brand: "Yamaha Motor",
    category_label: "Scooter Urbain Qualité Japonaise",
    category_label_en: "Japanese Quality Commuter Scooter",
    description: "Découvrez le modèle officiel Yamaha NEO's Dual Battery de chez Yamaha Motor. Performance certifiée d'origine avec 136 Nm de couple, 68 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Yamaha NEO's Dual Battery by Yamaha Motor. Certified performance with 136 Nm torque, 68 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "136 Nm • 68 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "136 Nm • 68 km real range • AM License from 14yo (50cc)",
    prix: 3499,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 500,
    image_url: "/images/products/yamaha-neos.jpg",
    images: ["/images/products/yamaha-neos.jpg"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 68,
    autonomie_city_km: 82,
    autonomie_highway_km: 48,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 98,
    payload_kg: 168,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 2.5 kW crête  couple 136 Nm",
    batterie: "Pack Li-ion 1.94 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.94,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 1,
      power_peak_kw: 2.5,
      power_hp: 3.4,
      torque_nm: 136,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-yamaha-neos-electric-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-yamaha-neos-electric-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-yamaha-neos-electric-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 60,
        location: "Île-de-France"
      }
    ],
    rating: 4.2,
    review_count: 17,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "piaggio-1-active-plus",
    slug: "piaggio-1-active-plus-2026",
    nom: "Piaggio 1 Active Plus",
    nom_en: "Piaggio 1 Active Plus",
    brand: "Piaggio",
    category_label: "Scooter Italien Batterie Amovible",
    category_label_en: "Italian Style Swappable Battery Scooter",
    description: "Découvrez le modèle officiel Piaggio 1 Active Plus de chez Piaggio. Performance certifiée d'origine avec 90 Nm de couple, 85 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Piaggio 1 Active Plus by Piaggio. Certified performance with 90 Nm torque, 85 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "90 Nm • 85 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "90 Nm • 85 km real range • AM License from 14yo (50cc)",
    prix: 3299,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 500,
    image_url: "/images/products/piaggio-1-active.jpg",
    images: ["/images/products/piaggio-1-active.jpg"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 85,
    autonomie_city_km: 102,
    autonomie_highway_km: 59,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 79,
    payload_kg: 151,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 2 kW crête  couple 90 Nm",
    batterie: "Pack Li-ion 2.3 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.3,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 1,
      power_peak_kw: 2,
      power_hp: 2.7,
      torque_nm: 90,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-piaggio-1-active-plus-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-piaggio-1-active-plus-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-piaggio-1-active-plus-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 80,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.1,
    review_count: 30,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "pink-mobility-style-50",
    slug: "pink-mobility-style-50-2026",
    nom: "Pink Style Plus 50cc",
    nom_en: "Pink Style Plus 50cc",
    brand: "Pink Mobility",
    category_label: "Scooter Rétro Double Batterie",
    category_label_en: "Dual Battery Vintage Style Scooter",
    description: "Découvrez le modèle officiel Pink Style Plus 50cc de chez Pink Mobility. Performance certifiée d'origine avec 120 Nm de couple, 90 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Pink Style Plus 50cc by Pink Mobility. Certified performance with 120 Nm torque, 90 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "120 Nm • 90 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "120 Nm • 90 km real range • AM License from 14yo (50cc)",
    prix: 3690,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 550,
    image_url: "/images/products/pink-style-plus.webp",
    images: ["/images/products/pink-style-plus.webp"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 90,
    autonomie_city_km: 108,
    autonomie_highway_km: 63,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 88,
    payload_kg: 159,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 3 kW crête  couple 120 Nm",
    batterie: "Pack Li-ion 2.88 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.88,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 2,
      power_peak_kw: 3,
      power_hp: 4.1,
      torque_nm: 120,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-pink-mobility-style-50-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-pink-mobility-style-50-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-pink-mobility-style-50-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 74,
        location: "PACA"
      }
    ],
    rating: 4.8,
    review_count: 43,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "rider-5000w-sport",
    slug: "rider-5000w-sport-2026",
    nom: "Rider 5000W Urban GT",
    nom_en: "Rider 5000W Urban GT",
    brand: "Rider",
    category_label: "Scooter Urbain Haute Accélération",
    category_label_en: "High Acceleration Urban Scooter",
    description: "Découvrez le modèle officiel Rider 5000W Urban GT de chez Rider. Performance certifiée d'origine avec 140 Nm de couple, 85 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Rider 5000W Urban GT by Rider. Certified performance with 140 Nm torque, 85 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "140 Nm • 85 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "140 Nm • 85 km real range • AM License from 14yo (50cc)",
    prix: 3890,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 600,
    image_url: "/images/products/rider-5000w.jpg",
    images: ["/images/products/rider-5000w.jpg"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 85,
    autonomie_city_km: 102,
    autonomie_highway_km: 59,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 94,
    payload_kg: 165,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 4.5 kW crête  couple 140 Nm",
    batterie: "Pack Li-ion 2.9 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 2.9,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 2,
      power_peak_kw: 4.5,
      power_hp: 6.1,
      torque_nm: 140,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-rider-5000w-sport-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-rider-5000w-sport-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-rider-5000w-sport-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 75,
        location: "Île-de-France"
      }
    ],
    rating: 4.7,
    review_count: 56,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "yadea-c1s-pro-50",
    slug: "yadea-c1s-pro-50-2026",
    nom: "Yadea C1S Pro KISKA",
    nom_en: "Yadea C1S Pro KISKA",
    brand: "Yadea",
    category_label: "Scooter Design KISKA Récompensé RedDot",
    category_label_en: "RedDot Awarded KISKA Design Scooter",
    description: "Découvrez le modèle officiel Yadea C1S Pro KISKA de chez Yadea. Performance certifiée d'origine avec 110 Nm de couple, 75 km d'autonomie réelle et homologation Permis AM dès 14 ans (Équiv 50cc). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Yadea C1S Pro KISKA by Yadea. Certified performance with 110 Nm torque, 75 km real range and AM License from 14yo (50cc). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "110 Nm • 75 km d'autonomie • Permis AM dès 14 ans (Équiv 50cc)",
    highlight_subtitle_en: "110 Nm • 75 km real range • AM License from 14yo (50cc)",
    prix: 2990,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 450,
    image_url: "/images/products/yadea-c1s-pro.png",
    images: ["/images/products/yadea-c1s-pro.png"],
    type: "moto",
    license_category: "AM",
    license_label_fr: "Permis AM dès 14 ans (Équiv 50cc)",
    license_label_en: "AM License from 14yo (50cc)",
    autonomie_km: 75,
    autonomie_city_km: 90,
    autonomie_highway_km: 53,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 85,
    payload_kg: 157,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 2.2 kW crête  couple 110 Nm",
    batterie: "Pack Li-ion 1.92 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.92,
      voltage: 72,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 1,
      power_peak_kw: 2.2,
      power_hp: 3,
      torque_nm: 110,
      motor_type: "Moteur synchrone à aimants permanents haute puissance",
      transmission: "Chaîne renforcée O-Ring ou Courroie Carbone",
      regen_braking: true,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-yadea-c1s-pro-50-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-yadea-c1s-pro-50-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-yadea-c1s-pro-50-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 71,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.6,
    review_count: 21,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "velo-vtt-enduro-carbon",
    slug: "velo-vtt-enduro-carbon-2026",
    nom: "Apex Enduro Carbon VTTAE",
    nom_en: "Apex Enduro Carbon VTTAE",
    brand: "eVolt Racing Bicycles",
    category_label: "VTTAE Tout-Suspendu Carbone 170mm",
    category_label_en: "Full-Suspension Carbon E-Enduro 170mm",
    description: "Découvrez le modèle officiel Apex Enduro Carbon VTTAE de chez eVolt Racing Bicycles. Performance certifiée d'origine avec 90 Nm de couple, 120 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Apex Enduro Carbon VTTAE by eVolt Racing Bicycles. Certified performance with 90 Nm torque, 120 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "90 Nm • 120 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "90 Nm • 120 km real range • No License (25 km/h EPAC)",
    prix: 7990,
    prix_promo: 7790,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/apex-enduro-carbon.jpg",
    images: ["/images/products/apex-enduro-carbon.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 21.5,
    payload_kg: 99,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 90 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 90,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-velo-vtt-enduro-carbon-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-velo-vtt-enduro-carbon-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-velo-vtt-enduro-carbon-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 98,
        location: "PACA"
      }
    ],
    rating: 4.5,
    review_count: 34,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "specialized-levo-pro-carbon",
    slug: "specialized-levo-pro-carbon-2026",
    nom: "Specialized Turbo Levo Pro Carbon",
    nom_en: "Specialized Turbo Levo Pro Carbon",
    brand: "Specialized",
    category_label: "VTTAE Référence Moteur 2.2 90Nm",
    category_label_en: "Benchmark E-MTB Carbon 90Nm Motor",
    description: "Découvrez le modèle officiel Specialized Turbo Levo Pro Carbon de chez Specialized. Performance certifiée d'origine avec 90 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Specialized Turbo Levo Pro Carbon by Specialized. Certified performance with 90 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "90 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "90 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 11500,
    prix_promo: 11300,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 22,
    payload_kg: 100,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.56 kW crête  couple 90 Nm",
    batterie: "Pack Li-ion 0.7 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.7,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.56,
      power_hp: 0.76,
      torque_nm: 90,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-specialized-levo-pro-carbon-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-specialized-levo-pro-carbon-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-specialized-levo-pro-carbon-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 114,
        location: "Île-de-France"
      }
    ],
    rating: 4.4,
    review_count: 47,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "specialized-kenevo-sl-expert",
    slug: "specialized-kenevo-sl-expert-2026",
    nom: "Specialized Turbo Kenevo SL Expert",
    nom_en: "Specialized Turbo Kenevo SL Expert",
    brand: "Specialized",
    category_label: "Super-Enduro Poids Plume 19kg 170mm",
    category_label_en: "Lightweight Super-Enduro 19kg 170mm",
    description: "Découvrez le modèle officiel Specialized Turbo Kenevo SL Expert de chez Specialized. Performance certifiée d'origine avec 50 Nm de couple, 90 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Specialized Turbo Kenevo SL Expert by Specialized. Certified performance with 50 Nm torque, 90 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "50 Nm • 90 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "50 Nm • 90 km real range • No License (25 km/h EPAC)",
    prix: 9500,
    prix_promo: 9300,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 90,
    autonomie_city_km: 108,
    autonomie_highway_km: 63,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 18.9,
    payload_kg: 97,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.35 kW crête  couple 50 Nm",
    batterie: "Pack Li-ion 0.32 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.32,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.35,
      power_hp: 0.48,
      torque_nm: 50,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-specialized-kenevo-sl-expert-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-specialized-kenevo-sl-expert-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-specialized-kenevo-sl-expert-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 85,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.3,
    review_count: 60,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "santa-cruz-heckler-cc",
    slug: "santa-cruz-heckler-cc-2026",
    nom: "Santa Cruz Heckler 9 CC X01 AXS",
    nom_en: "Santa Cruz Heckler 9 CC X01 AXS",
    brand: "Santa Cruz",
    category_label: "VTTAE Carbone CC Shimano EP801",
    category_label_en: "CC Carbon E-MTB Shimano EP801",
    description: "Découvrez le modèle officiel Santa Cruz Heckler 9 CC X01 AXS de chez Santa Cruz. Performance certifiée d'origine avec 85 Nm de couple, 125 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Santa Cruz Heckler 9 CC X01 AXS by Santa Cruz. Certified performance with 85 Nm torque, 125 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 125 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 125 km real range • No License (25 km/h EPAC)",
    prix: 10999,
    prix_promo: 10799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/santa-cruz-heckler.png",
    images: ["/images/products/santa-cruz-heckler.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 125,
    autonomie_city_km: 150,
    autonomie_highway_km: 88,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 21.2,
    payload_kg: 99,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.72 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.72,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-santa-cruz-heckler-cc-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-santa-cruz-heckler-cc-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-santa-cruz-heckler-cc-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 103,
        location: "PACA"
      }
    ],
    rating: 4.2,
    review_count: 25,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "trek-rail-99-xx1-axs",
    slug: "trek-rail-99-xx1-axs-2026",
    nom: "Trek Rail 9.9 XX1 AXS Carbon",
    nom_en: "Trek Rail 9.9 XX1 AXS Carbon",
    brand: "Trek Bicycles",
    category_label: "VTTAE Ultra Haut de Gamme Bosch CX Smart",
    category_label_en: "Flagship Carbon E-MTB Bosch CX Smart",
    description: "Découvrez le modèle officiel Trek Rail 9.9 XX1 AXS Carbon de chez Trek Bicycles. Performance certifiée d'origine avec 85 Nm de couple, 140 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Trek Rail 9.9 XX1 AXS Carbon by Trek Bicycles. Certified performance with 85 Nm torque, 140 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 140 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 140 km real range • No License (25 km/h EPAC)",
    prix: 12499,
    prix_promo: 12299,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/trek-rail-99.jpg",
    images: ["/images/products/trek-rail-99.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 140,
    autonomie_city_km: 168,
    autonomie_highway_km: 98,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 22.5,
    payload_kg: 100,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-trek-rail-99-xx1-axs-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-trek-rail-99-xx1-axs-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-trek-rail-99-xx1-axs-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 123,
        location: "Île-de-France"
      }
    ],
    rating: 4.1,
    review_count: 38,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "canyon-spectral-on-cfr",
    slug: "canyon-spectral-on-cfr-2026",
    nom: "Canyon Spectral:ON CFR Ltd",
    nom_en: "Canyon Spectral:ON CFR Ltd",
    brand: "Canyon Bicycles",
    category_label: "VTTAE Carbone Batterie 900Wh Record",
    category_label_en: "Carbon E-MTB Record 900Wh Battery",
    description: "Découvrez le modèle officiel Canyon Spectral:ON CFR Ltd de chez Canyon Bicycles. Performance certifiée d'origine avec 85 Nm de couple, 155 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Canyon Spectral:ON CFR Ltd by Canyon Bicycles. Certified performance with 85 Nm torque, 155 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 155 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 155 km real range • No License (25 km/h EPAC)",
    prix: 8999,
    prix_promo: 8799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 155,
    autonomie_city_km: 186,
    autonomie_highway_km: 109,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 21.8,
    payload_kg: 100,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.9 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.9,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-canyon-spectral-on-cfr-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-canyon-spectral-on-cfr-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-canyon-spectral-on-cfr-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 146,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.8,
    review_count: 51,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "mondraker-crafty-carbon-xr",
    slug: "mondraker-crafty-carbon-xr-2026",
    nom: "Mondraker Crafty Carbon XR",
    nom_en: "Mondraker Crafty Carbon XR",
    brand: "Mondraker",
    category_label: "Géométrie Forward Geometry Enduro 160mm",
    category_label_en: "Forward Geometry Enduro E-MTB 160mm",
    description: "Découvrez le modèle officiel Mondraker Crafty Carbon XR de chez Mondraker. Performance certifiée d'origine avec 85 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Mondraker Crafty Carbon XR by Mondraker. Certified performance with 85 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 10499,
    prix_promo: 10299,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/mondraker-crafty-xr.jpg",
    images: ["/images/products/mondraker-crafty-xr.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 22.3,
    payload_kg: 100,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-mondraker-crafty-carbon-xr-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-mondraker-crafty-carbon-xr-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-mondraker-crafty-carbon-xr-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.7,
    review_count: 16,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "cube-stereo-hybrid-160-action",
    slug: "cube-stereo-hybrid-160-action-2026",
    nom: "Cube Stereo Hybrid 160 ActionTeam",
    nom_en: "Cube Stereo Hybrid 160 ActionTeam",
    brand: "Cube Bicycles",
    category_label: "VTTAE Fox Factory Kashima 160mm",
    category_label_en: "Fox Factory Kashima 160mm E-MTB",
    description: "Découvrez le modèle officiel Cube Stereo Hybrid 160 ActionTeam de chez Cube Bicycles. Performance certifiée d'origine avec 85 Nm de couple, 135 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Cube Stereo Hybrid 160 ActionTeam by Cube Bicycles. Certified performance with 85 Nm torque, 135 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 135 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 135 km real range • No License (25 km/h EPAC)",
    prix: 6499,
    prix_promo: 6299,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/cube-stereo-160.jpg",
    images: ["/images/products/cube-stereo-160.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 135,
    autonomie_city_km: 162,
    autonomie_highway_km: 95,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 23.9,
    payload_kg: 102,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-cube-stereo-hybrid-160-action-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-cube-stereo-hybrid-160-action-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-cube-stereo-hybrid-160-action-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 119,
        location: "Île-de-France"
      }
    ],
    rating: 4.6,
    review_count: 29,
    featured: false,
    bestseller: true,
    is_new: true
  },
  {
    id: "orbea-wild-m-ltd",
    slug: "orbea-wild-m-ltd-2026",
    nom: "Orbea Wild M-LTD Carbon",
    nom_en: "Orbea Wild M-LTD Carbon",
    brand: "Orbea Bicycles",
    category_label: "VTTAE Bosch Performance CX Race Édition",
    category_label_en: "Bosch CX Race Edition Carbon E-MTB",
    description: "Découvrez le modèle officiel Orbea Wild M-LTD Carbon de chez Orbea Bicycles. Performance certifiée d'origine avec 85 Nm de couple, 135 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Orbea Wild M-LTD Carbon by Orbea Bicycles. Certified performance with 85 Nm torque, 135 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 135 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 135 km real range • No License (25 km/h EPAC)",
    prix: 11999,
    prix_promo: 11799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/trek-rail-99.jpg",
    images: ["/images/products/trek-rail-99.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 135,
    autonomie_city_km: 162,
    autonomie_highway_km: 95,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 20.9,
    payload_kg: 99,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-orbea-wild-m-ltd-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-orbea-wild-m-ltd-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-orbea-wild-m-ltd-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 127,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.5,
    review_count: 42,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "pivot-shuttle-lt-team",
    slug: "pivot-shuttle-lt-team-2026",
    nom: "Pivot Shuttle LT Team XTR",
    nom_en: "Pivot Shuttle LT Team XTR",
    brand: "Pivot Cycles",
    category_label: "Super-Enduro Carbone 170mm Shimano EP8",
    category_label_en: "High-End Carbon Super-Enduro 170mm",
    description: "Découvrez le modèle officiel Pivot Shuttle LT Team XTR de chez Pivot Cycles. Performance certifiée d'origine avec 85 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Pivot Shuttle LT Team XTR by Pivot Cycles. Certified performance with 85 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 12199,
    prix_promo: 11999,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 22.5,
    payload_kg: 100,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.756 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.756,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-pivot-shuttle-lt-team-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-pivot-shuttle-lt-team-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-pivot-shuttle-lt-team-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.4,
    review_count: 55,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "yeti-160e-t1-turq",
    slug: "yeti-160e-t1-turq-2026",
    nom: "Yeti 160E T1 TURQ Series",
    nom_en: "Yeti 160E T1 TURQ Series",
    brand: "Yeti Cycles",
    category_label: "Cinématique Sixfinity Conçue pour l'E-Bike",
    category_label_en: "Sixfinity Suspension Dedicated E-MTB",
    description: "Découvrez le modèle officiel Yeti 160E T1 TURQ Series de chez Yeti Cycles. Performance certifiée d'origine avec 85 Nm de couple, 120 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Yeti 160E T1 TURQ Series by Yeti Cycles. Certified performance with 85 Nm torque, 120 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 120 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 120 km real range • No License (25 km/h EPAC)",
    prix: 12790,
    prix_promo: 12590,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/santa-cruz-heckler.png",
    images: ["/images/products/santa-cruz-heckler.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 22.1,
    payload_kg: 100,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.63 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.63,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-yeti-160e-t1-turq-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-yeti-160e-t1-turq-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-yeti-160e-t1-turq-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 106,
        location: "Île-de-France"
      }
    ],
    rating: 4.3,
    review_count: 20,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "scott-lumen-eride-900",
    slug: "scott-lumen-eride-900-2026",
    nom: "Scott Lumen eRIDE 900 SL (15.5 kg)",
    nom_en: "Scott Lumen eRIDE 900 SL (15.5 kg)",
    brand: "Scott Sports",
    category_label: "VTTAE le Plus Léger du Monde TQ HPR50",
    category_label_en: "World's Lightest Full-Suspension 15.5kg",
    description: "Découvrez le modèle officiel Scott Lumen eRIDE 900 SL (15.5 kg) de chez Scott Sports. Performance certifiée d'origine avec 50 Nm de couple, 85 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Scott Lumen eRIDE 900 SL (15.5 kg) by Scott Sports. Certified performance with 50 Nm torque, 85 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "50 Nm • 85 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "50 Nm • 85 km real range • No License (25 km/h EPAC)",
    prix: 15999,
    prix_promo: 15799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 85,
    autonomie_city_km: 102,
    autonomie_highway_km: 59,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 15.5,
    payload_kg: 94,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.3 kW crête  couple 50 Nm",
    batterie: "Pack Li-ion 0.36 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.36,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.3,
      power_hp: 0.41,
      torque_nm: 50,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-scott-lumen-eride-900-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-scott-lumen-eride-900-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-scott-lumen-eride-900-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 80,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.2,
    review_count: 33,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "forestal-siryon-diode",
    slug: "forestal-siryon-diode-2026",
    nom: "Forestal Siryon Diode Carbon",
    nom_en: "Forestal Siryon Diode Carbon",
    brand: "Forestal Andorra",
    category_label: "VTTAE Enduro Écran Tactile Intégré",
    category_label_en: "Integrated Touchscreen Carbon E-MTB",
    description: "Découvrez le modèle officiel Forestal Siryon Diode Carbon de chez Forestal Andorra. Performance certifiée d'origine avec 60 Nm de couple, 80 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Forestal Siryon Diode Carbon by Forestal Andorra. Certified performance with 60 Nm torque, 80 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "60 Nm • 80 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "60 Nm • 80 km real range • No License (25 km/h EPAC)",
    prix: 12990,
    prix_promo: 12790,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 80,
    autonomie_city_km: 96,
    autonomie_highway_km: 56,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 17.8,
    payload_kg: 96,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.45 kW crête  couple 60 Nm",
    batterie: "Pack Li-ion 0.36 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.36,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.45,
      power_hp: 0.61,
      torque_nm: 60,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-forestal-siryon-diode-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-forestal-siryon-diode-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-forestal-siryon-diode-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 66,
        location: "PACA"
      }
    ],
    rating: 4.1,
    review_count: 46,
    featured: true,
    bestseller: false,
    is_new: true
  },
  {
    id: "moustache-samedi-29-game",
    slug: "moustache-samedi-29-game-2026",
    nom: "Moustache Samedi 29 Game 11",
    nom_en: "Moustache Samedi 29 Game 11",
    brand: "Moustache Bikes",
    category_label: "VTTAE Enduro Français Haut de Gamme",
    category_label_en: "French Premium Enduro E-MTB",
    description: "Découvrez le modèle officiel Moustache Samedi 29 Game 11 de chez Moustache Bikes. Performance certifiée d'origine avec 85 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Moustache Samedi 29 Game 11 by Moustache Bikes. Certified performance with 85 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 8999,
    prix_promo: 8799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/cube-stereo-160.jpg",
    images: ["/images/products/cube-stereo-160.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 23.4,
    payload_kg: 101,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moustache-samedi-29-game-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moustache-samedi-29-game-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moustache-samedi-29-game-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 114,
        location: "Île-de-France"
      }
    ],
    rating: 4.8,
    review_count: 59,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "velo-gravel-carbon",
    slug: "velo-gravel-carbon-2026",
    nom: "Apex Gravel Carbon All-Road",
    nom_en: "Apex Gravel Carbon All-Road",
    brand: "eVolt Endurance",
    category_label: "Gravel Électrique Carbone Bikepacking",
    category_label_en: "All-Road Electric Carbon Gravel Bike",
    description: "Découvrez le modèle officiel Apex Gravel Carbon All-Road de chez eVolt Endurance. Performance certifiée d'origine avec 60 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Apex Gravel Carbon All-Road by eVolt Endurance. Certified performance with 60 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "60 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "60 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 5490,
    prix_promo: 5290,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/apex-enduro-carbon.jpg",
    images: ["/images/products/apex-enduro-carbon.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 14.9,
    payload_kg: 93,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.45 kW crête  couple 60 Nm",
    batterie: "Pack Li-ion 0.43 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.43,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.45,
      power_hp: 0.6,
      torque_nm: 60,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-velo-gravel-carbon-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-velo-gravel-carbon-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-velo-gravel-carbon-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 122,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.7,
    review_count: 24,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "specialized-creo-2-carbon",
    slug: "specialized-creo-2-carbon-2026",
    nom: "Specialized Turbo Creo 2 Carbon",
    nom_en: "Specialized Turbo Creo 2 Carbon",
    brand: "Specialized",
    category_label: "Vélo Gravel Carbone Moteur SL 1.2",
    category_label_en: "SL 1.2 Carbon E-Gravel Bike",
    description: "Découvrez le modèle officiel Specialized Turbo Creo 2 Carbon de chez Specialized. Performance certifiée d'origine avec 50 Nm de couple, 140 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Specialized Turbo Creo 2 Carbon by Specialized. Certified performance with 50 Nm torque, 140 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "50 Nm • 140 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "50 Nm • 140 km real range • No License (25 km/h EPAC)",
    prix: 8500,
    prix_promo: 8300,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 140,
    autonomie_city_km: 168,
    autonomie_highway_km: 98,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 13.9,
    payload_kg: 93,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.32 kW crête  couple 50 Nm",
    batterie: "Pack Li-ion 0.32 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.32,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.32,
      power_hp: 0.43,
      torque_nm: 50,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-specialized-creo-2-carbon-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-specialized-creo-2-carbon-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-specialized-creo-2-carbon-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 115,
        location: "PACA"
      }
    ],
    rating: 4.6,
    review_count: 37,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "trek-domane-plus-slr9",
    slug: "trek-domane-plus-slr9-2026",
    nom: "Trek Domane+ SLR 9 eTap",
    nom_en: "Trek Domane+ SLR 9 eTap",
    brand: "Trek Bicycles",
    category_label: "Vélo de Route Carbone OCLV 800 TQ",
    category_label_en: "OCLV 800 Carbon Electric Road Bike",
    description: "Découvrez le modèle officiel Trek Domane+ SLR 9 eTap de chez Trek Bicycles. Performance certifiée d'origine avec 50 Nm de couple, 120 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Trek Domane+ SLR 9 eTap by Trek Bicycles. Certified performance with 50 Nm torque, 120 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "50 Nm • 120 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "50 Nm • 120 km real range • No License (25 km/h EPAC)",
    prix: 14499,
    prix_promo: 14299,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/trek-rail-99.jpg",
    images: ["/images/products/trek-rail-99.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 11.8,
    payload_kg: 91,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.3 kW crête  couple 50 Nm",
    batterie: "Pack Li-ion 0.36 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.36,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.3,
      power_hp: 0.41,
      torque_nm: 50,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-trek-domane-plus-slr9-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-trek-domane-plus-slr9-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-trek-domane-plus-slr9-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 106,
        location: "Île-de-France"
      }
    ],
    rating: 4.5,
    review_count: 50,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "cannondale-topstone-neo-crb",
    slug: "cannondale-topstone-neo-crb-2026",
    nom: "Cannondale Topstone Neo Carbon 2",
    nom_en: "Cannondale Topstone Neo Carbon 2",
    brand: "Cannondale",
    category_label: "Gravel Carbone Suspension Kingpin Bosch",
    category_label_en: "Kingpin Suspension Bosch Carbon Gravel",
    description: "Découvrez le modèle officiel Cannondale Topstone Neo Carbon 2 de chez Cannondale. Performance certifiée d'origine avec 85 Nm de couple, 125 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Cannondale Topstone Neo Carbon 2 by Cannondale. Certified performance with 85 Nm torque, 125 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 125 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 125 km real range • No License (25 km/h EPAC)",
    prix: 6299,
    prix_promo: 6099,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 125,
    autonomie_city_km: 150,
    autonomie_highway_km: 88,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 16.2,
    payload_kg: 95,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.5 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.5,
      power_hp: 0.68,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-cannondale-topstone-neo-crb-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-cannondale-topstone-neo-crb-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-cannondale-topstone-neo-crb-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 118,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.4,
    review_count: 15,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "canyon-endurace-on-8",
    slug: "canyon-endurace-on-8-2026",
    nom: "Canyon Endurace:ON 8",
    nom_en: "Canyon Endurace:ON 8",
    brand: "Canyon Bicycles",
    category_label: "Vélo Route Endurance Moteur Fazua Ride 60",
    category_label_en: "Fazua Ride 60 Carbon Road E-Bike",
    description: "Découvrez le modèle officiel Canyon Endurace:ON 8 de chez Canyon Bicycles. Performance certifiée d'origine avec 60 Nm de couple, 120 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Canyon Endurace:ON 8 by Canyon Bicycles. Certified performance with 60 Nm torque, 120 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "60 Nm • 120 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "60 Nm • 120 km real range • No License (25 km/h EPAC)",
    prix: 3999,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 15.2,
    payload_kg: 94,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.45 kW crête  couple 60 Nm",
    batterie: "Pack Li-ion 0.43 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.43,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.45,
      power_hp: 0.6,
      torque_nm: 60,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-canyon-endurace-on-8-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-canyon-endurace-on-8-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-canyon-endurace-on-8-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 98,
        location: "PACA"
      }
    ],
    rating: 4.3,
    review_count: 28,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "scott-addict-eride-10",
    slug: "scott-addict-eride-10-2026",
    nom: "Scott Addict eRIDE 10",
    nom_en: "Scott Addict eRIDE 10",
    brand: "Scott Sports",
    category_label: "Vélo de Route Carbone Mahle X20 (10.7 kg)",
    category_label_en: "Mahle X20 Featherweight Carbon Road",
    description: "Découvrez le modèle officiel Scott Addict eRIDE 10 de chez Scott Sports. Performance certifiée d'origine avec 55 Nm de couple, 110 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Scott Addict eRIDE 10 by Scott Sports. Certified performance with 55 Nm torque, 110 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "55 Nm • 110 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "55 Nm • 110 km real range • No License (25 km/h EPAC)",
    prix: 7999,
    prix_promo: 7799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 10.7,
    payload_kg: 90,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.25 kW crête  couple 55 Nm",
    batterie: "Pack Li-ion 0.25 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.25,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.25,
      power_hp: 0.34,
      torque_nm: 55,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-scott-addict-eride-10-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-scott-addict-eride-10-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-scott-addict-eride-10-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 97,
        location: "Île-de-France"
      }
    ],
    rating: 4.2,
    review_count: 41,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "orbea-gain-m20i-carbon",
    slug: "orbea-gain-m20i-carbon-2026",
    nom: "Orbea Gain M20i Carbon",
    nom_en: "Orbea Gain M20i Carbon",
    brand: "Orbea Bicycles",
    category_label: "Vélo Route Électrique Moteur Moyeu X20",
    category_label_en: "X20 Hub Motor Carbon Electric Road",
    description: "Découvrez le modèle officiel Orbea Gain M20i Carbon de chez Orbea Bicycles. Performance certifiée d'origine avec 55 Nm de couple, 115 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Orbea Gain M20i Carbon by Orbea Bicycles. Certified performance with 55 Nm torque, 115 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "55 Nm • 115 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "55 Nm • 115 km real range • No License (25 km/h EPAC)",
    prix: 6599,
    prix_promo: 6399,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/apex-enduro-carbon.jpg",
    images: ["/images/products/apex-enduro-carbon.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 115,
    autonomie_city_km: 138,
    autonomie_highway_km: 81,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 11.5,
    payload_kg: 90,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.25 kW crête  couple 55 Nm",
    batterie: "Pack Li-ion 0.35 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.35,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.25,
      power_hp: 0.34,
      torque_nm: 55,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-orbea-gain-m20i-carbon-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-orbea-gain-m20i-carbon-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-orbea-gain-m20i-carbon-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 108,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.1,
    review_count: 54,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "bmc-roadmachine-01-amp",
    slug: "bmc-roadmachine-01-amp-2026",
    nom: "BMC Roadmachine 01 AMP X ONE",
    nom_en: "BMC Roadmachine 01 AMP X ONE",
    brand: "BMC Switzerland",
    category_label: "Vélo All-Road Carbone Suisse TQ HPR50",
    category_label_en: "Swiss TQ-HPR50 Carbon All-Road",
    description: "Découvrez le modèle officiel BMC Roadmachine 01 AMP X ONE de chez BMC Switzerland. Performance certifiée d'origine avec 50 Nm de couple, 110 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official BMC Roadmachine 01 AMP X ONE by BMC Switzerland. Certified performance with 50 Nm torque, 110 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "50 Nm • 110 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "50 Nm • 110 km real range • No License (25 km/h EPAC)",
    prix: 8999,
    prix_promo: 8799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 12.9,
    payload_kg: 92,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.3 kW crête  couple 50 Nm",
    batterie: "Pack Li-ion 0.36 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.36,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.3,
      power_hp: 0.41,
      torque_nm: 50,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-bmc-roadmachine-01-amp-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-bmc-roadmachine-01-amp-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-bmc-roadmachine-01-amp-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 90,
        location: "PACA"
      }
    ],
    rating: 4.8,
    review_count: 19,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "pinarello-nytro-e-gravel",
    slug: "pinarello-nytro-e-gravel-2026",
    nom: "Pinarello Nytro E-Gravel T900",
    nom_en: "Pinarello Nytro E-Gravel T900",
    brand: "Pinarello Italy",
    category_label: "Gravel Italien d'Exception T900 Fazua",
    category_label_en: "Italian T900 Carbon E-Gravel Fazua",
    description: "Découvrez le modèle officiel Pinarello Nytro E-Gravel T900 de chez Pinarello Italy. Performance certifiée d'origine avec 60 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Pinarello Nytro E-Gravel T900 by Pinarello Italy. Certified performance with 60 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "60 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "60 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 9200,
    prix_promo: 9000,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 13.5,
    payload_kg: 92,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.45 kW crête  couple 60 Nm",
    batterie: "Pack Li-ion 0.43 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.43,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.45,
      power_hp: 0.6,
      torque_nm: 60,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-pinarello-nytro-e-gravel-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-pinarello-nytro-e-gravel-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-pinarello-nytro-e-gravel-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 114,
        location: "Île-de-France"
      }
    ],
    rating: 4.7,
    review_count: 32,
    featured: false,
    bestseller: true,
    is_new: true
  },
  {
    id: "bianchi-e-arcadex-gravel",
    slug: "bianchi-e-arcadex-gravel-2026",
    nom: "Bianchi E-Arcadex Tourer Carbon",
    nom_en: "Bianchi E-Arcadex Tourer Carbon",
    brand: "Bianchi",
    category_label: "Gravel Carbone Celeste Shimano EP8",
    category_label_en: "Celeste Carbon E-Gravel Shimano EP8",
    description: "Découvrez le modèle officiel Bianchi E-Arcadex Tourer Carbon de chez Bianchi. Performance certifiée d'origine avec 85 Nm de couple, 120 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Bianchi E-Arcadex Tourer Carbon by Bianchi. Certified performance with 85 Nm torque, 120 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 120 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 120 km real range • No License (25 km/h EPAC)",
    prix: 6249,
    prix_promo: 6049,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/cube-stereo-160.jpg",
    images: ["/images/products/cube-stereo-160.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 15.5,
    payload_kg: 94,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.5 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.5,
      power_hp: 0.68,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-bianchi-e-arcadex-gravel-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-bianchi-e-arcadex-gravel-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-bianchi-e-arcadex-gravel-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 113,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.6,
    review_count: 45,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "wilier-triestina-hyrid",
    slug: "wilier-triestina-hyrid-2026",
    nom: "Wilier Triestina Jena Hybrid",
    nom_en: "Wilier Triestina Jena Hybrid",
    brand: "Wilier Triestina",
    category_label: "Gravel Carbone Monocoque Ebikemotion",
    category_label_en: "Monocoque Carbon E-Gravel",
    description: "Découvrez le modèle officiel Wilier Triestina Jena Hybrid de chez Wilier Triestina. Performance certifiée d'origine avec 40 Nm de couple, 100 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Wilier Triestina Jena Hybrid by Wilier Triestina. Certified performance with 40 Nm torque, 100 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "40 Nm • 100 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "40 Nm • 100 km real range • No License (25 km/h EPAC)",
    prix: 5200,
    prix_promo: 5000,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 100,
    autonomie_city_km: 120,
    autonomie_highway_km: 70,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 12.8,
    payload_kg: 92,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.25 kW crête  couple 40 Nm",
    batterie: "Pack Li-ion 0.25 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.25,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.25,
      power_hp: 0.34,
      torque_nm: 40,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-wilier-triestina-hyrid-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-wilier-triestina-hyrid-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-wilier-triestina-hyrid-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 82,
        location: "PACA"
      }
    ],
    rating: 4.5,
    review_count: 58,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "cervelo-rouvida-grx",
    slug: "cervelo-rouvida-grx-2026",
    nom: "Cervélo Rouvida GRX Di2",
    nom_en: "Cervélo Rouvida GRX Di2",
    brand: "Cervélo",
    category_label: "Vélo Double Personnalité Route / Gravel Fazua",
    category_label_en: "Road & Gravel Dual Setup Fazua 60",
    description: "Découvrez le modèle officiel Cervélo Rouvida GRX Di2 de chez Cervélo. Performance certifiée d'origine avec 60 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Cervélo Rouvida GRX Di2 by Cervélo. Certified performance with 60 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "60 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "60 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 8299,
    prix_promo: 8099,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 13.8,
    payload_kg: 92,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.45 kW crête  couple 60 Nm",
    batterie: "Pack Li-ion 0.43 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.43,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.45,
      power_hp: 0.6,
      torque_nm: 60,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-cervelo-rouvida-grx-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-cervelo-rouvida-grx-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-cervelo-rouvida-grx-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 114,
        location: "Île-de-France"
      }
    ],
    rating: 4.4,
    review_count: 23,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "velo-cargo-longtail",
    slug: "velo-cargo-longtail-2026",
    nom: "Apex Family Cargo Longtail Pro",
    nom_en: "Apex Family Cargo Longtail Pro",
    brand: "eVolt Utility",
    category_label: "Vélo Cargo Longtail 3 Enfants & Pro",
    category_label_en: "Family & Commercial Longtail Cargo Bike",
    description: "Découvrez le modèle officiel Apex Family Cargo Longtail Pro de chez eVolt Utility. Performance certifiée d'origine avec 85 Nm de couple, 110 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Apex Family Cargo Longtail Pro by eVolt Utility. Certified performance with 85 Nm torque, 110 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 110 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 110 km real range • No License (25 km/h EPAC)",
    prix: 4890,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/trek-rail-99.jpg",
    images: ["/images/products/trek-rail-99.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 32,
    payload_kg: 109,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.72 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.72,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-velo-cargo-longtail-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-velo-cargo-longtail-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-velo-cargo-longtail-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 103,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.3,
    review_count: 36,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "riese-muller-load4-75",
    slug: "riese-muller-load4-75-2026",
    nom: "Riese & Müller Load4 75 Vario",
    nom_en: "Riese & Müller Load4 75 Vario",
    brand: "Riese & Müller",
    category_label: "Biporteur Tout-Suspendu CargoLine Smart",
    category_label_en: "Full-Suspension Front-Loader CargoLine",
    description: "Découvrez le modèle officiel Riese & Müller Load4 75 Vario de chez Riese & Müller. Performance certifiée d'origine avec 85 Nm de couple, 120 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Riese & Müller Load4 75 Vario by Riese & Müller. Certified performance with 85 Nm torque, 120 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 120 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 120 km real range • No License (25 km/h EPAC)",
    prix: 8499,
    prix_promo: 8299,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/cube-stereo-160.jpg",
    images: ["/images/products/cube-stereo-160.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 38,
    payload_kg: 114,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.725 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.725,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-riese-muller-load4-75-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-riese-muller-load4-75-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-riese-muller-load4-75-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 98,
        location: "PACA"
      }
    ],
    rating: 4.2,
    review_count: 49,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "tern-gsd-s00-dual-batt",
    slug: "tern-gsd-s00-dual-batt-2026",
    nom: "Tern GSD S00 Dual Battery 1000Wh",
    nom_en: "Tern GSD S00 Dual Battery 1000Wh",
    brand: "Tern Bicycles",
    category_label: "Longtail Compact Pliable Capacité 200kg",
    category_label_en: "Compact Folding Longtail 200kg Capacity",
    description: "Découvrez le modèle officiel Tern GSD S00 Dual Battery 1000Wh de chez Tern Bicycles. Performance certifiée d'origine avec 85 Nm de couple, 140 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Tern GSD S00 Dual Battery 1000Wh by Tern Bicycles. Certified performance with 85 Nm torque, 140 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 140 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 140 km real range • No License (25 km/h EPAC)",
    prix: 6999,
    prix_promo: 6799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/mondraker-crafty-xr.jpg",
    images: ["/images/products/mondraker-crafty-xr.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 140,
    autonomie_city_km: 168,
    autonomie_highway_km: 98,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 34,
    payload_kg: 111,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 1 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-tern-gsd-s00-dual-batt-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-tern-gsd-s00-dual-batt-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-tern-gsd-s00-dual-batt-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 123,
        location: "Île-de-France"
      }
    ],
    rating: 4.1,
    review_count: 14,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "yuba-spicy-curry-v4",
    slug: "yuba-spicy-curry-v4-2026",
    nom: "Yuba Spicy Curry V4 Bosch Cargo",
    nom_en: "Yuba Spicy Curry V4 Bosch Cargo",
    brand: "Yuba Bicycles",
    category_label: "Longtail Centre de Gravité Abaissé",
    category_label_en: "Low Center of Gravity Family Longtail",
    description: "Découvrez le modèle officiel Yuba Spicy Curry V4 Bosch Cargo de chez Yuba Bicycles. Performance certifiée d'origine avec 85 Nm de couple, 110 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Yuba Spicy Curry V4 Bosch Cargo by Yuba Bicycles. Certified performance with 85 Nm torque, 110 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 110 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 110 km real range • No License (25 km/h EPAC)",
    prix: 5199,
    prix_promo: 4999,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/santa-cruz-heckler.png",
    images: ["/images/products/santa-cruz-heckler.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 31,
    payload_kg: 108,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-yuba-spicy-curry-v4-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-yuba-spicy-curry-v4-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-yuba-spicy-curry-v4-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 103,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.8,
    review_count: 27,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "moustache-lundi-20-cargo",
    slug: "moustache-lundi-20-cargo-2026",
    nom: "Moustache Lundi 20.5 Dual",
    nom_en: "Moustache Lundi 20.5 Dual",
    brand: "Moustache Bikes",
    category_label: "Cargo Longtail Français Roues 20' Q-Lock",
    category_label_en: "French 20' Longtail Cargo Bike",
    description: "Découvrez le modèle officiel Moustache Lundi 20.5 Dual de chez Moustache Bikes. Performance certifiée d'origine avec 85 Nm de couple, 140 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Moustache Lundi 20.5 Dual by Moustache Bikes. Certified performance with 85 Nm torque, 140 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 140 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 140 km real range • No License (25 km/h EPAC)",
    prix: 6599,
    prix_promo: 6399,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/apex-enduro-carbon.jpg",
    images: ["/images/products/apex-enduro-carbon.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 140,
    autonomie_city_km: 168,
    autonomie_highway_km: 98,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 33,
    payload_kg: 110,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 1 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moustache-lundi-20-cargo-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moustache-lundi-20-cargo-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moustache-lundi-20-cargo-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 115,
        location: "PACA"
      }
    ],
    rating: 4.7,
    review_count: 40,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "urban-arrow-family-cargoline",
    slug: "urban-arrow-family-cargoline-2026",
    nom: "Urban Arrow Family CargoLine",
    nom_en: "Urban Arrow Family CargoLine",
    brand: "Urban Arrow",
    category_label: "Biporteur Bac EPP Sécurisé pour Enfants",
    category_label_en: "Family Front-Loader EPP Safety Box",
    description: "Découvrez le modèle officiel Urban Arrow Family CargoLine de chez Urban Arrow. Performance certifiée d'origine avec 85 Nm de couple, 100 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Urban Arrow Family CargoLine by Urban Arrow. Certified performance with 85 Nm torque, 100 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 100 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 100 km real range • No License (25 km/h EPAC)",
    prix: 6290,
    prix_promo: 6090,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 100,
    autonomie_city_km: 120,
    autonomie_highway_km: 70,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 47,
    payload_kg: 122,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.545 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.545,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-urban-arrow-family-cargoline-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-urban-arrow-family-cargoline-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-urban-arrow-family-cargoline-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 88,
        location: "Île-de-France"
      }
    ],
    rating: 4.6,
    review_count: 53,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "cube-cargo-hybrid-750",
    slug: "cube-cargo-hybrid-750-2026",
    nom: "Cube Cargo Hybrid 750",
    nom_en: "Cube Cargo Hybrid 750",
    brand: "Cube Bicycles",
    category_label: "Biporteur Bac Polypropylène 750Wh",
    category_label_en: "Front-Loader 750Wh Family Cargo",
    description: "Découvrez le modèle officiel Cube Cargo Hybrid 750 de chez Cube Bicycles. Performance certifiée d'origine avec 85 Nm de couple, 115 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Cube Cargo Hybrid 750 by Cube Bicycles. Certified performance with 85 Nm torque, 115 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 115 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 115 km real range • No License (25 km/h EPAC)",
    prix: 5499,
    prix_promo: 5299,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/cube-stereo-160.jpg",
    images: ["/images/products/cube-stereo-160.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 115,
    autonomie_city_km: 138,
    autonomie_highway_km: 81,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 46,
    payload_kg: 121,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-cube-cargo-hybrid-750-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-cube-cargo-hybrid-750-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-cube-cargo-hybrid-750-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 108,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.5,
    review_count: 18,
    featured: true,
    bestseller: false,
    is_new: true
  },
  {
    id: "carqon-cruise-family",
    slug: "carqon-cruise-family-2026",
    nom: "Carqon Cruise E-Cargo",
    nom_en: "Carqon Cruise E-Cargo",
    brand: "Carqon",
    category_label: "Biporteur Haut de Gamme Coque EPP & Rails",
    category_label_en: "Premium Dutch Front-Loader Cargo",
    description: "Découvrez le modèle officiel Carqon Cruise E-Cargo de chez Carqon. Performance certifiée d'origine avec 85 Nm de couple, 110 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Carqon Cruise E-Cargo by Carqon. Certified performance with 85 Nm torque, 110 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 110 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 110 km real range • No License (25 km/h EPAC)",
    prix: 5999,
    prix_promo: 5799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/mondraker-crafty-xr.jpg",
    images: ["/images/products/mondraker-crafty-xr.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 45,
    payload_kg: 121,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-carqon-cruise-family-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-carqon-cruise-family-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-carqon-cruise-family-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 90,
        location: "PACA"
      }
    ],
    rating: 4.4,
    review_count: 31,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "riese-muller-multicharger",
    slug: "riese-muller-multicharger-2026",
    nom: "Riese & Müller Multicharger2 GT",
    nom_en: "Riese & Müller Multicharger2 GT",
    brand: "Riese & Müller",
    category_label: "Midtail Polyvalent Vélotaf & Enfants",
    category_label_en: "Midtail Versatile Commuter & Kid Carrier",
    description: "Découvrez le modèle officiel Riese & Müller Multicharger2 GT de chez Riese & Müller. Performance certifiée d'origine avec 85 Nm de couple, 125 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Riese & Müller Multicharger2 GT by Riese & Müller. Certified performance with 85 Nm torque, 125 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 125 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 125 km real range • No License (25 km/h EPAC)",
    prix: 5699,
    prix_promo: 5499,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/santa-cruz-heckler.png",
    images: ["/images/products/santa-cruz-heckler.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 125,
    autonomie_city_km: 150,
    autonomie_highway_km: 88,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 29,
    payload_kg: 106,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-riese-muller-multicharger-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-riese-muller-multicharger-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-riese-muller-multicharger-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 110,
        location: "Île-de-France"
      }
    ],
    rating: 4.3,
    review_count: 44,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "babboe-city-mountain",
    slug: "babboe-city-mountain-2026",
    nom: "Babboe City Mountain Yamaha",
    nom_en: "Babboe City Mountain Yamaha",
    brand: "Babboe",
    category_label: "Biporteur Familial Moteur Central Yamaha",
    category_label_en: "Yamaha Mid-Drive Family Cargo Bike",
    description: "Découvrez le modèle officiel Babboe City Mountain Yamaha de chez Babboe. Performance certifiée d'origine avec 70 Nm de couple, 85 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Babboe City Mountain Yamaha by Babboe. Certified performance with 70 Nm torque, 85 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "70 Nm • 85 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "70 Nm • 85 km real range • No License (25 km/h EPAC)",
    prix: 4499,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/trek-rail-99.jpg",
    images: ["/images/products/trek-rail-99.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 85,
    autonomie_city_km: 102,
    autonomie_highway_km: 59,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 48,
    payload_kg: 123,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.5 kW crête  couple 70 Nm",
    batterie: "Pack Li-ion 0.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.5,
      power_hp: 0.68,
      torque_nm: 70,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-babboe-city-mountain-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-babboe-city-mountain-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-babboe-city-mountain-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 80,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.2,
    review_count: 57,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "stromer-st7-pinion-1440wh",
    slug: "stromer-st7-pinion-1440wh-2026",
    nom: "Stromer ST7 PINION SmartShift (1440Wh)",
    nom_en: "Stromer ST7 PINION SmartShift (1440Wh)",
    brand: "Stromer Switzerland",
    category_label: "Speed-Bike Suprême Boîte Pinion Électronique",
    category_label_en: "Flagship Speed-Pedelec 1440Wh Pinion",
    description: "Découvrez le modèle officiel Stromer ST7 PINION SmartShift (1440Wh) de chez Stromer Switzerland. Performance certifiée d'origine avec 52 Nm de couple, 200 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Stromer ST7 PINION SmartShift (1440Wh) by Stromer Switzerland. Certified performance with 52 Nm torque, 200 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "52 Nm • 200 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "52 Nm • 200 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 13490,
    prix_promo: 13290,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 200,
    autonomie_city_km: 240,
    autonomie_highway_km: 140,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 31,
    payload_kg: 108,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.94 kW crête  couple 52 Nm",
    batterie: "Pack Li-ion 1.44 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.44,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.94,
      power_hp: 1.28,
      torque_nm: 52,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-stromer-st7-pinion-1440wh-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-stromer-st7-pinion-1440wh-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-stromer-st7-pinion-1440wh-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 164,
        location: "PACA"
      }
    ],
    rating: 4.1,
    review_count: 22,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "stromer-st5-pinion-45",
    slug: "stromer-st5-pinion-45-2026",
    nom: "Stromer ST5 PINION ABS 45 km/h",
    nom_en: "Stromer ST5 PINION ABS 45 km/h",
    brand: "Stromer Switzerland",
    category_label: "Speed-Bike avec ABS Intégré dans le Cadre",
    category_label_en: "Integrated ABS Speed-Pedelec 45 km/h",
    description: "Découvrez le modèle officiel Stromer ST5 PINION ABS 45 km/h de chez Stromer Switzerland. Performance certifiée d'origine avec 48 Nm de couple, 180 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Stromer ST5 PINION ABS 45 km/h by Stromer Switzerland. Certified performance with 48 Nm torque, 180 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "48 Nm • 180 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "48 Nm • 180 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 11990,
    prix_promo: 11790,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 180,
    autonomie_city_km: 216,
    autonomie_highway_km: 126,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 29.5,
    payload_kg: 107,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.85 kW crête  couple 48 Nm",
    batterie: "Pack Li-ion 0.983 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.983,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.85,
      power_hp: 1.15,
      torque_nm: 48,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-stromer-st5-pinion-45-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-stromer-st5-pinion-45-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-stromer-st5-pinion-45-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 158,
        location: "Île-de-France"
      }
    ],
    rating: 4.8,
    review_count: 35,
    featured: false,
    bestseller: true,
    is_new: true
  },
  {
    id: "stromer-st3-pinion-speed",
    slug: "stromer-st3-pinion-speed-2026",
    nom: "Stromer ST3 Special Edition 45 km/h",
    nom_en: "Stromer ST3 Special Edition 45 km/h",
    brand: "Stromer Switzerland",
    category_label: "Speed-Pedelec Moteur Roue Arrière Silencieux",
    category_label_en: "Silent Rear Hub Motor Speed-Pedelec",
    description: "Découvrez le modèle officiel Stromer ST3 Special Edition 45 km/h de chez Stromer Switzerland. Performance certifiée d'origine avec 44 Nm de couple, 150 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Stromer ST3 Special Edition 45 km/h by Stromer Switzerland. Certified performance with 44 Nm torque, 150 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "44 Nm • 150 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "44 Nm • 150 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 8990,
    prix_promo: 8790,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/apex-enduro-carbon.jpg",
    images: ["/images/products/apex-enduro-carbon.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 150,
    autonomie_city_km: 180,
    autonomie_highway_km: 105,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 28,
    payload_kg: 105,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.82 kW crête  couple 44 Nm",
    batterie: "Pack Li-ion 0.814 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.814,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.82,
      power_hp: 1.11,
      torque_nm: 44,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-stromer-st3-pinion-speed-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-stromer-st3-pinion-speed-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-stromer-st3-pinion-speed-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 141,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.7,
    review_count: 48,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "riese-muller-supercharger-hs",
    slug: "riese-muller-supercharger-hs-2026",
    nom: "Riese & Müller Supercharger4 GT HS",
    nom_en: "Riese & Müller Supercharger4 GT HS",
    brand: "Riese & Müller",
    category_label: "Speed-Bike Double Batterie 1500Wh Bosch",
    category_label_en: "Dual Battery 1500Wh Bosch Speed-Pedelec",
    description: "Découvrez le modèle officiel Riese & Müller Supercharger4 GT HS de chez Riese & Müller. Performance certifiée d'origine avec 85 Nm de couple, 170 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Riese & Müller Supercharger4 GT HS by Riese & Müller. Certified performance with 85 Nm torque, 170 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 170 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "85 Nm • 170 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 8399,
    prix_promo: 8199,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 170,
    autonomie_city_km: 204,
    autonomie_highway_km: 119,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 31.5,
    payload_kg: 108,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 1.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-riese-muller-supercharger-hs-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-riese-muller-supercharger-hs-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-riese-muller-supercharger-hs-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 139,
        location: "PACA"
      }
    ],
    rating: 4.6,
    review_count: 61,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "riese-muller-delite4-hs",
    slug: "riese-muller-delite4-hs-2026",
    nom: "Riese & Müller Delite4 GT HS Tout-Suspendu",
    nom_en: "Riese & Müller Delite4 GT HS Tout-Suspendu",
    brand: "Riese & Müller",
    category_label: "Speed-Bike Tout-Suspendu Contrôle Total",
    category_label_en: "Full-Suspension Speed-Pedelec Fox",
    description: "Découvrez le modèle officiel Riese & Müller Delite4 GT HS Tout-Suspendu de chez Riese & Müller. Performance certifiée d'origine avec 85 Nm de couple, 130 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Riese & Müller Delite4 GT HS Tout-Suspendu by Riese & Müller. Certified performance with 85 Nm torque, 130 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 130 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "85 Nm • 130 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 8999,
    prix_promo: 8799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 30,
    payload_kg: 107,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-riese-muller-delite4-hs-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-riese-muller-delite4-hs-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-riese-muller-delite4-hs-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 114,
        location: "Île-de-France"
      }
    ],
    rating: 4.5,
    review_count: 26,
    featured: true,
    bestseller: true,
    is_new: false
  },
  {
    id: "gazelle-ultimate-c380-speed",
    slug: "gazelle-ultimate-c380-speed-2026",
    nom: "Gazelle Ultimate C380 HMB Speed",
    nom_en: "Gazelle Ultimate C380 HMB Speed",
    brand: "Gazelle Holland",
    category_label: "Speed-Bike Hollandais Courroie & Enviolo",
    category_label_en: "Dutch Speed-Pedelec Gates Belt & Enviolo",
    description: "Découvrez le modèle officiel Gazelle Ultimate C380 HMB Speed de chez Gazelle Holland. Performance certifiée d'origine avec 85 Nm de couple, 110 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Gazelle Ultimate C380 HMB Speed by Gazelle Holland. Certified performance with 85 Nm torque, 110 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 110 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "85 Nm • 110 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 4799,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/trek-rail-99.jpg",
    images: ["/images/products/trek-rail-99.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 26.5,
    payload_kg: 104,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.625 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.625,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-gazelle-ultimate-c380-speed-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-gazelle-ultimate-c380-speed-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-gazelle-ultimate-c380-speed-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 103,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.4,
    review_count: 39,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "specialized-vado-50-igh-speed",
    slug: "specialized-vado-50-igh-speed-2026",
    nom: "Specialized Turbo Vado 5.0 IGH 45km/h",
    nom_en: "Specialized Turbo Vado 5.0 IGH 45km/h",
    brand: "Specialized",
    category_label: "Speed-Bike Automatique Enviolo Automatiq",
    category_label_en: "Automatic Shifting 45km/h Commuter",
    description: "Découvrez le modèle officiel Specialized Turbo Vado 5.0 IGH 45km/h de chez Specialized. Performance certifiée d'origine avec 90 Nm de couple, 130 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Specialized Turbo Vado 5.0 IGH 45km/h by Specialized. Certified performance with 90 Nm torque, 130 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "90 Nm • 130 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "90 Nm • 130 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 6200,
    prix_promo: 6000,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 25,
    payload_kg: 103,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 90 Nm",
    batterie: "Pack Li-ion 0.71 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.71,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 90,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-specialized-vado-50-igh-speed-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-specialized-vado-50-igh-speed-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-specialized-vado-50-igh-speed-1",
        author: "Julien T. (Marseille)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.3,
    review_count: 52,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "flyer-upstreet5-723-hs",
    slug: "flyer-upstreet5-723-hs-2026",
    nom: "Flyer Upstreet5 7.23 HS Swiss",
    nom_en: "Flyer Upstreet5 7.23 HS Swiss",
    brand: "Flyer Bicycles",
    category_label: "Speed-Bike Suisse Moteur Panasonic GX Ultimate",
    category_label_en: "Swiss Panasonic GX Ultimate Speed-Pedelec",
    description: "Découvrez le modèle officiel Flyer Upstreet5 7.23 HS Swiss de chez Flyer Bicycles. Performance certifiée d'origine avec 95 Nm de couple, 120 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Flyer Upstreet5 7.23 HS Swiss by Flyer Bicycles. Certified performance with 95 Nm torque, 120 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "95 Nm • 120 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "95 Nm • 120 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 5499,
    prix_promo: 5299,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/apex-enduro-carbon.jpg",
    images: ["/images/products/apex-enduro-carbon.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 27,
    payload_kg: 104,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 95 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 95,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-flyer-upstreet5-723-hs-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-flyer-upstreet5-723-hs-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-flyer-upstreet5-723-hs-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 106,
        location: "Île-de-France"
      }
    ],
    rating: 4.2,
    review_count: 17,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "kalkhoff-image-7b-excite-45",
    slug: "kalkhoff-image-7b-excite-45-2026",
    nom: "Kalkhoff Image 7.B Excite 45",
    nom_en: "Kalkhoff Image 7.B Excite 45",
    brand: "Kalkhoff",
    category_label: "Speed-Bike Allemand Bosch Performance Speed",
    category_label_en: "German Bosch Performance Speed-Pedelec",
    description: "Découvrez le modèle officiel Kalkhoff Image 7.B Excite 45 de chez Kalkhoff. Performance certifiée d'origine avec 85 Nm de couple, 115 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Kalkhoff Image 7.B Excite 45 by Kalkhoff. Certified performance with 85 Nm torque, 115 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 115 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "85 Nm • 115 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 5299,
    prix_promo: 5099,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/cube-stereo-160.jpg",
    images: ["/images/products/cube-stereo-160.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 115,
    autonomie_city_km: 138,
    autonomie_highway_km: 81,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 27.5,
    payload_kg: 105,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.75 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.75,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-kalkhoff-image-7b-excite-45-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-kalkhoff-image-7b-excite-45-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-kalkhoff-image-7b-excite-45-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 108,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.1,
    review_count: 30,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "moustache-friday-27-fs-speed",
    slug: "moustache-friday-27-fs-speed-2026",
    nom: "Moustache Friday 27 FS Speed Dual",
    nom_en: "Moustache Friday 27 FS Speed Dual",
    brand: "Moustache Bikes",
    category_label: "Speed-Bike Tout-Suspendu 1125Wh Français",
    category_label_en: "Full-Suspension French Speed-Bike 1125Wh",
    description: "Découvrez le modèle officiel Moustache Friday 27 FS Speed Dual de chez Moustache Bikes. Performance certifiée d'origine avec 85 Nm de couple, 150 km d'autonomie réelle et homologation Speed-Bike 45 km/h (Permis AM/B). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Moustache Friday 27 FS Speed Dual by Moustache Bikes. Certified performance with 85 Nm torque, 150 km real range and Speed-Pedelec 45 km/h (AM/Car License). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 150 km d'autonomie • Speed-Bike 45 km/h (Permis AM/B)",
    highlight_subtitle_en: "85 Nm • 150 km real range • Speed-Pedelec 45 km/h (AM/Car License)",
    prix: 7999,
    prix_promo: 7799,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/mondraker-crafty-xr.jpg",
    images: ["/images/products/mondraker-crafty-xr.jpg"],
    type: "velo",
    license_category: "speed_pedelec",
    license_label_fr: "Speed-Bike 45 km/h (Permis AM/B)",
    license_label_en: "Speed-Pedelec 45 km/h (AM/Car License)",
    autonomie_km: 150,
    autonomie_city_km: 180,
    autonomie_highway_km: 105,
    vitesse_max: 45,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 29.5,
    payload_kg: 107,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 1.125 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 1.125,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moustache-friday-27-fs-speed-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moustache-friday-27-fs-speed-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moustache-friday-27-fs-speed-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 123,
        location: "PACA"
      }
    ],
    rating: 4.8,
    review_count: 43,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "cowboy-cruiser-st-connected",
    slug: "cowboy-cruiser-st-connected-2026",
    nom: "Cowboy Cruiser ST Connected",
    nom_en: "Cowboy Cruiser ST Connected",
    brand: "Cowboy",
    category_label: "Vélo Urbain Connecté Épuré Sans Vitesse",
    category_label_en: "Connected Clean Single-Speed City E-Bike",
    description: "Découvrez le modèle officiel Cowboy Cruiser ST Connected de chez Cowboy. Performance certifiée d'origine avec 45 Nm de couple, 80 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Cowboy Cruiser ST Connected by Cowboy. Certified performance with 45 Nm torque, 80 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "45 Nm • 80 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "45 Nm • 80 km real range • No License (25 km/h EPAC)",
    prix: 2999,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/santa-cruz-heckler.png",
    images: ["/images/products/santa-cruz-heckler.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 80,
    autonomie_city_km: 96,
    autonomie_highway_km: 56,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 19.3,
    payload_kg: 97,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.35 kW crête  couple 45 Nm",
    batterie: "Pack Li-ion 0.36 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.36,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.35,
      power_hp: 0.48,
      torque_nm: 45,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-cowboy-cruiser-st-connected-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-cowboy-cruiser-st-connected-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-cowboy-cruiser-st-connected-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 70,
        location: "Île-de-France"
      }
    ],
    rating: 4.7,
    review_count: 56,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "vanmoof-s5-halo-ring",
    slug: "vanmoof-s5-halo-ring-2026",
    nom: "VanMoof S5 Halo Ring",
    nom_en: "VanMoof S5 Halo Ring",
    brand: "VanMoof",
    category_label: "Vélo Urbain Design Alarme Antivol Intégrée",
    category_label_en: "Iconic Design E-Bike Integrated Anti-Theft",
    description: "Découvrez le modèle officiel VanMoof S5 Halo Ring de chez VanMoof. Performance certifiée d'origine avec 68 Nm de couple, 100 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official VanMoof S5 Halo Ring by VanMoof. Certified performance with 68 Nm torque, 100 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "68 Nm • 100 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "68 Nm • 100 km real range • No License (25 km/h EPAC)",
    prix: 3298,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 100,
    autonomie_city_km: 120,
    autonomie_highway_km: 70,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 23,
    payload_kg: 101,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.4 kW crête  couple 68 Nm",
    batterie: "Pack Li-ion 0.487 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.487,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.4,
      power_hp: 0.54,
      torque_nm: 68,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-vanmoof-s5-halo-ring-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-vanmoof-s5-halo-ring-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-vanmoof-s5-halo-ring-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 94,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.6,
    review_count: 21,
    featured: false,
    bestseller: false,
    is_new: true
  },
  {
    id: "specialized-como-50-igh",
    slug: "specialized-como-50-igh-2026",
    nom: "Specialized Turbo Como 5.0 IGH",
    nom_en: "Specialized Turbo Como 5.0 IGH",
    brand: "Specialized",
    category_label: "Vélo Confort Enjambement Bas Radar Garmin",
    category_label_en: "Low-Entry Comfort E-Bike Garmin Radar",
    description: "Découvrez le modèle officiel Specialized Turbo Como 5.0 IGH de chez Specialized. Performance certifiée d'origine avec 90 Nm de couple, 130 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Specialized Turbo Como 5.0 IGH by Specialized. Certified performance with 90 Nm torque, 130 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "90 Nm • 130 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "90 Nm • 130 km real range • No License (25 km/h EPAC)",
    prix: 5400,
    prix_promo: 5200,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-levo-pro.jpg",
    images: ["/images/products/specialized-levo-pro.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 130,
    autonomie_city_km: 156,
    autonomie_highway_km: 91,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 24.5,
    payload_kg: 102,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.65 kW crête  couple 90 Nm",
    batterie: "Pack Li-ion 0.71 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.71,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.65,
      power_hp: 0.88,
      torque_nm: 90,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-specialized-como-50-igh-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-specialized-como-50-igh-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-specialized-como-50-igh-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 107,
        location: "PACA"
      }
    ],
    rating: 4.5,
    review_count: 34,
    featured: true,
    bestseller: false,
    is_new: false
  },
  {
    id: "moustache-samedi-287-open",
    slug: "moustache-samedi-287-open-2026",
    nom: "Moustache Samedi 28.7 Open",
    nom_en: "Moustache Samedi 28.7 Open",
    brand: "Moustache Bikes",
    category_label: "Vélo Urbain Français Confort Guidon Moustache",
    category_label_en: "French Comfort Urban E-Bike Bosch Smart",
    description: "Découvrez le modèle officiel Moustache Samedi 28.7 Open de chez Moustache Bikes. Performance certifiée d'origine avec 75 Nm de couple, 120 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Moustache Samedi 28.7 Open by Moustache Bikes. Certified performance with 75 Nm torque, 120 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "75 Nm • 120 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "75 Nm • 120 km real range • No License (25 km/h EPAC)",
    prix: 4399,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/trek-rail-99.jpg",
    images: ["/images/products/trek-rail-99.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 120,
    autonomie_city_km: 144,
    autonomie_highway_km: 84,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 24.8,
    payload_kg: 102,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 75 Nm",
    batterie: "Pack Li-ion 0.625 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.625,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 75,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-moustache-samedi-287-open-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-moustache-samedi-287-open-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-moustache-samedi-287-open-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 106,
        location: "Île-de-France"
      }
    ],
    rating: 4.4,
    review_count: 47,
    featured: false,
    bestseller: true,
    is_new: false
  },
  {
    id: "desiknio-x20-pinion-carbon",
    slug: "desiknio-x20-pinion-carbon-2026",
    nom: "Desiknio X20 Pinion Carbon (13.3 kg)",
    nom_en: "Desiknio X20 Pinion Carbon (13.3 kg)",
    brand: "Desiknio Handcrafted",
    category_label: "Vélo Urbain d'Orfèvrerie Courroie & Pinion",
    category_label_en: "Handcrafted Luxury City Bike 13.3kg",
    description: "Découvrez le modèle officiel Desiknio X20 Pinion Carbon (13.3 kg) de chez Desiknio Handcrafted. Performance certifiée d'origine avec 55 Nm de couple, 90 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Desiknio X20 Pinion Carbon (13.3 kg) by Desiknio Handcrafted. Certified performance with 55 Nm torque, 90 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "55 Nm • 90 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "55 Nm • 90 km real range • No License (25 km/h EPAC)",
    prix: 6990,
    prix_promo: 6790,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/canyon-spectral-on.png",
    images: ["/images/products/canyon-spectral-on.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 90,
    autonomie_city_km: 108,
    autonomie_highway_km: 63,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 13.3,
    payload_kg: 92,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.25 kW crête  couple 55 Nm",
    batterie: "Pack Li-ion 0.25 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.25,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.25,
      power_hp: 0.34,
      torque_nm: 55,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-desiknio-x20-pinion-carbon-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-desiknio-x20-pinion-carbon-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-desiknio-x20-pinion-carbon-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 85,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.3,
    review_count: 60,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "schindelhauer-heinrich-enviolo",
    slug: "schindelhauer-heinrich-enviolo-2026",
    nom: "Schindelhauer Heinrich Enviolo",
    nom_en: "Schindelhauer Heinrich Enviolo",
    brand: "Schindelhauer Berlin",
    category_label: "Purisme Allemand Courroie Gates Bosch CX",
    category_label_en: "Berlin Minimalist Belt-Drive Bosch CX",
    description: "Découvrez le modèle officiel Schindelhauer Heinrich Enviolo de chez Schindelhauer Berlin. Performance certifiée d'origine avec 85 Nm de couple, 110 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Schindelhauer Heinrich Enviolo by Schindelhauer Berlin. Certified performance with 85 Nm torque, 110 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "85 Nm • 110 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "85 Nm • 110 km real range • No License (25 km/h EPAC)",
    prix: 5395,
    prix_promo: 5195,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/cube-stereo-160.jpg",
    images: ["/images/products/cube-stereo-160.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 110,
    autonomie_city_km: 132,
    autonomie_highway_km: 77,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 24,
    payload_kg: 102,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.6 kW crête  couple 85 Nm",
    batterie: "Pack Li-ion 0.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.6,
      power_hp: 0.8,
      torque_nm: 85,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-schindelhauer-heinrich-enviolo-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-schindelhauer-heinrich-enviolo-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-schindelhauer-heinrich-enviolo-1",
        author: "David R. (Lyon)",
        rating: 4,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 90,
        location: "PACA"
      }
    ],
    rating: 4.2,
    review_count: 25,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "gazelle-grenoble-c8-hmb",
    slug: "gazelle-grenoble-c8-hmb-2026",
    nom: "Gazelle Grenoble C8 HMB",
    nom_en: "Gazelle Grenoble C8 HMB",
    brand: "Gazelle Holland",
    category_label: "Le VAE Hollandais Traditionnel Tout Confort",
    category_label_en: "Traditional Dutch Comfort E-Bike",
    description: "Découvrez le modèle officiel Gazelle Grenoble C8 HMB de chez Gazelle Holland. Performance certifiée d'origine avec 50 Nm de couple, 115 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Gazelle Grenoble C8 HMB by Gazelle Holland. Certified performance with 50 Nm torque, 115 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "50 Nm • 115 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "50 Nm • 115 km real range • No License (25 km/h EPAC)",
    prix: 3699,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/mondraker-crafty-xr.jpg",
    images: ["/images/products/mondraker-crafty-xr.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 115,
    autonomie_city_km: 138,
    autonomie_highway_km: 81,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 25.5,
    payload_kg: 103,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.5 kW crête  couple 50 Nm",
    batterie: "Pack Li-ion 0.5 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.5,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.5,
      power_hp: 0.68,
      torque_nm: 50,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-gazelle-grenoble-c8-hmb-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-gazelle-grenoble-c8-hmb-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-gazelle-grenoble-c8-hmb-1",
        author: "Alexandre D. (Pilote Paris)",
        rating: 4,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 101,
        location: "Île-de-France"
      }
    ],
    rating: 4.1,
    review_count: 38,
    featured: true,
    bestseller: true,
    is_new: true
  },
  {
    id: "tenways-cgo800s-belt",
    slug: "tenways-cgo800s-belt-2026",
    nom: "Tenways CGO800S Capteur Couple",
    nom_en: "Tenways CGO800S Capteur Couple",
    brand: "Tenways",
    category_label: "Vélo Urbain Courroie Carbone Silencieux",
    category_label_en: "Silent Belt-Drive Urban Commuter",
    description: "Découvrez le modèle officiel Tenways CGO800S Capteur Couple de chez Tenways. Performance certifiée d'origine avec 40 Nm de couple, 85 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Tenways CGO800S Capteur Couple by Tenways. Certified performance with 40 Nm torque, 85 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "40 Nm • 85 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "40 Nm • 85 km real range • No License (25 km/h EPAC)",
    prix: 1899,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 350,
    image_url: "/images/products/santa-cruz-heckler.png",
    images: ["/images/products/santa-cruz-heckler.png"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 85,
    autonomie_city_km: 102,
    autonomie_highway_km: 59,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 8,
    stock_status: "in_transit",
    delivery_time_label: "En arrivage Plateforme Logistique Hub • Livraison 7 à 10 jours ouvrés",
    delivery_time_label_en: "In transit to Logistics Hub • 7-10 business days delivery",
    poids_kg: 19,
    payload_kg: 97,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.25 kW crête  couple 40 Nm",
    batterie: "Pack Li-ion 0.374 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.374,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.25,
      power_hp: 0.34,
      torque_nm: 40,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-tenways-cgo800s-belt-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-tenways-cgo800s-belt-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-tenways-cgo800s-belt-1",
        author: "Marc B. (Haute-Savoie)",
        rating: 5,
        date: "28 Décembre 2025",
        verified: true,
        title: "Livraison impeccable sur plateau et vraie autonomie",
        title_en: "Flawless liftgate delivery and accurate range",
        comment: "Livrée directement dans ma cour avec hayon hydraulique et plaque déjà rivetée. Sur autoroute à 110 km/h compter environ 20% d'autonomie en moins qu'en ville, ce qui est normal pour de l'électrique. Zéro regret face à mon ancienne thermique !",
        comment_en: "Delivered straight to my driveway with lift-gate truck and pre-fitted plate. Highway riding at 70 mph uses about 20% more battery than urban cruising, exactly as predicted by the simulator. Zero regrets leaving gas behind!",
        real_range_tested_km: 80,
        location: "Auvergne-Rhône-Alpes"
      }
    ],
    rating: 4.8,
    review_count: 51,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "angell-mobility-rapide",
    slug: "angell-mobility-rapide-2026",
    nom: "Angell Mobility Cruiser M Électrique",
    nom_en: "Angell Mobility Cruiser M Électrique",
    brand: "Angell Mobility France",
    category_label: "Cockpit Tactile & Clignotants Intégrés",
    category_label_en: "Touchscreen Cockpit French Designer E-Bike",
    description: "Découvrez le modèle officiel Angell Mobility Cruiser M Électrique de chez Angell Mobility France. Performance certifiée d'origine avec 45 Nm de couple, 70 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Angell Mobility Cruiser M Électrique by Angell Mobility France. Certified performance with 45 Nm torque, 70 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "45 Nm • 70 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "45 Nm • 70 km real range • No License (25 km/h EPAC)",
    prix: 2990,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 400,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 70,
    autonomie_city_km: 84,
    autonomie_highway_km: 49,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 15,
    stock_status: "factory_order",
    delivery_time_label: "Sur commande atelier constructeur • Livraison 3 à 4 semaines avec mise en route",
    delivery_time_label_en: "Factory Order • 3-4 weeks delivery with full PDI inspection",
    poids_kg: 17.5,
    payload_kg: 96,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.25 kW crête  couple 45 Nm",
    batterie: "Pack Li-ion 0.36 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.36,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.25,
      power_hp: 0.34,
      torque_nm: 45,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-angell-mobility-rapide-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-angell-mobility-rapide-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-angell-mobility-rapide-1",
        author: "Julien T. (Marseille)",
        rating: 5,
        date: "04 Février 2026",
        verified: true,
        title: "Une arme absolue en ville et sur petites routes",
        title_en: "Absolute weapon in city traffic and backroads",
        comment: "Châssis rigide et freinage régénératif ultra puissant qui économise les plaquettes. Zéro entretien, zéro odeur d'essence dans le garage. C'est le futur.",
        comment_en: "Rigid chassis and exceptionally strong regen braking. Zero maintenance, zero oil fumes in the garage. Pure riding joy.",
        real_range_tested_km: 57,
        location: "PACA"
      }
    ],
    rating: 4.7,
    review_count: 16,
    featured: false,
    bestseller: false,
    is_new: false
  },
  {
    id: "electra-loft-go-7d-eq",
    slug: "electra-loft-go-7d-eq-2026",
    nom: "Electra Loft Go! 7D EQ Step-Thru",
    nom_en: "Electra Loft Go! 7D EQ Step-Thru",
    brand: "Electra / Trek",
    category_label: "Cruiser Urbain Chic Californien",
    category_label_en: "Californian Chic Step-Thru Cruiser",
    description: "Découvrez le modèle officiel Electra Loft Go! 7D EQ Step-Thru de chez Electra / Trek. Performance certifiée d'origine avec 40 Nm de couple, 65 km d'autonomie réelle et homologation Sans Permis (VAE 25 km/h). Contrôle technique PDI 50 points et garantie 5 ans constructeur.",
    description_en: "Official Electra Loft Go! 7D EQ Step-Thru by Electra / Trek. Certified performance with 40 Nm torque, 65 km real range and No License (25 km/h EPAC). Full 50-point PDI pre-delivery inspection and 5-year warranty.",
    highlight_subtitle: "40 Nm • 65 km d'autonomie • Sans Permis (VAE 25 km/h)",
    highlight_subtitle_en: "40 Nm • 65 km real range • No License (25 km/h EPAC)",
    prix: 1999,
    prix_promo: undefined,
    eco_bonus_eligible: true,
    max_eco_bonus: 300,
    image_url: "/images/products/specialized-kenevo-sl.jpg",
    images: ["/images/products/specialized-kenevo-sl.jpg"],
    type: "velo",
    license_category: "none",
    license_label_fr: "Sans Permis (VAE 25 km/h)",
    license_label_en: "No License (25 km/h EPAC)",
    autonomie_km: 65,
    autonomie_city_km: 78,
    autonomie_highway_km: 46,
    vitesse_max: 25,
    acceleration_0_100_s: undefined,
    acceleration_0_50_s: 2,
    stock: 4,
    stock_status: "in_showroom",
    delivery_time_label: "En stock au Showroom Paris 17e • Livraison 48-72h par transporteur spécialisé 2-roues",
    delivery_time_label_en: "In stock at Paris Showroom • 48-72h specialized delivery",
    poids_kg: 20,
    payload_kg: 98,
    temps_charge_h: 2.5,
    moteur: "Moteur électrique haute efficacité 0.25 kW crête  couple 40 Nm",
    batterie: "Pack Li-ion 0.25 kWh cellules haute densité (Lithium-Ion NMC)",
    battery_specs: {
      capacity_kwh: 0.25,
      voltage: 36,
      removable: true,
      cell_type: "LG/Samsung 21700 High Discharge",
      charge_time_home_h: 3,
      charge_time_fast_min: undefined,
      warranty_years: 5,
      warranty_km: 50000,
      ip_rating: "IP67"
    },
    motor_specs: {
      power_nominal_kw: 0.25,
      power_peak_kw: 0.25,
      power_hp: 0.34,
      torque_nm: 40,
      motor_type: "Moteur central silencieux avec capteur de couple",
      transmission: "Dérailleur indexé ou Courroie Carbone Gates",
      regen_braking: false,
      riding_modes: ["Eco", "Standard", "Sport Boost"]
    },
    certifications: ["CE", "UN 38.3", "UL 2849", "Euro 5"],
    available_options: [
      {
        id: "opt-electra-loft-go-7d-eq-1",
        name: "Pack Entretien Sérénité & Pièces d'Usure 2 Ans",
        name_en: "2-Year Peace-of-Mind Maintenance Pack",
        price: 290,
        description: "Couvre les plaquettes, révisions semestrielles et réglages en centre agréé.",
        description_en: "Covers brake pads, bi-annual inspections, and tuning in authorized centers.",
        category: "security"
      },
      {
        id: "opt-electra-loft-go-7d-eq-2",
        name: "Antivol Connecté GPS Tracker 4G avec Alarme 110dB",
        name_en: "4G GPS Tracker & 110dB Anti-Theft Alarm",
        price: 190,
        description: "Géolocalisation en temps réel sur smartphone et détection de mouvement suspect.",
        description_en: "Real-time smartphone geolocation and anti-tamper shock sensor.",
        category: "security"
      }
    ],
    reviews: [
      {
        id: "rev-electra-loft-go-7d-eq-1",
        author: "David R. (Lyon)",
        rating: 5,
        date: "14 Janvier 2026",
        verified: true,
        title: "Couple monstrueux mais selle ferme sur longue distance",
        title_en: "Insane instant torque, though seat is firm on longer trips",
        comment: "Accélération brutale et bluffante au feu vert ! La machine est ultra saine en courbe. Seul petit bémol : la selle d'origine est un peu ferme après 70 km, j'ai pris l'upgrade confort. Le chef d'atelier Thomas a été au top pour la remise des clés.",
        comment_en: "Breathtaking instant pull off the line! Handling in corners is razor-sharp. Only minor grip: OEM seat is a bit stiff past 50 miles, so get the comfort upgrade. Thomas from the workshop was fantastic during delivery handover.",
        real_range_tested_km: 57,
        location: "Île-de-France"
      }
    ],
    rating: 4.6,
    review_count: 29,
    featured: false,
    bestseller: true,
    is_new: false
  }

��    {  
         i d :   " s u r r o n - l i g h t - b e e - x - 2 0 1 8 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - x - 2 0 1 8 - o r i g i n a l e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   X   ( O r i g i n a l e   2 0 1 8 / 2 0 2 0 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   X   ( O r i g i n a l   2 0 1 8 / 2 0 2 0 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   O f f - R o a d   5 k W   5 0 c c " ,  
         c a t e g o r y _ l a b e l _ e n :   " O f f - R o a d   M i n i - C r o s s   5 k W   5 0 c c   C l a s s " ,  
         d e s c r i p t i o n :   " L e   m o d %� l e   f o n d a t e u r   q u i   a   l a n c %�   l a   r %� v o l u t i o n   S u r - R o n .   M o t e u r   5   k W ,   b a t t e r i e   6 0 V   3 2 A h ,   v i t e s s e   m a x   7 5   k m / h   p o u r   s e u l e m e n t   5 0   k g .   L a   p l a t e f o r m e   e m b l %� m a t i q u e   q u i   a   c o n q u i s   l e   m o n d e   d u   t o u t - t e r r a i n   %� l e c t r i q u e . " ,  
         d e s c r i p t i o n _ e n :   " T h e   f o u n d i n g   m o d e l   t h a t   l a u n c h e d   t h e   S u r - R o n   r e v o l u t i o n .   5   k W   m o t o r ,   6 0 V   3 2 A h   b a t t e r y ,   7 5   k m / h   t o p   s p e e d   a t   j u s t   5 0   k g .   T h e   i c o n i c   p l a t f o r m   t h a t   c o n q u e r e d   t h e   e l e c t r i c   o f f - r o a d   w o r l d . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 5   k W   � � �   7 5   k m / h   � � �   5 0   k g   � � �   B a t t e r i e   6 0 V   3 2 A h " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 5   k W   � � �   7 5   k m / h   � � �   5 0   k g   � � �   6 0 V   3 2 A h   B a t t e r y " ,  
         p r i x :   4 2 9 0 ,  
         p r i x _ p r o m o :   4 0 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   5 5 ,  
         a u t o n o m i e _ c i t y _ k m :   6 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   3 5 ,  
         v i t e s s e _ m a x :   7 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   6 . 5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 8 ,  
         s t o c k :   3 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 0 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   5   k W   c r %� t e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   1 . 9 2   k W h   6 0 V   3 2 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   1 . 9 2 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   3 ,  
             p o w e r _ p e a k _ k w :   5 ,  
             p o w e r _ h p :   6 . 8 ,  
             t o r q u e _ n m :   1 3 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 1 8 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 1 8 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - x - 2 0 1 8 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 4 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   4 7 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 4 ,  
         r e v i e w _ c o u n t :   1 5 6 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - x - 2 0 2 2 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - x - 2 0 2 2 - s i n e w a v e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   X   ( U p g r a d e   2 0 2 1 / 2 0 2 2 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   X   ( S i n e   W a v e   U p g r a d e   2 0 2 1 / 2 0 2 2 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   O f f - R o a d   6 k W   S i n e   W a v e   X " ,  
         c a t e g o r y _ l a b e l _ e n :   " O f f - R o a d   M i n i - C r o s s   6 k W   S i n e   W a v e   X   C o n t r o l l e r " ,  
         d e s c r i p t i o n :   " V e r s i o n   a m %� l i o r %� e   a v e c   c o n t r %$%l e u r   S i n e   W a v e   X   p o u r   u n   c o u p l e   s u p %� r i e u r   e t   u n e   r %� p o n s e   p l u s   l i n %� a i r e .   P u i s s a n c e   p o r t %� e   %�   6   k W ,   b a t t e r i e   6 0 V   3 2 A h .   L e   m %� m e   c h %� s s i s   l %� g e r   d e   5 0   k g   a v e c   u n e   %� l e c t r o n i q u e   d e   p o i n t e . " ,  
         d e s c r i p t i o n _ e n :   " I m p r o v e d   v e r s i o n   w i t h   S i n e   W a v e   X   c o n t r o l l e r   f o r   s u p e r i o r   t o r q u e   a n d   l i n e a r   r e s p o n s e .   P o w e r   i n c r e a s e d   t o   6   k W ,   6 0 V   3 2 A h   b a t t e r y .   S a m e   l i g h t w e i g h t   5 0   k g   c h a s s i s   w i t h   c u t t i n g - e d g e   e l e c t r o n i c s . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 6   k W   � � �   S i n e   W a v e   X   � � �   6 0 V   3 2 A h   � � �   5 0   k g " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 6   k W   � � �   S i n e   W a v e   X   � � �   6 0 V   3 2 A h   � � �   5 0   k g " ,  
         p r i x :   4 5 9 0 ,  
         p r i x _ p r o m o :   4 3 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   5 5 ,  
         a u t o n o m i e _ c i t y _ k m :   6 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   3 5 ,  
         v i t e s s e _ m a x :   7 8 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   5 . 8 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 5 ,  
         s t o c k :   5 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 0 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   6   k W   c r %� t e   c o n t r %$%l e u r   S i n e   W a v e   X " ,  
         b a t t e r i e :   " P a c k   L i - i o n   1 . 9 2   k W h   6 0 V   3 2 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   1 . 9 2 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   3 . 5 ,  
             p o w e r _ p e a k _ k w :   6 ,  
             p o w e r _ h p :   8 . 2 ,  
             t o r q u e _ n m :   1 5 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 2 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 2 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - x - 2 0 2 2 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 5 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   4 7 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 5 ,  
         r e v i e w _ c o u n t :   9 8 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - x - 2 0 2 4 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - x - 2 0 2 4 - b a t t e r i e - a m e l i o r e e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   X   ( V e r s i o n   2 0 2 3 / 2 0 2 4 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   X   ( I m p r o v e d   B a t t e r y   2 0 2 3 / 2 0 2 4 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   O f f - R o a d   6 k W   6 0 V   3 8 . 5 A h " ,  
         c a t e g o r y _ l a b e l _ e n :   " O f f - R o a d   M i n i - C r o s s   6 k W   6 0 V   3 8 . 5 A h " ,  
         d e s c r i p t i o n :   " B a t t e r i e   a m %� l i o r %� e   6 0 V   3 8 . 5 A h   p o u r   u n e   a u t o n o m i e   %� t e n d u e   %�   ~ 7 0   k m .   M %� m e   m o t e u r   6   k W   %� p r o u v %�   d a n s   u n   c h %� s s i s   r a f f i n %� .   L e   c o m p r o m i s   p a r f a i t   e n t r e   l %� g %� r e t %�   e t   e n d u r a n c e   p o u r   l e   t o u t - t e r r a i n . " ,  
         d e s c r i p t i o n _ e n :   " I m p r o v e d   6 0 V   3 8 . 5 A h   b a t t e r y   f o r   e x t e n d e d   r a n g e   u p   t o   ~ 7 0   k m .   S a m e   p r o v e n   6   k W   m o t o r   i n   a   r e f i n e d   c h a s s i s .   T h e   p e r f e c t   b a l a n c e   b e t w e e n   l i g h t n e s s   a n d   e n d u r a n c e   f o r   o f f - r o a d . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 6   k W   � � �   7 0   k m   d ' a u t o n o m i e   � � �   6 0 V   3 8 . 5 A h " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 6   k W   � � �   7 0   k m   r a n g e   � � �   6 0 V   3 8 . 5 A h " ,  
         p r i x :   4 8 9 0 ,  
         p r i x _ p r o m o :   4 6 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   7 0 ,  
         a u t o n o m i e _ c i t y _ k m :   8 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   4 5 ,  
         v i t e s s e _ m a x :   7 8 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   5 . 6 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 4 ,  
         s t o c k :   7 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 2 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   6   k W   c r %� t e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   2 . 3 1   k W h   6 0 V   3 8 . 5 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   2 . 3 1 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   3 . 5 ,  
             p o w e r _ p e a k _ k w :   6 ,  
             p o w e r _ h p :   8 . 2 ,  
             t o r q u e _ n m :   1 5 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 4 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 4 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - x - 2 0 2 4 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 6 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 0 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 6 ,  
         r e v i e w _ c o u n t :   7 4 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   t r u e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - x - 2 0 2 5 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - x - 2 0 2 5 - 6 0 v - 4 0 a h " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   X   ( V e r s i o n   2 0 2 5 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   X   ( 2 0 2 5   V e r s i o n ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   O f f - R o a d   8 k W   C r %� t e   2 6 6   N m " ,  
         c a t e g o r y _ l a b e l _ e n :   " O f f - R o a d   M i n i - C r o s s   8 k W   P e a k   2 6 6   N m " ,  
         d e s c r i p t i o n :   " I n t %� g r a t i o n   b a t t e r i e   6 0 V   4 0 A h   d e   d e r n i %� r e   g %� n %� r a t i o n .   P u i s s a n c e   c r %� t e   d e   8   k W   e t   c o u p l e   %�   l a   r o u e   d e   2 6 6   N m .   L a   L i g h t   B e e   X   d a n s   s a   v e r s i o n   l a   p l u s   a b o u t i e   a v a n t   l a   r e f o n t e   c o m p l %� t e   d e   2 0 2 6 . " ,  
         d e s c r i p t i o n _ e n :   " L a t e s t - g e n   6 0 V   4 0 A h   b a t t e r y   i n t e g r a t i o n .   8   k W   p e a k   p o w e r   a n d   2 6 6   N m   w h e e l   t o r q u e .   T h e   m o s t   r e f i n e d   L i g h t   B e e   X   b e f o r e   t h e   c o m p l e t e   2 0 2 6   r e d e s i g n . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 8   k W   c r %� t e   � � �   2 6 6   N m   � � �   6 0 V   4 0 A h " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 8   k W   p e a k   � � �   2 6 6   N m   � � �   6 0 V   4 0 A h " ,  
         p r i x :   5 2 9 0 ,  
         p r i x _ p r o m o :   5 0 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   7 5 ,  
         a u t o n o m i e _ c i t y _ k m :   8 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   5 0 ,  
         v i t e s s e _ m a x :   8 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   5 . 2 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 2 ,  
         s t o c k :   1 0 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 3 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   8   k W   c r %� t e   c o u p l e   2 6 6   N m   %�   l a   r o u e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   2 . 4   k W h   6 0 V   4 0 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   2 . 4 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   4 ,  
             p o w e r _ p e a k _ k w :   8 ,  
             p o w e r _ h p :   1 0 . 9 ,  
             t o r q u e _ n m :   2 6 6 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 5 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 5 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - x - 2 0 2 5 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 7 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 4 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 7 ,  
         r e v i e w _ c o u n t :   4 5 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   t r u e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - x - 2 0 2 6 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - x - 2 0 2 6 - 7 2 v - 3 5 a h " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   X   ( G %� n %� r a t i o n   2 0 2 6 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   X   ( 2 0 2 6   G e n e r a t i o n ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   O f f - R o a d   1 0 k W   7 2 V   2 9 5   N m " ,  
         c a t e g o r y _ l a b e l _ e n :   " O f f - R o a d   M i n i - C r o s s   1 0 k W   7 2 V   2 9 5   N m " ,  
         d e s c r i p t i o n :   " D e r n i %� r e   g %� n %� r a t i o n   :   p a s s a g e   %�   l a   p l a t e f o r m e   1 0   k W   a v e c   b a t t e r i e   7 2 V   3 5 A h .   V i t e s s e   m a x   8 0   k m / h   e t   c o u p l e   %�   l a   r o u e   d e   2 9 5   N m .   L a   L i g h t   B e e   X   n ' a   j a m a i s   %� t %�   a u s s i   p u i s s a n t e .   N o u v e l l e   a r c h i t e c t u r e   %� l e c t r o n i q u e   e t   r e f r o i d i s s e m e n t   o p t i m i s %� . " ,  
         d e s c r i p t i o n _ e n :   " L a t e s t   g e n e r a t i o n :   u p g r a d e   t o   1 0   k W   p l a t f o r m   w i t h   7 2 V   3 5 A h   b a t t e r y .   8 0   k m / h   t o p   s p e e d   a n d   2 9 5   N m   w h e e l   t o r q u e .   T h e   L i g h t   B e e   X   h a s   n e v e r   b e e n   t h i s   p o w e r f u l .   N e w   e l e c t r o n i c s   a r c h i t e c t u r e   a n d   o p t i m i z e d   c o o l i n g . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 1 0   k W   � � �   7 2 V   3 5 A h   � � �   2 9 5   N m   � � �   N O U V E A U   2 0 2 6 " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 1 0   k W   � � �   7 2 V   3 5 A h   � � �   2 9 5   N m   � � �   N E W   2 0 2 6 " ,  
         p r i x :   5 9 9 0 ,  
         p r i x _ p r o m o :   5 7 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   8 0 ,  
         a u t o n o m i e _ c i t y _ k m :   9 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   5 5 ,  
         v i t e s s e _ m a x :   8 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   4 . 8 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 ,  
         s t o c k :   1 2 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 5 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   1 0   k W   c r %� t e   c o u p l e   2 9 5   N m   %�   l a   r o u e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   2 . 5 2   k W h   7 2 V   3 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   2 . 5 2 ,  
             v o l t a g e :   7 2 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   5 ,  
             p o w e r _ p e a k _ k w :   1 0 ,  
             p o w e r _ h p :   1 3 . 6 ,  
             t o r q u e _ n m :   2 9 5 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " O f f - R o a d   P r o " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 6 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - 2 0 2 6 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - x - 2 0 2 6 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 8 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 8 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 8 ,  
         r e v i e w _ c o u n t :   1 8 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   t r u e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 0 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 0 - h o m o l o g u e e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   L 1 E   H o m o l o g u %� e   ( 2 0 2 0 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   L 1 E   R o a d - L e g a l   ( 2 0 2 0 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - M o t o   H o m o l o g u %� e   L 1 e   4 5   k m / h   R o u t e " ,  
         c a t e g o r y _ l a b e l _ e n :   " L 1 e   R o a d - L e g a l   M i n i - M o t o   4 5   k m / h " ,  
         d e s c r i p t i o n :   " V e r s i o n   h o m o l o g u %� e   r o u t e   d e   l a   L i g h t   B e e   X .   B r i d %� e   %�   4 5   k m / h   p o u r   l a   l %� g i s l a t i o n   5 0 c c .   K i t   r o u t e   c o m p l e t   :   p h a r e s ,   c l i g n o t a n t s ,   p l a q u e   d ' i m m a t r i c u l a t i o n .   B a t t e r i e   6 0 V   3 2 A h .   P e r m i s   A M   s u f f i s a n t . " ,  
         d e s c r i p t i o n _ e n :   " R o a d - l e g a l   v e r s i o n   o f   t h e   L i g h t   B e e   X .   R e s t r i c t e d   t o   4 5   k m / h   f o r   5 0 c c   l e g i s l a t i o n .   C o m p l e t e   r o a d   k i t :   h e a d l i g h t s ,   i n d i c a t o r s ,   l i c e n s e   p l a t e .   6 0 V   3 2 A h   b a t t e r y .   A M   l i c e n s e   s u f f i c i e n t . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 4 5   k m / h   � � �   H o m o l o g u %� e   L 1 e   � � �   K i t   r o u t e   c o m p l e t   � � �   P e r m i s   A M " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 4 5   k m / h   � � �   L 1 e   R o a d - L e g a l   � � �   F u l l   R o a d   K i t   � � �   A M   L i c e n s e " ,  
         p r i x :   4 7 9 0 ,  
         p r i x _ p r o m o :   4 5 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A M " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A M   ( 5 0 c c   %� l e c t r i q u e   H o m o l o g u %� ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A M   L i c e n s e   ( 5 0 c c   E l e c t r i c   R o a d - L e g a l ) " ,  
         a u t o n o m i e _ k m :   5 0 ,  
         a u t o n o m i e _ c i t y _ k m :   6 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   3 0 ,  
         v i t e s s e _ m a x :   4 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   8 . 5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   3 . 5 ,  
         s t o c k :   4 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 5 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   5   k W   b r i d %�   4 5   k m / h " ,  
         b a t t e r i e :   " P a c k   L i - i o n   1 . 9 2   k W h   6 0 V   3 2 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   1 . 9 2 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   3 ,  
             p o w e r _ p e a k _ k w :   5 ,  
             p o w e r _ h p :   6 . 8 ,  
             t o r q u e _ n m :   1 3 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " L 1 e " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 0 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 0 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 0 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 3 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   4 3 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 3 ,  
         r e v i e w _ c o u n t :   6 7 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 3 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 3 - h o m o l o g u e e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   L 1 E   H o m o l o g u %� e   ( 2 0 2 3 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   L 1 E   R o a d - L e g a l   ( 2 0 2 3 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - M o t o   H o m o l o g u %� e   L 1 e   6 0 V   3 8 . 5 A h " ,  
         c a t e g o r y _ l a b e l _ e n :   " L 1 e   R o a d - L e g a l   M i n i - M o t o   6 0 V   3 8 . 5 A h " ,  
         d e s c r i p t i o n :   " V e r s i o n   2 0 2 3   a v e c   b a t t e r i e   a m %� l i o r %� e   6 0 V   3 8 . 5 A h   p o u r   6 5   k m   d ' a u t o n o m i e .   L i m i t %� e   %�   4 5   k m / h   s u r   r o u t e   ( d %� b r i d a b l e   h o r s   r o u t e   %�   7 5   k m / h ) .   K i t   r o u t e   c o m p l e t   a v e c   %� c l a i r a g e   L E D   e t   p l a q u e . " ,  
         d e s c r i p t i o n _ e n :   " 2 0 2 3   v e r s i o n   w i t h   i m p r o v e d   6 0 V   3 8 . 5 A h   b a t t e r y   f o r   6 5   k m   r a n g e .   L i m i t e d   t o   4 5   k m / h   o n   r o a d   ( d e - r e s t r i c t a b l e   o f f - r o a d   t o   7 5   k m / h ) .   F u l l   r o a d   k i t   w i t h   L E D   l i g h t i n g   a n d   p l a t e . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 6 5   k m   a u t o n o m i e   � � �   L 1 e   � � �   D %� b r i d a b l e   7 5   k m / h   h o r s   r o u t e " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 6 5   k m   r a n g e   � � �   L 1 e   � � �   D e - r e s t r i c t a b l e   7 5   k m / h   o f f - r o a d " ,  
         p r i x :   5 1 9 0 ,  
         p r i x _ p r o m o :   4 9 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A M " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A M   ( 5 0 c c   %� l e c t r i q u e   H o m o l o g u %� ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A M   L i c e n s e   ( 5 0 c c   E l e c t r i c   R o a d - L e g a l ) " ,  
         a u t o n o m i e _ k m :   6 5 ,  
         a u t o n o m i e _ c i t y _ k m :   7 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   4 0 ,  
         v i t e s s e _ m a x :   4 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   8 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   3 . 2 ,  
         s t o c k :   6 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 6 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   6   k W   b r i d %�   4 5   k m / h " ,  
         b a t t e r i e :   " P a c k   L i - i o n   2 . 3 1   k W h   6 0 V   3 8 . 5 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   2 . 3 1 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   3 . 5 ,  
             p o w e r _ p e a k _ k w :   6 ,  
             p o w e r _ h p :   8 . 2 ,  
             t o r q u e _ n m :   1 5 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " L 1 e " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 3 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 3 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 3 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 5 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   5 5 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 5 ,  
         r e v i e w _ c o u n t :   5 2 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 6 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 6 - h o m o l o g u e e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   L 1 E   H o m o l o g u %� e   ( 2 0 2 5 / 2 0 2 6 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   L 1 E   R o a d - L e g a l   ( 2 0 2 5 / 2 0 2 6 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - M o t o   H o m o l o g u %� e   L 1 e   6 0 V   4 0 A h   L E D " ,  
         c a t e g o r y _ l a b e l _ e n :   " L 1 e   R o a d - L e g a l   M i n i - M o t o   6 0 V   4 0 A h   L E D " ,  
         d e s c r i p t i o n :   " D e r n i %� r e   v e r s i o n   h o m o l o g u %� e   a v e c   b a t t e r i e   6 0 V   4 0 A h   e t   m o t e u r   c r %� t e   6   k W .   %� c l a i r a g e   L E D   a m %� l i o r %�   p o u r   u n e   v i s i b i l i t %�   o p t i m a l e .   B r i d %� e   e n   n o m i n a l   p o u r   l a   l %� g i s l a t i o n   L 1 e .   L a   m i n i - m o t o   r o u t e   l a   p l u s   a b o u t i e   d e   s a   c a t %� g o r i e . " ,  
         d e s c r i p t i o n _ e n :   " L a t e s t   r o a d - l e g a l   v e r s i o n   w i t h   6 0 V   4 0 A h   b a t t e r y   a n d   6   k W   p e a k   m o t o r .   E n h a n c e d   L E D   l i g h t i n g   f o r   o p t i m a l   v i s i b i l i t y .   R e s t r i c t e d   f o r   L 1 e   l e g i s l a t i o n .   T h e   m o s t   r e f i n e d   r o a d - l e g a l   m i n i - m o t o   i n   i t s   c l a s s . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 6 0 V   4 0 A h   � � �   L E D   a m %� l i o r %�   � � �   L 1 e   2 0 2 6   � � �   P e r m i s   A M " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 6 0 V   4 0 A h   � � �   E n h a n c e d   L E D   � � �   L 1 e   2 0 2 6   � � �   A M   L i c e n s e " ,  
         p r i x :   5 4 9 0 ,  
         p r i x _ p r o m o :   5 2 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A M " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A M   ( 5 0 c c   %� l e c t r i q u e   H o m o l o g u %� ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A M   L i c e n s e   ( 5 0 c c   E l e c t r i c   R o a d - L e g a l ) " ,  
         a u t o n o m i e _ k m :   7 0 ,  
         a u t o n o m i e _ c i t y _ k m :   8 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   4 5 ,  
         v i t e s s e _ m a x :   4 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   7 . 5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   3 ,  
         s t o c k :   8 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 7 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   6   k W   c r %� t e   b r i d %�   L 1 e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   2 . 4   k W h   6 0 V   4 0 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   2 . 4 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   4 ,  
             p o w e r _ p e a k _ k w :   6 ,  
             p o w e r _ h p :   8 . 2 ,  
             t o r q u e _ n m :   1 6 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " L 1 e " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 6 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 6 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - l 1 e - 2 0 2 6 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 6 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 0 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 6 ,  
         r e v i e w _ c o u n t :   2 8 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - s - y o u t h " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - s - y o u t h - i n i t i a l e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   S   ( Y o u t h   -   V e r s i o n   I n i t i a l e ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   S   ( Y o u t h   -   I n i t i a l   V e r s i o n ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   J e u n e s s e   3 k W   4 8 V   R o u e s   1 7 \ " " ,  
         c a t e g o r y _ l a b e l _ e n :   " Y o u t h   M i n i - C r o s s   3 k W   4 8 V   1 7 \ "   W h e e l s " ,  
         d e s c r i p t i o n :   " M o d %� l e   r %� d u i t   c o n %� u   p o u r   l e s   j e u n e s   p i l o t e s .   M o t e u r   3   k W ,   b a t t e r i e   4 8 V   2 0 A h ,   v i t e s s e   m a x   5 0   k m / h .   R o u e s   d e   1 7   p o u c e s   p o u r   u n e   p r i s e   e n   m a i n   f a c i l e   e t   s %� c u r i s %� e .   L ' i n t r o d u c t i o n   p a r f a i t e   a u   m o n d e   d u   d e u x - r o u e s   %� l e c t r i q u e . " ,  
         d e s c r i p t i o n _ e n :   " R e d u c e d   m o d e l   d e s i g n e d   f o r   y o u n g   r i d e r s .   3   k W   m o t o r ,   4 8 V   2 0 A h   b a t t e r y ,   5 0   k m / h   t o p   s p e e d .   1 7 - i n c h   w h e e l s   f o r   e a s y   a n d   s a f e   h a n d l i n g .   T h e   p e r f e c t   i n t r o d u c t i o n   t o   t h e   e l e c t r i c   t w o - w h e e l e r   w o r l d . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 3   k W   � � �   5 0   k m / h   � � �   4 8 V   2 0 A h   � � �   R o u e s   1 7 \ " " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 3   k W   � � �   5 0   k m / h   � � �   4 8 V   2 0 A h   � � �   1 7 \ "   W h e e l s " ,  
         p r i x :   2 9 9 0 ,  
         p r i x _ p r o m o :   2 7 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   3 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   P r i v %�   /   J e u n e s s e   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " P r i v a t e   U s e   /   Y o u t h   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   3 5 ,  
         a u t o n o m i e _ c i t y _ k m :   4 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   2 0 ,  
         v i t e s s e _ m a x :   5 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   8 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   3 . 5 ,  
         s t o c k :   5 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   4 0 ,  
         p a y l o a d _ k g :   7 0 ,  
         t e m p s _ c h a r g e _ h :   3 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   3   k W " ,  
         b a t t e r i e :   " P a c k   L i - i o n   0 . 9 6   k W h   4 8 V   2 0 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   0 . 9 6 ,  
             v o l t a g e :   4 8 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   3 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   2 ,  
             p o w e r _ p e a k _ k w :   3 ,  
             p o w e r _ h p :   4 . 1 ,  
             t o r q u e _ n m :   8 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 0   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - s - y o u t h - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - s - y o u t h - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - s - y o u t h - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 5 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   3 0 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 5 ,  
         r e v i e w _ c o u n t :   3 4 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - s - y o u t h - 2 0 2 4 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - s - y o u t h - 2 0 2 4 - f i n a l e " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   S   ( Y o u t h   -   V e r s i o n   F i n a l e   2 0 2 4 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   S   ( Y o u t h   -   F i n a l   2 0 2 4   E d i t i o n ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   J e u n e s s e   4 8 V   2 4 A h   %� d i t i o n   F i n a l e " ,  
         c a t e g o r y _ l a b e l _ e n :   " Y o u t h   M i n i - C r o s s   4 8 V   2 4 A h   F i n a l   E d i t i o n " ,  
         d e s c r i p t i o n :   " V e r s i o n   f i n a l e   d e   l a   L i g h t   B e e   S   Y o u t h   a v e c   b a t t e r i e   p o u s s %� e   %�   4 8 V   2 4 A h   p o u r   u n e   a u t o n o m i e   a c c r u e .   M o d %� l e   i d %� a l   p o u r   l e s   a d o l e s c e n t s   a v a n t   s a   f i n   d e   p r o d u c t i o n   g l o b a l e .   D e r n i %� r e   o p p o r t u n i t %� . " ,  
         d e s c r i p t i o n _ e n :   " F i n a l   v e r s i o n   o f   t h e   L i g h t   B e e   S   Y o u t h   w i t h   4 8 V   2 4 A h   b a t t e r y   f o r   i n c r e a s e d   r a n g e .   I d e a l   m o d e l   f o r   t e e n a g e r s   b e f o r e   g l o b a l   e n d   o f   p r o d u c t i o n .   L a s t   o p p o r t u n i t y . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 4 8 V   2 4 A h   � � �   %� d i t i o n   F i n a l e   � � �   A d o l e s c e n t s " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 4 8 V   2 4 A h   � � �   F i n a l   E d i t i o n   � � �   Y o u t h   R i d e r s " ,  
         p r i x :   3 2 9 0 ,  
         p r i x _ p r o m o :   3 0 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   3 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   P r i v %�   /   J e u n e s s e   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " P r i v a t e   U s e   /   Y o u t h   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   4 2 ,  
         a u t o n o m i e _ c i t y _ k m :   5 2 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   2 5 ,  
         v i t e s s e _ m a x :   5 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   7 . 5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   3 . 2 ,  
         s t o c k :   2 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " D e r n i e r s   e x e m p l a i r e s   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " L a s t   u n i t s   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   4 1 ,  
         p a y l o a d _ k g :   7 0 ,  
         t e m p s _ c h a r g e _ h :   3 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   3   k W " ,  
         b a t t e r i e :   " P a c k   L i - i o n   1 . 1 5   k W h   4 8 V   2 4 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   1 . 1 5 ,  
             v o l t a g e :   4 8 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   3 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   2 ,  
             p o w e r _ p e a k _ k w :   3 ,  
             p o w e r _ h p :   4 . 1 ,  
             t o r q u e _ n m :   8 5 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 0   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - s - y o u t h - 2 0 2 4 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - s - y o u t h - 2 0 2 4 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - s - y o u t h - 2 0 2 4 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 6 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   3 6 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 6 ,  
         r e v i e w _ c o u n t :   2 1 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - 2 - o f f r o a d - 2 0 2 6 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - 2 - o f f r o a d - 2 0 2 6 " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   2   O f f - R o a d   ( 2 0 2 6 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   2   O f f - R o a d   ( 2 0 2 6 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   N o u v e l l e   G %� n %� r a t i o n   C h %� s s i s   R e n f o r c %� " ,  
         c a t e g o r y _ l a b e l _ e n :   " N e w   G e n   O f f - R o a d   M i n i - C r o s s   R e i n f o r c e d   C h a s s i s " ,  
         d e s c r i p t i o n :   " P l a t e f o r m e   e n t i %� r e m e n t   r e d e s s i n %� e   p o u r   2 0 2 6 .   C h %� s s i s   r i g i d i f i %� ,   i n t %� g r a t i o n   t e c h n o l o g i q u e   n a t i v e ,   b a t t e r i e   h a u t e   t e n s i o n   e t   s u s p e n s i o n s   d e   c o u r s e   r e v u e s .   L a   n o u v e l l e   r %� f %� r e n c e   d u   m i n i - c r o s s   %� l e c t r i q u e . " ,  
         d e s c r i p t i o n _ e n :   " C o m p l e t e l y   r e d e s i g n e d   p l a t f o r m   f o r   2 0 2 6 .   R e i n f o r c e d   c h a s s i s ,   n a t i v e   t e c h   i n t e g r a t i o n ,   h i g h - v o l t a g e   b a t t e r y   a n d   r e v i s e d   r a c e   s u s p e n s i o n s .   T h e   n e w   b e n c h m a r k   f o r   e l e c t r i c   m i n i - c r o s s . " ,  
         h i g h l i g h t _ s u b t i t l e :   " N O U V E A U   2 0 2 6   � � �   C h %� s s i s   r e n f o r c %�   � � �   S u s p e n s i o n s   r a c e " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " N E W   2 0 2 6   � � �   R e i n f o r c e d   C h a s s i s   � � �   R a c e   S u s p e n s i o n " ,  
         p r i x :   6 9 9 0 ,  
         p r i x _ p r o m o :   6 7 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   8 5 ,  
         a u t o n o m i e _ c i t y _ k m :   9 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   5 5 ,  
         v i t e s s e _ m a x :   8 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   4 . 5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 9 ,  
         s t o c k :   1 5 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 6 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   n o u v e l l e   g %� n %� r a t i o n   1 2   k W   c r %� t e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   3 . 0   k W h   7 2 V   4 2 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   3 ,  
             v o l t a g e :   7 2 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   6 ,  
             p o w e r _ p e a k _ k w :   1 2 ,  
             p o w e r _ h p :   1 6 . 3 ,  
             t o r q u e _ n m :   3 1 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   n o u v e l l e   g %� n %� r a t i o n " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " O f f - R o a d   P r o " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - 2 - o f f r o a d - 2 0 2 6 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - 2 - o f f r o a d - 2 0 2 6 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - 2 - o f f r o a d - 2 0 2 6 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 9 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   7 2 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 9 ,  
         r e v i e w _ c o u n t :   8 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   t r u e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - 2 - h o m o l o g u e e - 2 0 2 6 " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - 2 - h o m o l o g u e e - 2 0 2 6 " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   2   H o m o l o g u %� e   R o u t e   ( 2 0 2 6 ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   2   R o a d - L e g a l   ( 2 0 2 6 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - M o t o   H o m o l o g u %� e   L 1 e   N o u v e l l e   A r c h i t e c t u r e " ,  
         c a t e g o r y _ l a b e l _ e n :   " L 1 e   R o a d - L e g a l   M i n i - M o t o   N e w   A r c h i t e c t u r e " ,  
         d e s c r i p t i o n :   " V e r s i o n   c o n f o r m e   a u x   n o r m e s   r o u t i %� r e s   e u r o p %� e n n e s   d e   l a   n o u v e l l e   a r c h i t e c t u r e   L i g h t   B e e   2 .   K i t   r o u t e   c o m p l e t   a v e c   %� c l a i r a g e   L E D ,   c l i g n o t a n t s ,   p l a q u e   e t   r %� t r o v i s e u r s .   L a   r %� v o l u t i o n   L i g h t   B e e   2   e n f i n   h o m o l o g u %� e   p o u r   l a   r o u t e . " ,  
         d e s c r i p t i o n _ e n :   " E u r o p e a n   r o a d - l e g a l   v e r s i o n   o f   t h e   n e w   L i g h t   B e e   2   a r c h i t e c t u r e .   C o m p l e t e   r o a d   k i t   w i t h   L E D   l i g h t i n g ,   i n d i c a t o r s ,   p l a t e   a n d   m i r r o r s .   T h e   L i g h t   B e e   2   r e v o l u t i o n   f i n a l l y   r o a d - l e g a l . " ,  
         h i g h l i g h t _ s u b t i t l e :   " L 1 e   2 0 2 6   � � �   H o m o l o g u %� e   r o u t e   � � �   N o u v e l l e   p l a t e f o r m e " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " L 1 e   2 0 2 6   � � �   R o a d - L e g a l   � � �   N e w   P l a t f o r m " ,  
         p r i x :   7 2 9 0 ,  
         p r i x _ p r o m o :   7 0 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A M " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A M   ( 5 0 c c   %� l e c t r i q u e   H o m o l o g u %� ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A M   L i c e n s e   ( 5 0 c c   E l e c t r i c   R o a d - L e g a l ) " ,  
         a u t o n o m i e _ k m :   8 0 ,  
         a u t o n o m i e _ c i t y _ k m :   9 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   5 0 ,  
         v i t e s s e _ m a x :   4 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   7 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 8 ,  
         s t o c k :   1 0 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   6 0 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   n o u v e l l e   g %� n %� r a t i o n   b r i d %�   L 1 e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   3 . 0   k W h   7 2 V   4 2 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   3 ,  
             v o l t a g e :   7 2 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   4 ,  
             p o w e r _ p e a k _ k w :   6 ,  
             p o w e r _ h p :   8 . 2 ,  
             t o r q u e _ n m :   2 0 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   n o u v e l l e   g %� n %� r a t i o n " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " L 1 e " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - 2 - h o m o l o g u e e - 2 0 2 6 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - 2 - h o m o l o g u e e - 2 0 2 6 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - 2 - h o m o l o g u e e - 2 0 2 6 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 8 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 8 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 8 ,  
         r e v i e w _ c o u n t :   5 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - h y p e r - b e e - 2 0 2 5 " ,  
         s l u g :   " s u r r o n - h y p e r - b e e - 2 0 2 5 - i n i t i a l e " ,  
         n o m :   " S u r - R o n   H y p e r   B e e   ( V e r s i o n   I n i t i a l e   2 0 2 5 ) " ,  
         n o m _ e n :   " S u r - R o n   H y p e r   B e e   ( I n i t i a l   2 0 2 5   V e r s i o n ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   E n f a n t s / A d o s   5 k W   3 8   k g " ,  
         c a t e g o r y _ l a b e l _ e n :   " K i d s / T e e n   M i n i - C r o s s   5 k W   3 8   k g " ,  
         d e s c r i p t i o n :   " L a   n o u v e l l e   m i n i - c r o s s   h a u t   d e   g a m m e   p o u r   e n f a n t s   e t   a d o l e s c e n t s .   M o t e u r   5   k W   d a n s   u n   c h %� s s i s   u l t r a - l %� g e r   d e   3 8   k g .   B a t t e r i e   5 8 V   2 2 A h .   L e   p a r f a i t   t r e m p l i n   v e r s   l a   c o m p %� t i t i o n   t o u t - t e r r a i n   %� l e c t r i q u e . " ,  
         d e s c r i p t i o n _ e n :   " T h e   n e w   p r e m i u m   m i n i - c r o s s   f o r   k i d s   a n d   t e e n s .   5   k W   m o t o r   i n   a n   u l t r a - l i g h t   3 8   k g   c h a s s i s .   5 8 V   2 2 A h   b a t t e r y .   T h e   p e r f e c t   s p r i n g b o a r d   t o   e l e c t r i c   o f f - r o a d   c o m p e t i t i o n . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 5   k W   � � �   3 8   k g   p l u m e   � � �   5 8 V   2 2 A h   � � �   E n f a n t s / A d o s " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 5   k W   � � �   3 8   k g   f e a t h e r w e i g h t   � � �   5 8 V   2 2 A h   � � �   K i d s / T e e n s " ,  
         p r i x :   3 6 9 0 ,  
         p r i x _ p r o m o :   3 4 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   3 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   P r i v %�   /   J e u n e s s e   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " P r i v a t e   U s e   /   Y o u t h   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   4 0 ,  
         a u t o n o m i e _ c i t y _ k m :   5 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   2 5 ,  
         v i t e s s e _ m a x :   6 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   6 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 5 ,  
         s t o c k :   8 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   3 8 ,  
         p a y l o a d _ k g :   7 0 ,  
         t e m p s _ c h a r g e _ h :   3 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   5   k W " ,  
         b a t t e r i e :   " P a c k   L i - i o n   1 . 2 8   k W h   5 8 V   2 2 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   1 . 2 8 ,  
             v o l t a g e :   5 8 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   3 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   3 ,  
             p o w e r _ p e a k _ k w :   5 ,  
             p o w e r _ h p :   6 . 8 ,  
             t o r q u e _ n m :   1 1 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 0   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - h y p e r - b e e - 2 0 2 5 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - h y p e r - b e e - 2 0 2 5 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - h y p e r - b e e - 2 0 2 5 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 7 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   3 4 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 7 ,  
         r e v i e w _ c o u n t :   1 5 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - h y p e r - b e e - x - 2 0 2 6 " ,  
         s l u g :   " s u r r o n - h y p e r - b e e - x - 2 0 2 6 " ,  
         n o m :   " S u r - R o n   H y p e r   B e e   X   ( M o d %� l e   2 0 2 6 ) " ,  
         n o m _ e n :   " S u r - R o n   H y p e r   B e e   X   ( 2 0 2 6   M o d e l ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M i n i - C r o s s   8 k W   1 8 4   N m   A n t i - W h e e l i n g   A p p " ,  
         c a t e g o r y _ l a b e l _ e n :   " M i n i - C r o s s   8 k W   1 8 4   N m   A n t i - W h e e l i n g   A p p   C o n t r o l " ,  
         d e s c r i p t i o n :   " M o t e u r   o p t i m i s %�   d e   8   k W   a v e c   c o u p l e   d e   1 8 4   N m   e t   v i t e s s e   m a x   6 4   k m / h .   S y s t %� m e   d ' a n t i - w h e e l i n g   %� l e c t r o n i q u e   e t   c o n t r %$%l e   p a r e n t a l   v i a   a p p l i c a t i o n   m o b i l e .   L a   m i n i - c r o s s   l a   p l u s   t e c h n o l o g i q u e   d u   m a r c h %� . " ,  
         d e s c r i p t i o n _ e n :   " O p t i m i z e d   8   k W   m o t o r   w i t h   1 8 4   N m   t o r q u e   a n d   6 4   k m / h   t o p   s p e e d .   E l e c t r o n i c   a n t i - w h e e l i n g   s y s t e m   a n d   p a r e n t a l   c o n t r o l   v i a   m o b i l e   a p p .   T h e   m o s t   t e c h n o l o g i c a l   m i n i - c r o s s   o n   t h e   m a r k e t . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 8   k W   � � �   1 8 4   N m   � � �   A n t i - w h e e l i n g   � � �   C o n t r %$%l e   p a r e n t a l   A p p " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 8   k W   � � �   1 8 4   N m   � � �   A n t i - W h e e l i n g   � � �   P a r e n t a l   A p p   C o n t r o l " ,  
         p r i x :   4 4 9 0 ,  
         p r i x _ p r o m o :   4 2 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   P r i v %�   /   J e u n e s s e   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " P r i v a t e   U s e   /   Y o u t h   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   5 0 ,  
         a u t o n o m i e _ c i t y _ k m :   6 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   3 0 ,  
         v i t e s s e _ m a x :   6 4 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 1 ,  
         s t o c k :   1 0 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   4 0 ,  
         p a y l o a d _ k g :   7 5 ,  
         t e m p s _ c h a r g e _ h :   3 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   8   k W   c o u p l e   1 8 4   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   1 . 5   k W h   5 8 V   2 6 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   1 . 5 ,  
             v o l t a g e :   5 8 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   3 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   4 ,  
             p o w e r _ p e a k _ k w :   8 ,  
             p o w e r _ h p :   1 0 . 9 ,  
             t o r q u e _ n m :   1 8 4 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 0   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " P a r e n t   C o n t r o l " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - h y p e r - b e e - x - 2 0 2 6 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - h y p e r - b e e - x - 2 0 2 6 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - h y p e r - b e e - x - 2 0 2 6 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 8 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   4 3 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 8 ,  
         r e v i e w _ c o u n t :   6 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - u l t r a - b e e - x - 2 0 2 3 " ,  
         s l u g :   " s u r r o n - u l t r a - b e e - x - 2 0 2 3 - o f f r o a d " ,  
         n o m :   " S u r - R o n   U l t r a   B e e   X   ( T o u t - t e r r a i n   2 0 2 3 ) " ,  
         n o m _ e n :   " S u r - R o n   U l t r a   B e e   X   ( O f f - R o a d   2 0 2 3 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " E n d u r o   %� l e c t r i q u e   1 2 . 5 k W   %� q u i v a l e n t   1 2 5 c c " ,  
         c a t e g o r y _ l a b e l _ e n :   " E l e c t r i c   E n d u r o   1 2 . 5 k W   1 2 5 c c   E q u i v a l e n t " ,  
         d e s c r i p t i o n :   " L e   c h a %� n o n   m a n q u a n t   e n t r e   L i g h t   B e e   e t   S t o r m   B e e .   M o t e u r   1 2 . 5   k W ,   b a t t e r i e   7 4 V   5 5 A h ,   v i t e s s e   m a x   9 0   k m / h   p o u r   s e u l e m e n t   8 5   k g .   L ' %� q u i v a l e n t   1 2 5 c c   %� l e c t r i q u e   l e   p l u s   l %� g e r   d u   m a r c h %� . " ,  
         d e s c r i p t i o n _ e n :   " T h e   m i s s i n g   l i n k   b e t w e e n   L i g h t   B e e   a n d   S t o r m   B e e .   1 2 . 5   k W   m o t o r ,   7 4 V   5 5 A h   b a t t e r y ,   9 0   k m / h   t o p   s p e e d   a t   j u s t   8 5   k g .   T h e   l i g h t e s t   1 2 5 c c   e l e c t r i c   e q u i v a l e n t   o n   t h e   m a r k e t . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 1 2 . 5   k W   � � �   9 0   k m / h   � � �   8 5   k g   � � �   7 4 V   5 5 A h " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 1 2 . 5   k W   � � �   9 0   k m / h   � � �   8 5   k g   � � �   7 4 V   5 5 A h " ,  
         p r i x :   8 9 9 0 ,  
         p r i x _ p r o m o :   8 7 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 1 _ B " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 1   o u   B   +   7 h   ( %� q u i v   1 2 5 c c ) " ,  
         l i c e n s e _ l a b e l _ e n :   " L i c e n s e   A 1   o r   C a r + 7 h   ( 1 2 5 c c   E q u i v a l e n t ) " ,  
         a u t o n o m i e _ k m :   9 0 ,  
         a u t o n o m i e _ c i t y _ k m :   1 1 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   6 0 ,  
         v i t e s s e _ m a x :   9 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   4 . 2 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 8 ,  
         s t o c k :   6 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   8 5 ,  
         p a y l o a d _ k g :   1 4 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   1 2 . 5   k W   c r %� t e   c o u p l e   3 8 0   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   4 . 0 7   k W h   7 4 V   5 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   4 . 0 7 ,  
             v o l t a g e :   7 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   6 ,  
             p o w e r _ p e a k _ k w :   1 2 . 5 ,  
             p o w e r _ h p :   1 7 ,  
             t o r q u e _ n m :   3 8 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 0   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " O f f - R o a d " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - x - 2 0 2 3 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - x - 2 0 2 3 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - u l t r a - b e e - x - 2 0 2 3 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 7 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   7 7 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 7 ,  
         r e v i e w _ c o u n t :   3 8 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   t r u e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - u l t r a - b e e - t - 2 0 2 4 " ,  
         s l u g :   " s u r r o n - u l t r a - b e e - t - 2 0 2 4 - t r i a l " ,  
         n o m :   " S u r - R o n   U l t r a   B e e   T   ( T r i a l   /   T r a i l   2 0 2 4 ) " ,  
         n o m _ e n :   " S u r - R o n   U l t r a   B e e   T   ( T r i a l   /   T r a i l   2 0 2 4 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " T r i a l   %� l e c t r i q u e   1 2 5 c c   R a p p o r t s   A d a p t %� s " ,  
         c a t e g o r y _ l a b e l _ e n :   " E l e c t r i c   1 2 5 c c   T r i a l   w i t h   A d a p t e d   G e a r   R a t i o s " ,  
         d e s c r i p t i o n :   " V e r s i o n   c o n f i g u r %� e   p o u r   l e   f r a n c h i s s e m e n t   t e c h n i q u e   a v e c   r a p p o r t s   d e   t r a n s m i s s i o n   a d a p t %� s .   C o u p l e   o p t i m i s %�   %�   b a s   r %� g i m e   p o u r   l e   t r i a l   e t   l e   t r a i l .   S u s p e n s i o n s   %�   g r a n d   d %� b a t t e m e n t   e t   p r o t e c t i o n   r e n f o r c %� e   d u   c h %� s s i s . " ,  
         d e s c r i p t i o n _ e n :   " C o n f i g u r e d   f o r   t e c h n i c a l   t r a i l   r i d i n g   w i t h   a d a p t e d   g e a r   r a t i o s .   L o w - R P M   o p t i m i z e d   t o r q u e   f o r   t r i a l   a n d   t r a i l .   L o n g - t r a v e l   s u s p e n s i o n   a n d   r e i n f o r c e d   c h a s s i s   p r o t e c t i o n . " ,  
         h i g h l i g h t _ s u b t i t l e :   " T r i a l   � � �   R a p p o r t s   c o u r t s   � � �   C o u p l e   b a s   r %� g i m e   o p t i m i s %� " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " T r i a l   � � �   S h o r t   R a t i o s   � � �   O p t i m i z e d   L o w - R P M   T o r q u e " ,  
         p r i x :   9 2 9 0 ,  
         p r i x _ p r o m o :   9 0 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 1 _ B " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 1   o u   B   +   7 h   ( %� q u i v   1 2 5 c c ) " ,  
         l i c e n s e _ l a b e l _ e n :   " L i c e n s e   A 1   o r   C a r + 7 h   ( 1 2 5 c c   E q u i v a l e n t ) " ,  
         a u t o n o m i e _ k m :   7 5 ,  
         a u t o n o m i e _ c i t y _ k m :   9 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   5 0 ,  
         v i t e s s e _ m a x :   8 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   4 . 8 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 ,  
         s t o c k :   4 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   8 7 ,  
         p a y l o a d _ k g :   1 4 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   1 2 . 5   k W   c o u p l e   t r i a l   o p t i m i s %� " ,  
         b a t t e r i e :   " P a c k   L i - i o n   4 . 0 7   k W h   7 4 V   5 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   4 . 0 7 ,  
             v o l t a g e :   7 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   6 ,  
             p o w e r _ p e a k _ k w :   1 2 . 5 ,  
             p o w e r _ h p :   1 7 ,  
             t o r q u e _ n m :   4 2 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 0   r e n f o r c %� e   X - R i n g   r a p p o r t s   c o u r t s " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " T r i a l " , " T r a i l " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - t - 2 0 2 4 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - t - 2 0 2 4 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - u l t r a - b e e - t - 2 0 2 4 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 6 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 4 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 6 ,  
         r e v i e w _ c o u n t :   2 2 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - u l t r a - b e e - r - 2 0 2 4 " ,  
         s l u g :   " s u r r o n - u l t r a - b e e - r - 2 0 2 4 - s u p e r m o t a r d " ,  
         n o m :   " S u r - R o n   U l t r a   B e e   R   ( R o a d   /   S u p e r m o t a r d   2 0 2 4 ) " ,  
         n o m _ e n :   " S u r - R o n   U l t r a   B e e   R   ( R o a d   /   S u p e r m o t o   2 0 2 4 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " S u p e r m o t a r d   %� l e c t r i q u e   1 2 5 c c   P n e u s   S l i c k s " ,  
         c a t e g o r y _ l a b e l _ e n :   " E l e c t r i c   1 2 5 c c   S u p e r m o t o   w i t h   S l i c k   T i r e s " ,  
         d e s c r i p t i o n :   " V e r s i o n   s u p e r m o t a r d   a v e c   p n e u s   s l i c k s   1 7   p o u c e s   p o u r   l a   r o u t e ,   s u s p e n s i o n s   r a f f e r m i e s   p o u r   l ' a s p h a l t e   e t   f r e i n s   s u r d i m e n s i o n n %� s .   L ' U l t r a   B e e   l a   p l u s   p o l y v a l e n t e   p o u r   u n   u s a g e   m i x t e   r o u t e   e t   l o i s i r . " ,  
         d e s c r i p t i o n _ e n :   " S u p e r m o t o   v e r s i o n   w i t h   1 7 - i n c h   s l i c k   t i r e s   f o r   r o a d ,   f i r m e n e d   s u s p e n s i o n   f o r   a s p h a l t   a n d   o v e r s i z e d   b r a k e s .   T h e   m o s t   v e r s a t i l e   U l t r a   B e e   f o r   m i x e d   r o a d   a n d   l e i s u r e   u s e . " ,  
         h i g h l i g h t _ s u b t i t l e :   " S u p e r m o t a r d   � � �   P n e u s   s l i c k s   1 7 \ "   � � �   S u s p e n s i o n s   r o u t e " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " S u p e r m o t o   � � �   1 7 \ "   S l i c k   T i r e s   � � �   R o a d   S u s p e n s i o n " ,  
         p r i x :   9 4 9 0 ,  
         p r i x _ p r o m o :   9 2 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 1 _ B " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 1   o u   B   +   7 h   ( %� q u i v   1 2 5 c c ) " ,  
         l i c e n s e _ l a b e l _ e n :   " L i c e n s e   A 1   o r   C a r + 7 h   ( 1 2 5 c c   E q u i v a l e n t ) " ,  
         a u t o n o m i e _ k m :   8 5 ,  
         a u t o n o m i e _ c i t y _ k m :   1 0 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   6 0 ,  
         v i t e s s e _ m a x :   9 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   4 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 7 ,  
         s t o c k :   5 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   8 6 ,  
         p a y l o a d _ k g :   1 4 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   1 2 . 5   k W   c r %� t e   c o u p l e   3 8 0   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   4 . 0 7   k W h   7 4 V   5 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   4 . 0 7 ,  
             v o l t a g e :   7 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   6 ,  
             p o w e r _ p e a k _ k w :   1 2 . 5 ,  
             p o w e r _ h p :   1 7 ,  
             t o r q u e _ n m :   3 8 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C o u r r o i e   c a r b o n e   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " R a i n " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " E u r o   5 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - r - 2 0 2 4 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - r - 2 0 2 4 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - u l t r a - b e e - r - 2 0 2 4 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 7 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   7 2 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 7 ,  
         r e v i e w _ c o u n t :   3 1 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - u l t r a - b e e - l 3 e - 2 0 2 5 " ,  
         s l u g :   " s u r r o n - u l t r a - b e e - l 3 e - 2 0 2 5 - h o m o l o g u e e " ,  
         n o m :   " S u r - R o n   U l t r a   B e e   L 3 E   H o m o l o g u %� e   ( 2 0 2 4 / 2 0 2 5 ) " ,  
         n o m _ e n :   " S u r - R o n   U l t r a   B e e   L 3 E   R o a d - L e g a l   ( 2 0 2 4 / 2 0 2 5 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " 1 2 5 c c   %� l e c t r i q u e   H o m o l o g u %� e   L 3 e   R o u t e   C o m p l %� t e " ,  
         c a t e g o r y _ l a b e l _ e n :   " L 3 e   R o a d - L e g a l   1 2 5 c c   E l e c t r i c   F u l l   R o a d   K i t " ,  
         d e s c r i p t i o n :   " V e r s i o n   h o m o l o g u %� e   L 3 e   %� q u i v a l e n t e   1 2 5 c c .   V i t e s s e   m a x   9 0   k m / h ,   n %� c e s s i t e   l e   p e r m i s   B   +   f o r m a t i o n   o u   p e r m i s   A 1 .   %� c l a i r a g e   c o m p l e t ,   p l a q u e ,   r %� t r o v i s e u r s   e t   t o u t   l e   n %� c e s s a i r e   p o u r   l a   r o u t e . " ,  
         d e s c r i p t i o n _ e n :   " L 3 e   r o a d - l e g a l   1 2 5 c c   e q u i v a l e n t   v e r s i o n .   9 0   k m / h   t o p   s p e e d ,   r e q u i r e s   B   l i c e n s e   +   t r a i n i n g   o r   A 1   l i c e n s e .   F u l l   l i g h t i n g ,   p l a t e ,   m i r r o r s   a n d   e v e r y t h i n g   n e e d e d   f o r   t h e   r o a d . " ,  
         h i g h l i g h t _ s u b t i t l e :   " L 3 E   H o m o l o g u %� e   � � �   9 0   k m / h   � � �   P e r m i s   A 1 / B + 7 h " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " L 3 E   R o a d - L e g a l   � � �   9 0   k m / h   � � �   A 1 / C a r + 7 h   L i c e n s e " ,  
         p r i x :   9 7 9 0 ,  
         p r i x _ p r o m o :   9 5 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 1 _ B " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 1   o u   B   +   7 h   ( %� q u i v   1 2 5 c c ) " ,  
         l i c e n s e _ l a b e l _ e n :   " L i c e n s e   A 1   o r   C a r + 7 h   ( 1 2 5 c c   E q u i v a l e n t ) " ,  
         a u t o n o m i e _ k m :   8 5 ,  
         a u t o n o m i e _ c i t y _ k m :   1 0 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   6 0 ,  
         v i t e s s e _ m a x :   9 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   4 . 2 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 8 ,  
         s t o c k :   7 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   9 0 ,  
         p a y l o a d _ k g :   1 4 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   1 2 . 5   k W   c r %� t e   h o m o l o g u %�   L 3 e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   4 . 0 7   k W h   7 4 V   5 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   4 . 0 7 ,  
             v o l t a g e :   7 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   6 ,  
             p o w e r _ p e a k _ k w :   1 2 . 5 ,  
             p o w e r _ h p :   1 7 ,  
             t o r q u e _ n m :   3 8 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 0   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " E u r o   5 " , " L 3 e " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - l 3 e - 2 0 2 5 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - l 3 e - 2 0 2 5 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - u l t r a - b e e - l 3 e - 2 0 2 5 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 6 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   7 2 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 6 ,  
         r e v i e w _ c o u n t :   1 9 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - u l t r a - b e e - c - 2 0 2 5 " ,  
         s l u g :   " s u r r o n - u l t r a - b e e - c - 2 0 2 5 - e n d u r o " ,  
         n o m :   " S u r - R o n   U l t r a   B e e   C   ( E n d u r o   2 0 2 5 ) " ,  
         n o m _ e n :   " S u r - R o n   U l t r a   B e e   C   ( E n d u r o   2 0 2 5 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " E n d u r o   F o r e s t i e r   C o u p l e   L i s s %�   1 2 5 c c " ,  
         c a t e g o r y _ l a b e l _ e n :   " F o r e s t   E n d u r o   S m o o t h e d   T o r q u e   1 2 5 c c " ,  
         d e s c r i p t i o n :   " M o d %� l e   E n d u r o   a v e c   r %� p a r t i t i o n   d u   c o u p l e   l i s s %� e   p o u r   l a   r a n d o n n %� e   e n   f o r %� t .   S u s p e n s i o n s   r e c a l i b r %� e s   p o u r   l e   c o n f o r t   s u r   l e s   l o n g s   p a r c o u r s .   P r o t e c t i o n   i n t %� g r a l e   d u   c h %� s s i s   e t   g a r d e   a u   s o l   r e h a u s s %� e . " ,  
         d e s c r i p t i o n _ e n :   " E n d u r o   m o d e l   w i t h   s m o o t h e d   t o r q u e   d e l i v e r y   f o r   f o r e s t   r i d i n g .   R e c a l i b r a t e d   s u s p e n s i o n   f o r   c o m f o r t   o n   l o n g   r i d e s .   F u l l   c h a s s i s   p r o t e c t i o n   a n d   i n c r e a s e d   g r o u n d   c l e a r a n c e . " ,  
         h i g h l i g h t _ s u b t i t l e :   " E n d u r o   � � �   C o u p l e   l i s s %�   � � �   S u s p e n s i o n s   c o n f o r t   � � �   F o r %� t " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " E n d u r o   � � �   S m o o t h e d   T o r q u e   � � �   C o m f o r t   S u s p e n s i o n   � � �   F o r e s t " ,  
         p r i x :   9 9 9 0 ,  
         p r i x _ p r o m o :   9 7 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 1 _ B " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 1   o u   B   +   7 h   ( %� q u i v   1 2 5 c c ) " ,  
         l i c e n s e _ l a b e l _ e n :   " L i c e n s e   A 1   o r   C a r + 7 h   ( 1 2 5 c c   E q u i v a l e n t ) " ,  
         a u t o n o m i e _ k m :   9 5 ,  
         a u t o n o m i e _ c i t y _ k m :   1 1 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   6 5 ,  
         v i t e s s e _ m a x :   8 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   4 . 8 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 ,  
         s t o c k :   5 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   8 8 ,  
         p a y l o a d _ k g :   1 4 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   1 2 . 5   k W   c o u p l e   l i s s %�   e n d u r o " ,  
         b a t t e r i e :   " P a c k   L i - i o n   4 . 4 4   k W h   7 4 V   6 0 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   4 . 4 4 ,  
             v o l t a g e :   7 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   6 ,  
             p o w e r _ p e a k _ k w :   1 2 . 5 ,  
             p o w e r _ h p :   1 7 ,  
             t o r q u e _ n m :   4 0 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 0   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " E n d u r o " , " T r a i l " , " F o r e s t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - c - 2 0 2 5 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - c - 2 0 2 5 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - u l t r a - b e e - c - 2 0 2 5 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 8 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   8 1 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 8 ,  
         r e v i e w _ c o u n t :   1 4 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - u l t r a - b e e - h p - 2 0 2 6 " ,  
         s l u g :   " s u r r o n - u l t r a - b e e - h p - 2 0 2 6 - h i g h - p e r f o r m a n c e " ,  
         n o m :   " S u r - R o n   U l t r a   B e e   H P   ( H i g h   P e r f o r m a n c e   2 0 2 6 ) " ,  
         n o m _ e n :   " S u r - R o n   U l t r a   B e e   H P   ( H i g h   P e r f o r m a n c e   2 0 2 6 ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " H y p e r - E n d u r o   2 4 . 5   k W   3 3 c h   5 2 0   N m   M o n s t r e " ,  
         c a t e g o r y _ l a b e l _ e n :   " H y p e r - E n d u r o   2 4 . 5   k W   3 3 h p   5 2 0   N m   M o n s t e r " ,  
         d e s c r i p t i o n :   " P u i s s a n c e   m o n s t r u e u s e   d e   2 4 . 5   k W   ( 3 3   c h )   !   B a t t e r i e   7 4 V   6 0 A h ,   c o u p l e   d e   5 2 0   N m   %�   l a   r o u e   e t   a u t o n o m i e   %� t e n d u e   j u s q u ' %�   1 4 0   k m   %�   b a s s e   v i t e s s e .   L e   s u m m u m   d e   l a   p e r f o r m a n c e   S u r - R o n   p o u r   p i l o t e s   e x p e r t s . " ,  
         d e s c r i p t i o n _ e n :   " M o n s t r o u s   2 4 . 5   k W   ( 3 3   h p )   p o w e r !   7 4 V   6 0 A h   b a t t e r y ,   5 2 0   N m   w h e e l   t o r q u e   a n d   e x t e n d e d   r a n g e   u p   t o   1 4 0   k m   a t   l o w   s p e e d .   T h e   p i n n a c l e   o f   S u r - R o n   p e r f o r m a n c e   f o r   e x p e r t   r i d e r s . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 2 4 . 5   k W   /   3 3   c h   � � �   5 2 0   N m   � � �   1 4 0   k m   � � �   M O N S T R E " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 2 4 . 5   k W   /   3 3   h p   � � �   5 2 0   N m   � � �   1 4 0   k m   � � �   M O N S T E R " ,  
         p r i x :   1 2 9 9 0 ,  
         p r i x _ p r o m o :   1 2 4 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 2 " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 2   ( J u s q u ' %�   3 5   k W ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A 2   L i c e n s e   ( U p   t o   3 5   k W ) " ,  
         a u t o n o m i e _ k m :   1 4 0 ,  
         a u t o n o m i e _ c i t y _ k m :   1 6 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   9 0 ,  
         v i t e s s e _ m a x :   1 0 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   3 . 5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 5 ,  
         s t o c k :   3 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   9 2 ,  
         p a y l o a d _ k g :   1 4 0 ,  
         t e m p s _ c h a r g e _ h :   6 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   2 4 . 5   k W   ( 3 3   c h )   c o u p l e   5 2 0   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   4 . 4 4   k W h   7 4 V   6 0 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   4 . 4 4 ,  
             v o l t a g e :   7 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   6 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   1 2 ,  
             p o w e r _ p e a k _ k w :   2 4 . 5 ,  
             p o w e r _ h p :   3 3 ,  
             t o r q u e _ n m :   5 2 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p e r f o r m a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 0   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " H y p e r " , " T r a c k " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - h p - 2 0 2 6 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - h p - 2 0 2 6 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - u l t r a - b e e - h p - 2 0 2 6 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 9 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   1 1 9 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 9 ,  
         r e v i e w _ c o u n t :   7 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   t r u e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - s t o r m - b e e - f - o f f r o a d " ,  
         s l u g :   " s u r r o n - s t o r m - b e e - f - m o t o c r o s s " ,  
         n o m :   " S u r - R o n   S t o r m   B e e   F   ( P u r e   M o t o c r o s s ) " ,  
         n o m _ e n :   " S u r - R o n   S t o r m   B e e   F   ( P u r e   M o t o c r o s s ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M o t o c r o s s   %� l e c t r i q u e   A d u l t e   2 2 . 5 k W   1 1 0   k m / h " ,  
         c a t e g o r y _ l a b e l _ e n :   " A d u l t   E l e c t r i c   M o t o c r o s s   2 2 . 5 k W   1 1 0   k m / h " ,  
         d e s c r i p t i o n :   " L a   m o t o   d e   c r o s s   d e   t a i l l e   a d u l t e   d a n s   s a   v e r s i o n   p u r e   o f f - r o a d .   M o t e u r   2 2 . 5   k W ,   b a t t e r i e   1 0 4 V   5 5 A h ,   v i t e s s e   m a x   1 1 0   k m / h .   P a s   d ' %� c l a i r a g e   :   d %� d i %� e   a u   c i r c u i t   e t   %�   l ' e n t r a %� n e m e n t   m o t o c r o s s . " ,  
         d e s c r i p t i o n _ e n :   " F u l l - s i z e   a d u l t   m o t o c r o s s   b i k e   i n   p u r e   o f f - r o a d   v e r s i o n .   2 2 . 5   k W   m o t o r ,   1 0 4 V   5 5 A h   b a t t e r y ,   1 1 0   k m / h   t o p   s p e e d .   N o   l i g h t i n g :   d e d i c a t e d   t o   t r a c k   a n d   m o t o c r o s s   t r a i n i n g . " ,  
         h i g h l i g h t _ s u b t i t l e :   " 2 2 . 5   k W   � � �   1 1 0   k m / h   � � �   1 0 4 V   5 5 A h   � � �   M o t o c r o s s   p u r " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " 2 2 . 5   k W   � � �   1 1 0   k m / h   � � �   1 0 4 V   5 5 A h   � � �   P u r e   M o t o c r o s s " ,  
         p r i x :   1 0 9 9 0 ,  
         p r i x _ p r o m o :   1 0 7 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 2 " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 2   ( U s a g e   C o m p e t i t i o n   /   O f f - R o a d ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A 2   L i c e n s e   ( C o m p e t i t i o n   /   O f f - R o a d   U s e ) " ,  
         a u t o n o m i e _ k m :   6 0 ,  
         a u t o n o m i e _ c i t y _ k m :   7 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   4 0 ,  
         v i t e s s e _ m a x :   1 1 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   3 . 2 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 3 ,  
         s t o c k :   3 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   1 0 5 ,  
         p a y l o a d _ k g :   1 3 0 ,  
         t e m p s _ c h a r g e _ h :   5 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   2 2 . 5   k W   c r %� t e   c o u p l e   6 0 0   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   5 . 7 2   k W h   1 0 4 V   5 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   5 . 7 2 ,  
             v o l t a g e :   1 0 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   1 2 ,  
             p o w e r _ p e a k _ k w :   2 2 . 5 ,  
             p o w e r _ h p :   3 0 . 6 ,  
             t o r q u e _ n m :   6 0 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   c o m p %� t i t i o n " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 5   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " S t a n d a r d " , " S p o r t " , " R a c e " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - f - o f f r o a d - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - f - o f f r o a d - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - s t o r m - b e e - f - o f f r o a d - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 8 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   5 1 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 8 ,  
         r e v i e w _ c o u n t :   1 2 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - s t o r m - b e e - e - e n d u r o " ,  
         s l u g :   " s u r r o n - s t o r m - b e e - e - e n d u r o - h o m o l o g u e e " ,  
         n o m :   " S u r - R o n   S t o r m   B e e   E   ( E n d u r o   H o m o l o g u %� e   R o u t e ) " ,  
         n o m _ e n :   " S u r - R o n   S t o r m   B e e   E   ( E n d u r o   R o a d - L e g a l ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " E n d u r o   H o m o l o g u %� e   1 2 5 c c   T a i l l e   N o r m a l e   1 0 4 V " ,  
         c a t e g o r y _ l a b e l _ e n :   " R o a d - L e g a l   E n d u r o   1 2 5 c c   F u l l - S i z e   1 0 4 V " ,  
         d e s c r i p t i o n :   " V e r s i o n   e n d u r o   h o m o l o g u %� e   r o u t e   d e   l a   S t o r m   B e e .   %� q u i v a l e n t e   1 2 5 c c   d e   t a i l l e   n o r m a l e   a v e c   %� c l a i r a g e   c o m p l e t ,   s u p p o r t   d e   p l a q u e   d ' i m m a t r i c u l a t i o n   e t   k i t   r o u t e .   B a t t e r i e   1 0 4 V   5 5 A h   p o u r   d e s   p e r f o r m a n c e s   d e   p r e m i e r   p l a n . " ,  
         d e s c r i p t i o n _ e n :   " R o a d - l e g a l   e n d u r o   v e r s i o n   o f   t h e   S t o r m   B e e .   F u l l - s i z e   1 2 5 c c   e q u i v a l e n t   w i t h   f u l l   l i g h t i n g ,   l i c e n s e   p l a t e   s u p p o r t   a n d   r o a d   k i t .   1 0 4 V   5 5 A h   b a t t e r y   f o r   t o p - t i e r   p e r f o r m a n c e . " ,  
         h i g h l i g h t _ s u b t i t l e :   " E n d u r o   H o m o l o g u %� e   � � �   1 0 4 V   5 5 A h   � � �   %� c l a i r a g e   c o m p l e t " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " R o a d - L e g a l   E n d u r o   � � �   1 0 4 V   5 5 A h   � � �   F u l l   L i g h t i n g " ,  
         p r i x :   1 1 4 9 0 ,  
         p r i x _ p r o m o :   1 1 2 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 1 _ B " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 1   o u   B   +   7 h   ( %� q u i v   1 2 5 c c ) " ,  
         l i c e n s e _ l a b e l _ e n :   " L i c e n s e   A 1   o r   C a r + 7 h   ( 1 2 5 c c   E q u i v a l e n t ) " ,  
         a u t o n o m i e _ k m :   7 0 ,  
         a u t o n o m i e _ c i t y _ k m :   8 5 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   5 0 ,  
         v i t e s s e _ m a x :   1 0 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   3 . 5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 5 ,  
         s t o c k :   4 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   1 1 0 ,  
         p a y l o a d _ k g :   1 3 0 ,  
         t e m p s _ c h a r g e _ h :   5 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   2 2 . 5   k W   c r %� t e   c o u p l e   6 0 0   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   5 . 7 2   k W h   1 0 4 V   5 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   5 . 7 2 ,  
             v o l t a g e :   1 0 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   1 2 ,  
             p o w e r _ p e a k _ k w :   2 2 . 5 ,  
             p o w e r _ h p :   3 0 . 6 ,  
             t o r q u e _ n m :   6 0 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   c o m p %� t i t i o n " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 5   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " E n d u r o " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " E u r o   5 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - e - e n d u r o - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - e - e n d u r o - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - s t o r m - b e e - e - e n d u r o - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 7 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 0 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 7 ,  
         r e v i e w _ c o u n t :   9 ,  
         f e a t u r e d :   f a l s e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - s t o r m - b e e - r - s u p e r m o t o " ,  
         s l u g :   " s u r r o n - s t o r m - b e e - r - s u p e r m o t o " ,  
         n o m :   " S u r - R o n   S t o r m   B e e   R   ( S u p e r m o t o ) " ,  
         n o m _ e n :   " S u r - R o n   S t o r m   B e e   R   ( S u p e r m o t o ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " S u p e r m o t o   %� l e c t r i q u e   A d u l t e   J a n t e s   1 7 \ "   P n e u   S p o r t " ,  
         c a t e g o r y _ l a b e l _ e n :   " A d u l t   E l e c t r i c   S u p e r m o t o   1 7 \ "   S p o r t   T i r e s " ,  
         d e s c r i p t i o n :   " V e r s i o n   s u p e r m o t o   d e   l a   S t o r m   B e e   a v e c   j a n t e s   1 7   p o u c e s   e t   p n e u s   s p o r t   p o u r   l a   r o u t e .   S u s p e n s i o n s   r a f f e r m i e s   e t   f r e i n s   h a u t e   p e r f o r m a n c e .   L a   p l u s   g r o s s e   s u p e r m o t o   %� l e c t r i q u e   d e   l a   g a m m e   S u r - R o n . " ,  
         d e s c r i p t i o n _ e n :   " S u p e r m o t o   v e r s i o n   o f   t h e   S t o r m   B e e   w i t h   1 7 - i n c h   r i m s   a n d   s p o r t   t i r e s   f o r   r o a d .   F i r m e n e d   s u s p e n s i o n   a n d   h i g h - p e r f o r m a n c e   b r a k e s .   T h e   b i g g e s t   e l e c t r i c   s u p e r m o t o   i n   t h e   S u r - R o n   r a n g e . " ,  
         h i g h l i g h t _ s u b t i t l e :   " S u p e r m o t o   � � �   J a n t e s   1 7 \ "   � � �   P n e u   s p o r t   � � �   1 0 4 V " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " S u p e r m o t o   � � �   1 7 \ "   R i m s   � � �   S p o r t   T i r e s   � � �   1 0 4 V " ,  
         p r i x :   1 1 4 9 0 ,  
         p r i x _ p r o m o :   1 1 2 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 2 " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 2   ( J u s q u ' %�   3 5   k W ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A 2   L i c e n s e   ( U p   t o   3 5   k W ) " ,  
         a u t o n o m i e _ k m :   6 5 ,  
         a u t o n o m i e _ c i t y _ k m :   8 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   4 5 ,  
         v i t e s s e _ m a x :   1 0 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   3 . 3 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 4 ,  
         s t o c k :   3 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   1 0 8 ,  
         p a y l o a d _ k g :   1 3 0 ,  
         t e m p s _ c h a r g e _ h :   5 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   2 2 . 5   k W   c r %� t e   c o u p l e   6 0 0   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   5 . 7 2   k W h   1 0 4 V   5 5 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   5 . 7 2 ,  
             v o l t a g e :   1 0 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   1 2 ,  
             p o w e r _ p e a k _ k w :   2 2 . 5 ,  
             p o w e r _ h p :   3 0 . 6 ,  
             t o r q u e _ n m :   6 0 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   c o m p %� t i t i o n " ,  
             t r a n s m i s s i o n :   " C o u r r o i e   c a r b o n e   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " S t a n d a r d " , " S p o r t " , " R a i n " , " T r a c k " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - r - s u p e r m o t o - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - r - s u p e r m o t o - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - s t o r m - b e e - r - s u p e r m o t o - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 8 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   5 5 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 8 ,  
         r e v i e w _ c o u n t :   8 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - s t o r m - b e e - 1 0 4 v - 2 0 2 6 " ,  
         s l u g :   " s u r r o n - s t o r m - b e e - 1 0 4 v - 2 0 2 6 - u p g r a d e " ,  
         n o m :   " S u r - R o n   S t o r m   B e e   1 0 4 V   ( M i s e   %�   N i v e a u   2 0 2 6 ) " ,  
         n o m _ e n :   " S u r - R o n   S t o r m   B e e   1 0 4 V   ( 2 0 2 6   U p g r a d e ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " M o t o c r o s s   1 0 4 V   C e l l u l e s   H a u t e   C a p a c i t %�   2 0 2 6 " ,  
         c a t e g o r y _ l a b e l _ e n :   " M o t o c r o s s   1 0 4 V   H i g h - C a p a c i t y   C e l l s   2 0 2 6 " ,  
         d e s c r i p t i o n :   " M i s e   %�   n i v e a u   2 0 2 6   a v e c   n o u v e l l e   g e s t i o n   d e   b a t t e r i e   %�   c e l l u l e s   h a u t e   c a p a c i t %�   e t   r e f r o i d i s s e m e n t   l i q u i d e   d u   m o t e u r   r e v u   p o u r   %� v i t e r   l a   s u r c h a u f f e   e n   c o n d i t i o n s   c o m p %� t i t i v e s .   L a   S t o r m   B e e   d a n s   s a   v e r s i o n   l a   p l u s   a b o u t i e . " ,  
         d e s c r i p t i o n _ e n :   " 2 0 2 6   u p g r a d e   w i t h   n e w   h i g h - c a p a c i t y   c e l l   b a t t e r y   m a n a g e m e n t   a n d   r e v i s e d   l i q u i d   e n g i n e   c o o l i n g   t o   p r e v e n t   o v e r h e a t i n g   i n   c o m p e t i t i v e   c o n d i t i o n s .   T h e   S t o r m   B e e   i n   i t s   m o s t   r e f i n e d   v e r s i o n . " ,  
         h i g h l i g h t _ s u b t i t l e :   " N O U V E A U   2 0 2 6   � � �   R e f r o i d i s s e m e n t   l i q u i d e   � � �   C e l l u l e s   H C " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " N E W   2 0 2 6   � � �   L i q u i d   C o o l i n g   � � �   H i g h - C a p a c i t y   C e l l s " ,  
         p r i x :   1 1 9 9 0 ,  
         p r i x _ p r o m o :   1 1 7 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 2 " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 2   ( J u s q u ' %�   3 5   k W ) " ,  
         l i c e n s e _ l a b e l _ e n :   " A 2   L i c e n s e   ( U p   t o   3 5   k W ) " ,  
         a u t o n o m i e _ k m :   7 5 ,  
         a u t o n o m i e _ c i t y _ k m :   9 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   5 0 ,  
         v i t e s s e _ m a x :   1 1 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   3 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 2 ,  
         s t o c k :   5 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   1 0 3 ,  
         p a y l o a d _ k g :   1 3 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   2 2 . 5   k W   r e f r o i d i s s e m e n t   l i q u i d e   c o u p l e   6 2 0   N m " ,  
         b a t t e r i e :   " P a c k   L i - i o n   6 . 0   k W h   1 0 4 V   5 8 A h   ( L i t h i u m - I o n   N M C   h a u t e   c a p a c i t %� ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   6 ,  
             v o l t a g e :   1 0 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   1 2 ,  
             p o w e r _ p e a k _ k w :   2 2 . 5 ,  
             p o w e r _ h p :   3 0 . 6 ,  
             t o r q u e _ n m :   6 2 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   c o m p %� t i t i o n   r e f r o i d i s s e m e n t   l i q u i d e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 5   r e n f o r c %� e   X - R i n g " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " S t a n d a r d " , " S p o r t " , " R a c e " , " E n d u r a n c e " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - 1 0 4 v - 2 0 2 6 - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - s t o r m - b e e - 1 0 4 v - 2 0 2 6 - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - s t o r m - b e e - 1 0 4 v - 2 0 2 6 - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 9 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 4 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 9 ,  
         r e v i e w _ c o u n t :   4 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   t r u e ,  
         i s _ n e w :   t r u e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - x - b l a c k - e d i t i o n " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - x - b l a c k - e d i t i o n " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   X   \ " B l a c k   E d i t i o n \ " " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   X   \ " B l a c k   E d i t i o n \ " " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " %� d i t i o n   L i m i t %� e   N o i r e   M a t e   C o n t r %$%l e u r   S p o r t " ,  
         c a t e g o r y _ l a b e l _ e n :   " L i m i t e d   E d i t i o n   M a t t e   B l a c k   S p o r t   C o n t r o l l e r " ,  
         d e s c r i p t i o n :   " F i n i t i o n   n o i r e   m a t e   i n t %� g r a l e   a v e c   c o n t r %$%l e u r   p a r a m %� t r %�   d ' u s i n e   p o u r   u n e   r %� p o n s e   d e   p o i g n %� e   p l u s   a g r e s s i v e .   S %� r i e   l i m i t %� e   n u m %� r o t %� e .   L e   l o o k   l e   p l u s   a g r e s s i f   d e   l a   g a m m e   L i g h t   B e e . " ,  
         d e s c r i p t i o n _ e n :   " F u l l   m a t t e   b l a c k   f i n i s h   w i t h   f a c t o r y - t u n e d   c o n t r o l l e r   f o r   m o r e   a g g r e s s i v e   t h r o t t l e   r e s p o n s e .   N u m b e r e d   l i m i t e d   s e r i e s .   T h e   m o s t   a g g r e s s i v e   l o o k   i n   t h e   L i g h t   B e e   r a n g e . " ,  
         h i g h l i g h t _ s u b t i t l e :   " B l a c k   E d i t i o n   � � �   N o i r e   m a t e   � � �   C o n t r %$%l e u r   s p o r t   � � �   L i m i t %� e " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " B l a c k   E d i t i o n   � � �   M a t t e   B l a c k   � � �   S p o r t   C o n t r o l l e r   � � �   L i m i t e d " ,  
         p r i x :   5 4 9 0 ,  
         p r i x _ p r o m o :   5 2 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   7 0 ,  
         a u t o n o m i e _ c i t y _ k m :   8 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   4 5 ,  
         v i t e s s e _ m a x :   8 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   5 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 1 ,  
         s t o c k :   3 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " S %� r i e   l i m i t %� e   -   E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " L i m i t e d   E d i t i o n   -   I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 3 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   8   k W   c r %� t e   c o n t r %$%l e u r   s p o r t   B l a c k   E d i t i o n " ,  
         b a t t e r i e :   " P a c k   L i - i o n   2 . 4   k W h   6 0 V   4 0 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   2 . 4 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   4 ,  
             p o w e r _ p e a k _ k w :   8 ,  
             p o w e r _ h p :   1 0 . 9 ,  
             t o r q u e _ n m :   2 6 6 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e   o r   n o i r e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " S t a n d a r d " , " S p o r t " , " B l a c k   E d i t i o n   A g g r e s s i v e " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - b l a c k - e d i t i o n - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - b l a c k - e d i t i o n - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - x - b l a c k - e d i t i o n - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 9 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 0 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 9 ,  
         r e v i e w _ c o u n t :   1 1 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - l i g h t - b e e - x - k l i n g - e d i t i o n " ,  
         s l u g :   " s u r r o n - l i g h t - b e e - x - k l i n g - e d i t i o n - a s i a " ,  
         n o m :   " S u r - R o n   L i g h t   B e e   X   \ " K � � �   E d i t i o n \ "   ( A s i a   E x c l u s i v e ) " ,  
         n o m _ e n :   " S u r - R o n   L i g h t   B e e   X   \ " K � � �   E d i t i o n \ "   ( A s i a   E x c l u s i v e ) " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " %� d i t i o n   E x c l u s i v e   A s i e   O r / N o i r   P r o t e c t i o n s   C a r b o n e " ,  
         c a t e g o r y _ l a b e l _ e n :   " A s i a   E x c l u s i v e   G o l d / B l a c k   E d i t i o n   C a r b o n   F r a m e   G u a r d s " ,  
         d e s c r i p t i o n :   " K i t   d %� c o   e x c l u s i f   d o r %� / n o i r   a v e c   p r o t e c t i o n s   d e   c a d r e   e n   c a r b o n e   l i v r %� e s   d ' o r i g i n e .   %� d i t i o n   e x c l u s i v e   m a r c h %�   a s i a t i q u e   d %� s o r m a i s   d i s p o n i b l e   e n   E u r o p e   v i a   n o t r e   s h o w r o o m .   P i %� c e s   c a r b o n e   i n t r o u v a b l e s   a i l l e u r s . " ,  
         d e s c r i p t i o n _ e n :   " E x c l u s i v e   g o l d / b l a c k   d e c a l   k i t   w i t h   c a r b o n   f r a m e   g u a r d s   i n c l u d e d   a s   s t a n d a r d .   A s i a - e x c l u s i v e   e d i t i o n   n o w   a v a i l a b l e   i n   E u r o p e   t h r o u g h   o u r   s h o w r o o m .   C a r b o n   p a r t s   f o u n d   n o w h e r e   e l s e . " ,  
         h i g h l i g h t _ s u b t i t l e :   " K � � �   E d i t i o n   � � �   O r / N o i r   � � �   P r o t e c t i o n s   c a r b o n e   � � �   E x c l u s i v e " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " K � � �   E d i t i o n   � � �   G o l d / B l a c k   � � �   C a r b o n   G u a r d s   � � �   E x c l u s i v e " ,  
         p r i x :   5 2 9 0 ,  
         p r i x _ p r o m o :   5 0 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   4 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " n o n e " ,  
         l i c e n s e _ l a b e l _ f r :   " U s a g e   O f f - R o a d   U n i q u e m e n t   ( S a n s   P e r m i s ) " ,  
         l i c e n s e _ l a b e l _ e n :   " O f f - R o a d   U s e   O n l y   ( N o   L i c e n s e ) " ,  
         a u t o n o m i e _ k m :   7 0 ,  
         a u t o n o m i e _ c i t y _ k m :   8 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   4 5 ,  
         v i t e s s e _ m a x :   8 0 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   5 . 2 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   2 . 2 ,  
         s t o c k :   2 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " %� d i t i o n   e x c l u s i v e   -   E n   s t o c k   a u   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " E x c l u s i v e   E d i t i o n   -   I n   s t o c k   a t   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   5 4 ,  
         p a y l o a d _ k g :   1 0 0 ,  
         t e m p s _ c h a r g e _ h :   4 . 5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   8   k W   c r %� t e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   2 . 4   k W h   6 0 V   4 0 A h   ( L i t h i u m - I o n   N M C ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   2 . 4 ,  
             v o l t a g e :   6 0 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   4 . 5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   4 ,  
             p o w e r _ p e a k _ k w :   8 ,  
             p o w e r _ h p :   1 0 . 9 ,  
             t o r q u e _ n m :   2 6 6 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   4 2 8 H   r e n f o r c %� e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - k l i n g - e d i t i o n - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - l i g h t - b e e - x - k l i n g - e d i t i o n - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - l i g h t - b e e - x - k l i n g - e d i t i o n - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   4 . 8 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   6 0 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   4 . 8 ,  
         r e v i e w _ c o u n t :   6 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     } ,  
     {  
         i d :   " s u r r o n - u l t r a - b e e - a n n i v e r s a r y - e d i t i o n " ,  
         s l u g :   " s u r r o n - u l t r a - b e e - l i m i t e d - a n n i v e r s a r y - e d i t i o n " ,  
         n o m :   " S u r - R o n   U l t r a   B e e   L i m i t e d   A n n i v e r s a r y   E d i t i o n " ,  
         n o m _ e n :   " S u r - R o n   U l t r a   B e e   L i m i t e d   A n n i v e r s a r y   E d i t i o n " ,  
         b r a n d :   " S u r - R o n " ,  
         c a t e g o r y _ l a b e l :   " %� d i t i o n   A n n i v e r s a i r e   M o y e u x   A n o d i s %� s   S u s p e n s i o n s   H P " ,  
         c a t e g o r y _ l a b e l _ e n :   " A n n i v e r s a r y   E d i t i o n   A n o d i z e d   H u b s   H P   S u s p e n s i o n " ,  
         d e s c r i p t i o n :   " %� d i t i o n   l i m i t %� e   a n n i v e r s a i r e   a v e c   m o y e u x   d e   r o u e s   a n o d i s %� s   e t   s u s p e n s i o n s   a j u s t a b l e s   h a u t   d e   g a m m e .   C %� l %� b r e z   l ' e x p a n s i o n   i n t e r n a t i o n a l e   d e   l a   m a r q u e   a v e c   c e t t e   p i %� c e   d e   c o l l e c t i o n   u n i q u e .   N u m %� r o t %� e   e t   c e r t i f i %� e . " ,  
         d e s c r i p t i o n _ e n :   " L i m i t e d   a n n i v e r s a r y   e d i t i o n   w i t h   a n o d i z e d   w h e e l   h u b s   a n d   p r e m i u m   a d j u s t a b l e   s u s p e n s i o n .   C e l e b r a t e   t h e   b r a n d ' s   i n t e r n a t i o n a l   e x p a n s i o n   w i t h   t h i s   u n i q u e   c o l l e c t o r ' s   i t e m .   N u m b e r e d   a n d   c e r t i f i e d . " ,  
         h i g h l i g h t _ s u b t i t l e :   " A n n i v e r s a r y   � � �   M o y e u x   a n o d i s %� s   � � �   S u s p e n s i o n s   H P   � � �   N u m %� r o t %� e " ,  
         h i g h l i g h t _ s u b t i t l e _ e n :   " A n n i v e r s a r y   � � �   A n o d i z e d   H u b s   � � �   H P   S u s p e n s i o n   � � �   N u m b e r e d " ,  
         p r i x :   1 1 4 9 0 ,  
         p r i x _ p r o m o :   1 1 2 9 0 ,  
         e c o _ b o n u s _ e l i g i b l e :   t r u e ,  
         m a x _ e c o _ b o n u s :   9 0 0 ,  
         i m a g e _ u r l :   " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ,  
         i m a g e s :   [ " / i m a g e s / p r o d u c t s / s u r r o n - l i g h t - b e e - x . j p g " ] ,  
         t y p e :   " m o t o " ,  
         l i c e n s e _ c a t e g o r y :   " A 1 _ B " ,  
         l i c e n s e _ l a b e l _ f r :   " P e r m i s   A 1   o u   B   +   7 h   ( %� q u i v   1 2 5 c c ) " ,  
         l i c e n s e _ l a b e l _ e n :   " L i c e n s e   A 1   o r   C a r + 7 h   ( 1 2 5 c c   E q u i v a l e n t ) " ,  
         a u t o n o m i e _ k m :   1 0 0 ,  
         a u t o n o m i e _ c i t y _ k m :   1 2 0 ,  
         a u t o n o m i e _ h i g h w a y _ k m :   7 0 ,  
         v i t e s s e _ m a x :   9 5 ,  
         a c c e l e r a t i o n _ 0 _ 1 0 0 _ s :   3 . 8 ,  
         a c c e l e r a t i o n _ 0 _ 5 0 _ s :   1 . 6 ,  
         s t o c k :   2 ,  
         s t o c k _ s t a t u s :   " i n _ s h o w r o o m " ,  
         d e l i v e r y _ t i m e _ l a b e l :   " %� d i t i o n   l i m i t %� e   n u m %� r o t %� e   -   S h o w r o o m   P a r i s   1 7 e   � � �   L i v r a i s o n   4 8 - 7 2 h " ,  
         d e l i v e r y _ t i m e _ l a b e l _ e n :   " N u m b e r e d   L i m i t e d   E d i t i o n   -   P a r i s   S h o w r o o m   � � �   4 8 - 7 2 h   d e l i v e r y " ,  
         p o i d s _ k g :   8 6 ,  
         p a y l o a d _ k g :   1 4 0 ,  
         t e m p s _ c h a r g e _ h :   5 ,  
         m o t e u r :   " M o t e u r   %� l e c t r i q u e   b r u s h l e s s   1 2 . 5   k W   c r %� t e   c o u p l e   4 0 0   N m   %� d i t i o n   s p %� c i a l e " ,  
         b a t t e r i e :   " P a c k   L i - i o n   4 . 4 4   k W h   7 4 V   6 0 A h   ( L i t h i u m - I o n   N M C   h a u t e   d %� c h a r g e ) " ,  
         b a t t e r y _ s p e c s :   {  
             c a p a c i t y _ k w h :   4 . 4 4 ,  
             v o l t a g e :   7 4 ,  
             r e m o v a b l e :   t r u e ,  
             c e l l _ t y p e :   " L G / S a m s u n g   2 1 7 0 0   H i g h   D i s c h a r g e " ,  
             c h a r g e _ t i m e _ h o m e _ h :   5 ,  
             c h a r g e _ t i m e _ f a s t _ m i n :   u n d e f i n e d ,  
             w a r r a n t y _ y e a r s :   2 ,  
             w a r r a n t y _ k m :   2 0 0 0 0 ,  
             i p _ r a t i n g :   " I P 6 5 "  
         } ,  
         m o t o r _ s p e c s :   {  
             p o w e r _ n o m i n a l _ k w :   6 ,  
             p o w e r _ p e a k _ k w :   1 2 . 5 ,  
             p o w e r _ h p :   1 7 ,  
             t o r q u e _ n m :   4 0 0 ,  
             m o t o r _ t y p e :   " M o t e u r   b r u s h l e s s   %�   a i m a n t s   p e r m a n e n t s   h a u t e   p u i s s a n c e " ,  
             t r a n s m i s s i o n :   " C h a %� n e   5 2 0   r e n f o r c %� e   X - R i n g   o r   n o i r e " ,  
             r e g e n _ b r a k i n g :   t r u e ,  
             r i d i n g _ m o d e s :   [ " E c o " , " S t a n d a r d " , " S p o r t " , " A n n i v e r s a r y   P r o " ]  
         } ,  
         c e r t i f i c a t i o n s :   [ " C E " , " U N   3 8 . 3 " , " U L   2 8 4 9 " , " E u r o   5 " ] ,  
         a v a i l a b l e _ o p t i o n s :   [  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - a n n i v e r s a r y - e d i t i o n - 1 " ,  
                 n a m e :   " P a c k   E n t r e t i e n   S %� r %� n i t %�   &   P i %� c e s   d ' U s u r e   2   A n s " ,  
                 n a m e _ e n :   " 2 - Y e a r   P e a c e - o f - M i n d   M a i n t e n a n c e   P a c k " ,  
                 p r i c e :   1 9 0 ,  
                 d e s c r i p t i o n :   " C o u v r e   l e s   p l a q u e t t e s ,   r %� v i s i o n s   s e m e s t r i e l l e s   e t   r %� g l a g e s   e n   c e n t r e   a g r %� %� . " ,  
                 d e s c r i p t i o n _ e n :   " C o v e r s   b r a k e   p a d s ,   b i - a n n u a l   i n s p e c t i o n s ,   a n d   t u n i n g   i n   a u t h o r i z e d   c e n t e r s . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             } ,  
             {  
                 i d :   " o p t - s u r r o n - u l t r a - b e e - a n n i v e r s a r y - e d i t i o n - 2 " ,  
                 n a m e :   " A n t i v o l   C o n n e c t %�   G P S   T r a c k e r   4 G   a v e c   A l a r m e   1 1 0 d B " ,  
                 n a m e _ e n :   " 4 G   G P S   T r a c k e r   &   1 1 0 d B   A n t i - T h e f t   A l a r m " ,  
                 p r i c e :   1 4 9 ,  
                 d e s c r i p t i o n :   " G %� o l o c a l i s a t i o n   e n   t e m p s   r %� e l   s u r   s m a r t p h o n e   e t   d %� t e c t i o n   d e   m o u v e m e n t   s u s p e c t . " ,  
                 d e s c r i p t i o n _ e n :   " R e a l - t i m e   s m a r t p h o n e   g e o l o c a t i o n   a n d   a n t i - t a m p e r   s h o c k   s e n s o r . " ,  
                 c a t e g o r y :   " s e c u r i t y "  
             }  
         ] ,  
         r e v i e w s :   [  
             {  
                 i d :   " r e v - s u r r o n - u l t r a - b e e - a n n i v e r s a r y - e d i t i o n - 1 " ,  
                 a u t h o r :   " L u c a s   M .   ( P a r i s ) " ,  
                 r a t i n g :   5 ,  
                 d a t e :   " 1 5   J a n v i e r   2 0 2 6 " ,  
                 v e r i f i e d :   t r u e ,  
                 t i t l e :   " M a c h i n e   e x c e p t i o n n e l l e   e t   s e n s a t i o n s   g a r a n t i e s " ,  
                 t i t l e _ e n :   " E x c e p t i o n a l   m a c h i n e   a n d   g u a r a n t e e d   t h r i l l s " ,  
                 c o m m e n t :   " R a p p o r t   q u a l i t %� - p r i x   i m b a t t a b l e   p o u r   c e   t y p e   d e   m a c h i n e .   L a   l i v r a i s o n   %� t a i t   i m p e c c a b l e   e t   l e   S A V   r %� a c t i f .   J e   r e c o m m a n d e   s a n s   h %� s i t e r . " ,  
                 c o m m e n t _ e n :   " U n b e a t a b l e   v a l u e   f o r   m o n e y   f o r   t h i s   t y p e   o f   m a c h i n e .   D e l i v e r y   w a s   f l a w l e s s   a n d   a f t e r - s a l e s   s e r v i c e   r e s p o n s i v e .   H i g h l y   r e c o m m e n d . " ,  
                 r e a l _ r a n g e _ t e s t e d _ k m :   8 5 ,  
                 l o c a t i o n :   " %� l e - d e - F r a n c e "  
             }  
         ] ,  
         r a t i n g :   5 ,  
         r e v i e w _ c o u n t :   3 ,  
         f e a t u r e d :   t r u e ,  
         b e s t s e l l e r :   f a l s e ,  
         i s _ n e w :   f a l s e  
     }  
 

];

export function getProduct(idOrSlug: string): Product | undefined {
  return products.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export function getProductsByType(type: "moto" | "velo"): Product[] {
  return products.filter((p) => p.type === type);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
