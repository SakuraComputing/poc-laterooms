import React from 'react';
import HotelList from './HotelList';
import '../App.css';

const LandingPage = () => {
    return (
        <div className="container">
            <h1>Late Rooms</h1>
            <HotelList />
        </div>
    );
}
export default LandingPage;
