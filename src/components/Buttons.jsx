import React from 'react';

const Buttons = (props) => {

    const eventoClick = () =>{
        console.log('me diste click');
        
    }

    return (
        <div className='buttons'>
            <button onClick={() => eventoClick()} className='btn-primary' >{props.name}</button>
        </div>
    )
}

export default Buttons
