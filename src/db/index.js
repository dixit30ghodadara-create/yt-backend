import mongoose from "mongoose";

import{ DB_NAME } from "../constant.js"

const connectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(`\n MongoDb connected !! DB HOST : ${conectionInstance.connection.host}`)

    } catch (error) {
        console.log("MngoDB connection error ", error);
        process.exit(1)
    }
}

export default connectDB