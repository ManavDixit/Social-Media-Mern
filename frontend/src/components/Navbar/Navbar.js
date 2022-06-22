import React from 'react';
//importing css
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse,faArrowTrendUp,faMessage,faUser, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useSelector ,useDispatch} from 'react-redux';
//importing actions
import {showNavbar,hideNavbar} from '../../Actions/NavBar';
//importing libraires from react-router-dom
import {Link} from 'react-router-dom'
const Navbar = () => {
    const dispatch=useDispatch();
    
    //hiding NavBar on scrolling
    let previousScrollLocation=window.pageYOffset;
    window.onscroll=()=>{
        let presentScrollLocation=window.pageYOffset;
        //checking if page is scrolled up or down
        if(previousScrollLocation<presentScrollLocation){
            dispatch(hideNavbar());
        }
        else{
            dispatch(showNavbar());
        }
        previousScrollLocation=presentScrollLocation;
    }
    //getting states from redux store
    const {ShowNavbar}=useSelector(state=>state);
    return (
        <nav id='NavBar' style={{bottom:ShowNavbar?'10%':'-20%'}}>
            <ul>
                <li><Link to="/"><FontAwesomeIcon icon={faHouse}/></Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faArrowTrendUp}/></Link></li>
                <li><Link to="/create_post"><FontAwesomeIcon icon={faPlus}/></Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faMessage}/></Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faUser}/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
