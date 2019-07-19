import React from 'react'
import ReactDOM from "react-dom";

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

    checkForCollision(){
        const spider = ReactDOM.findDOMNode(this);

        const enemies = document.getElementsByClassName("enemy");
        for(let i = 0; i < enemies.length; i++){

            let e = enemies[i];

            let x1 = spider.offsetLeft + 50;
            let y1 = spider.offsetTop + 50;
            let h1 = spider.offsetHeight;
            let w1 = spider.offsetWidth;
            let b1 = y1 + h1;
            let r1 = x1 + w1;
            let x2 = e.offsetLeft;
            let y2 = e.offsetTop;
            let h2 = e.offsetHeight;
            let w2 = e.offsetWidth;
            let b2 = y2 + h2;
            let r2 = x2 + w2;

            if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)){

                e.remove();
                document.dispatchEvent(new Event("bugEaten"));

            }

        }
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
                this.checkForCollision();
                break;
            case "ArrowLeft":

                let currentLeftLeft = this.state.left;
                const newLeftLeft = currentLeftLeft -= 20;

                this.setState({
                    left: newLeftLeft,
                    transform: 'rotate(90deg)'
                });
                this.checkForCollision();
                break;
            case "ArrowDown":

                let currentTopDown = this.state.top;
                const newTopDown = currentTopDown += 20;

                this.setState({
                    top: newTopDown,
                    transform: 'rotate(0deg)'
                });
                this.checkForCollision();
                break;
            case "ArrowRight":

                let currentLeftRight = this.state.left;
                const newLeftRight = currentLeftRight += 20;

                this.setState({
                    left: newLeftRight,
                    transform: 'rotate(270deg)'
                });
                this.checkForCollision();
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
                        marginTop:this.state.top,
                        marginLeft:this.state.left,
                        transform: this.state.transform
                    }
                }

            />
        )
    }
}