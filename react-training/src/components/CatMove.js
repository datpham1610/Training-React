import React, { Component } from 'react'

export default class CatMove extends Component {
    render() {
        const {x,y} = this.props.mouse
        return (
            <img src="https://i.imgur.com/XfdWTc2.png" style={{ position: 'absolute', left: x, top:y , height: 60 }} />
        );
    }
}
