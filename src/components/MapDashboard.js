import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { fetchData } from '../api/fetch'

export default function MapDashboard () {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)

  const location = {
    lat: 51.505,
    lng: -0.09,
    zoom: 6,
  }
  
  React.useEffect(() => {
    fetchData()
      .then(data => setData(data))
      .catch(e => {
        console.warn(e)
        setError('Sorry, can not fetch the latest data.')
      })
  }, [])

  if(error) {
    return <div>{error}</div>
  }

  return (
    <div >
      <Map center={[location.lat, location.lng]} zoom={location.zoom} style={{height: '500px'}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  )
}