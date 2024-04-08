import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import util from "util"; 

//Eiffy: (async ()=>{})()
const connectDB = async function connectDB() {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\nMongoDB Connected! DB HOST:${util.inspect(connectionInstance.connection.host)}`);
        //Inspect json objects with circular references using util.instect(). Else use json.stringify()

    } catch(error){
        console.log("MongoDB Connection Error:", error)
        process.exit(1)
    }
}

export default connectDB
