import React from 'react'
import ReactDom from 'react-dom'
import './styles/Modal.css'
class Modal extends React.Component{
    render(){
        if(this.props.isOpen){
            return ReactDom.createPortal(
                <div className="Modal">
                    <div className="Modal__container">
                        <button onClick={this.props.onClose} className="Modal__close-button">X</button>
                        {this.props.children}
                    </div>
                </div>
                , document.getElementById("modal"))
        }else{
            return null;
        }
    }
}

export default Modal;