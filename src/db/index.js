import mogoose from  "mogoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionInstance = await mogoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! Db host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection error",error)
        process.exit(1);
    }
}


export default connectDB