import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Loadable from 'react-loadable'

const LoadablePost = Loadable({
    loader(){
        return import('../components/ShowPost')
    },
    loading(){
        return <div></div>
    }
})

const QueryPosts = () =>{
    return (
            <Router>
                <LoadablePost/>
            </Router>
    )
}

export default QueryPosts