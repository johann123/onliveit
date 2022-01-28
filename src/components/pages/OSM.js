import {MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';
import {useState} from "react";

const initPosition = [47.4743869, 19.038417213791984]

function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
}

export default function OSM() {
    const [position, setPosition] = useState(initPosition);
    const handleSearch = event => {
        event.preventDefault();
        fetch(`https://nominatim.openstreetmap.org/search?q=${event.target[0].value}&format=jsonv2`)
            .then(r => r.json())
            .then(r => {
                if (r.hasOwnProperty(0)) {
                    setPosition(prevPosition => {
                        return [r[0]['lat'], r[0]['lon']];
                    });
                }
            })
            .catch(e => console.error(e));
    }
    return <>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
              integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
              crossOrigin=""/>
        <form onSubmit={e => handleSearch(e)}>
            <label>
                <input type="text"/>
            </label>
            <input type="submit" value="Search"/>
        </form>
        <div id={'map'}>
            <MapContainer style={{height: '600px'}} center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}/>
                <ChangeMapView coords={position}/>
            </MapContainer>
        </div>
    </>
}
