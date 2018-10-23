import React from 'react';
import HotelList from './HotelList';
import HotelListFilters from './HoteListFilters';
import '../App.css';

const LandingPage = () => {
    return (
        <div className="container">
            <h1>Late Rooms</h1>
            <div className="filter-bar">
                <HotelListFilters />
            </div>
            <HotelList />
        </div>
    );
}
export default LandingPage;
