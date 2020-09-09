import React from 'react'
import Modal from 'react-modal'


const UserModal = (props) => {
    return(
        <Modal isOpen={!!props.selectedUser}
        onRequestClose={props.clearSelectedUser}
        appElement={document.getElementById('root')} >
            <h3> lucky winner {props.selectedUser }</h3>
            <button onClick={props.clearSelectedUser}>Close</button>
        </Modal>
    )
}

export default UserModal