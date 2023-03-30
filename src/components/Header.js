import React from 'react';
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-emojione/fire';

export default function Header(props) {
    return (
        <div className="header-bar">
            <Icon icon={fireIcon} /> Xtreme Weather Events
        </div>
    );
}
