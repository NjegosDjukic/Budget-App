import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import ExpenseTotal from "./Components/ExpenseTotal";
import ExpenseList from "./Components/ExpenseList";
import AddExpense from "./Components/AddExpense";
import { BudgetProvider} from './Context/BudgetContext';

function App() {
  return (
    <BudgetProvider>
    <div className="container">
      <h1 className="mt-3">My budget planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
     <h3 className="mt-3">Add expense</h3>
     <div className="mt-3">
       <div className="col-sm">
        <AddExpense />
       </div>
      </div>
    </div>
    </BudgetProvider>
  );
}
export default App;
