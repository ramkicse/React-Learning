import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuHeader = () => (
    <header>
      <center>
        <h1>Expense Manager</h1>
        <NavLink to="/" activeClassName="is-active" className="btn btn-success" exact={true} >Dash board</NavLink>&nbsp;&nbsp;
        <NavLink to="/create" activeClassName="is-active" className="btn btn-success" exact={true} >Create</NavLink>&nbsp;&nbsp;
        <NavLink to="/edit/1" activeClassName="is-active" className="btn btn-success" exact={true} >Edit</NavLink>&nbsp;&nbsp;
        <NavLink to="/help" activeClassName="is-active" className="btn btn-success" exact={true} >Help</NavLink>
      </center>
    </header>
  )

  export default MenuHeader