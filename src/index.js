// import dotenv from "dotenv"
// import connectDB from "./db/index.js";


// // import { Express } from "express";
// dotenv.config({
//     path: './env'
// })

// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT || 8000, ()=>{
//         console.log(`Server is running at port: ${process.env.PORT}`);
//     })
// })
// .catch((err)=>{
//     console.log("Mongo db connection failde !!",err)
// })



// require('dotenv').config({path: './env'})
// first .env should run for providing all env info in the files
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

