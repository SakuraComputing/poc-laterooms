import React from 'react';

const HotelListItem = ({ name, starRating, facilities}) => {
    return (
        <div>
            <h3>{name}</h3>
            <div>{starRating}</div>
        </div>
    );
}

export default HotelListItem;
