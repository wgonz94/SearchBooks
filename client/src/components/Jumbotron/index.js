import React from "react";
import './style.css'

function Jumbotron() {
    return (
        <div 
         style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
         className="jumbotron"
         >
             <div classname='text'>
            <h1> <i class="fas fa-search"></i>SearchBooks! </h1>
             <p className="jumbo">Powered By Google Books</p>
             </div>
         </div>
     );
}

export default Jumbotron;