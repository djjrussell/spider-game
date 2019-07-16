
import React from 'react'

export class ScoreDisplay extends React.Component {

    render(){
        return(
            <div>
                {this.props.score}
            </div>
        );
    }
}