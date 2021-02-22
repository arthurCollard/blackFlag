import mongoose from 'mongoose'
import Canon from './canonModel'

let Ship = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    size: { type: Number },
    cost: { type: Number },
    speed: { type: Number },
    owner: { type: String },
    weapons: { type: [Canon.schema] }
},
    {
        timestamps: {
            createdAt: 'created_at',
        }
    });

export default {
    schema: Ship,
    model: mongoose.model('Ship', Ship)
};