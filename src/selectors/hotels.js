
export default (hotels, { text, sortBy }) => {
    return hotels.filter((hotel) => {
        const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'Asc') {
            return a.starRating - b.starRating;
        } else {
            return b.starRating - a.starRating;
        }
    });
};
