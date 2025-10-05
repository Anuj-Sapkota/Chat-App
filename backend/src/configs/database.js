import config from "./config.js";
import mongoose from "mongoose";

const dbConfig = async ()=> {
    const status =  await mongoose.connect(config.mongoDbUrl);
    console.log(`Database connected at port ${status.connection.port}`)
}

export default dbConfig;