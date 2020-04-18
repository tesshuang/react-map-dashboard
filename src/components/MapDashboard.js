import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export const virusIcon = new L.Icon({
  iconUrl: require("../images/ic_virus.svg"),
  iconRetinaUrl: require("../images/ic_virus.svg"),
  iconSize: [30, 30],
  shadowUrl: require('../images/shadow.png'),
  shadowSize: [35, 35],
});


export default function MapDashboard ({ coronaData }) {
  const location = {
    lat: 51.505,
    lng: -0.09,
    zoom: 3,
  }

  return (
    <Map center={[location.lat, location.lng]} zoom={location.zoom} style={{ width: '65vw'}}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coronaData.map(data => (
        <Marker position={[data.countryInfo.lat, data.countryInfo.long]} key={data.country} icon={virusIcon}>
          <Popup className='pop-up'>
            <h5 style={{ display: 'inline', marginRight: '5px'}}>{data.country}</h5>
            <img src={data.countryInfo.flag} style={{ width: '20px'}} alt={data.country}/>
            <p>Total cases: <b>{data.cases}</b></p>
            <p>New cases of today: <b>{data.todayCases}</b></p>
            <p>Total death: <b>{data.deaths}</b></p>
            <p>Total recovered: <b>{data.recovered}</b></p>
            <p>Last Update: {new Date(data.updated).toLocaleDateString("en-US")}</p>
          </Popup>
        </Marker>))
      }
    </Map>

  )
}