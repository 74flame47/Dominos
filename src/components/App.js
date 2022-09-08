import React, {Component} from 'react';
import {deck} from './deck';
import Board from './board';
import Hand from './hand';
import Search from './search';
import '../css/App.css';

class App extends Component {

    state = {
      dafault: true,
      newGame: true,
      board: [],
      player1: [],
      player2: [],
      player3: [],
      player4: [],
      deck: [],
      choice: false,
      card: undefined
    }



   randomizer = (hand, user) => {
    
    //I needed to write a for loop to filter through the deck 
    //so that it can have access to all the values in the deck

    for(let i = 0; i <= 6; i++){
      //console.log(`The loop ran ${i} times.`);
      //console.log(`The deck length is ${deck.length}.`);
      //First I defined x as an equasion that returns a 
      //random number between 0 and 28
      let x = Math.round(Math.random() * deck.length);
      //console.log(deck);
      //I then set a limit on that number because 28 is not 
      // a vaild array position for the deck.
      if(x >= deck.length ){
         x = deck.length -1;
         
      }
      
      //Next I added the current array value into the player state
      hand.push(deck[x])


      



      //Next I added the new array value to the state
      switch(user){
        case "player1":
          
          this.setState({player1: hand});
          
          //console.log(`The value of x =${x}`);
         // console.log(`Cards value = ${deck[x]}`);
          //console.log(`The deck total =${deck.length}`);
          //I also removed the array value from the deck so that there wont be any 
          ///duplicates
          deck.splice(x, 1);
         // console.log(deck);
         // console.log(`==================================`);
        break;

        case "player2":
          this.setState({player2:  hand});
                        //console.log(`The value of x =${x}`);
                        //console.log(`Cards value = ${deck[x]}`);
                        //console.log(`The deck total =${deck.length}`);
                        //I also removed the array value from the deck so that there wont be any 
                        ///duplicates
                        deck.splice(x, 1);
                        //console.log(deck);
                        //console.log(`==================================`);
        break;

        case "player3":
          this.setState({player3:  hand});
          //console.log(`The value of x =${x}`);
                       // console.log(`Cards value = ${deck[x]}`);
                        //console.log(`The deck total =${deck.length}`);
                        //I also removed the array value from the deck so that there wont be any 
                        ///duplicates
                        deck.splice(x, 1);
                        //console.log(deck);
                        //console.log(`==================================`);
        break;

        default:
        this.setState({player4: hand});
        //console.log(`The value of x =${x}`);
                        //console.log(`Cards value = ${deck[x]}`);
                       // console.log(`The deck total =${deck.length}`);
                        //I also removed the array value from the deck so that there wont be any 
                        ///duplicates
                        deck.splice(x, 1);
                        //console.log(deck);
                       // console.log(`==================================`);
                        //console.log(`==================================`);
                        //console.log(`==================================`);
      }


      //This is the last conditional value I set. Needed the loop to stop once the 
      //limit has been reach which is 7
      if(i === 6){
        return //console.log("Thats 7 cards");
      }
    }
  }






  removeFromHand = (card, i) => {
    let player1 = this.state.player1;
    let player2 = this.state.player2;
    let player3 = this.state.player3;
    let player4 = this.state.player4;


    if(player1[i] === card){
      player1.splice(i, 1)
      this.setState({player1: player1})
    }
    else if(player2[i] === card){
      player2.splice(i, 1)
      this.setState({player2: player2})
    }
    else if(player3[i] === card){
      player3.splice(i, 1)
      this.setState({player3: player3})
    }
    else if(player4[i] === card){
      player4.splice(i, 1)
      this.setState({player4: player4})
    }
  }


 toBack = async () => {
  let boardB = this.state.board;
  let boardCount = boardB.length - 1;
  let x = this.state.card[0];
  let y = this.state.card[1]


  if(boardB[boardCount][1] === x || boardB[boardCount][1] === y){
        if(boardB[boardCount][1] === x){
          boardB.push(this.state.card);
          this.setState({board: boardB,
                         choice: false});
        }else{
          await this.setState({card: [y,x]});
  
          boardB.push(this.state.card);
          this.setState({board: boardB,
                         choice: false});
        }
  }
 }







 toFront = async  ()=> {
  let boardB = this.state.board;
  let x = this.state.card[0];
  let y = this.state.card[1]

  if(boardB[0][0] === this.state.card[0] || boardB[0][0] === this.state.card[1]){
    console.log("This card will go in the FRONT!");
    //This checks if the last card value matches the front of the board.
    if(boardB[0][0] === this.state.card[1]){
      //This adds that card to the BEGINNING of the board arrray.
      boardB.unshift(this.state.card);
      //This updates the current board.
      await this.setState({board: boardB,
                          choice: false});

    }else{
      await this.setState({card: [y,x]});

      boardB.unshift(this.state.card);
      await this.setState({board: boardB,
                          choice: false});
    }
    

  }

  

 }









  addToBoard = async (card, i) => {
    console.log(card + " was added.")
    let boardB = this.state.board;
    let boardCount = boardB.length - 1;
    let x = card[0];
    let y = card[1]

    if(this.state.board.length === 0){
      boardB.unshift(card);
      this.setState({board: boardB})
      this.removeFromHand(card, i)
      console.log("boardB was empty");
    }else{
      //When using logical operators like below, add them with in brackets ()
      //This says "If the card matches the front and the back of the deck, then..."
      if(((boardB[0][0] === card[0] || boardB[0][0] === card[1]) && 
         (boardB[boardCount][1] === card[0] || boardB[boardCount][1] === card[1]))
      ){
        console.log("The Card can be added at either end.");
        await this.setState({card: card,
                             choice: true});

        this.removeFromHand(card, i);

       alert("Please choose which side you would like the card to go...")
        console.log(`The current card is ${this.state.card}`)
      }
      //This checks if the first number in front of the deck matches card's values
      else if(boardB[0][0] === card[0] || boardB[0][0] === card[1]){
        console.log("This card will go in the FRONT!");
        //This checks if the last card value matches the front of the board.
        if(boardB[0][0] === card[1]){
          //This adds that card to the BEGINNING of the board arrray.
          boardB.unshift(card);
          //This updates the current board.
          this.setState({board: boardB})
          //This removes it from the player's hand
          this.removeFromHand(card, i)
        }else{
          card[0] = y;
          card[1] = x;
  
          boardB.unshift(card);
          this.setState({board: boardB});
          this.removeFromHand(card, i)
        }
        
  
      }
      //This checks if the last number in back of the deck matches card's values
      else if(boardB[boardCount][1] === card[0] || boardB[boardCount][1] === card[1]){
        console.log("This card  belongs in the BACK!");
  
        if(boardB[boardCount][1] === card[0]){
          boardB.push(card);
          this.setState({board: boardB});
          this.removeFromHand(card, i);
        }else{
          card[0] = y;
          card[1] = x;
  
          boardB.push(card);
          this.setState({board: boardB});
          this.removeFromHand(card, i);
        }
        
        console.log(boardB)
      }else{
        alert("This card doesn't belong on the board!");
      }
    }
    

    

  }


  componentDidMount(){
    this.randomizer(this.state.player1, "player1");
    this.randomizer(this.state.player2, "player2");
    this.randomizer(this.state.player3, "player3");
    this.randomizer(this.state.player4, "player4");
  }
  
  render(){

    return (
      <div className="App">
        <h1>Welcome to the Board</h1>
        <Search />
        <Board cards={this.state.board} toFront={this.toFront} toBack={this.toBack} choice={this.state.choice}/>
        <Hand cards={this.state.player1}  addToBoard={this.addToBoard} title={"hand1"}/>
        <Hand cards={this.state.player2}  addToBoard={this.addToBoard} title={"hand2"}/>
        <Hand cards={this.state.player3}  addToBoard={this.addToBoard} title={"hand3"}/>
        <Hand cards={this.state.player4}  addToBoard={this.addToBoard} title={"hand4"}/>
        
      </div>
    )
  }
}

export default App;