import React from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>Map</div>
      <footer>
        {`@${new Date().getFullYear()} Built by Tess.`}
      </footer>
    </div>
  );
}

export default App;
