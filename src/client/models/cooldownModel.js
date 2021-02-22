import mongoose from 'mongoose'

let Cooldown = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    timestamp: { type: Number }
});


export default {
    schema: Cooldown,
    model: mongoose.model('Cooldown', Cooldown)
};