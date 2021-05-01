import React, {useState} from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpenseChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const ChangeExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear() == filteredYear);

	return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeExpenseFilter={ChangeExpenseFilterHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
      
    </Card>
    
		
	)
}

export default Expenses;