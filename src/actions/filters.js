


//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setAmountFilter = (amount = -1) => ({
    type: 'SET_AMOUNT_FILTER',
    amount
});
//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'

});
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'

});
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

});
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

});
