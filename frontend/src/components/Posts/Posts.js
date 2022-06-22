import React, { useEffect, useState,useMemo } from "react";
//importing css
import "./Posts.css";
import Post from "../Post/Post";
import Loading from '../Loading/Loading'
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
//importing actions
import { getPosts,clearAllPost } from "../../Actions/Posts";
const Posts = () => {
  const dispatch = useDispatch();
  //getting data from redux store
  const { Posts } = useSelector((state) => state);
  //useEffect running on component mount
  useEffect(() => {
    (async ()=>{
      dispatch(clearAllPost());
      setIsLoading(true);
    //dispatching getPost
    await dispatch(getPosts());
    setIsLoading(false);
    })();
  }, []);
  //state for loading
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section id="PostsContainer">
      {Posts.map((PostsItem, index) => {
        return (
          <Post key={index} title={PostsItem.title} image={PostsItem.image} createdAt={PostsItem.createdAt}/>
          );
        })}
        {isLoading ? <Loading/> : null}
    </section>
  );
};

export default Posts;
