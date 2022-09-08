import React from 'react';
import Card from './card';
import '../css/hand.css';

const Hand = ({cards, addToBoard, title}) => {

    const Hcards = cards.map((card, i) => {

        const style1 ={
            width: "80px",
            height: "180px"
        }
        const box1 = {
            width: "100%",
            height: "50%",
            margin: "0",
            padding: "0",
            display: "block",
            border: "1px solid #da1414"
        }

        const addToBoard1 = () => {
           // console.log("I called the addToBoard function...")
            addToBoard(card,i);
            
        }
        //console.log(`${title} ${card}`);

        return(<Card key={i} value1={card[0]} value2={card[1]} styleInput={style1} boxInput={box1} addToBoard1={addToBoard1}/>)
    })

    return(
        <div id="hand-bg">
            <h1>{title}</h1>
            {Hcards}
        </div>
    )
}

export default Hand;