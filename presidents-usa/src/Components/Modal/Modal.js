import React from 'react'
import ReactDOM from 'react-dom'
import ClickOutSide from 'react-click-outside';
import './Modal.scss'

const Modal = ({ children, handleClickOutSide }) => {
  return ReactDOM.createPortal(
    <div className="modal__container">
      <ClickOutSide onClickOutside={handleClickOutSide}>
        <button className="modal__button" onClick={handleClickOutSide}>X</button>
        <section className="modal__content">
          {children}
        </section>
      </ClickOutSide>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal