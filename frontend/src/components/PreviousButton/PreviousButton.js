import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {useNavigate}  from 'react-router-dom'
import './PreviousButton.css';

const PreviousButton = () => {
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1);
    }
    return (
        <div id='previousButtonContainer'>
            <FontAwesomeIcon onClick={goBack} size='2x' icon={faArrowLeftLong}/>
        </div>
    )
}

export default PreviousButton
