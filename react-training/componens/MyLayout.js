import React, { Children } from 'react'
import Header from './Header'

export default function MyLayout(props) {
    return (
        <div style={{border:'1px solid #ddd', padding:20, margin:20}}>
            <Header/>
            {props.children}
        </div>
    )
}
