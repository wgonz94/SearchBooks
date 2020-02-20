import React from "react";
import './style.css'

function Jumbotron() {
    return (
        <div 
         style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
         className="jumbotron"
         >
             <h1>Google Reading List</h1>
             <p className="jumbo">Powered By Google Books</p>
         </div>
     );
}

export default Jumbotron;