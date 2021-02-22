const createNewPlayer = async ({ player }) => {

    let existing = await createNewPlayer.model.where({ discordId: player.discordId }).findOne();

    if (existing) {
        return new Promise((resolve) => {
            resolve({ status: 302 })
        })
    }
    
}