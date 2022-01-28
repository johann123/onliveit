import React from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '600px',
    height: '600px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function GMaps() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(GMaps)