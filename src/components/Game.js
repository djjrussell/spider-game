import React from 'react';
import { StartButton } from './StartButton.js'
import {Board} from "./Board";


export class Game extends React.Component {
    render(){
        return (
            <div>
                < StartButton />
                < Board/>
            </div>
        )
    }
}