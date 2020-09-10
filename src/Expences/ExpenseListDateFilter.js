import React from 'react'

import { connect } from 'react-redux'
import selectExpenses from '../selectors/expences'

import { setStartDate, setEndDate } from '../actions/filters'


const ExpenseListDateFilter = (props) => (
    <div>
        Start Date : <input type="date" 
            value={props.filters.startDate}
            onChange={(e) => {
                props.dispatch(setStartDate(new Date(e.target.value).getTime()))
            }} />

End Date :<input type="date"
            value={props.filters.endDate} 
            onChange={(e) => {
                console.log(new Date(e.target.value).getTime())
                props.dispatch(setEndDate(new Date(e.target.value).getTime()))
            }} />
    </div>
)


const mapStateToProps = (state) => {
    return {
        filters: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseListDateFilter)