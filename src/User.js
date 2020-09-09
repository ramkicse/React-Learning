
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const User = (props) => {
    return (
        <div className="table table-bordered">
            {props.username} &nbsp;&nbsp;&nbsp;
            <button onClick={(e) => { props.deleteUser(props.username) }} className="btn btn-secondary btn-sm">
                <span>
                    <FontAwesomeIcon icon='trash' />
                </span>
            </button>
        </div>
    )
}

export default User