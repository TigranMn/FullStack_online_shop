import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { TLoaded } from './types';
const Maps = () => {
    const [, setMap] = useState(null);

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:'https://goo.gl/maps/FB1tBF1Sb27e1QBr6' ,
    });
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);




    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : null;
};
export default Maps;