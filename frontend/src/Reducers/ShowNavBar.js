export default (showNavbar=true,action)=>{
    switch (action.type) {
        case 'showNavbar':
            return true
            break;
        case 'hideNavbar':
            return false;
            break;
        default:
            return showNavbar;
            break;
    }
}