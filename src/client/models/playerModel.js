import mongoose from 'mongoose'
import Skill from './skillsModel'
import Cooldown from './cooldownModel'


let Player = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    bf_bucks: { type: Number, default: 0 },
    patron_status: { type: String, default: 'none' },
    discordId: { type: String },
    money: { type: Number, default: 0 },
    lvl: { type: Number, default: 0 },
    xp: { type: Number, default: 1 },
    currentHp: { type: Number, default: 10},
    maxHp: {type: Number, default: 10},
    island: {type: Number, default: 1},
    cooldowns: {
        type: [Cooldown.schema]
    },
    skills: {
        type: [Skill.schema]
    },
    inventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory'
    },
    Ship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ship',
        default: null
    },
    dailyStreak: {
        type: Number,
        default: 0
    },
    weapon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    }

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});


export default {
    schema: Player,
    model: mongoose.model('Player', Player)
};
