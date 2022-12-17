import React from 'react';
import Map, { Marker } from 'react-map-gl';
// import { CountyEnum } from './CountyEnum';
import getCountyParams from './MapBoxUtils.jsx';


const MapBox = () => {
    const countryProps = getCountyParams('AM');
    if (countryProps === null) {
        return <Map />;
    } else {
        return (
            <Map
                mapboxAccessToken='pk.eyJ1IjoibmFyZWs1NTUiLCJhIjoiY2xicmtmcTF0MHBzbzNvcW5kejZlZ2tvcCJ9.Zag5ptYP4ij18eXQ_KvQ-A'
                initialViewState={{
                    longitude: countryProps.longitude,
                    latitude: countryProps.latitude,
                    zoom: countryProps.zoom


                }}


                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"

            >
                <Marker longitude={countryProps.longitude} latitude={countryProps.latitude} anchor="bottom" />
            </Map>


        );
    }
};
export default MapBox;