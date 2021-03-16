import mongoose from 'mongoose'

let Weapon = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String }
},
    {
        timestamps: {
            createdAt: 'created_at',
        }
    });

export default {
    schema: Weapon,
    model: mongoose.model('Weapon', Weapon)
};