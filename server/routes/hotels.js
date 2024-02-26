import express from "express"
import {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels,
    countByCity,
    countByType,
    getFeaturedHotels,
    getHotelRooms
} from "../controllers/hotel.js";

import { verifyAdmin,verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

//CREATE
router.post("/",verifyAdmin,createHotel);
router.put("/:id",verifyAdmin,updateHotel)
//get
router.get("/find/:id",getHotel)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)
//getall
router.get("/",getHotels)
router.get("/featuredHotels",getFeaturedHotels)
//delete
router.delete("/:id",verifyAdmin,deleteHotel)
router.get("/room/:id", getHotelRooms);

/*
//CREATE
router.post("/",verifyAdmin,createHotel);
router.put("/:id",verifyAdmin,updateHotel)
//get
router.get("/find/:id",getHotel)
router.get("/countByCity",countByCity)
//getall
router.get("/",getHotels)
//delete
router.delete("/:id",verifyAdmin,deleteHotel)
*/

router.get("/apiuse",(req,res)=>{
    res.send({"users":["asdfghj","asdfg"]})
  })

  export default router