import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	const titleChangeHandler = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredTitle: event.target.value,
			};
		});
	}

	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredAmount: event.target.value,
			};
		});
	}

	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredDate: event.target.value,
			};
		});
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};

		// console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredTitle: '',
				enteredAmount: '',
				enteredDate: '',
			};
		});
	};

  return (
		<form action="" onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor="">Title</label>
					<input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor="">Amount</label>
					<input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor="">Date</label>
					<input type="date" min="2019-01-01" max="2023-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm;