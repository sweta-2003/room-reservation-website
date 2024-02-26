import  express from "express"
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import hotelRoute from "./routes/hotels.js"
import { getHotels } from "./controllers/hotel.js"
import Hotel from "./models/Hotel.js"

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";

const app=express()
//middleware
dotenv.config()
app.use(

  cors({
  
  origin: [ "http://localhost:3000"],
  
  })
  
  );

app.use(cookieparser());
app.use(express.json());




const connect= async()=>{
        try{
 await mongoose.connect(process.env.DATABASE_URI)
    }
    catch(err){
 console.log(err)
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected")
})

app.get('/api',(req,res)=>{
    res.send({"users":["asdfghj","asdfg"]})
})


app.use('/api/auth',authRoute)
app.use('/api/hotels',hotelRoute)
app.use('/api/users',userRoute)
app.use('/api/rooms',roomsRoute)
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });







app.listen(8800,()=>{
    connect()
    console.log("connected to backend")
})