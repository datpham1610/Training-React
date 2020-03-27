import ThemeContext from './theme-context'
import React, { Component } from 'react'

export default class ThemeButton extends Component {
    render() {
        let props = this.props;
        let context = this.context
        if(context.background == '#fff'){
           
        }
        return (
            <button {...props} style={{background:context.background}}/>
        )
    }
}

ThemeButton.contextType = ThemeContext