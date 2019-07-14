import React from 'react'

export class StartButton extends React.Component{

        render() {
            return (
                <button onClick={this.props.onClick}>
                    Start
                </button>
            )
        }
};