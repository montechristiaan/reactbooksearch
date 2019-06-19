import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h2>MERN Search</h2>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
        </nav>
    );
}

export default Nav;