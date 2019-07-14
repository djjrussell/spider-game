import React from 'react';
import {Sprite} from "./Sprite.js";
import {Enemy} from "./Enemy.js";

export class Board extends React.Component {
    render(){
        return (
            <div id='board'>
                <Sprite />
                <Enemy />
            </div>
        )
    }
}