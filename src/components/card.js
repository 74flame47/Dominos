import React from 'react';
import '../css/card.css';

const Card = ({value1, value2, styleInput, boxInput, addToBoard1}) => {
    return(
        <div onClick={addToBoard1} className="card" style={styleInput}>
            <div style={boxInput}>{value1}</div>
            <div style={boxInput}>{value2}</div>
        </div>
    )
}

export default Card;