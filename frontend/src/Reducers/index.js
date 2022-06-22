import { combineReducers } from "redux";
import Posts from "./Posts";
import ShowNavbar from './ShowNavBar';
import alert from './Alert';
export default combineReducers(
    {
        Posts,ShowNavbar,alert
    }
)