import React,{useState} from "react";
// importing css
import './CreatePost.css'
//importing FontAwesomeIcon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileImport, faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
//importing post related redux actions
import {createPost} from '../../Actions/Posts';
import {showAlert,hideAlert} from '../../Actions/Alert'
//importing libraries from react-redux
import {useDispatch} from 'react-redux'
const CreatePost = () => {
  const dispatch=useDispatch();
  //state for post
  const [post, setPost] = useState({
    title:'',
    description:'',
    image:'https://cdn-icons-png.flaticon.com/512/1160/1160358.png'
  });
  const [imageDataUrl, setimageDataUrl]=useState('https://cdn-icons-png.flaticon.com/512/1160/1160358.png')
  //function to upload post
  const uploadPost=()=>{
    dispatch(showAlert({message:'Uploading...',type:'success'}))
    dispatch(createPost(post)).then(()=>{
      dispatch(showAlert({message:'Sucessfuly Uploded Post',type:'success'}));
        setTimeout(()=>{
          dispatch(hideAlert());
        },2000)
    }).catch(error=>{
      console.error(error);
      dispatch(showAlert({message:'An error occured.Post not uploded',type:'error'}));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 2000);
      })
  }
  //function to run a file is selected
  const fileHandeler=(event)=>{
    const file=event.target.files[0];
    console.log(file);
    const reader=new FileReader();
    console.log(reader);
    reader.readAsDataURL(file);
    reader.onload=()=>{
      console.log(reader.result);
      console.log(file)
      setPost({...post,image:file});
      setimageDataUrl(reader.result);
    }
  }
  //onChange on input for title
  const inputChangeHandler=(event)=>{
    //setting title state to input value
    setPost({...post,[event.target.name]:event.target.value})
  }
  return (
    <div id='CreatePost'>
      <form onSubmit={(event)=>{event.preventDefault()}}>
      <h1>Create Post</h1>
            <label htmlFor="title">Title:</label>
          <input onChange={inputChangeHandler} value={post.title} type="text" name="title" id="title" />
            <label htmlFor="description">Description:</label>
          <input value={post.description} onChange={inputChangeHandler} type="text" name="description" id="description" />
          <label id='imageLabel' htmlFor="image"><FontAwesomeIcon icon={faFileImport} /></label>
          <input  onChange={fileHandeler} accept="image/png, image/gif, image/jpeg" type="file" name="image" id="image" />
          <button onClick={uploadPost}><FontAwesomeIcon icon={faCloudArrowUp}/></button>
          <div id='previewImage'>
            <p>Preview image</p>
            <img src={imageDataUrl} alt='preview file' />
          </div>
      </form>
    </div>
  );
};

export default CreatePost;
