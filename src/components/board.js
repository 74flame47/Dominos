import React, {Component} from 'react';
import Card from './card';
import '../css/board.css';

class Board extends Component  {

        state = {
            dafault: true
        }

    render(){
        const {cards, toFront, toBack, choice} = this.props;

        const style1 ={
            width: "120px",
            height: "220px"
        }

        const style2 ={
            width: "220px",
            height: "120px"
        }

        const box1 = {
            width: "100%",
            height: "50%",
            margin: "0",
            padding: "0",
            display: "block",
            border: "1px solid #da1414"
        }

        const box2 = {
            width: "50%",
            height: "100%",
            margin: "0",
            padding: "0",
            display: "inline-block",
            borderRight: "1px solid #da1414"
        }


        const Bcards = cards.map((card, i) => {
            const lastCard = cards[i - 1];
            /** 
            if(lastCard === undefined){
                console.log('Nothing to show');
            }else if(lastCard[0] === card[0] && lastCard[1] === card[0]){
                console.log('There was a match!');
            }else{
                console.log('No match!');
            }
            */
            

            if(card[0] === card[1]){
                return(<Card key={i} styleInput={style1} value1={card[0]} value2={card[1]} boxInput={box1}/>)
            }else{
                return(<Card key={i} styleInput={style2} value1={card[0]} value2={card[1]} boxInput={box2}/>)
            }

            
        })

        return(
            <div id="board-bg">
               {choice ? <div onClick={toFront} className="front">Front</div> : null}
               {choice ?<div onClick={toBack} className="back">Back</div> : null}
                {Bcards}
            </div>
        )
    }
    
}

export default Board;