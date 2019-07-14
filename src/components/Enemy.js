import React from 'react'

export class Enemy extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            top: null,
            left: null
        };

        this.getRandomPosition = this.getRandomPosition.bind(this);
        this.getRandomPosition();
    }

    getRandomPosition() {

        const x = document.body.offsetHeight - 100;
        const y = document.body.offsetWidth - 100;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);

        this.setState({
            top: randomY,
            left: randomX
        })
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