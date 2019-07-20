import React from 'react'

export const ScoreDisplay = function (props) {

    return (
        <div className="headerContainer">
            <div id="timerTitle">SCORE:</div>
            <div id="scoreTile">
                {props.score}
            </div>
        </div>
    )

};
