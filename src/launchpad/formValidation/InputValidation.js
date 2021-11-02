import React from 'react';

export default function InputValidation (props) {
    const changeValue = (e) => {
        console.log(e.currentTarget.value)
        props.setBnbAmount(e.currentTarget.value);
    }
    return (
        <div>
            <input onChange = {changeValue} value = {props.value || ''}></input>
            <div style={{ textAlign:'center'}}>
                <span style={{fontSize : "15px", color : 'red'}}>{props.valid ? '' : "Please choose between 0.3 and 3"}</span>
            </div>
        </div>
    )
}