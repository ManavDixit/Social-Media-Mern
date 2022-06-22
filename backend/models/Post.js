import mongoose from "mongoose";

const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const PostsModel=mongoose.model("Post",PostSchema);
export default PostsModel; 