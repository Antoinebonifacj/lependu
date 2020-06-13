import React, { Component } from 'react';
import './App.css';
import Letter from './Letter';

const WORDS = ["convenable", "attrayant", "agreable", "dynamisant", "revigorant"];
const LETTERS1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
const LETTERS2 = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class App extends Component {

  computeDisplay() {
    const phrase = `${this.generatePhrase().replace(/\w/g, '_')}`.split('');
    return this.generatePhrase();
    }

  generatePhrase() {
    const index = this.getRandomInt()
    return WORDS[index];
  }

  getRandomInt(){
    return Math.floor(Math.random() * Math.floor(WORDS.length));
  }

  handleLetterClick(letter) {
    console.log(letter, 'clicked')
  }

  render() {
    return (


      <div className={"container"}>
        <div className={"title"}>
          Le jeu du Pendu
        </div>
        <div className={"phrase"}>
          {this.computeDisplay()}
        </div>

        <div className={"row"}>
          {LETTERS1.map((letter, index) => (
            <div className={"col"} key={index}>
              <Letter
                letter={letter}
                key={index}
                index={index}
                onClick={this.handleLetterClick}
              />
            </div>
          ))}
        </div>
        <div className={"row"}>
          {LETTERS2.map((letter, index) => (
            <div className={"col"} key={index}>
              <Letter
                letter={letter}
                key={index + 13 }
                index={index}
                onClick={this.handleLetterClick}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
