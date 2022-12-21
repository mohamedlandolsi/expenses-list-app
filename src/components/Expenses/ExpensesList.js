import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesContent from "./ExpensesContent";
import "./ExpensesList.css";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectedYearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectedYearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesContent
          filteredExpenses={filteredExpenses}
          filteredYear={filteredYear}
          expenses={props.expenses}
        />
      </Card>
    </div>
  );
}

export default ExpensesList;
