import React from 'react'

export class Enemy extends React.Component {

    constructor(props) {

        super(props);

        this.getRandomPosition = this.getRandomPosition.bind(this);
        this.getRandomPosition();

    }

    getRandomPosition() {

        let x = document.body.offsetHeight;
        let y = document.body.offsetWidth;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);

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
                        marginTop: this.state.top,
                        marginLeft: this.state.left
                    }
                }
            />
        )

    }

}