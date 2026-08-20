# Guide de Téléchargement d'Images Haute Qualité pour eVoltApex

## État Actuel
- ✅ 6 images existantes dans `public/images/products/`
- ⚠️ Beaucoup de produits utilisent des URLs externes (Unsplash) ou des placeholders
- 🎯 Objectif: Remplacer toutes les images par des PNG haute qualité des constructeurs

## Sources d'Images par Catégorie

### 🏍️ Hypermotos & Roadsters (Press Rooms Officielles)

**Zero Motorcycles**
- URL: https://www.zeromotorcycles.com/press/
- Galerie complète pour SR/F, SR/S, DSR/X, FXE
- Format: PNG haute résolution sur fond blanc
- Recherche: `Zero SR filetype:png transparent`

**LiveWire**
- URL: https://livewire.com/press/
- Modèles: ONE, S2 Del Mar, S2 Mulholland
- Format: PNG professionnel

**BMW Motorrad**
- URL: https://www.press.bmwgroup.com/
- Modèles: CE 04, CE 02
- Section: BMW Motorrad > Electric

**Energica**
- URL: https://www.energicamotorcompany.com/press/
- Modèles: Ego+, Exes, Ribelle

**Damon**
- URL: https://damonmotorcycles.com/press/
- Modèle: Hypersport Premier

### 🚴 VTTAE & Gravel (99 Spokes + Press Rooms)

**Specialized**
- URL: https://www.specialized.com/us/en/press-room
- Modèles: Turbo Levo, Turbo Kenevo, Turbo Creo, Turbo Vado
- Qualité: PNG sur fond blanc

**Trek**
- URL: https://www.trekbikes.com/us/en_US/press/
- Modèles: Rail, Powerfly, Domane+, Slash+
- Format: PNG professionnel

**Canyon**
- URL: https://www.canyon.com/en-us/press/
- Modèles: Spectral:ON, Neuron, Grand Canyon:ON
- Qualité: PNG transparent haute résolution

**Orbea**
- URL: https://www.orbea.com/en-us/press/
- Modèles: Wild, Rise, Oiz
- Format: PNG

**Santa Cruz**
- URL: https://www.santacruzbicycles.com/press/
- Modèles: Heckler, Bullit
- Qualité: PNG professionnel

**CUBE**
- URL: https://www.cube.eu/en-us/press/
- Modèles: Stereo Hybrid, Stereo Hybrid One
- Format: PNG

**Moustache**
- URL: https://www.moustachebikes.com/en/press/
- Modèles: Samedi, Friday, Lundi
- Qualité: PNG sur fond blanc

**Riese & Müller**
- URL: https://www.r-m.de/en/press/
- Modèles: Load4, Multicharger, Supercharger
- Format: PNG professionnel

### 🏞️ Dirt Bikes & Off-Road (Luna Cycle, Amped Bikes)

**Sur-Ron**
- Vendeur: https://lunacycle.com/surron/
- Modèles: Light Bee X, Ultra Bee, Storm Bee, Hyper Bee
- Source: Images haute résolution disponibles

**Talaria**
- Vendeur: https://ampedbikes.com/talaria/
- Modèles: Sting R MX4, Dragon 88V, Komodo 72V
- Source: Galerie professionnelle

**Stark Future**
- URL: https://www.starkfuture.com/press/
- Modèle: VARG (60hp et 80hp)
- Qualité: PNG sur fond blanc

**E-Ride Pro**
- Vendeur: https://eridepro.com/
- Modèles: SS 2.0, SR 72V
- Source: Images détaillées

**Talaria**
- Vendeur: https://ampedbikes.com/
- Modèles: Sting R, Dragon, Komodo

### 🛵 Scooters & Mobilité Urbaine (Cleanrider, Go2roues)

**Niu**
- URL: https://www.niu.com/press/
- Modèles: NQi Sport, RQi Sport, MQi GT
- Format: PNG professionnel

**Super Soco**
- Source: https://www.cleanrider.com/
- Modèles: TC Max Pro, CUx
- Qualité: PNG

**Segway**
- Source: https://www.go2roues.com/
- Modèles: E300SE, E110SE
- Format: PNG

**Horwin**
- Source: https://www.go2roues.com/
- Modèles: CR6 Pro, EK3, HT5
- Qualité: PNG

**Yamaha**
- URL: https://global.yamaha-motor.com/press/
- Modèles: NEO's, YADEA collaboration
- Format: PNG professionnel

**Piaggio**
- URL: https://www.piaggio.com/press/
- Modèles: 1 Active Plus
- Qualité: PNG

**Silence**
- URL: https://www.silence.eco/press/
- Modèles: S01+, S02
- Format: PNG

### 🚐 Cargo & Vélos Utilitaires

**Yuba**
- URL: https://www.yubabikes.com/press/
- Modèles: Spicy Curry
- Format: PNG

**Tern**
- URL: https://www.ternbicycles.com/press/
- Modèles: GSD, HSD
- Qualité: PNG professionnel

**Urban Arrow**
- URL: https://www.urbanarrow.com/press/
- Modèles: Family, Heavy Duty
- Format: PNG

**Riese & Müller**
- Modèles: Load4, Multicharger
- Source: Press Room officielle

## Méthode de Téléchargement

### Option 1: Recherche Google Avancée
```
[Marque] [Modèle] filetype:png transparent
```
Exemples:
- `Zero SR/F filetype:png transparent`
- `Specialized Turbo Levo filetype:png transparent`
- `Canyon Spectral ON filetype:png transparent`

### Option 2: Press Rooms Officiels
1. Visiter le site press de la marque
2. Naviguer vers "Media" ou "Press Room"
3. Télécharger les PNG haute résolution
4. Choisir les vues: profil, 3/4, détail technique

### Option 3: Sources Tiers
- **99 Spokes**: https://99spokes.com/ (excellent pour VTTAE)
- **Cleanrider**: https://www.cleanrider.com/ (référence francophone)
- **Motoplanete**: https://www.motoplanete.com/ (motos homologuées)
- **Electric Motorcycle News**: https://electricmotorcycle.news/ (niche)

## Organisation des Images

### Convention de Nommage
- Format: `[product-id]-[view].png`
- Exemples:
  - `moto-volt-r-main.png` (vue principale)
  - `zero-srf-profile.png` (vue de profil)
  - `specialized-levo-detail.png` (vue détail)

### Placement
- Dossier: `public/images/products/`
- Format: PNG (préféré pour transparence)
- Résolution: 1200x800px minimum
- Taille: < 500KB par image

## Mise à Jour des Produits

Après téléchargement, mettre à jour `src/lib/products.ts`:

```typescript
{
  id: "zero-srf-2026",
  image_url: "/images/products/zero-srf-main.png",
  images: [
    "/images/products/zero-srf-main.png",
    "/images/products/zero-srf-profile.png",
    "/images/products/zero-srf-detail.png"
  ]
}
```

## Script de Vérification

Lancer le script pour vérifier les images manquantes:
```bash
node scripts/check_product_images.js
```

## Priorité par Catégorie

1. **Critique (Produits Featured)**
   - Moto Volt R
   - Zero SR/F Premium
   - Zero SR/S Grand Tourer
   - LiveWire ONE

2. **Haute Popularité**
   - Sur-Ron Light Bee X
   - Sur-Ron Ultra Bee
   - Specialized Turbo Levo
   - Trek Rail

3. **Standard**
   - Tous les autres produits du catalogue

## Astuces de Qualité

- **Fond blanc**: Préférer les PNG sur fond blanc pour cohérence
- **Angle de vue**: 3/4 avant + profil + détail technique
- **Éclairage**: Lumière naturelle, pas de flash dur
- **Résolution**: Minimum 1200px de large
- **Format**: PNG (pas de compression JPEG)
- **Taille**: Optimiser mais ne pas sacrifier la qualité

## Ressources Additionnelles

- **Electric Motorcycle News**: https://electricmotorcycle.news/
- **99 Spokes**: https://99spokes.com/
- **Cleanrider**: https://www.cleanrider.com/
- **BikeRadar**: https://www.bikeradar.com/news/electric
- **Electrek**: https://electrek.co/category/electric-motorcycles/
