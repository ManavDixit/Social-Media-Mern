import mongoose from "mongoose";
const url='mongodb+srv://manavdixit:manavdixit@cluster0.cwwwo.mongodb.net/SocialMedia?retryWrites=true&w=majority';
//const url="mongodb://localhost:27017"
const connectToDataBase=()=>{
    mongoose.connect(url).then(()=>{
	    console.log("connected successfuly");
    }).catch((error)=>{
	    console.log(error);
    });
}
export default connectToDataBase;
