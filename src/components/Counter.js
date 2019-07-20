import React from 'react'

export class Counter extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            time: 0,
            offset: Date.now()

        };

        this.start = this.start.bind(this);
        this.update = this.update.bind(this);
        this.delta = this.delta.bind(this);

        this.start();
    }

    delta() {

        let now = Date.now();
        return now - this.state.offset;

    }

    isOver() {

        return this.state.time <= 0;

    }

    update() {
        let newTime = 16 - Math.floor(this.delta() / 1000);
        this.setState({time: newTime});

        if (this.isOver()) {

            document.dispatchEvent(new Event("gameOver"));

        }
    }

    start() {

        setInterval(this.update, 1000);

    }


    render() {
        return (
            <div className="headerContainer">
                <div id="counterTitle">Time Left:</div>
                <div id="counter">
                    {this.state.time}
                </div>
            </div>
        )
    }
};