import React, { useState } from 'react';
import Question from './componets/Question';
import Form from './componets/Form';

function App() {

  // Define state
  const [ budget, saveBudget] = useState(0);
  const [ remaining, saveRemaining] = useState(0);


  return (
    <div className="container">
      <header>
        <h1>Budget</h1>

        <div className="main-content">
          <Question 
            saveBudget={saveBudget}
            saveRemaining={saveRemaining}
          />
          
          <div className="row">
            <div className="one-half column">
              <Form />
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
