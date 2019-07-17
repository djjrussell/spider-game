import React from 'react'

export class ScoreDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="scoreContainer">
                <div id="scoreTileTitle">SCORE:</div>
                <div id="scoreTile">
                    {this.props.score}
                </div>
            </div>
        )
    }

};
