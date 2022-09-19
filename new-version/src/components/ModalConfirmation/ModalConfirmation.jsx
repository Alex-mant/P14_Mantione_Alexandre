import React from "react";

const ModalConfirmation = ({ css, text }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#56a18a",
    height: "190px",
    width: "290px",
    position: "absolute",
    left: "5px",
    top: "5px",
    textAlign: "center",
    borderRadius: "10px",
  };
  
  const handleClick = (e) => {
    e.target.parentElement.style.display = "none";
  };

  return (
    <div id={css.id} className={css.className}>
      <div className="crossToClose" style={{zIndex: "1", right: "-275px", top:"5px"}} onClick={handleClick}>
        X
      </div>
      <div style={style}><p>{text}</p></div>
    </div>
  );
};

export default ModalConfirmation;
