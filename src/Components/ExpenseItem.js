import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ACTIONS } from '../Context/BudgetContext';
import { BudgetContext } from '../Context/BudgetContext';

const ExpenseItem = (props) => {

  const { dispatch } = useContext(BudgetContext)
  const handleDeleteExpense = () => {
    dispatch(
      {
        type: ACTIONS.DELETE_EXPENSE, 
        payload: props.id
      })
  }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span>£{props.cost} </span>
            <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
        </div>
    </li>
  )
}
export default ExpenseItem;