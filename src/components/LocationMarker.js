import React from 'react';
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-emojione/fire';
import volconoIcon from '@iconify/icons-emojione/volcano';
import stromIcon from '@iconify/icons-emojione/cloud-with-lightning-and-rain';
import iceIcon from '@iconify/icons-emojione/snowflake';

export default function LocationMarker({ lat, lng, onClick, id }) {
    let renderIcon = null;
    if (id === 8) {
        renderIcon = fireIcon;
    } else if (id === 10) {
        renderIcon = stromIcon;
    } else if (id === 12) {
        renderIcon = volconoIcon;
    } else if (id === 15) {
        renderIcon = iceIcon;
    }
    return (
        <div onClick={onClick}>
            <Icon icon={renderIcon} className="location-icon" />
        </div>
    );
}
