import React from 'react';
import { connect } from 'react-redux';
import HotelListItem from './HotelListItem';

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
        hotels: state.hotels
    };
}

export default connect(mapStateToProps)(HotelList);
