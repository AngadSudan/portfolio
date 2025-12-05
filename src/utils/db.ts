import mongoose  from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI!;

const connectDB =async ()=>{
    if(!MONGODB_URL) return ;

    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB Connected");
}
export default connectDB;