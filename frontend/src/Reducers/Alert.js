const AlertReducer=(state={'show':false,'message':null,type:'success'},action)=>{
    switch (action.type) {
        case 'showAlert':
            return {'show':true,'message':action.payload.message,'type':action.payload.type};
            break;
        case 'hideAlert':
            return {'show':false,'message':null,type:'success'};
        default:
            return state;
            break;
    }
}
export default AlertReducer;