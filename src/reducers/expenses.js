


const expenseReducerDefaultState = []

export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)

        case 'EDIT_EXPENSE':

            return state.map((expense) => {
                // console.log(expense.id)
                // console.log(action.id)
                if (expense.id === action.id) {



                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }

            })
        default:
            return state;

    }
}
