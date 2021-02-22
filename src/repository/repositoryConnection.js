import mongoose from 'mongoose'

export const connection = async () => {

    let mongoPW
    let mongoDB
    if (process.env.NODE_ENV) {
        mongoPW = process.env.mongoPW
        mongoDB = process.env.mongoDB
    }

    const uri = `mongodb+srv://officerkingsley:${mongoPW}@cluster0.ba23o.mongodb.net/${mongoDB}?retryWrites=true&w=majority`;

    let db = mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.Promise = global.Promise;
    return db
}