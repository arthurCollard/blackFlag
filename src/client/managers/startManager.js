import mongoose from 'mongoose'

import cooldowns from '../constants/cooldowns'
import Cooldown from '../models/cooldownModel'
import Inventory from '../models/inventoryModel'
import Player from '../models/playerModel'
import playerRespository from '../../repository/playerRespository'
import skills from '../constants/skills'
import Skill from '../models/skillsModel'


export const startManager = async ({msg, client}) => {
    const { channel } = msg
    let player = modelNewPlayer(msg)

    let res = await playerRespository.createNewPlayer({player})
    console.log(res)

    if (res) {
        switch (res.status){
            case 200:
                channel.send("Account created")
                break;
            case 302:
                channel.send("Account already exists")
                break;
            case 500:
                channel.send("Error creating account")
                break;
        } 
    }
}   


const modelNewPlayer = ({author}) => {
    const {id, username, discriminator} = author

    const inventoryId = new mongoose.Types.ObjectId();
    const inventory = Inventory.model({
        _id: inventoryId,
    })

    const player = new Player.model({
        _id: new mongoose.Types.ObjectId(),
        name: `${username}#${discriminator}`,
        cooldowns: cooldowns.map(cooldown => new Cooldown.model({
            name: cooldown
        })),
        skills: skills.map(skill => new Skill.model({
            name: skill
        })),
        inventory: inventory,
        ship: null,
        weapon: null
    })
    return player
}