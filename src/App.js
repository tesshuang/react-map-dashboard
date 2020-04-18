import React from 'react'
import './App.css'
import Header from './components/Header'
import MapDashboard from './components/MapDashboard'
import Analytics from './components/Analytics'

import { fetchData } from './api/fetch'
import Loading from "./components/Loading"


function App() {
  const [coronaData, setCoronaData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetchData()
      .then(data => {
        setCoronaData(data)
        setLoading(false)
        setError(null)
      })
      .catch(e => {
        console.warn(e)
        setError('Sorry, can not fetch the latest data.')
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="content">
        {loading && <Loading />}
        {error && <div style={{height: '100vh'}}>{error}</div>}
        {coronaData && 
          <React.Fragment>
            <MapDashboard coronaData={coronaData}/>
            <Analytics />
          </React.Fragment>}
      </div>
      <footer>
        {`@${new Date().getFullYear()} Built by Tess.`}
      </footer>
    </div>
  );
}

export default App;
