import React from 'react'

export class ScoreDisplay extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="scoreTile">
                {this.props.score}
                </div>
        )
    }

};
