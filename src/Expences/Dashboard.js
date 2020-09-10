import React from 'react'
import ExpencesList from './ExpencesList'
import ExpenseListFilter from './ExpenseListFilter'
import ExpenseListAmountFilter from './ExpenceListAmountFilter'
import ExpenseListDateFilter from './ExpenseListDateFilter'
const Dashboard = () => {
    return (
        <div>
            <ExpenseListFilter/>
            <ExpenseListAmountFilter />
            <ExpenseListDateFilter />
            <ExpencesList />
        </div>
    )
}

export default Dashboard