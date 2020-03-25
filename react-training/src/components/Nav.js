import "antd/dist/antd.css";
import React from 'react'
import { AuthButton } from '../components/AuthButton'
import CustomLink from './CustomLink'
import {Link, useLocation} from 'react-router-dom'

export default function Nav() {
        let location = useLocation()
        return (
            <div>
                <nav>
                    <ul className="list-inline">
                        <CustomLink activeOnlyeExact={true} to="/" label="Home"></CustomLink>
                        <CustomLink to="/todos" label="Todo List"></CustomLink>
                        <CustomLink to="/about" label="About"></CustomLink>
                        <CustomLink to="/posts" label="New Posts"></CustomLink>
                        <li className="list-inline-item">
                            <AuthButton />
                        </li>
                        <li className='list-inline-item'>
                            <Link 
                                to={{
                                    pathname:'/popup',
                                    state:{popup:location}
                                }}
                                onClick = {()=>{document.body.style.overflow='hidden'}}
                                >
                                Popup Images
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}
