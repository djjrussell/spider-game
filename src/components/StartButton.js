import React from 'react'

export const StartButton = function (props) {

    return (
        <button
            className="button"
            onClick={props.onClick}
        >
            Start
        </button>
    )
};