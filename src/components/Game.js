import React from 'react';
import {StartButton} from './StartButton.js'
import {Board} from "./Board";
import {ScoreDisplay} from "./ScoreDisplay.js";
import {Counter} from "./Counter.js";

export class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: null,
            gameSpace: null,
            score: 0
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.setScore = this.setScore.bind(this);
        this.gameOver = this.gameOver.bind(this);

        document.addEventListener("bugEaten", this.setScore);
        document.addEventListener("gameOver", this.gameOver);

    }

    handleButtonClick() {

        this.setState({
            gameSpace: <Board/>,
            counter: <Counter/>
        })

    }

    setScore() {

        let currentScore = this.state.score;
        currentScore++;
        this.setState(
            {
                score: currentScore
            }
        );
    }

    gameOver() {
        document.getElementById("counter").remove();
        alert("YOU SCORED " + this.state.score);
        document.location = document.location;
    }

    render() {
        return (
            <div id="GAME">
                {/*<div id="header">*/}
                < StartButton className='button' onClick={this.handleButtonClick}/>
                <div>
                    {this.state.counter}
                </div>
                < ScoreDisplay score={this.state.score}/>
                {/*</div>*/}
                <div>
                    {this.state.gameSpace}
                </div>
            </div>
        )
    }
}