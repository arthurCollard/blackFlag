import mongoose from 'mongoose'

let Canon = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    damage: { type: Number },
    special: { type: String },
    cost: { type: Number }
},
    {
        timestamps: {
            createdAt: 'created_at',
        }
    });

export default {
    schema: Canon,
    model: mongoose.model('Canon', Canon)
};