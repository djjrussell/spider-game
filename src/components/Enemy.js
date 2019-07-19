import React from 'react'

export class Enemy extends React.Component {

    constructor(props) {

        super(props);

        this.getRandomPosition = this.getRandomPosition.bind(this);
        this.getRandomPosition();

    }

    getRandomPosition() {

        let y = document.body.offsetHeight + 150;
        let x = document.body.offsetWidth;
        const randomX = Math.floor(Math.random() * x -50);
        const randomY = Math.floor(Math.random() * y -50);

        this.state = {
            top: randomY,
            left: randomX
        }
    }

    render() {
        return (
            <img
                alt="moth"
                className='enemy'
                src={
                    require("./../images/moth.gif")
                }
                style={
                    {
                        top: this.state.top,
                        left: this.state.left
                    }
                }
            />
        )

    }

}