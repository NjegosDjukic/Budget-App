import React, { createContext, useReducer } from 'react';

export  const ACTIONS = {
    ADD_EXPENSE : 'ADD_EXPENSE',
    DELETE_EXPENSE: 'DELETE_EXPENSE',
    SET_BUDGET : 'SET_BUDGET'
}
const budgetreducer = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_EXPENSE :
            return { 
                ...state,
                budget: state.budget,
                expenses: [...state.expenses , action.payload]
        }
        case ACTIONS.DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter((expense)=>expense.id !== action.payload)
            }
        case ACTIONS.SET_BUDGET:
			return {
				...state,
				budget: action.payload,
			};
        default :
            return state
    }
}
const initialState = {
    budget : 2000,
    expenses : [
        {id : 12 , name : 'Shopping' , cost : 40},
        {id : 13 , name : 'New PC' , cost : 150},
        {id : 14 , name : 'React course' , cost : 250}
    ]
}
export const BudgetContext = createContext()
export const BudgetProvider = (props) => {
    const [state, dispatch] = useReducer(budgetreducer, initialState)
    return (
        <BudgetContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {props.children}
        </BudgetContext.Provider>
    )   
}