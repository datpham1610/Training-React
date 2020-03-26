import React from 'react'
import Link from 'next/link'

const ListStyle ={
    marginRight:15
}
export default function Header() {
    return (
        <div>
            <Link href='/'>
                <a style={ListStyle}>Home</a>
            </Link>
            <Link href='/about'>
                <a style={ListStyle}>About Page</a>
            </Link>
        </div>
    )
}
