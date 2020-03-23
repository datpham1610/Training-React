import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

const useQuery = () =>{
    return new URLSearchParams(useLocation().search)
}

const Child = ({name}) =>{
    return(
        <div>
            {name ? ( <h4>The title: {name}</h4>) : (<h4>Don't have title in the query string</h4>)
            }
        </div>
    )
}

export default function ShowPost() {
    let query = useQuery();
    return (
        <div>
            <h2>New Posts</h2>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link to="/posts?title=mot-hai-ba">Một Hai Ba</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/posts?title=PDD">Phạm Duy Đạt</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/posts?title=corona">Corona</Link>
                </li>
            </ul>

            <Child name={query.get('title')}/>
        </div>
    )
}
