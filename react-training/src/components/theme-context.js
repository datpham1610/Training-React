import React from 'react'

export const themes ={
    light:{
        foreground: '#000',
        background: '#fff'
    },
    dark:{
        foreground:'#ffff',
        background:'#0000'
    }
};

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext