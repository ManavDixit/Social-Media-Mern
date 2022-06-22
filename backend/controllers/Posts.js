import Posts from "../models/Post.js";
//function to fetch all post
export const getAllPost = async (req,res) => {
  try {
    const posts = await Posts.find();
    console.log("posts sent");
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};
//function to create new note
export const CreateNewPost = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    console.log(req?.file);
    //adding data to Posts model
    const NewPost = new Posts({...data,image:req?.file?.path|| 'uploads/default-image.jpg'});
    //SAving data to dataBase
    const savedPostNewPost = await NewPost.save();
    //sending savedPost as response
    res.status(200).json(savedPostNewPost);
  } catch (error) {
    console.log(error);
    res.status('400').send(error)
  }
};
