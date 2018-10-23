import React from 'react';
import { connect } from 'react-redux';
import HotelListItem from './HotelListItem';
import selectHotels from './../selectors/hotels';

export const HotelList = (props) => {
    return (
        <div>
            {props.hotels.map((hotel) => {
                return <HotelListItem key={hotel.name} {...hotel} />;
            })}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        hotels: selectHotels(state.hotels, state.filters)
    };
}

export default connect(mapStateToProps)(HotelList);
