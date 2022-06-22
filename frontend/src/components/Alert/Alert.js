import React from 'react'
import './Alert.css'
const Alert = ({message,type}) => {
    return (
        <div id='Alert' style={{'background':type==='success'?'#4BB543':'#D24858'}}>
            <p>{message}</p>
        </div>
    )
}

export default Alert;
