import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { fetchData } from '../api/fetch'

export const virusIcon = new L.Icon({
  iconUrl: require("../images/ic_virus.svg"),
  iconRetinaUrl: require("../images/ic_virus.svg"),
  iconSize: [30, 30],
  shadowUrl: require('../images/shadow.png'),
  shadowSize: [35, 35],
});


export default function MapDashboard () {
  const [coronaData, setCoronaData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const location = {
    lat: 51.505,
    lng: -0.09,
    zoom: 3,
  }

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

  if(loading) {
    return <div style={{height: '100vh'}}>Fetching data...</div>
  }

  if(error) {
    return <div style={{height: '100vh'}}>{error}</div>
  }

  console.log(coronaData);
  return (
    <Map center={[location.lat, location.lng]} zoom={location.zoom} style={{height: '100vh'}}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coronaData.map(data => (
        <Marker position={[data.countryInfo.lat, data.countryInfo.long]} key={data.countryInfo._id} icon={virusIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>))
      }
    </Map>

  )
}