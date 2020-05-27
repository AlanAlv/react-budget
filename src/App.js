import React, { useState } from 'react';
import Question from './componets/Question';

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
        </div>
      </header>
    </div>

  );
}

export default App;
