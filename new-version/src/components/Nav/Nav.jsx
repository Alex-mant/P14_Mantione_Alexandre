import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ pathname, text, img }) => {
  return (
    <Link aria-label={text} className="navLink" to={{ pathname: pathname }}>
      {text && !img ? text : text && img ? <><span className="dNone">{text}</span><img width="15" height="30"  src={img} alt=""/></> : <></>} 
    </Link>
  );
};

export default Nav;
