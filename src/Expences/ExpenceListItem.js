import React from 'react'

import { removeExpence } from '../actions/expences'
import { connect } from 'react-redux'

const ExpenseListItem = ({ dispatch, id, desc, amount, createAt }) => {

    //const date1 = new Date(createAt)
    return (
    <div >

        <div className="card" style={{ width: 500 }} >
            <div className="card-body">
                <div className="text-sm">Expense Name : {desc}</div>
                <div className="text-sm" >Expense Amount : {amount} </div>
                {/* <div className="text-sm">Expense Date : {createAt}</div> */}
                <div className="text-sm">Expense Date : {new Date(createAt).toDateString()} </div>

                <button onClick={() => dispatch(removeExpence({ id }))} className="btn btn-danger">remove</button>
            </div>
        </div>
        <br />


    </div >
)
}

export default connect()(ExpenseListItem)