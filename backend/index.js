import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDataBase from './db.js';
import PostRoutes from './routes/Posts.js';

const hostname='192.168.1.3';
const port=8000;
//connecting to database
connectToDataBase();

//inintializing express
const app=express();
//enabling cors
app.use(cors());
app.use('/uploads',express.static('./uploads'))
//using bodyparser to parse data sended in request
app.use(express.json({extended:true,limit:'10mb'}));
app.use(express.urlencoded({extended:true,limit:'10mb'}));
//using Post routes at /posts
app.use('/posts',PostRoutes);

//listing to expess server
app.listen(port,hostname,()=>{
    console.log(`app successfuly listing at ${hostname}:${port} `)
})
