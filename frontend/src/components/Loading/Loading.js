import React from 'react'
import './Loading.css';
import spinner from './spinner.svg'
const Loading = () => {
    return (
        <div id='Loading'>
            <img src={spinner} alt="Loading..." />
        </div>
    )
}

export default Loading
