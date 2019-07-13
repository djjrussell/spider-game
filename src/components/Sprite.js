import React from 'react'

export class Sprite extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            top: 300,
            left: 600,
            transform: 'rotate(180deg)'
        };
        this.handleKeyUp = this.handleKeyUp.bind(this);

        document.onkeydown = this.handleKeyUp;

    }

    handleKeyUp(e) {
        switch (e.code) {
            case "ArrowUp":

                let currentTopTop = this.state.top;
                const newTopTop = currentTopTop -= 20;

                this.setState({
                    top: newTopTop,
                    transform: 'rotate(180deg)'
                });

                break;
            case "ArrowLeft":

                let currentLeftLeft = this.state.left;
                const newLeftLeft = currentLeftLeft -= 20;

                this.setState({
                    left: newLeftLeft,
                    transform: 'rotate(90deg)'
                });

                break;
            case "ArrowDown":

                let currentTopDown = this.state.top;
                const newTopDown = currentTopDown += 20;

                this.setState({
                    top: newTopDown,
                    transform: 'rotate(0deg)'
                });

                break;
            case "ArrowRight":

                let currentLeftRight = this.state.left;
                const newLeftRight = currentLeftRight += 20;

                this.setState({
                    left: newLeftRight,
                    transform: 'rotate(270deg)'
                });

                break;
        }
    }

    render(){
        return (
            <img
                id='sprite'
                alt="spider"
                src={
                    require("./../images/spider_gif.gif")
                }
                style={
                    {
                        top:this.state.top,
                        left:this.state.left,
                        transform: this.state.transform
                    }
                }
            />
        )
    }
}