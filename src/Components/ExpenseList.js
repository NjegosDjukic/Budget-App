import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { BudgetContext } from '../Context/BudgetContext';

const ExpenseList = () => {
  const {expenses} = useContext(BudgetContext)
  return (
    <ul className='list-group'>
       {expenses.map((expense) => (
           <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} key={expense.id}/>
       ))}
    </ul>
  )
}

export default ExpenseList;