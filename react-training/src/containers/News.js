import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import ShowPost from '../components/ShowPost'

const QueryPosts = () =>{
    return (
        <Router>
            <ShowPost/>
        </Router>
    )
}

export default QueryPosts