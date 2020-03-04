import React from "react";
import "./style.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
             <span class="navbar-brand mb-0 h1"><i class="fas fa-search"></i>SearchBooks!</span>
            <a className="navbar-brand r-hover" href="/">
                Search 
            </a>
            <a className="navbar-brand r-hover" href="/bookshelf">
                Bookshelf
            </a>
        </nav>
    );
}

export default Nav;