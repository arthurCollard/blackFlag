import Player from '../client/models/playerModel'

const createNewPlayer = async ({ player }) => {

    let existing = await Player.model.where({ discordId: player.discordId }).findOne();
    console.log('existing', existing)

    if (existing) {
        return new Promise((resolve) => {
            resolve({ status: 302 })
        })
    } else {
        let dbRes
        try {
           dbRes = await player.save() 
        } catch ( err ) {
            return new Promise ((resolve) => {
                resolve({status: 500})
            })
        }
        return new Promise ((resolve) => {
            resolve({status: 200})
        })
    }

}

export default {
    createNewPlayer
}