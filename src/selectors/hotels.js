
export default (hotels, { text }) => {
    return hotels.filter((hotel) => {
        const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
        console.log('Text Please', textMatch, hotel);
        return textMatch;
    });
};
