import React, { Component } from 'react'

export default class OuterClickExample extends Component {
    constructor(props){
        super(props)
        this.state = {isOpen:false}
        this.toggleContainer = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('click',this.handleClick)
    }
    
    componentWillMount() {
        window.removeEventListener('click',this.handleClickOuside)
    }
    

    handleClick = () =>{
        this.setState(currentState => ({isOpen:!currentState.isOpen}))
    }

    handleClickOuside = (e) =>{
        if(this.state.isOpen && !this.toggleContainer.current.contains(e.target)){
            this.setState({isOpen:false})
        }
    }

    render() {
        return (
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Select an option</button>
                {this.state.isOpen && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
                )}
            </div>
        )
    }
}
