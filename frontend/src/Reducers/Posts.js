 const PostReducer=(Posts=[],action)=>{
    //console.log(action.payload)
    switch (action.type) {
        case 'getPosts':
            return action.payload;
            break;
        case 'createPost':
            return [...Posts,action.payload];
            break;
        case 'clearAllPosts':
            return [];
            break;
        default:
            return Posts;
            break;
    }
}
export default PostReducer;