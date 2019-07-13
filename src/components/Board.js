import React from 'react';
import {Sprite} from "./Sprite.js";

export class Board extends React.Component {
    render(){
        return (
            <div id='board'>
                <Sprite/>
            </div>
        )
    }
}