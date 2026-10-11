import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb://zaidbelayachii_db_user:ZsoFB05gitdYHwJk@ac-ne5ufhs-shard-00-00.ysneajk.mongodb.net:27017,ac-ne5ufhs-shard-00-01.ysneajk.mongodb.net:27017,ac-ne5ufhs-shard-00-02.ysneajk.mongodb.net:27017/BookMe?ssl=true&replicaSet=atlas-3gia7x-shard-0&authSource=admin&retryWrites=true")
    .then(() => {
        console.log("DB CONNECTED")
    })
}