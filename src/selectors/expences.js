

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //  console.log(startDate)
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        //console.log(startDateMatch, expense.createAt, startDate)
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};