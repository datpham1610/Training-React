import React,{lazy,Suspense} from "react";
import {BrowserRouter as Router} from "react-router-dom";

const ShowPost = lazy(() => import('../components/ShowPost'))
const QueryPosts = () =>{
    return (
        <Suspense fallback={<div>Wait minutes....</div>}>
            <Router>
                <ShowPost/>
            </Router>
        </Suspense>
    )
}

export default QueryPosts