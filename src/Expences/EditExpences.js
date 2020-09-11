import React from 'react'
import { addExpense } from '../actions/expences'
import ExpenseForm from './ExpenseForm'
import selectExpenses from '../selectors/expences'
import { connect } from 'react-redux'

export class EditExpense extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.removeExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
        return (

            <div>
                <h3 className="jumbotron">Manage expenses</h3>
                <ExpenseForm expense={this.props.expense} 
                onSubmit = {this.onSubmit} />
                <button> Remove Expense</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

const mapDispatchToProps = () => {
    editExpense : (id, expense) => dispatch(editExpense(id,expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
}

export default connect(mapStateToProps)(createExpense)