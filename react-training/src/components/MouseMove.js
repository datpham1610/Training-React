import React, { Component } from 'react'

export default class MouseMove extends Component {
    constructor(props){
        super(props)
        this.state={
            x:0,
            y:0
        }
    }

    handleMouseMove= e =>{
        const {clientX,clientY} = e
        this.setState({
            x:clientX,
            y:clientY
        })
    }

    render() {
        return (
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}
