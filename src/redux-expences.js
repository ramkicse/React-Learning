import React from 'react';
import './App.css';

import store from './store/configureStore'

import {addExpense, editExpence, removeExpence} from './actions/expences'
import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from './actions/filters'

import getVisibleExpenses from './selectors/expences'



store.subscribe(() => {
    //console.log(store.getState())

    const state = store.getState();
    const visibleExpences = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpences)
});

function Expence(props) {
    console.log('start--------')
    const firstExpence = store.dispatch(addExpense({ desc: 'Rent', amount: 5000, createAt: -21000 }));
    console.log("var", firstExpence)
    console.log('add 2nd--------')
    store.dispatch(addExpense({ desc: 'Coffee', amount: 10000, createAt: -10000 }));
    console.log('sort by amount--------')
    store.dispatch(sortByAmount())
    console.log('sort by date--------')
    store.dispatch(sortByDate())
    console.log('rent filter--------')
    store.dispatch(setTextFilter('Rent'))
    console.log('ff filter--------')
    store.dispatch(setTextFilter('ff'))
    console.log('empty filter--------')
    store.dispatch(setTextFilter())
    console.log('setStartDate filter--------')
    store.dispatch(setStartDate(-25000))
    console.log('edit--------')
    console.log("log : ", firstExpence.expense.id)
    store.dispatch(editExpence(firstExpence.expense.id, { amount: 25000 }))
    store.dispatch(removeExpence({ id: firstExpence.expense.id }))
    //  store.dispatch(sortByDate())
    // store.dispatch(sortByAmount())
    store.dispatch(setStartDate(123))
    store.dispatch(setEndDate(1235))


    return (
        <div>
            <h2>Redux expence Test</h2>
        </div>
    );
}

export default Expence;

