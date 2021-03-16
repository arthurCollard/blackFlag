import mongoose from 'mongoose'

let Item = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    amount: { type: Number },
});


export default {
    schema: Item,
    model: mongoose.model('Item', Item)
};