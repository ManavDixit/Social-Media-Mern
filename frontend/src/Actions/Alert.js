export const showAlert=({message,type})=>{
    return {type:'showAlert',payload:{message,type}}
}
export const hideAlert=()=>{
    return {type:'hideAlert'}
}