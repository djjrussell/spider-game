import React from 'react';
import {StartButton} from './StartButton.js'
import {Board} from "./Board";
import {ScoreDisplay} from "./ScoreDisplay.js";

export class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameSpace: null,
            score: 0
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.setScore = this.setScore.bind(this);

        document.addEventListener("bugEaten", this.setScore);

    }

    handleButtonClick() {

        this.setState({
            gameSpace: <Board/>
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

    render() {
        return (
            <div id="GAME">
                {/*<div id="header">*/}
                    < StartButton className='button' onClick={this.handleButtonClick}/>
                    < ScoreDisplay score={this.state.score}/>
                {/*</div>*/}
                <div>
                    {this.state.gameSpace}
                </div>
            </div>
        )
    }
}