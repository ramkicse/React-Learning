import uuid from 'uuid';
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE

export const addExpense = (
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
        amount,
        createAt
    }
});

export const removeExpence = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


export const editExpence = (id, updates) => ({

    type: 'EDIT_EXPENSE',
    id,
    updates
});