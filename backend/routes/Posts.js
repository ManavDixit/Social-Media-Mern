import express from "express";
import { upload } from "../middleware/Posts.js";
const Router=express.Router()
import {getAllPost,CreateNewPost} from '../controllers/Posts.js'
//route to fetch all post
Router.get('/',getAllPost);
//route to crete a new post
Router.post('/createpost',upload.single('image'),CreateNewPost)
export default Router;