import ExpenseItem from "./ExpenseItem";
import "./ExpensesContent.css";

export default function ExpensesContent(props) {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );

  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => {
      return (
        <li>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </li>
      );
    });
  }

  if (props.filteredYear === "all") {
    expensesContent = props.expenses.map((expense) => {
      return (
        <li>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </li>
      );
    });
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
}
