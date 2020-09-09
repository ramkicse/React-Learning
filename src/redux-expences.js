import { createStore, combineReducers } from 'redux'

import uuid from 'uuid'

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

const addExpense = (
    {
        desc = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desc,
        note,
        ammount,
        createAt
    }
});

const removeExpence = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


const editExpence = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


const expenseReducerDefaultState = []

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }

            })
        default:
            return state;

    }
}

const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducers = (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducers
    })
)

const demoState = {

    expenses: [
        {
            id: 'exp100',
            desc: 'Sep rent',
            note: 'mskldfjkl',
            amount: 10000,
            createAt: 0

        }
    ],

    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined

    }
}