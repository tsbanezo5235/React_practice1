import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpesneData) => {
		const expenseData = {
			...enteredExpesneData,
			id: Math.random().toString(),
		}
		console.log(expenseData);
		props.onAddExpense(expenseData);
	}

	return(
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
		</div>
	)
}

export default NewExpense;