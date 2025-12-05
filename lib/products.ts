export interface Product {
    id: string
    name: string
    price: number
    displayPrice: string
    color: string
    image: string
    description: string
    features: string[]
    sizes: string[]
    slug: string
}

export const products: Record<string, Product> = {
    "arctic-parka": {
        id: "arctic-parka",
        name: "Arctic Parka",
        price: 299,
        displayPrice: "$299",
        color: "Midnight Blue",
        image: "/images/parka.png",
        description: "The ultimate winter companion. Our Arctic Parka features premium down insulation rated for extreme cold, a detachable fur-lined hood, and windproof outer shell. Designed for temperatures down to -30°C.",
        features: ["Premium 800-fill down insulation", "Waterproof and windproof", "Adjustable fur-lined hood", "Multiple interior pockets"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        slug: "arctic-parka"
    },
    "alpine-shell": {
        id: "alpine-shell",
        name: "Alpine Shell",
        price: 189,
        displayPrice: "$189",
        color: "Glacier Grey",
        image: "/images/shell.png",
        description: "Lightweight yet incredibly protective. The Alpine Shell uses advanced technical fabrics to provide superior wind and water resistance while maintaining breathability for active winter adventures.",
        features: ["3-layer waterproof membrane", "Fully taped seams", "Pit-zip vents", "Helmet-compatible hood"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        slug: "alpine-shell"
    },
    "merino-layer": {
        id: "merino-layer",
        name: "Merino Layer",
        price: 89,
        displayPrice: "$89",
        color: "Charcoal",
        image: "/images/layer.png",
        description: "Experience the natural warmth of premium merino wool. This base layer regulates temperature, wicks moisture, and naturally resists odors for all-day comfort.",
        features: ["100% Merino wool", "Temperature regulating", "Odor resistant", "Flatlock seams"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        slug: "merino-layer"
    },
    "frost-boots": {
        id: "frost-boots",
        name: "Frost Boots",
        price: 249,
        displayPrice: "$249",
        color: "Black",
        image: "/images/boots.png",
        description: "Rugged winter boots built to last. Featuring waterproof leather construction, thermal insulation, and aggressive tread pattern for superior traction on ice and snow.",
        features: ["Waterproof leather upper", "Thermal insulation", "Vibram Arctic Grip sole", "Removable liner"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        slug: "frost-boots"
    }
}
