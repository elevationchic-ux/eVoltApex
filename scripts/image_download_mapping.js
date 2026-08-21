// Image Download Mapping Script
// Maps SVG-based products to official image sources
// For brands without accessible press images, provides stock photo alternatives

const svgProducts = [
  {
    id: "moto-volt-r",
    name: "Volt R Roadster Hyper",
    brand: "eVolt Racing",
    currentImage: "/images/products/moto-volt-r-roadster.svg",
    targetImage: "/images/products/moto-volt-r-roadster.jpg",
    officialSource: "https://evoltracing.com/press - Check brand press room",
    stockAlternative: "Unsplash: 'electric roadster motorcycle' or 'high performance electric bike'",
    notes: "eVolt Racing may not have public press images - use stock photo"
  },
  {
    id: "moto-trail-adv",
    name: "Trail ADV Explorer Pro",
    brand: "eVolt Overland",
    currentImage: "/images/products/moto-trail-adv-explore.svg",
    targetImage: "/images/products/moto-trail-adv-explore.jpg",
    officialSource: "https://evoltracing.com/press - Check brand press room",
    stockAlternative: "Unsplash: 'electric adventure motorcycle' or 'dual sport electric bike'",
    notes: "eVolt Overland may not have public press images - use stock photo"
  },
  {
    id: "livewire-s2-mulholland",
    name: "LiveWire S2 Mulholland",
    brand: "LiveWire",
    currentImage: "/images/products/livewire-s2-mulholland.svg",
    targetImage: "/images/products/livewire-s2-mulholland.jpg",
    officialSource: "https://www.livewire.com/press",
    pressImage: "LiveWire S2 Mulholland product shot",
    notes: "Harley-Davidson/LiveWire press room has high-res images"
  },
  {
    id: "zero-fxe-supermotard",
    name: "Zero FXE Supermotard",
    brand: "Zero Motorcycles",
    currentImage: "/images/products/zero-fxe-supermotard.svg",
    targetImage: "/images/products/zero-fxe-supermotard.jpg",
    officialSource: "https://zeromotorcycles.com/press-downloads",
    pressImage: "Zero FXE product photography",
    notes: "Zero has extensive press gallery - use official images"
  },
  {
    id: "zero-ds-dual-sport",
    name: "Zero DS Dual Sport",
    brand: "Zero Motorcycles",
    currentImage: "/images/products/zero-ds-dual-sport.svg",
    targetImage: "/images/products/zero-ds-dual-sport.jpg",
    officialSource: "https://zeromotorcycles.com/press-downloads",
    pressImage: "Zero DS product photography",
    notes: "Zero has extensive press gallery - use official images"
  },
  {
    id: "moto-cafe-e-retro",
    name: "Moto Cafe E Retro",
    brand: "Moto Cafe",
    currentImage: "/images/products/moto-cafe-e-retro.svg",
    targetImage: "/images/products/moto-cafe-e-retro.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'retro electric motorcycle' or 'cafe racer electric'",
    notes: "Use stock photo - search for retro/cafe racer style electric bikes"
  },
  {
    id: "horwin-cr6-pro-cafe",
    name: "Horwin CR6 Pro Cafe",
    brand: "Horwin",
    currentImage: "/images/products/horwin-cr6-pro-cafe.svg",
    targetImage: "/images/products/horwin-cr6-pro-cafe.jpg",
    officialSource: "https://www.horwin.com/media-center",
    pressImage: "Horwin CR6 product images",
    notes: "Horwin has media center - check for CR6 cafe racer images"
  },
  {
    id: "super-soco-tc-max-racer",
    name: "Super Soco TC Max Racer",
    brand: "Super Soco",
    currentImage: "/images/products/super-soco-tc-max-racer.svg",
    targetImage: "/images/products/super-soco-tc-max-racer.jpg",
    officialSource: "https://vmotosoco.com/media-center",
    pressImage: "Super Soco TC Max product images",
    notes: "VMoto Soco media center should have TC Max images"
  },
  {
    id: "tromox-ukko-s-pro",
    name: "Tromox UKKO S Pro",
    brand: "Tromox",
    currentImage: "/images/products/tromox-ukko-s-pro.svg",
    targetImage: "/images/products/tromox-ukko-s-pro.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric scooter modern' or 'maxi scooter electric'",
    notes: "Use stock photo - modern electric scooter"
  },
  {
    id: "kollter-es1-pro-enduro",
    name: "Kollter ES1 Pro Enduro",
    brand: "Kollter",
    currentImage: "/images/products/kollter-es1-pro-enduro.svg",
    targetImage: "/images/products/kollter-es1-pro-enduro.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric enduro motorcycle' or 'off-road electric bike'",
    notes: "Use stock photo - enduro/dual sport electric bike"
  },
  {
    id: "caofen-f80-enduro-oil",
    name: "Caofen F80 Enduro Oil",
    brand: "Caofen",
    currentImage: "/images/products/caofen-f80-enduro-oil.svg",
    targetImage: "/images/products/caofen-f80-enduro-oil.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric enduro motorcycle' or 'dirt bike electric'",
    notes: "Use stock photo - enduro electric bike"
  },
  {
    id: "niu-rqi-sport-125",
    name: "Niu RQi Sport 125",
    brand: "Niu Technologies",
    currentImage: "/images/products/niu-rqi-sport-125.svg",
    targetImage: "/images/products/niu-rqi-sport-125.jpg",
    officialSource: "https://www.niu.com/press",
    pressImage: "Niu RQi Sport product images",
    notes: "Niu has press section - check for RQi Sport images"
  },
  {
    id: "horwin-ht5-trail",
    name: "Horwin HT5 Trail",
    brand: "Horwin",
    currentImage: "/images/products/horwin-ht5-trail.svg",
    targetImage: "/images/products/horwin-ht5-trail.jpg",
    officialSource: "https://www.horwin.com/media-center",
    pressImage: "Horwin HT5 product images",
    notes: "Horwin media center - check for HT5 trail images"
  },
  {
    id: "braaap-moto-e-125",
    name: "Braaap Moto E 125",
    brand: "Braaap",
    currentImage: "/images/products/braaap-moto-e-125.svg",
    targetImage: "/images/products/braaap-moto-e-125.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: '125cc electric motorcycle' or 'small electric bike'",
    notes: "Use stock photo - 125cc electric motorcycle"
  },
  {
    id: "bmw-ce-04-avantgarde",
    name: "BMW CE 04 Avantgarde",
    brand: "BMW Motorrad",
    currentImage: "/images/products/bmw-ce-04-avantgarde.svg",
    targetImage: "/images/products/bmw-ce-04-avantgarde.jpg",
    officialSource: "https://www.press.bmwgroup.com/bmw-motorrad",
    pressImage: "BMW CE 04 product photography",
    notes: "BMW press portal has extensive CE 04 image gallery"
  },
  {
    id: "silence-s01-plus-official",
    name: "Silence S01 Plus Official",
    brand: "Silence",
    currentImage: "/images/products/silence-s01-plus-official.svg",
    targetImage: "/images/products/silence-s01-plus-official.jpg",
    officialSource: "https://silence.eu/media",
    pressImage: "Silence S01 product images",
    notes: "Silence has media section - check for S01 images"
  },
  {
    id: "ray-77-gt-tourer",
    name: "Ray 77 GT Tourer",
    brand: "Ray",
    currentImage: "/images/products/ray-77-gt-tourer.svg",
    targetImage: "/images/products/ray-77-gt-tourer.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric touring motorcycle' or 'maxi scooter electric'",
    notes: "Use stock photo - touring electric motorcycle"
  },
  {
    id: "segway-e300se-abs",
    name: "Segway E300SE ABS",
    brand: "Segway",
    currentImage: "/images/products/segway-e300se-abs.svg",
    targetImage: "/images/products/segway-e300se-abs.jpg",
    officialSource: "https://www.segway.com/media-center",
    pressImage: "Segway E300SE product images",
    notes: "Segway media center - check for E300SE images"
  },
  {
    id: "moto-city-ls-125",
    name: "Moto City LS 125",
    brand: "Moto City",
    currentImage: "/images/products/moto-city-ls-125.svg",
    targetImage: "/images/products/moto-city-ls-125.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'urban electric motorcycle' or 'city electric scooter'",
    notes: "Use stock photo - urban electric motorcycle"
  },
  {
    id: "niu-mqi-gt-evo-100",
    name: "Niu MQi GT Evo 100",
    brand: "Niu Technologies",
    currentImage: "/images/products/niu-mqi-gt-evo-100.svg",
    targetImage: "/images/products/niu-mqi-gt-evo-100.jpg",
    officialSource: "https://www.niu.com/press",
    pressImage: "Niu MQi GT product images",
    notes: "Niu press section - check for MQi GT images"
  },
  {
    id: "horwin-ek3-deluxe",
    name: "Horwin EK3 Deluxe",
    brand: "Horwin",
    currentImage: "/images/products/horwin-ek3-deluxe.svg",
    targetImage: "/images/products/horwin-ek3-deluxe.jpg",
    officialSource: "https://www.horwin.com/media-center",
    pressImage: "Horwin EK3 product images",
    notes: "Horwin media center - check for EK3 images"
  },
  {
    id: "frison-t10-gt",
    name: "Frison T10 GT",
    brand: "Frison",
    currentImage: "/images/products/frison-t10-gt.svg",
    targetImage: "/images/products/frison-t10-gt.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric maxi scooter' or 'GT scooter electric'",
    notes: "Use stock photo - maxi scooter electric"
  },
  {
    id: "zeeho-ae8-s-plus",
    name: "Zeeho AE8 S+",
    brand: "Zeeho / CFMOTO",
    currentImage: "/images/products/zeeho-ae8-s-plus.svg",
    targetImage: "/images/products/zeeho-ae8-s-plus.jpg",
    officialSource: "https://www.cfmoto.com/media-center",
    pressImage: "Zeeho AE8 product images",
    notes: "CFMOTO media center - check for Zeeho AE8 images"
  },
  {
    id: "bmw-ce-02-iconic",
    name: "BMW CE 02 Iconic",
    brand: "BMW Motorrad",
    currentImage: "/images/products/bmw-ce-02-iconic.svg",
    targetImage: "/images/products/bmw-ce-02-iconic.jpg",
    officialSource: "https://www.press.bmwgroup.com/bmw-motorrad",
    pressImage: "BMW CE 02 product photography",
    notes: "BMW press portal has extensive CE 02 image gallery"
  },
  {
    id: "surron-light-bee-supermoto",
    name: "Sur-Ron Light Bee X Supermotard",
    brand: "Sur-Ron Official",
    currentImage: "/images/products/surron-light-bee-supermoto.svg",
    targetImage: "/images/products/surron-light-bee-supermoto.jpg",
    officialSource: "https://surron.cn.com/media",
    pressImage: "Sur-Ron Light Bee Supermoto images",
    notes: "Sur-Ron official site has product gallery - check for supermoto variant"
  },
  {
    id: "surron-ultra-bee-x",
    name: "Sur-Ron Ultra Bee T",
    brand: "Sur-Ron Official",
    currentImage: "/images/products/surron-ultra-bee-x.svg",
    targetImage: "/images/products/surron-ultra-bee-x.jpg",
    officialSource: "https://surron.cn.com/media",
    pressImage: "Sur-Ron Ultra Bee product images",
    notes: "Sur-Ron official site has Ultra Bee gallery"
  },
  {
    id: "surron-ultra-bee-sm",
    name: "Sur-Ron Ultra Bee Supermotard Pro",
    brand: "Sur-Ron Official",
    currentImage: "/images/products/surron-ultra-bee-sm.svg",
    targetImage: "/images/products/surron-ultra-bee-sm.jpg",
    officialSource: "https://surron.cn.com/media",
    pressImage: "Sur-Ron Ultra Bee Supermoto images",
    notes: "Sur-Ron official site - check for supermoto variant"
  },
  {
    id: "surron-storm-bee-f",
    name: "Sur-Ron Storm Bee Enduro",
    brand: "Sur-Ron Official",
    currentImage: "/images/products/surron-storm-bee-f.svg",
    targetImage: "/images/products/surron-storm-bee-f.jpg",
    officialSource: "https://surron.cn.com/media",
    pressImage: "Sur-Ron Storm Bee product images",
    notes: "Sur-Ron official site has Storm Bee gallery"
  },
  {
    id: "surron-storm-bee-r",
    name: "Sur-Ron Storm Bee R Supermoto",
    brand: "Sur-Ron Official",
    currentImage: "/images/products/surron-storm-bee-r.svg",
    targetImage: "/images/products/surron-storm-bee-r.jpg",
    officialSource: "https://surron.cn.com/media",
    pressImage: "Sur-Ron Storm Bee Supermoto images",
    notes: "Sur-Ron official site - check for supermoto variant"
  },
  {
    id: "surron-hyper-bee-youth",
    name: "Sur-Ron Hyper Bee Youth 48V",
    brand: "Sur-Ron Official",
    currentImage: "/images/products/surron-hyper-bee-youth.svg",
    targetImage: "/images/products/surron-hyper-bee-youth.jpg",
    officialSource: "https://surron.cn.com/media",
    pressImage: "Sur-Ron Hyper Bee product images",
    notes: "Sur-Ron official site - check for Hyper Bee youth variant"
  },
  {
    id: "stark-varg-80hp",
    name: "Stark VARG 80 ch",
    brand: "Stark Future",
    currentImage: "/images/products/stark-varg-80hp.svg",
    targetImage: "/images/products/stark-varg-80hp.jpg",
    officialSource: "https://starkfuture.com/press",
    pressImage: "Stark VARG product photography",
    notes: "Stark Future has press materials - use official images"
  },
  {
    id: "stark-varg-60hp",
    name: "Stark VARG 60 ch Standard",
    brand: "Stark Future",
    currentImage: "/images/products/stark-varg-60hp.svg",
    targetImage: "/images/products/stark-varg-60hp.jpg",
    officialSource: "https://starkfuture.com/press",
    pressImage: "Stark VARG 60hp product images",
    notes: "Stark Future press materials - check for 60hp variant"
  },
  {
    id: "talaria-sting-r-mx4",
    name: "Talaria Sting R MX4 60V",
    brand: "Talaria",
    currentImage: "/images/products/talaria-sting-r-mx4.svg",
    targetImage: "/images/products/talaria-sting-r-mx4.jpg",
    officialSource: "https://talariawheels.com/media",
    pressImage: "Talaria Sting R product images",
    notes: "Talaria Wheels has product gallery - check for Sting R MX4"
  },
  {
    id: "talaria-dragon-88v",
    name: "Talaria Dragon 88V",
    brand: "Talaria",
    currentImage: "/images/products/talaria-dragon-88v.svg",
    targetImage: "/images/products/talaria-dragon-88v.jpg",
    officialSource: "https://talariawheels.com/media",
    pressImage: "Talaria Dragon product images",
    notes: "Talaria Wheels product gallery - check for Dragon 88V"
  },
  {
    id: "talaria-komodo-72v",
    name: "Talaria Komodo 72V Pro",
    brand: "Talaria",
    currentImage: "/images/products/talaria-komodo-72v.svg",
    targetImage: "/images/products/talaria-komodo-72v.jpg",
    officialSource: "https://talariawheels.com/media",
    pressImage: "Talaria Komodo product images",
    notes: "Talaria Wheels product gallery - check for Komodo 72V"
  },
  {
    id: "eride-pro-ss-2026",
    name: "E-Ride Pro SS 2.0 72V",
    brand: "E-Ride Pro USA",
    currentImage: "/images/products/eride-pro-ss-2026.svg",
    targetImage: "/images/products/eride-pro-ss-2026.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric dirt bike' or 'off-road electric motorcycle'",
    notes: "Use stock photo - dirt bike electric"
  },
  {
    id: "eride-pro-sr-race",
    name: "E-Ride Pro SR 72V Race Spec",
    brand: "E-Ride Pro USA",
    currentImage: "/images/products/eride-pro-sr-race.svg",
    targetImage: "/images/products/eride-pro-sr-race.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric dirt bike racing' or 'race electric motorcycle'",
    notes: "Use stock photo - race spec dirt bike"
  },
  {
    id: "altis-sigma-72v",
    name: "Altis Sigma 72V Beast",
    brand: "Altis Powersports",
    currentImage: "/images/products/altis-sigma-72v.svg",
    targetImage: "/images/products/altis-sigma-72v.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric dirt bike' or 'off-road electric motorcycle'",
    notes: "Use stock photo - dirt bike electric"
  },
  {
    id: "moto-apex-dirt-72v",
    name: "Apex E-Cross 72V Ultra Dirt",
    brand: "Apex Off-Road",
    currentImage: "/images/products/moto-apex-dirt-72v.svg",
    targetImage: "/images/products/moto-apex-dirt-72v.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric dirt bike' or 'off-road electric motorcycle'",
    notes: "Use stock photo - dirt bike electric"
  },
  {
    id: "electric-motion-escape-r",
    name: "Electric Motion Escape R",
    brand: "Electric Motion France",
    currentImage: "/images/products/electric-motion-escape-r.svg",
    targetImage: "/images/products/electric-motion-escape-r.jpg",
    officialSource: "https://electric-motion.com/media",
    pressImage: "Electric Motion Escape R product images",
    notes: "Electric Motion has media section - check for Escape R"
  },
  {
    id: "electric-motion-epure-race",
    name: "Electric Motion Epure Race",
    brand: "Electric Motion France",
    currentImage: "/images/products/electric-motion-epure-race.svg",
    targetImage: "/images/products/electric-motion-epure-race.jpg",
    officialSource: "https://electric-motion.com/media",
    pressImage: "Electric Motion Epure Race product images",
    notes: "Electric Motion media - check for Epure Race"
  },
  {
    id: "orbea-wild-m-ltd",
    name: "Orbea Wild M-LTD Carbon",
    brand: "Orbea Bicycles",
    currentImage: "/images/products/orbea-wild-m-ltd.svg",
    targetImage: "/images/products/orbea-wild-m-ltd.jpg",
    officialSource: "https://www.orbea.com/media-center",
    pressImage: "Orbea Wild product photography",
    notes: "Orbea media center has extensive e-MTB gallery"
  },
  {
    id: "pivot-shuttle-lt-team",
    name: "Pivot Shuttle LT Team XTR",
    brand: "Pivot Cycles",
    currentImage: "/images/products/pivot-shuttle-lt-team.svg",
    targetImage: "/images/products/pivot-shuttle-lt-team.jpg",
    officialSource: "https://pivotcycles.com/media",
    pressImage: "Pivot Shuttle LT product images",
    notes: "Pivot Cycles media center - check for Shuttle LT"
  },
  {
    id: "yeti-160e-t1-turq",
    name: "Yeti 160E T1 TURQ Series",
    brand: "Yeti Cycles",
    currentImage: "/images/products/yeti-160e-t1-turq.svg",
    targetImage: "/images/products/yeti-160e-t1-turq.jpg",
    officialSource: "https://yeticycles.com/media",
    pressImage: "Yeti 160E product photography",
    notes: "Yeti media center has 160E gallery"
  },
  {
    id: "scott-lumen-eride-900",
    name: "Scott Lumen eRIDE 900 SL",
    brand: "Scott Sports",
    currentImage: "/images/products/scott-lumen-eride-900.svg",
    targetImage: "/images/products/scott-lumen-eride-900.jpg",
    officialSource: "https://www.scott-sports.com/media",
    pressImage: "Scott Lumen eRIDE product images",
    notes: "Scott media center - check for Lumen eRIDE"
  },
  {
    id: "forestal-siryon-diode",
    name: "Forestal Siryon Diode",
    brand: "Forestal",
    currentImage: "/images/products/forestal-siryon-diode.svg",
    targetImage: "/images/products/forestal-siryon-diode.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric mountain bike' or 'eMTB carbon'",
    notes: "Use stock photo - carbon e-MTB"
  },
  {
    id: "moustache-samedi-29-game",
    name: "Moustache Samedi 29 Game",
    brand: "Moustache Bikes",
    currentImage: "/images/products/moustache-samedi-29-game.svg",
    targetImage: "/images/products/moustache-samedi-29-game.jpg",
    officialSource: "https://moustachebikes.com/media",
    pressImage: "Moustache Samedi 29 product images",
    notes: "Moustache media center - check for Samedi 29"
  },
  {
    id: "velo-gravel-carbon-adventure",
    name: "Velo Gravel Carbon Adventure",
    brand: "eVolt Racing Bicycles",
    currentImage: "/images/products/velo-gravel-carbon-adventure.svg",
    targetImage: "/images/products/velo-gravel-carbon-adventure.jpg",
    officialSource: "Brand may not have public press room",
    stockAlternative: "Unsplash: 'electric gravel bike' or 'e-gravel carbon'",
    notes: "Use stock photo - electric gravel bike"
  },
  {
    id: "specialized-creo-2-carbon",
    name: "Specialized Creo 2 Carbon",
    brand: "Specialized",
    currentImage: "/images/products/specialized-creo-2-carbon.svg",
    targetImage: "/images/products/specialized-creo-2-carbon.jpg",
    officialSource: "https://www.specialized.com/media",
    pressImage: "Specialized Turbo Creo 2 product photography",
    notes: "Specialized media center has extensive Creo 2 gallery"
  },
  {
    id: "trek-domane-plus-slr9",
    name: "Trek Domane+ SLR9",
    brand: "Trek Bicycles",
    currentImage: "/images/products/trek-domane-plus-slr9.svg",
    targetImage: "/images/products/trek-domane-plus-slr9.jpg",
    officialSource: "https://media.trekbikes.com",
    pressImage: "Trek Domane+ SLR product photography",
    notes: "Trek media portal has Domane+ SLR gallery"
  },
  // Additional road/gravel bikes
  {
    id: "cannondale-topstone-neo",
    name: "Cannondale Topstone Neo Carbon",
    brand: "Cannondale",
    currentImage: "/images/products/cannondale-topstone-neo-crb.svg",
    targetImage: "/images/products/cannondale-topstone-neo-crb.jpg",
    officialSource: "https://www.cannondale.com/media",
    notes: "Cannondale media center"
  },
  {
    id: "canyon-endurace-on",
    name: "Canyon Endurace:ON 8",
    brand: "Canyon",
    currentImage: "/images/products/canyon-endurace-on-8.svg",
    targetImage: "/images/products/canyon-endurace-on-8.jpg",
    officialSource: "https://www.canyon.com/media",
    notes: "Canyon media center"
  },
  {
    id: "scott-addict-eride",
    name: "Scott Addict eRIDE 10",
    brand: "Scott",
    currentImage: "/images/products/scott-addict-eride-10.svg",
    targetImage: "/images/products/scott-addict-eride-10.jpg",
    officialSource: "https://www.scott-sports.com/media",
    notes: "Scott media center"
  },
  {
    id: "orbea-gain",
    name: "Orbea Gain M20i Carbon",
    brand: "Orbea",
    currentImage: "/images/products/orbea-gain-m20i-carbon.svg",
    targetImage: "/images/products/orbea-gain-m20i-carbon.jpg",
    officialSource: "https://www.orbea.com/media-center",
    notes: "Orbea media center"
  },
  {
    id: "bmc-roadmachine",
    name: "BMC Roadmachine 01 AMP",
    brand: "BMC",
    currentImage: "/images/products/bmc-roadmachine-01-amp.svg",
    targetImage: "/images/products/bmc-roadmachine-01-amp.jpg",
    officialSource: "https://www.bmc-switzerland.com/media",
    notes: "BMC media center"
  },
  {
    id: "pinarello-nytro",
    name: "Pinarello Nytro E Gravel",
    brand: "Pinarello",
    currentImage: "/images/products/pinarello-nytro-e-gravel.svg",
    targetImage: "/images/products/pinarello-nytro-e-gravel.jpg",
    stockAlternative: "Unsplash: 'electric gravel bike'",
    notes: "Use stock photo"
  },
  {
    id: "bianchi-e-arcadex",
    name: "Bianchi E-Arcadex Gravel",
    brand: "Bianchi",
    currentImage: "/images/products/bianchi-e-arcadex-gravel.svg",
    targetImage: "/images/products/bianchi-e-arcadex-gravel.jpg",
    stockAlternative: "Unsplash: 'electric gravel bike'",
    notes: "Use stock photo"
  },
  {
    id: "wilier-hyrid",
    name: "Wilier Triestina Hyrid",
    brand: "Wilier",
    currentImage: "/images/products/wilier-triestina-hyrid.svg",
    targetImage: "/images/products/wilier-triestina-hyrid.jpg",
    stockAlternative: "Unsplash: 'electric road bike'",
    notes: "Use stock photo"
  },
  {
    id: "cervelo-rouvida",
    name: "Cervelo Rouvida GRX",
    brand: "Cervelo",
    currentImage: "/images/products/cervelo-rouvida-grx.svg",
    targetImage: "/images/products/cervelo-rouvida-grx.jpg",
    stockAlternative: "Unsplash: 'electric gravel bike'",
    notes: "Use stock photo"
  },
  // Cargo bikes
  {
    id: "velo-cargo-longtail",
    name: "Velo Cargo Longtail",
    brand: "Velo",
    currentImage: "/images/products/velo-cargo-longtail.svg",
    targetImage: "/images/products/velo-cargo-longtail.jpg",
    stockAlternative: "Unsplash: 'electric cargo bike'",
    notes: "Use stock photo"
  },
  {
    id: "riese-muller-load",
    name: "Riese & Muller Load4 75",
    brand: "Riese & Muller",
    currentImage: "/images/products/riese-muller-load4-75.svg",
    targetImage: "/images/products/riese-muller-load4-75.jpg",
    officialSource: "https://www.r-m.de/media",
    notes: "Riese & Muller media center"
  },
  {
    id: "tern-gsd",
    name: "Tern GSD S00 Dual Battery",
    brand: "Tern",
    currentImage: "/images/products/tern-gsd-s00-dual-battery.svg",
    targetImage: "/images/products/tern-gsd-s00-dual-battery.jpg",
    officialSource: "https://www.ternbicycles.com/media",
    notes: "Tern media center"
  },
  {
    id: "yuba-spicy-curry",
    name: "Yuba Spicy Curry V4",
    brand: "Yuba",
    currentImage: "/images/products/yuba-spicy-curry-v4.svg",
    targetImage: "/images/products/yuba-spicy-curry-v4.jpg",
    officialSource: "https://www.yubabikes.com/media",
    notes: "Yuba media center"
  },
  {
    id: "moustache-lundi",
    name: "Moustache Lundi 20 Cargo",
    brand: "Moustache",
    currentImage: "/images/products/moustache-lundi-20-cargo.svg",
    targetImage: "/images/products/moustache-lundi-20-cargo.jpg",
    officialSource: "https://moustachebikes.com/media",
    notes: "Moustache media center"
  },
  {
    id: "urban-arrow",
    name: "Urban Arrow Family Cargoline",
    brand: "Urban Arrow",
    currentImage: "/images/products/urban-arrow-family-cargoline.svg",
    targetImage: "/images/products/urban-arrow-family-cargoline.jpg",
    officialSource: "https://www.urbanarrow.com/media",
    notes: "Urban Arrow media center"
  },
  {
    id: "cube-cargo",
    name: "Cube Cargo Hybrid 750",
    brand: "Cube",
    currentImage: "/images/products/cube-cargo-hybrid-750.svg",
    targetImage: "/images/products/cube-cargo-hybrid-750.jpg",
    officialSource: "https://www.cube.eu/media",
    notes: "Cube media center"
  },
  {
    id: "carqon",
    name: "Carqon Cruise Family",
    brand: "Carqon",
    currentImage: "/images/products/carqon-cruise-family.svg",
    targetImage: "/images/products/carqon-cruise-family.jpg",
    stockAlternative: "Unsplash: 'electric cargo bike'",
    notes: "Use stock photo"
  },
  {
    id: "riese-muller-multicharger",
    name: "Riese & Muller Multicharger",
    brand: "Riese & Muller",
    currentImage: "/images/products/riese-muller-multicharger.svg",
    targetImage: "/images/products/riese-muller-multicharger.jpg",
    officialSource: "https://www.r-m.de/media",
    notes: "Riese & Muller media center"
  },
  {
    id: "babboe",
    name: "Babboe City Mountain",
    brand: "Babboe",
    currentImage: "/images/products/babboe-city-mountain.svg",
    targetImage: "/images/products/babboe-city-mountain.jpg",
    stockAlternative: "Unsplash: 'electric cargo bike'",
    notes: "Use stock photo"
  },
  // Speed pedelecs
  {
    id: "stromer-st7",
    name: "Stromer ST7 Pinion 1440Wh",
    brand: "Stromer",
    currentImage: "/images/products/stromer-st7-pinion-1440wh.svg",
    targetImage: "/images/products/stromer-st7-pinion-1440wh.jpg",
    officialSource: "https://www.stromerbike.com/media",
    notes: "Stromer media center"
  },
  {
    id: "stromer-st5",
    name: "Stromer ST5 Pinion 45",
    brand: "Stromer",
    currentImage: "/images/products/stromer-st5-pinion-45.svg",
    targetImage: "/images/products/stromer-st5-pinion-45.jpg",
    officialSource: "https://www.stromerbike.com/media",
    notes: "Stromer media center"
  },
  {
    id: "stromer-st3",
    name: "Stromer ST3 Pinion Speed",
    brand: "Stromer",
    currentImage: "/images/products/stromer-st3-pinion-speed.svg",
    targetImage: "/images/products/stromer-st3-pinion-speed.jpg",
    officialSource: "https://www.stromerbike.com/media",
    notes: "Stromer media center"
  },
  {
    id: "riese-muller-supercharger",
    name: "Riese & Muller Supercharger HS",
    brand: "Riese & Muller",
    currentImage: "/images/products/riese-muller-supercharger-hs.svg",
    targetImage: "/images/products/riese-muller-supercharger-hs.jpg",
    officialSource: "https://www.r-m.de/media",
    notes: "Riese & Muller media center"
  },
  {
    id: "riese-muller-delite",
    name: "Riese & Muller Delite4 HS",
    brand: "Riese & Muller",
    currentImage: "/images/products/riese-muller-delite4-hs.svg",
    targetImage: "/images/products/riese-muller-delite4-hs.jpg",
    officialSource: "https://www.r-m.de/media",
    notes: "Riese & Muller media center"
  },
  {
    id: "gazelle-ultimate",
    name: "Gazelle Ultimate C380 Speed",
    brand: "Gazelle",
    currentImage: "/images/products/gazelle-ultimate-c380-speed.svg",
    targetImage: "/images/products/gazelle-ultimate-c380-speed.jpg",
    officialSource: "https://www.gazelle.com/media",
    notes: "Gazelle media center"
  },
  {
    id: "specialized-vado",
    name: "Specialized Vado 5.0 IGH Speed",
    brand: "Specialized",
    currentImage: "/images/products/specialized-vado-50-igh-speed.svg",
    targetImage: "/images/products/specialized-vado-50-igh-speed.jpg",
    officialSource: "https://www.specialized.com/media",
    notes: "Specialized media center"
  },
  {
    id: "flyer-upstreet",
    name: "Flyer Upstreet5 723 HS",
    brand: "Flyer",
    currentImage: "/images/products/flyer-upstreet5-723-hs.svg",
    targetImage: "/images/products/flyer-upstreet5-723-hs.jpg",
    officialSource: "https://www.flyer-ebike.com/media",
    notes: "Flyer media center"
  },
  {
    id: "kalkhoff-image",
    name: "Kalkhoff Image 7B Excite 45",
    brand: "Kalkhoff",
    currentImage: "/images/products/kalkhoff-image-7b-excite-45.svg",
    targetImage: "/images/products/kalkhoff-image-7b-excite-45.jpg",
    officialSource: "https://www.kalkhoff-bikes.com/media",
    notes: "Kalkhoff media center"
  },
  {
    id: "moustache-friday",
    name: "Moustache Friday 27 FS Speed",
    brand: "Moustache",
    currentImage: "/images/products/moustache-friday-27-fs-speed.svg",
    targetImage: "/images/products/moustache-friday-27-fs-speed.jpg",
    officialSource: "https://moustachebikes.com/media",
    notes: "Moustache media center"
  },
  {
    id: "cowboy-cruiser",
    name: "Cowboy Cruiser ST Connected",
    brand: "Cowboy",
    currentImage: "/images/products/cowboy-cruiser-st-connected.svg",
    targetImage: "/images/products/cowboy-cruiser-st-connected.jpg",
    officialSource: "https://www.cowboy.com/media",
    notes: "Cowboy media center"
  },
  {
    id: "vanmoof-s5",
    name: "VanMoof S5 Halo Ring",
    brand: "VanMoof",
    currentImage: "/images/products/vanmoof-s5-halo-ring.svg",
    targetImage: "/images/products/vanmoof-s5-halo-ring.jpg",
    stockAlternative: "Unsplash: 'electric city bike'",
    notes: "Use stock photo"
  },
  {
    id: "specialized-como",
    name: "Specialized Como 5.0 IGH",
    brand: "Specialized",
    currentImage: "/images/products/specialized-como-50-igh.svg",
    targetImage: "/images/products/specialized-como-50-igh.jpg",
    officialSource: "https://www.specialized.com/media",
    notes: "Specialized media center"
  },
  {
    id: "moustache-samedi-287",
    name: "Moustache Samedi 28.7 Open",
    brand: "Moustache",
    currentImage: "/images/products/moustache-samedi-287-open.svg",
    targetImage: "/images/products/moustache-samedi-287-open.jpg",
    officialSource: "https://moustachebikes.com/media",
    notes: "Moustache media center"
  },
  {
    id: "desiknio-x20",
    name: "Desiknio X20 Pinion Carbon",
    brand: "Desiknio",
    currentImage: "/images/products/desiknio-x20-pinion-carbon.svg",
    targetImage: "/images/products/desiknio-x20-pinion-carbon.jpg",
    stockAlternative: "Unsplash: 'electric urban bike'",
    notes: "Use stock photo"
  },
  {
    id: "schindelhauer-heinrich",
    name: "Schindelhauer Heinrich Enviolo",
    brand: "Schindelhauer",
    currentImage: "/images/products/schindelhauer-heinrich-enviolo.svg",
    targetImage: "/images/products/schindelhauer-heinrich-enviolo.jpg",
    stockAlternative: "Unsplash: 'electric urban bike'",
    notes: "Use stock photo"
  },
  {
    id: "gazelle-grenoble",
    name: "Gazelle Grenoble C8 HMB",
    brand: "Gazelle",
    currentImage: "/images/products/gazelle-grenoble-c8-hmb.svg",
    targetImage: "/images/products/gazelle-grenoble-c8-hmb.jpg",
    officialSource: "https://www.gazelle.com/media",
    notes: "Gazelle media center"
  },
  {
    id: "tenways-cgo",
    name: "Tenways CGO800S Belt",
    brand: "Tenways",
    currentImage: "/images/products/tenways-cgo800s-belt.svg",
    targetImage: "/images/products/tenways-cgo800s-belt.jpg",
    stockAlternative: "Unsplash: 'electric city bike'",
    notes: "Use stock photo"
  },
  {
    id: "angell-mobility",
    name: "Angell Mobility Rapide",
    brand: "Angell",
    currentImage: "/images/products/angell-mobility-rapide.svg",
    targetImage: "/images/products/angell-mobility-rapide.jpg",
    stockAlternative: "Unsplash: 'electric scooter'",
    notes: "Use stock photo"
  },
  {
    id: "electra-loft",
    name: "Electra Loft Go 7D EQ",
    brand: "Electra",
    currentImage: "/images/products/electra-loft-go-7d-eq.svg",
    targetImage: "/images/products/electra-loft-go-7d-eq.jpg",
    officialSource: "https://www.electrabike.com/media",
    notes: "Electra media center"
  },
  // Additional Sur-Ron variants
  {
    id: "surron-light-bee-x-2018",
    name: "Sur-Ron Light Bee X 2018",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-x-2018.svg",
    targetImage: "/images/products/surron-light-bee-x-2018.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-x-2022",
    name: "Sur-Ron Light Bee X 2022",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-x-2022.svg",
    targetImage: "/images/products/surron-light-bee-x-2022.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-x-2024",
    name: "Sur-Ron Light Bee X 2024",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-x-2024.svg",
    targetImage: "/images/products/surron-light-bee-x-2024.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-x-2025",
    name: "Sur-Ron Light Bee X 2025",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-x-2025.svg",
    targetImage: "/images/products/surron-light-bee-x-2025.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-x-2026",
    name: "Sur-Ron Light Bee X 2026",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-x-2026.svg",
    targetImage: "/images/products/surron-light-bee-x-2026.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-l1e-2020",
    name: "Sur-Ron Light Bee L1e 2020",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-l1e-2020.svg",
    targetImage: "/images/products/surron-light-bee-l1e-2020.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-l1e-2023",
    name: "Sur-Ron Light Bee L1e 2023",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-l1e-2023.svg",
    targetImage: "/images/products/surron-light-bee-l1e-2023.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-l1e-2026",
    name: "Sur-Ron Light Bee L1e 2026",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-l1e-2026.svg",
    targetImage: "/images/products/surron-light-bee-l1e-2026.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-s-youth",
    name: "Sur-Ron Light Bee S Youth",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-s-youth.svg",
    targetImage: "/images/products/surron-light-bee-s-youth.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-s-youth-2024",
    name: "Sur-Ron Light Bee S Youth 2024",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-s-youth-2024.svg",
    targetImage: "/images/products/surron-light-bee-s-youth-2024.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-2-offroad-2026",
    name: "Sur-Ron Light Bee 2 Offroad 2026",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-2-offroad-2026.svg",
    targetImage: "/images/products/surron-light-bee-2-offroad-2026.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-2-homologuee-2026",
    name: "Sur-Ron Light Bee 2 Homologuée 2026",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-2-homologuee-2026.svg",
    targetImage: "/images/products/surron-light-bee-2-homologuee-2026.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-hyper-bee-2025",
    name: "Sur-Ron Hyper Bee 2025",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-hyper-bee-2025.svg",
    targetImage: "/images/products/surron-hyper-bee-2025.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-hyper-bee-x-2026",
    name: "Sur-Ron Hyper Bee X 2026",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-hyper-bee-x-2026.svg",
    targetImage: "/images/products/surron-hyper-bee-x-2026.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-ultra-bee-x-2023",
    name: "Sur-Ron Ultra Bee X 2023",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-ultra-bee-x-2023.svg",
    targetImage: "/images/products/surron-ultra-bee-x-2023.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-ultra-bee-t-2024",
    name: "Sur-Ron Ultra Bee T 2024",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-ultra-bee-t-2024.svg",
    targetImage: "/images/products/surron-ultra-bee-t-2024.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-ultra-bee-r-2024",
    name: "Sur-Ron Ultra Bee R 2024",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-ultra-bee-r-2024.svg",
    targetImage: "/images/products/surron-ultra-bee-r-2024.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-ultra-bee-l3e-2025",
    name: "Sur-Ron Ultra Bee L3e 2025",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-ultra-bee-l3e-2025.svg",
    targetImage: "/images/products/surron-ultra-bee-l3e-2025.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-ultra-bee-c-2025",
    name: "Sur-Ron Ultra Bee C 2025",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-ultra-bee-c-2025.svg",
    targetImage: "/images/products/surron-ultra-bee-c-2025.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-ultra-bee-hp-2026",
    name: "Sur-Ron Ultra Bee HP 2026",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-ultra-bee-hp-2026.svg",
    targetImage: "/images/products/surron-ultra-bee-hp-2026.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-storm-bee-f-offroad",
    name: "Sur-Ron Storm Bee F Offroad",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-storm-bee-f-offroad.svg",
    targetImage: "/images/products/surron-storm-bee-f-offroad.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-storm-bee-e-enduro",
    name: "Sur-Ron Storm Bee E Enduro",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-storm-bee-e-enduro.svg",
    targetImage: "/images/products/surron-storm-bee-e-enduro.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-storm-bee-r-supermoto",
    name: "Sur-Ron Storm Bee R Supermoto",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-storm-bee-r-supermoto.svg",
    targetImage: "/images/products/surron-storm-bee-r-supermoto.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-storm-bee-104v-2026",
    name: "Sur-Ron Storm Bee 104V 2026",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-storm-bee-104v-2026.svg",
    targetImage: "/images/products/surron-storm-bee-104v-2026.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-x-black-edition",
    name: "Sur-Ron Light Bee X Black Edition",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-x-black-edition.svg",
    targetImage: "/images/products/surron-light-bee-x-black-edition.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-light-bee-x-kling-edition",
    name: "Sur-Ron Light Bee X Kling Edition",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-light-bee-x-kling-edition.svg",
    targetImage: "/images/products/surron-light-bee-x-kling-edition.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  },
  {
    id: "surron-ultra-bee-anniversary-edition",
    name: "Sur-Ron Ultra Bee Anniversary Edition",
    brand: "Sur-Ron",
    currentImage: "/images/products/surron-ultra-bee-anniversary-edition.svg",
    targetImage: "/images/products/surron-ultra-bee-anniversary-edition.jpg",
    officialSource: "https://surron.cn.com/media",
    notes: "Sur-Ron official site"
  }
];

// Group by official source availability
const withOfficialSource = svgProducts.filter(p => p.officialSource && !p.officialSource.includes("may not have"));
const withoutOfficialSource = svgProducts.filter(p => !p.officialSource || p.officialSource.includes("may not have"));

console.log("=== IMAGE DOWNLOAD MAPPING REPORT ===\n");
console.log(`Total SVG products: ${svgProducts.length}`);
console.log(`With official press sources: ${withOfficialSource.length}`);
console.log(`Without official press sources: ${withoutOfficialSource.length}\n`);

console.log("=== PRODUCTS WITH OFFICIAL PRESS SOURCES ===\n");
withOfficialSource.forEach((p, i) => {
  console.log(`${i + 1}. ${p.name} (${p.brand})`);
  console.log(`   Current: ${p.currentImage}`);
  console.log(`   Target: ${p.targetImage}`);
  console.log(`   Source: ${p.officialSource}`);
  console.log(`   Image: ${p.pressImage}`);
  console.log(`   Notes: ${p.notes}\n`);
});

console.log("=== PRODUCTS WITHOUT OFFICIAL PRESS SOURCES ===\n");
withoutOfficialSource.forEach((p, i) => {
  console.log(`${i + 1}. ${p.name} (${p.brand})`);
  console.log(`   Current: ${p.currentImage}`);
  console.log(`   Target: ${p.targetImage}`);
  console.log(`   Stock Alternative: ${p.stockAlternative}`);
  console.log(`   Notes: ${p.notes}\n`);
});

console.log("=== STOCK PHOTO SOURCES ===\n");
console.log("Recommended stock photo sites:");
console.log("- Unsplash: https://unsplash.com (free, high quality)");
console.log("- Pexels: https://pexels.com (free, high quality)");
console.log("- Pixabay: https://pixabay.com (free, various quality)");
console.log("\nSearch terms for electric motorcycles:");
console.log("- 'electric motorcycle', 'e-motorcycle', 'electric bike'");
console.log("- 'electric roadster', 'electric cafe racer', 'electric adventure'");
console.log("- 'electric dirt bike', 'electric enduro', 'electric motocross'");
console.log("- 'electric scooter', 'electric maxi scooter'");
console.log("\nSearch terms for e-bikes:");
console.log("- 'electric mountain bike', 'eMTB', 'electric gravel bike'");
console.log("- 'electric road bike', 'e-bike carbon'");

// Export for use in other scripts
module.exports = { svgProducts, withOfficialSource, withoutOfficialSource };
