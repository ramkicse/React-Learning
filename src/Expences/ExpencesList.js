import React from 'react'
import ExpenceListItem from './ExpenceListItem'
import selectExpenses from '../selectors/expences'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return <ExpenceListItem key={expense.id} {...expense} />
        })}
    </div>

)

const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList)