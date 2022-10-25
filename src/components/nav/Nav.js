import React from "react";
import Search from "../search/search";
import "./nav.css"

const Nav = (props) => {
    const { handleChange, handleSubmit } = props;
    return (
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <div className="nav-search">
                <Search handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
        </ul>
    )
}

export default Nav;