export default (hotels, { text, sortBy, facility }) => {
    return hotels.filter((hotel) => {
        if(facility.length > 0) {
            let txtfacilities;
            for (const iterator of facility) {
                txtfacilities = hotel.facilities.includes(iterator);
            }
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
