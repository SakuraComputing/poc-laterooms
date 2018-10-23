// Set Text Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
export const sortByStarRatingAsc = () => ({
    type: 'SORT_BY_STAR_RATING_ASC'
});
export const sortByStarRatingDesc = () => ({
    type: 'SORT_BY_STAR_RATING_DESC'
});