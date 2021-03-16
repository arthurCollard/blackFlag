import { coal, copperOre, ironOre, palladiumOre, platinumOre, silverOre } from "./materials";

export const bronzeIngot = {
    name: 'copper ingot',
    unrefined: [copperOre],
    cost: 4,
    craftingReq: 2
}

export const ironIngot = {
    name: 'iron ingot',
    unrefined: [ironOre],
    cost: 15,
    craftingReq: 3
}

export const steelIngot = {
    name: 'steel ingot',
    unrefined: [ironOre, coal],
    cost: 50,
    craftingReq: 5
}

export const silverIngot = {
    name: 'silver ingot',
    unrefined: [silverOre],
    cost: 150,
    craftingReq: 10
}

export const platinumIngot = {
    name: 'platinum ingot',
    unrefined: [platinumOre],
    cost: 450,
    craftingReq: 18,
}

export const palladiumIngot = {
    name: 'palladium ingot',
    unrefined: [palladiumOre],
    cost: 4500,
    craftingReq: 30,
}