import mongoose from 'mongoose'

let isConnected: boolean = false;

export const connectDatabase  = async()=>{
    mongoose.set('strictQuery', true)
    if(!process.env.MONGODB_URL){
        return console.log('Missing Mongodb URL');      
    }
    if(isConnected){
        return console.log("MongoDB is already connected");  
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: "Stack-Overflow"
        })
        isConnected = true;
        console.log("MongoDB connected Successfully !!!");
        
    } catch (error) {
        throw Error("MonogoDB connection failed")
    }
}