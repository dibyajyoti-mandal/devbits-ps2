import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectDB= async ()=>{

    try {
        const{ connection}= await mongoose.connect(process.env.MONGODB_URL)
        if(connection){
            console.log(`Connected to MongoDB :${connection.host}`);
        }
    } catch (e) {
        console.log(e);
        process.exit(1);
    } 
}
export default connectDB;