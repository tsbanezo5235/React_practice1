import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpesneData) => {
		const expenseData = {
			...enteredExpesneData,
			id: Math.random().toString(),
		}
		console.log(expenseData);
		props.onAddExpense(expenseData);
		setIsEditing(false);
	}

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	}

	return(
		<div className="new-expense">
			{!isEditing && <button onClick={startEditingHandler}>Add a New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
		</div>
	)
}

export default NewExpense;