import mongoose from 'mongoose'
import Item from './itemModel'

let Inventory = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    items: { type: [Item.schema] }
});

export default {
    schema: Inventory,
    model: mongoose.model('Inventory', Inventory)
};