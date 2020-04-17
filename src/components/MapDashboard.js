import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { fetchData } from '../api/fetch'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

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
        <Marker position={[data.countryInfo.lat, data.countryInfo.long]} key={data.countryInfo._id}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>))
      }
    </Map>

  )
}