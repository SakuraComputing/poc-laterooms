// Set Text Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
export const sortByStarRating = (sortBy = '') => ({
    type: 'SORT_BY_STAR_RATING',
    sortBy
});
export const setHotelByFacility = (facility = '') => ({
    type: 'SORT_BY_STAR_RATING',
    facility
});

