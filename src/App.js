import React from 'react';
import Pricing from './components/Pricing';
import ToggleTheme from './components/ToggleTheme';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <ToggleTheme />
        <Pricing />
      </header>
    </div>
  );
}

export default App;
