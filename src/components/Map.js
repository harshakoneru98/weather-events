import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
// import useSuperCluster from 'use-supercluster';

export default function Map({ center, eventData }) {
    const [zoom, setZoom] = useState(1);
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_API_KEY
                }}
                center={center}
                zoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} id={8} />
            </GoogleMapReact>
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 29.305561,
        lng: -3.981108
    }
};
