import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lyZW1hcnJvdyIsImEiOiJjbDhxanJiMnEwM2JmNDBwYzN5amc5OThwIn0.4ZlwCt8tudoVRooIoQM1lQ';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);
  const userLandmark = useRef(null);
  const [lngUser, setLngUser] = useState(-96.314445);
  const [latUser, setLatUser] = useState(30.601389);
  const [lng, setLng] = useState(-96.314445);
  const [lat, setLat] = useState(30.601389);
  const [zoom, setZoom] = useState(4.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/wiremarrow/cl8r8xqhk001415qr6sri2wnl',
      center: [lng, lat],
      zoom: zoom
    });

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });

    userLandmark.current = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [lngUser, latUser]
          },
          properties: {
            title: 'You',
            description: ''
          }
        }
      ]
    }

    for (const feature of userLandmark.current.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map.current);
    }

    map.current.addControl(directions.current, 'top-left');
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    navigator.geolocation.watchPosition(function(position) {
      setLngUser(position.coords.longitude)
      setLatUser(position.coords.latitude)
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
