import React from 'react';
import './App.css';
import Header from './components/Header'
import MapDashboard from './components/MapDashboard'

function App() {
  return (
    <div className="App">
      <Header />
      <MapDashboard />
      <footer>
        {`@${new Date().getFullYear()} Built by Tess.`}
      </footer>
    </div>
  );
}

export default App;
