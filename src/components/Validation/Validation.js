import React from 'react';


const Validation = (props) => {

    let style = {
        color: 'green',
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: '#85C590'
        
    }

    let ValidationMessage = 'Text long enough';

    if(props.inputLength <= 5){
        ValidationMessage = 'Text too short';
        style = {
            color: 'red',
            display: 'inline-block',
            padding: '16px',
            margin: '16px',
            border: '1px dashed black',
            textAlign: 'center',
            backgroundColor: '#FFADAD'
        }
        
    }

    return (
        <div>
            <p style={style}>
                {ValidationMessage}
            </p>
        </div>
    )
}

export default Validation;