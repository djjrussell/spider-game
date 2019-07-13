import React from 'react'

export class Sprite extends React.Component{
    render(){
        // return <img src='./../images/spider_gif.gif' />
        return (
            <img id='sprite' src={require("./../images/spider_gif.gif")} />
        )
    }
}