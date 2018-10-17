import React from 'react';
 


const Char = (props) => {

    const random = '#'+Math.random().toString(16).substr(2,6);
    const random2 = '#'+Math.random().toString(16).substr(2,6);

    const style= {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: '#'+Math.random().toString(16).substr(2,6),
        color: 'white',
        background:' linear-gradient(to bottom, '+random+' 0%, '+random2+' 100%)'
    }


    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
 }

 export default Char;