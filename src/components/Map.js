import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
// import useSuperCluster from 'use-supercluster';

export default function Map({ center, eventData }) {
    const [zoom, setZoom] = useState(1);

    // Index for reference
    const eventDataIndex = {
        8: 'Wildfires',
        10: 'Severe Storms',
        12: 'Volcanoes',
        15: 'Sea and Lake Ice'
    };

    // Create an Array of its keys
    let eventDataIndexNum = Object.keys(eventDataIndex);
    eventDataIndexNum = eventDataIndexNum.map((index) => Number(index));

    // Setup the geo-features
    const points = eventData.map((event) => ({
        type: 'Feature',
        properties: {
            cluster: false,
            eventKey: event.id,
            eventTitle: event.title,
            eventType: event.categories[0].id
        },
        geometry: {
            type: 'Point',
            coordinates: [
                event.geometries[0].coordinates[0],
                event.geometries[0].coordinates[1]
            ]
        }
    }));

    console.log('Points : ', points);

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_API_KEY
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
