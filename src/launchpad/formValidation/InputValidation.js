import React from 'react';

export default function InputValidation (props) {
    const changeValue = (e) => {
        console.log(e.currentTarget.value)
        props.setBnbAmount(e.currentTarget.value);
    }
    return (
        <div>
            BNB
            <input onChange = {changeValue} value = {props.value || ''} style={{color : `${props.valid ? 'white' : 'red'}`}}></input>
        </div>
    )
}