import { LatLngBoundsExpression, Rectangle } from 'leaflet';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'


// import "./styles/Home.css";

export default function Map() {

  const rectangle = [[51.49, -0.08], [51.5, -0.06]] as LatLngBoundsExpression;

  const orange = { color: 'orange' }

  const lands = [] 

  function getLands() {
    for (let i = 0; i < 108; i++) {
      for (let j = 0; j < 192; j++) {
        var rectBounds = [[1 * i, 1 * j], [1 * (i + 1), 1 * (j + 1)]] as LatLngBoundsExpression
        lands.push(<Rectangle bounds={rectBounds} pathOptions={orange} />)
      }
    }

  }

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>
        <MapContainer
          style={{ width: "960px", height: "540px" }}
          zoom={13}
          center={[51.505, -0.09]}
          // scrollWheelZoom={false}
          fadeAnimation={true}
          markerZoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            getLands();
          }
          <Rectangle bounds={rectangle} pathOptions={orange} />

        </MapContainer>
      </main>
    </div>
  );
}