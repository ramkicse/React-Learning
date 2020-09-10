import React from 'react'

import { connect } from 'react-redux'
import selectExpenses from '../selectors/expences'

import { setTextFilter } from '../actions/filters'

const ExpenseListFilter = (props) => (
    <div>
        Search using : <input type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />
    </div>
)


const mapStateToProps = (state) => {
    return {
        filters: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)