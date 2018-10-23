import React from 'react';

const HotelListItem = ({ name, starRating, facilities}) => {
    return (
        <div className="hotel-box">
            <h3>Hotel Name: {name}</h3>
            <div>Star Rating: {starRating}</div>
            <div>Facilities Include: {facilities.toString()}</div>
        </div>
    );
}

export default HotelListItem;
