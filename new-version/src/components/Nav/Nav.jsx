import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ pathname, text, img }) => {
  return (
    <Link className="home_navLink" to={{ pathname: pathname }}>
      {text && !img ? text : text && img ? <><span className="dNone">{text}</span><img width="15"  src={img} alt=""/></> : <></>} 
    </Link>
  );
};

export default Nav;
