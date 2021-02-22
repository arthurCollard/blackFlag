
const start = {
    help: {
        embed: {
            color: '#000000',
            title: `**Start Command**`,
            description: '`bf start`, Command for creating an accounr.\n',
            fields: [
                {
                    name: "What Happens: ", value: "An embed comes up that shows whether your account was successfully created or not"
                },
                {
                    name: "Base Cooldown: ", value: "No Cooldown"
                }
            ]
        }
    },
    aliases: "start",
    manager: () => { }
}

export const prefix = 'bf';

export default [
    start,
]