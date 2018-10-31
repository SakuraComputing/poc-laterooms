export default (hotels, { text, sortBy, facility }) => {
    return hotels.filter((hotel) => {
        if(facility.length > 0) {
            let txtfacilities = hotelHasFacility(hotel.facilities, facility);
            const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
            return txtfacilities && textMatch;
        } else {
            const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
            return textMatch;
        }
    }).sort((a, b) => {
        if (sortBy === 'Asc') {
            return a.starRating - b.starRating;
        } else {
            return b.starRating - a.starRating;
        }
    });
};

function hotelHasFacility (hoteFacilities, facility) {
        return facility.every(value => {return (hoteFacilities.indexOf(value) >= 0);
    });
}
  
