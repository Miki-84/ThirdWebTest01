import { useEffect, useState } from 'react';
import { LatLngBoundsExpression } from 'leaflet';
import { MapContainer, TileLayer, CircleMarker, Rectangle } from 'react-leaflet'


import * as L from 'leaflet';
// import "./styles/Home.css";

export default function Map() {




  const rectangle = [[50, 50], [108, 170]] as LatLngBoundsExpression;
  const maxMapBounds = [[0, 0], [108, 192]] as LatLngBoundsExpression;

  const orange = { color: 'orange' }
  const purpler = { color: 'purple' }

  function getLands() {
    console.log("getLands init")
    for (let i = 0; i < 108; i++) {
      for (let j = 0; j < 192; j++) {
        if (items[i][j] === "1") {
          var rectBounds = [[1 * i, 1 * j], [1 * (i + 1), 1 * (j + 1)]] as LatLngBoundsExpression
          localLands.push(<Rectangle key={i + "-" + j} bounds={rectBounds} pathOptions={orange} />)
        }
        else {

        }
      }
    }
    setLands(localLands)
  }


  // showFile = async (e) => {
  //   e.preventDefault()
  //   const reader = new FileReader()
  //   reader.onload = async (e) => { 
  //     const text = (e.target.result)
  //     console.log(text)
  //     alert(text)
  //   };
  //   reader.readAsText(e.target.files[0])
  // }




  return (
    <MapContainer
            style={{ width: "960px", height: "540px" }}
            zoom={2}
            center={[50, 50]}
            // scrollWheelZoom={false}
            fadeAnimation={true}
            markerZoomAnimation={true}
            maxBounds={maxMapBounds}
            minZoom={2}
            maxZoom={6}
            crs={L.CRS.Simple}
          >
            {lands}
          </MapContainer>
  );
}