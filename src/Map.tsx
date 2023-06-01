import { useEffect, useState } from 'react';
import { LatLngBoundsExpression } from 'leaflet';
import { MapContainer, TileLayer, CircleMarker, Rectangle } from 'react-leaflet'

import * as L from 'leaflet';
// import "./styles/Home.css";

export default function Map() {

  const [itemsList, setItemsList] = useState<string[][]>()
  const [lands, setLands] = useState<React.ReactNode[]>() 

  const rectangle = [[50,50], [108, 170]] as LatLngBoundsExpression;
  const maxMapBounds = [[0,0], [108, 192]] as LatLngBoundsExpression;

  const orange = { color: 'orange' }
  const purpler = { color: 'purple'}

  const localLands: React.ReactNode[] = []
  var items: string[][]
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
  useEffect(() => {
    console.log("useeffect 1")
    fetch('./test.txt').then(function (response) {
      response.text().then(function (text) {
        items = text.split("\r\n").map(function (el) { return el.split(" "); });
        setItemsList(items)
        getLands()
        console.log("useefect item filled")
      });
    });
  }, []);

  function getLands() {
    console.log("getLands init")    
    for (let i = 0; i < 108; i++) {
      for (let j = 0; j < 192; j++) {
        if (items[i][j] === "1") {
          var rectBounds = [[1 * i, 1 * j], [1 * (i + 1), 1 * (j + 1)]] as LatLngBoundsExpression
          localLands.push(<Rectangle bounds={rectBounds} pathOptions={orange} />)
        }
        else{
          
        }
      }
    }
    setLands(localLands)

    
    //NO VA
    //return (<>lands</>)
    
    //FUNCIONA
    // return(
    //   <>
    //   <Rectangle bounds={rectangle} pathOptions={orange} />
    //   <Rectangle bounds={maxMapBounds} pathOptions={purpler} />
    //   </>
    // )

    //

    return(lands)
   
  }

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          .Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>
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
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
          {lands}
          <>
          {/* <Rectangle bounds={rectangle} pathOptions={orange} /> */}
          {/* <Rectangle bounds={maxMapBounds} pathOptions={purpler} /> */}
          </>
        </MapContainer>
      </main>
    </div>
  );
}