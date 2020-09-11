import React from 'react'
import { addExpense } from '../actions/expences'
import ExpenseForm from './ExpenseForm'
import selectExpenses from '../selectors/expences'
import { connect } from 'react-redux'

const createExpense = (props) => (
    <div>
        <h3 className="jumbotron">Add your expenses</h3>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }} />
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(createExpense)