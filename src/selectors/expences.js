import ExpenceListAmountFilter from "../Expences/ExpenceListAmountFilter";


export default (expenses, { text, amount, sortBy, startDate, endDate }) => {
    //console.log(expenses)
    return expenses.filter((expense) => {
        //  console.log(startDate)
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        //console.log(amount)
        const amountMatch = typeof amount !== 'number' || amount == -1 || expense.amount === amount
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch && amountMatch
        
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};