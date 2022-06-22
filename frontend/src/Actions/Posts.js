import {GetPosts,CreatePosts} from '../api/posts'
export const getPosts=()=> async (dispatch)=>{
    const data=await GetPosts();
    const action={type:'getPosts',payload:data};
   dispatch(action);

}

export const createPost=(PostData)=>async (dispatch)=>{
    const data=await CreatePosts(PostData);
    const action={type:'createPost',payload:data}
    dispatch(action);
}
export const clearAllPost=()=>{
    return {type:'clearAllPosts'}
}