import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import useSuperCluster from 'use-supercluster';

export default function Map({ center, eventData }) {
    const [zoom, setZoom] = useState(1);
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCf_0QW3G3uKNCKZyX4wAjtJ1hPdev8wWY'
                }}
                center={center}
                zoom={zoom}
            ></GoogleMapReact>
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 29.305561,
        lng: -3.981108
    }
};
