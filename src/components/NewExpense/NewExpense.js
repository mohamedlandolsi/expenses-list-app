import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [formShown, setFormShown] = useState(false);

  const saveExpenseDataHandler = (eneteredExpenseData) => {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormShown(false);
  };

  const showExpenseFormHandler = () => {
    setFormShown(true);
  };

  const hideExpenseFormHandler = () => {
    setFormShown(false);
  };

  return (
    <div className="new-expense">
      {formShown ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideExpenseForm={hideExpenseFormHandler}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}
