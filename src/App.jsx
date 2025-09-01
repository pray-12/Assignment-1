import React from 'react';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="main-heading">Assignment-2 Counter Application</h1>
      </header>

      <main className="app-main">
        <div className="counters-row">
          <ClassCounter />
          <FunctionalCounter />
        </div>
      </main>
    </div>
  );
}

export default App;
