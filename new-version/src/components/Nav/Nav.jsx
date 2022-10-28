import React from "react";
import { Link } from "react-router-dom";

/**
 * If the text and img props are both present, then render the text and img. If only the text prop is
 * present, then render the text. If only the img prop is present, then render the img. If neither the
 * text nor img props are present, then render nothing.
 * @returns A Link component with aria-label, className, and to props.
 * @param string - pathname
 * @param string - text
 * @param string - img link
 */
const Nav = ({ pathname, text, img }) => {
  return (
    <Link aria-label={text} className="navLink" to={{ pathname: pathname }}>
      {text && !img ? text : text && img ? <><span className="dNone">{text}</span><img width="15" height="30"  src={img} alt=""/></> : <></>} 
    </Link>
  );
};

export default Nav;
