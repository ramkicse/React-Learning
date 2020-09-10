

export const filtersReducersDefaultState = {
    text: '',
    amount: -1,
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
export default (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':

            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_AMOUNT_FILTER':
            //console.log(action.amount)
            return {
                ...state,
                amount: action.amount
            }
        case 'SORT_BY_AMOUNT':

            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':

            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}


