import React from 'react';

const ModalConfirmation = ({css, text}) => {
  return (
    <div id={css.id} className={css.className}>
      {text}
    </div>
  );
}

export default ModalConfirmation;
