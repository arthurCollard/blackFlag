import mongoose from 'mongoose'

let Skill = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    lvl: { type: Number, default: 1 },
});


export default {
    schema: Skill,
    model: mongoose.model('Skill', Skill)
};
