import { bronzeIngot, palladiumIngot, platinumIngot, silverIngot, steelIngot } from './ingots'
import { AIR, EARTH, FIRE, ICE, LIGHTNING, RADIANT, VOID, WATER } from './magicTypes'
import {aquamarine, aspenWood, diamond, driftwood, emerald, flint, maplewood, oakwood, opal, rosewood, ruby, sapphire, sweetgum, topaz} from './materials'

export default weapons = [
    {
        Name: "Wooded Dagger",
        price: 5,
        dmg: 10,
        reach: 5,
        special: "",
        purchasable: true,
        island: 1,
        mats:  [
            {
                item: driftwood,
                amount: 2
            }
        ],
        magic: null
    },
    {
        Name: "Wooded Cutlass",
        price: 5,
        dmg: 5,
        reach: 8,
        special: "",
        purchasable: true,
        island: 1,
        mats:  [
            {
                item: driftwood,
                amount: 2
            }
        ],
        magic: null
    },
    {
        Name: "Wooded Sword",
        price: 5,
        dmg: 3,
        reach: 10,
        special: "",
        purchasable: true,
        island: 1,
        mats:  [
            {
                item: driftwood,
                amount: 2
            }
        ],
        magic: null
    },
    {
        Name: "Wooded Staff",
        price: 5,
        dmg: 3,
        reach: 10,
        special: "",
        purchasable: true,
        island: 1,
        mats:  [
            {
                item: driftwood,
                amount: 2
            }
        ],
        magic: AIR
    },
    {
        Name: "Bronze Dagger",
        price: 10,
        dmg: 25,
        reach: 5,
        special: "",
        purchasable: true,
        island: 2,
        mats:  [
            {
                item: driftwood,
                amount: 2
            },
            {
                item: bronzeIngot,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Bronze Cutlass",
        price: 10,
        dmg: 14.375,
        reach: 8,
        special: "",
        purchasable: true,
        island: 2,
        mats:  [
            {
                item: driftwood,
                amount: 2
            },
            {
                item: bronzeIngot,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Bronze Sword",
        price: 10,
        dmg: 8,
        reach: 10,
        special: "",
        purchasable: true,
        island: 2,
        mats:  [
            {
                item: driftwood,
                amount: 2
            },
            {
                item: bronzeIngot,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Bronze Fire Staff",
        price: 10,
        dmg: 8,
        reach: 10,
        special: "",
        purchasable: true,
        island: 2,
        mats:  [
            {
                item: ruby,
                amount: 1
            },
            {
                item: bronzeIngot,
                amount: 1
            }
        ],
        magic: FIRE
    },
    {
        Name: "Bronze Earth Staff",
        price: 10,
        dmg: 8,
        reach: 10,
        special: "",
        purchasable: true,
        island: 2,
        mats:  [
            {
                item: emerald,
                amount: 1
            },
            {
                item: bronzeIngot
            }
        ],
        magic: EARTH
    },
    {
        Name: "Iron Dagger",
        price: 25,
        dmg: 40,
        reach: 5,
        special: "",
        purchasable: true,
        island: 3,
        mats:  [
            {
                item: aspenWood,
                amount: 2
            },
            {
                item: ironIngot,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Iron Cutlass",
        price: 25,
        dmg: 23.75,
        reach: 8,
        special: "",
        purchasable: true,
        island: 3,
        mats:  [
            {
                item: aspenWood,
                amount: 2
            },
            {
                item: ironIngot,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Iron Sword",
        price: 25,
        dmg: 18,
        reach: 10,
        special: "",
        purchasable: true,
        island: 3,
        mats:  [
            {
                item: aspenWood,
                amount: 2
            },
            {
                item: ironIngot,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Iron Ice Staff",
        price: 25,
        dmg: 18,
        reach: 10,
        special: "",
        purchasable: true,
        island: 3,
        mats:  [
            {
                item: aquamarine,
                amount: 1
            },
            {
                item: ironIngot,
                amount: 1
            }
        ],
        magic: ICE
    },
    {
        Name: "Iron Water Staff",
        price: 25,
        dmg: 18,
        reach: 10,
        special: "",
        purchasable: true,
        island: 3,
        mats:  [
            {
                item: sapphire,
                amount: 1
            },
            {
                item: ironIngot,
                amount: 1
            }
        ],
        magic: WATER
    },
    {
        Name: "Iron Fire Staff",
        price: 25,
        dmg: 18,
        reach: 10,
        special: "",
        purchasable: true,
        island: 3,
        mats:  [
            {
                item: ruby,
                amount: 1
            },
            {
                item: ironIngot,
                amount: 1
            }
        ],
        magic: FIRE
    },
    {
        Name: "Iron EARTH Staff",
        price: 25,
        dmg: 18,
        reach: 10,
        special: "",
        purchasable: true,
        island: 3,
        mats:  [
            {
                item: emerald,
                amount: 1
            },
            {
                item: ironIngot,
                amount: 1
            }
        ],
        magic: ICE
    },
    {
        Name: "Hero's Blade",
        price: 100,
        dmg: 30,
        reach: 8,
        special: "",
        purchasable: false,
        island: 3,
        magic: null
    },
    {
        Name: "Steel Dagger",
        price: 100,
        dmg: 70,
        reach: 5,
        special: "",
        purchasable: true,
        island: 4,
        mats:  [
            {
                item: steelIngot,
                amount: 1
            },
            {
                item: sweetgum,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Steel Cutlass",
        price: 100,
        dmg: 41.875,
        reach: 8,
        special: "",
        purchasable: true,
        island: 4,
        mats:  [
            {
                item: steelIngot,
                amount: 1
            },
            {
                item: sweetgum,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Steel Sword",
        price: 100,
        dmg: 32,
        reach: 10,
        special: "",
        purchasable: true,
        island: 4,
        mats:  [
            {
                item: steelIngot,
                amount: 1
            },
            {
                item: sweetgum,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Steel Lightning Staff",
        price: 100,
        dmg: 32,
        reach: 10,
        special: "",
        purchasable: true,
        island: 4,
        mats:  [
            {
                item: steelIngot,
                amount: 1
            },
            {
                item: topaz,
                amount: 1
            }
        ],
        magic: LIGHTNING
    },
    {
        Name: "Steel Void Staff",
        price: 100,
        dmg: 32,
        reach: 10,
        special: "",
        purchasable: true,
        island: 4,
        mats:  [
            {
                item: steelIngot,
                amount: 1
            },
            {
                item: opal,
                amount: 1
            }
        ],
        magic: VOID
    },
    {
        Name: "Steel Water Staff",
        price: 100,
        dmg: 32,
        reach: 10,
        special: "",
        purchasable: true,
        island: 4,
        mats:  [
            {
                item: steelIngot,
                amount: 1
            },
            {
                item: sapphire,
                amount: 1
            }
        ],
        magic: WATER
    },
    {
        Name: "Steel Ice Staff",
        price: 100,
        dmg: 32,
        reach: 10,
        special: "",
        purchasable: true,
        island: 4,
        mats:  [
            {
                item: steelIngot,
                amount: 1
            },
            {
                item: aquamarine,
                amount: 1
            }
        ],
        magic: ICE
    },
    {
        Name: "Coffer's Key",
        price: 400,
        dmg: 84,
        reach: 5,
        special: "Increased chance of finding treasure - `bf gather`.",
        purchasable: false,
        island: 4
    },
    {
        Name: "Thunderous Touch",
        price: 400,
        dmg: 42,
        reach: 10,
        special: "",
        purchasable: false,
        island: 4,
        magic: LIGHTNING
    },
    {
        Name: "Silver Dagger",
        price: 500,
        dmg: 100,
        reach: 5,
        special: "",
        purchasable: true,
        island: 5,
        mats:  [
            {
                item: silverIngot,
                amount: 1
            },
            {
                item: oakwood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Silver Cutlass",
        price: 100,
        dmg: 60,
        reach: 8,
        special: "",
        purchasable: true,
        island: 5,
        mats:  [
            {
                item: silverIngot,
                amount: 1
            },
            {
                item: oakwood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Silver Sword",
        price: 500,
        dmg: 46,
        reach: 10,
        special: "",
        purchasable: true,
        island: 5,
        mats:  [
            {
                item: silverIngot,
                amount: 1
            },
            {
                item: oakwood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Silver Lightning Staff",
        price: 500,
        dmg: 46,
        reach: 10,
        special: "",
        purchasable: true,
        island: 5,
        mats:  [
            {
                item: silverIngot,
                amount: 1
            },
            {
                item: topaz,
                amount: 1
            }
        ],
        magic: LIGHTNING
    },
    {
        Name: "Silver Void Staff",
        price: 500,
        dmg: 46,
        reach: 10,
        special: "",
        purchasable: true,
        island: 5,
        mats:  [
            {
                item: silverIngot,
                amount: 1
            },
            {
                item: opal,
                amount: 1
            }
        ],
        magic: VOID
    },
    {
        Name: "Silver Staff of Choice",
        price: 500,
        dmg: 46,
        reach: 10,
        special: "",
        purchasable: true,
        island: 5,
        mats:  [
            {
                item: silverIngot,
                amount: 1
            },
            {
                item: diamond,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Hornswaggle's Henchman",
        price: 2000,
        dmg: 56,
        reach: 10,
        special: "Increased odds of successfully pillaging - `bf pillage`",
        purchasable: false,
        island: 5
    },
    {
        Name: "Staff of Divine Judgement",
        price: 500,
        dmg: 56,
        reach: 10,
        special: "",
        purchasable: false,
        island: 5,
        magic: RADIANT
    },
    {
        Name: "Platinum Dagger",
        price: 1000,
        dmg: 150,
        reach: 5,
        special: "",
        purchasable: true,
        island: 6,
        mats:  [
            {
                item: platinumIngot,
                amount: 1
            },
            {
                item: maplewood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Platinum Cutlass",
        price: 1000,
        dmg: 91.25,
        reach: 8,
        special: "",
        purchasable: true,
        island: 6,
        mats:  [
            {
                item: platinumIngot,
                amount: 1
            },
            {
                item: maplewood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Platinum Sword",
        price: 1000,
        dmg: 71,
        reach: 10,
        special: "",
        purchasable: true,
        island: 6,
        mats:  [
            {
                item: platinumIngot,
                amount: 1
            },
            {
                item: maplewood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Platinum Staff of Choice",
        price: 1000,
        dmg: 71,
        reach: 10,
        special: "",
        purchasable: true,
        island: 6,
        mats:  [
            {
                item: platinumIngot,
                amount: 1
            },
            {
                item: diamond,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Mutiny's Abandon",
        price: 4000,
        dmg: 92.23,
        reach: 9,
        special: "Increased favor with crew.",
        purchasable: false,
        island: 6
    },
    {
        Name: "Staff of Tormented Souls",
        price: 1000,
        dmg: 83,
        reach: 10,
        special: "",
        purchasable: false,
        island: 6,
        magic: null
    },
    {
        Name: "Palladium Dagger",
        price: 10000,
        dmg: 300,
        reach: 5,
        special: "",
        purchasable: true,
        island: 7,
        mats:  [
            {
                item: palladiumIngot,
                amount: 1
            },
            {
                item: rosewood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Palladium Cutlass",
        price: 10000,
        dmg: 183.75,
        reach: 8,
        special: "",
        purchasable: true,
        island: 7,
        mats:  [
            {
                item: palladiumIngot,
                amount: 1
            },
            {
                item: rosewood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Palladium Sword",
        price: 10000,
        dmg: 144,
        reach: 10,
        special: "",
        purchasable: true,
        island: 7,
        mats:  [
            {
                item: palladiumIngot,
                amount: 1
            },
            {
                item: rosewood,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Palladium Staff of Choice",
        price: 10000,
        dmg: 144,
        reach: 10,
        special: "",
        purchasable: true,
        island: 7,
        mats:  [
            {
                item: palladiumIngot,
                amount: 1
            },
            {
                item: diamond,
                amount: 1
            }
        ],
        magic: null
    },
    {
        Name: "Plunderer's Ace",
        price: 40000,
        dmg: 242.85,
        reach: 7.5,
        special: "",
        purchasable: false,
        island: 7,
        magic: null
    },
    {
        Name: "Poseidon's Fountain",
        price: 40000,
        dmg: 180,
        reach: 10,
        special: "",
        purchasable: false,
        island: 7,
        magic: WATER
    },
    {
        Name: "Agni's Torch",
        price: 40000,
        dmg: 180,
        reach: 7.5,
        special: "",
        purchasable: false,
        island: 7,
        magic: FIRE
    },
    {
        Name: "Gaia's Landslide",
        price: 40000,
        dmg: 180,
        reach: 7.5,
        special: "",
        purchasable: false,
        island: 7,
        magic: EARTH
    },
    {
        Name: "Zeus' Torch",
        price: 40000,
        dmg: 180,
        reach: 7.5,
        special: "",
        purchasable: false,
        island: 7,
        magic: FIRE
    }
]