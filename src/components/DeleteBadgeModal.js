import React from 'react'
import Modal from './Modal'

class DeleteBadgeModal extends React.Component{
    render(){
        return <Modal isOpen={this.props.isOpen} onClose={this.props.onCloseModal}>
            <div className="">
                <h1>Are you sure?</h1>
                <p>You are about to delete this badge.</p>
                <div>
                    <button className="btn btn-danger mr-4" onClick={this.props.onDeleteBadge}>Delete</button>
                    <button className="btn btn-primary" onClick={this.props.onCloseModal}>Cancel</button>
                </div>
            </div>
        </Modal>
    }
}

export default DeleteBadgeModal;