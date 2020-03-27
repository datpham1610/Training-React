import React, { Component } from 'react'

export default class Panel extends Component {
    render() {
        const elements = React.Children.map(this.props.children, child => {
            return React.cloneElement(child.props.children, {className:'text-center'})
        })
        return (   
            <div className='panel'>
                {elements}
            </div>
        )
    }
}
