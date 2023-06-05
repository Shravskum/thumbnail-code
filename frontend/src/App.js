import React from 'react';
import Container from './components/container';
import './style.css';

function App() {
  return (
    <div className="container">
        <header>
            Code Development Project
        </header>
        <div id="main" role="main">
            <Container />
        </div>
    </div>
  );
}

export default App;
