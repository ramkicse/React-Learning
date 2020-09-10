import React from 'react'

import { connect } from 'react-redux'
import selectExpenses from '../selectors/expences'

import { setAmountFilter } from '../actions/filters'


const ExpenseListAmountFilter = (props) => (
    <div>
        Search Amount : <input type="text"
            value={props.filters.text}
            onChange={(e) => {
                if(e.target.value != NaN && e.target.value !='' ){
                    console.log(e.target.value)
                props.dispatch(setAmountFilter(parseInt(e.target.value)))
            }else{
                props.dispatch(setAmountFilter(parseInt(-1)))
            }
            }} />
    </div>
)


const mapStateToProps = (state) => {
    return {
        filters: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseListAmountFilter)