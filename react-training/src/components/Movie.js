import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
