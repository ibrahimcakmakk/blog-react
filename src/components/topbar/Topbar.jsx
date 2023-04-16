import React from "react";
import "./topbar.css";
import { BrowserRouter as Router,Link } from "react-router-dom";

export default function Topbar({isAuth,singUserOut }) {

    
  return (
    <div className="top">
      <div className="topleft">
        <i class="topIcon fab fa-facebook-square"></i>
        <i class="topIcon fab fa-twitter-square"></i>
        <i class="topIcon fab fa-instagram-square"></i>
        <i class="topIcon fab fa-pinterest-square"></i>
      </div>

      <div className="topCenter">
       <div className="topList">
        <Link to="/" className="topListItem" >HOME</Link>
        {!isAuth ? (
          <Link to="/login" className="topListItem">LOGIN</Link>
        ) : (
          <>
            <Link to="/createpost"className="topListItem">CREATE POST</Link>
            <button onClick={singUserOut}>LOG OUT</button>
          </>
        )}
       </div>
      </div>
      
    </div>
  );
}

