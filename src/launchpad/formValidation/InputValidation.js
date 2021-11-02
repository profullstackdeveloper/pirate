import React from 'react';

export default function InputValidation (props) {
    const changeValue = (e) => {
        console.log("prop error : ", props.errorMessage)
        props.setBnbAmount(e.currentTarget.value);
    }
    return (
        <div>
            BNB
            <input onChange = {changeValue} value = {props.value || ''} style={{color : `${props.valid ? 'white' : 'red'}`}}></input>
            <div style={{textAlign : 'center'}}><span style={{fontSize : '15px', color : 'red'}}>{props.errorMessage}</span></div>
        </div>
    )
}