import React from 'react';

import {Sprite} from "./Sprite.js";
import {Enemy} from "./Enemy.js";

export class Board extends React.Component {

    constructor(props){

        super(props);
        this.renderNewEnemies = this.renderNewEnemies.bind(this);

        this.state = {
            enemies:[<Enemy />]
        };

        document.addEventListener("bugEaten", this.renderNewEnemies)
    }

    renderNewEnemies(){
        for(let i = 0; i < 2; i++){
            let newEnemy = <Enemy/>;
            const updated = this.state.enemies.push(newEnemy);
            this.setState({e: updated})
        }
    }

    render(){

        return (
            <div id='board'>
                <Sprite />
                {
                    this.state.enemies.map(item =>(
                        item
                    ))
                }
            </div>
        )
    }
}