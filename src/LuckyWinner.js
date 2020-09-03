import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LuckyWinner extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: props.users
        }
        this.handleAddUser = this.handleAddUser.bind(this)
        this.deleteAllUsers = this.deleteAllUsers.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.chooseRandomUser = this.chooseRandomUser.bind(this)
    }

    handleAddUser(option) {
        console.log("Parent Received ", option)
        if (!option) {
            return 'You missed the username'
        }
        else if (this.state.users.indexOf(option) > -1) {
            return 'You already enrolled'
        }
        this.setState((prevState) => ({
            users: prevState.users.concat(option)
        }))
        console.log(this.state.users)
    }

    deleteUser(username){
        this.setState((prevState)=>({
            users: prevState.users.filter((user)=> username!=user)
        }))

    }

    deleteAllUsers(){
        this.setState(()=>({users:[]}))
        
    }
    
    chooseRandomUser(){
        const randomIndex = Math.floor(Math.random()*this.state.users.length)
        const userName = this.state.users[randomIndex]
        alert('Lucky Winner is '+userName)
    }

    render() {
        const subtitle = "Java Developer"
        return (
            <div>

                <Header subtitle={subtitle} />
                <AddUser addUser={this.handleAddUser} />
                <div className="table">
                    <UserList usersList={this.state.users}
                    deleteAllUsers={this.deleteAllUsers}
                    deleteUser = {this.deleteUser} />
                </div>
                <Action action={this.chooseRandomUser} isUsersEmpty={this.state.users.length ==0} />
            </div>
        )
    }
}

const UserList = (props) => {
    return (
        <div>
            {
                props.usersList.map((user) => (
                    <User key={user} username={user} deleteUser={props.deleteUser}/>
                ))
            }
            <br/>
            <button onClick={props.deleteAllUsers} className="btn btn-danger btn-sm">Clear User List</button>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button disabled={props.isUsersEmpty} onClick={props.action} className="btn btn-success btn-block">
                Find Lucky Winner
            </button>
        </div>
    )
}
const User = (props) => {
    return (
        <div className="table table-bordered">
            {props.username} &nbsp;&nbsp;&nbsp;
            <button onClick={(e)=>{props.deleteUser(props.username)}} className="btn btn-secondary btn-sm">
                <span>
                    <FontAwesomeIcon icon='trash'/>
                </span>
            </button>
        </div>
    )
}
const Header = (props) => {
    return (
        <div className="table text-center">
            <h1 className="bg-dark text-warning">{props.title}</h1>
            <hr color="blue" />
            <marquee behavior="alternate"> <h3 className="bg-muted text-info">{props.subtitle}</h3></marquee>
            <hr color="blue" />

        </div>
    )
}
Header.defaultProps = {
    title: 'Ramakrishnan EP',
    subtitle: 'Developer'
}


class AddUser extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.addUser = this.addUser.bind(this)
        this.state = {
            error: null
        }

    }

    addUser(e) {
        e.preventDefault()
        console.log(e)
        const user = e.target.elements.user.value.trim()
        console.log(this.props)
        const error = this.props.addUser(user)
        console.log(error)
        this.setState(() => ({ error }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    {this.state.error && <p className="danger-info">{this.state.error} </p>}
                    <label> Your Name </label>&nbsp;&nbsp;
                    <input type='text' name='user' /> &nbsp;&nbsp;
                    <button className="btn btn-primary">Add User</button>
                </form>
            </div>
        )
    }
}
LuckyWinner.defaultProps = {
    users: []
}

export default LuckyWinner