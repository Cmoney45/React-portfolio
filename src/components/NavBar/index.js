import React from "react";


function Navbar (props) {
    return <div className="navbar fixed-top navbar-light bg-dark">
      <h2 className="mr-auto">Memory game</h2>
      <h4 className="m-auto">Click an image to start!</h4>
      <h4 className="ml-auto">Score: 0 | Top Score: 0 </h4>
    </div>
}

export default Navbar;
