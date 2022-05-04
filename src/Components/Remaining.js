import React, { useContext } from 'react';
import { BudgetContext } from '../Context/BudgetContext';

const Remaining = () => {
  const {expenses, budget } = useContext(BudgetContext)
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0)
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
  return (
    <div className={`alert ${alertType}`}>
        <span>Remaining: ${budget - totalExpenses}</span>  
    </div>
  )
}
export default Remaining;