import React from 'react';
import Question from './componets/Question';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget</h1>

        <div className="main-content">
          <Question />
        </div>
      </header>
    </div>

  );
}

export default App;
