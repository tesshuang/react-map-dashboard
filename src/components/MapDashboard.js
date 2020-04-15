import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function MapDashboard () {
  const location = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
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