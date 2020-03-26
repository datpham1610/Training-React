import React, { Component } from 'react'
import Dialog from '../components/Dialog'

export default class SignUpDialog extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.state = {login:''}
    }

    handleChange(e){
        this.setState({login:e.target.value})
    }

    handleClick(){
        alert(`Welcome aboard, ${this.state.login}`)
    }

    render() {
        return (
            <Dialog title="Welcome!" mess="Thanks for visit">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Sign me up!</button>
            </Dialog>
        )
    }
}
