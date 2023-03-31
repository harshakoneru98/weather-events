import React, { useState, useEffect } from 'react';
import { useMainContext } from './context/context';
import Header from './components/Header';
import Map from './components/Map';
import Loader from './components/Loader';
import Search from './components/Search';

function App() {
    const { setEventData, reRenderMarkers } = useMainContext();
    const [loading, setLoading] = useState(false);
    const [renderEvent, setRenderEvent] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            const res = await fetch(
                'https://eonet.gsfc.nasa.gov/api/v2.1/events'
            );
            const { events } = await res.json();
            setEventData(events);
            setRenderEvent(events); // Render Map with markers
            setLoading(false);
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <Header />
            {!loading ? <Map eventData={renderEvent} /> : <Loader />}
            {!loading && <Search />}
        </div>
    );
}

export default App;
