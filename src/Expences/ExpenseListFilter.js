import React from 'react'

import { connect } from 'react-redux'
import selectExpenses from '../selectors/expences'

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilter = (props) => (
    <div>
        Search using : <input type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />

            Sort By : <select value={props.filters.sortBy} 
            onChange={(e)=>{
                if(e.target.value === 'date'){
                    props.dispatch(sortByDate())
                }else if(e.target.value === 'amount'){
                    props.dispatch(sortByAmount())
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
    </div>
)


const mapStateToProps = (state) => {
    return {
        filters: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)