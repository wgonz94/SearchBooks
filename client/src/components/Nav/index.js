import React from "react";
import "./style.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand r-hover" href="/">
                Search Books
            </a>
            <a className="navbar-brand r-hover" href="/bookshelf">
                Bookshelf
            </a>
        </nav>
    );
}

export default Nav;