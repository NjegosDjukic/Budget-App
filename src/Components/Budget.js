import React, { useContext, useState } from 'react';
import { ACTIONS, BudgetContext } from '../Context/BudgetContext';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

const Budget = () => {
  const {budget , dispatch} = useContext(BudgetContext)
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: ACTIONS.SET_BUDGET,
			payload: value,
		});
		setIsEditing(false);
	};
  return (
    <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
  )
}
export default Budget;