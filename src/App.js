import React, { useState, useEffect } from 'react';
import Question from './componets/Question';
import Form from './componets/Form';
import List from './componets/List';
import BudgetControl from './componets/BudgetControl';

function App() {

  // Define state
  const [ budget, saveBudget] = useState(0);
  const [ remaining, saveRemaining] = useState(0);
  const [ showQuestion, updateQuestion] = useState(true);
  const [ expenses, saveExpenses] = useState([]);
  const [ expense, saveExpense] = useState({});
  const [ createExpense, saveCreateExpense] = useState (false);

  // useEffect to update remaining
  useEffect(() => {
    if(createExpense) {

      // Add new expense
      saveExpenses([
        ...expenses,
        expense
      ]);

      // Substract from current budget
      const remainingBudget = remaining - expense.quantity;
      saveRemaining(remainingBudget);

      // Reset to false
      saveCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);



  return (
    <div className="container">
      <header>
        <h1>Budget</h1>

        <div className="main-content">
          {showQuestion ? 
            (
              <Question 
                saveBudget={saveBudget}
                saveRemaining={saveRemaining}
                updateQuestion={updateQuestion}
              />
            ) : 
            (
              <div className="row">
                <div className="one-half column">
                  <Form 
                    saveExpense={saveExpense}
                    saveCreateExpense={saveCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <List 
                    expenses={expenses}
                  />
                  <BudgetControl 
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
            )
          }

          

        </div>
      </header>
    </div>

  );
}

export default App;
