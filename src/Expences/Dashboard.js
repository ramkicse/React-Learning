import React from 'react'
import ExpencesList from './ExpencesList'
import ExpenseListFilter from './ExpenseListFilter'
const Dashboard = () => {
    return (
        <div>
            <ExpenseListFilter/>
            <ExpencesList />
        </div>
    )
}

export default Dashboard