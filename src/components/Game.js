import React from 'react';
import { StartButton } from './StartButton.js'
import {Board} from "./Board";


export class Game extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            gameSpace: null
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(){

        this.setState({
            gameSpace: <Board/>
        })

    }

    render(){
        return (
            <div id="GAME">
                < StartButton className='button' onClick={this.handleButtonClick}/>
                <div>
                    {this.state.gameSpace}
                </div>
            </div>
        )
    }
}