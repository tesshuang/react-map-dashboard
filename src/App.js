import React from 'react';
import './App.css';
import Header from './components/Header'
import MapDashboard from './components/MapDashboard'
import Analytics from './components/Analytics'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <MapDashboard />
        <Analytics />
      </div>
      <footer>
        {`@${new Date().getFullYear()} Built by Tess.`}
      </footer>
    </div>
  );
}

export default App;
