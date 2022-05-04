import React, { useContext } from 'react';
import { BudgetContext } from '../Context/BudgetContext';

const ExpenseTotal = () => {
  const {expenses, budget} = useContext(BudgetContext)
  const totalSpent = expenses.reduce((total,item) => {
    return (total += item.cost)
  }
  ,0)
  return (
    <div className='alert alert-primary'>
        <span>Spent so far: {totalSpent}</span>
    </div>
  )
}
export default ExpenseTotal;