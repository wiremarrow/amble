import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// var mapboxgl = require('mapbox-gl');
// var MapboxDirections = require('@mapbox/mapbox-gl-directions');

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lyZW1hcnJvdyIsImEiOiJjbDhxanJiMnEwM2JmNDBwYzN5amc5OThwIn0.4ZlwCt8tudoVRooIoQM1lQ';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-96.314445);
  const [lat, setLat] = useState(30.601389);
  const [zoom, setZoom] = useState(4.5);

  // const directions = new MapboxDirections({
  //   accessToken: mapboxgl.accessToken,
  //   unit: 'metric',
  //   profile: 'mapbox/driving',
  //   alternatives: false,
  //   geometries: 'geojson',
  //   controls: { instructions: false },
  //   flyTo: false
  // });

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/wiremarrow/cl8qnv85s000h14msotbt7545',
      center: [lng, lat],
      zoom: zoom
    });

    // map.addControl(directions, 'top-left');
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="stats">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container"/>
      <div className="sidebar">
        Hello
      </div>
    </div>
  );
}
