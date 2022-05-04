import React, { useState, useContext } from 'react';
import { BudgetContext } from '../Context/BudgetContext';
import {v4 as uuidv4} from 'uuid';
import { ACTIONS } from '../Context/BudgetContext';

const AddExpense = () => {
    const {dispatch} = useContext(BudgetContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const Submit = (e) => {
        e.preventDefault()
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost)
        }
        dispatch({
            type: ACTIONS.ADD_EXPENSE,
            payload: expense
        })
        setName('')
        setCost('')
    }
  return (
    <form onSubmit={Submit}>
        <div className='row'>
            <div className='col-sm'>
                <label htmlFor='name'>Name</label>
                <input type='text'
                   required
                   className='form-control'
                   id='name' value={name} 
                   onChange={e => setName(e.target.value)} />
            </div>
            <div className='col-sm'>
                <label htmlFor='cost'>Cost</label>
                <input type='number' 
                    required 
                    className='form-control' 
                    id='cost' value={cost} 
                    onChange={e => setCost(e.target.value)} />       
            </div>
            <div className='col-sm'>
                <button type='submit' className='btn btn-primary mt-4'>Add expense</button>
            </div>
        </div>
    </form>
  )
}
export default AddExpense;