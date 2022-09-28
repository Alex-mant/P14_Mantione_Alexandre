import { msg } from "./messages";

export const modalPop = (message, inputsToClear) => {
  const modal = document.querySelector("#Modal")
  const modalText = modal.children[1]
  modal.style.display = "flex";

  if(message === "success"){
    modalText.innerText = msg.modal.success
    inputsToClear.current.reset();
  } else{
    modalText.innerText = msg.modal.failure
  }
}