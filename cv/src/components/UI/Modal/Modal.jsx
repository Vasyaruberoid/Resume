import React from 'react';
import './Modal.css';

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
<div className={active ? "wrapper active" : "wrapper"} onClick={ e => e.stopPropagation()}>
  {children}
</div>
    </div>
  )
}


export default Modal;
