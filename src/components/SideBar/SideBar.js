import React from 'react'
import {Link} from "react-router-dom";
import '../../css/side-bar.css'

function SideBar() {
    return (
        <React.Fragment>
            <div className="sideBar-content">
                <ul>
                    <Link to="/add">
                        <li>Add new note</li>
                    </Link>
                    <Link to="all">
                        <li>List all notes</li>
                    </Link>
                    <Link to="deleted">
                        <li>Show deleted notes</li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SideBar;