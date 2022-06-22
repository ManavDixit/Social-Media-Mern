const MainUrl='http://192.168.1.3:8000/posts';
//const MainUrl='http://localhost:8000/posts'
//const MainUrlconsMainUrlrlMainUrlrlMainUrl='https://manav.loca.lt/posts';
export const GetPosts=async ()=>{
    const url=`${MainUrl}/`
    //fetching data from server
    const response=await fetch(url);
    const jsonData=response.json();
    return jsonData;
}
export const CreatePosts= async ({title,description,image})=>{
    const url=`${MainUrl}/createpost`;
    const formData=new FormData();
    formData.append('title',title);
    formData.append('description',description);
    formData.append('image',image)
    const data={
        method:'POST',
        body:formData
    }
    const response=await fetch(url,data);
    const jsonData=await response.json();
    return jsonData;
}
