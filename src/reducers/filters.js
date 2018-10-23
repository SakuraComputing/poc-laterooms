const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    facility: []
};
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_STAR_RATING':  
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_HOTEL_BY_FACILITY':
        return {
            ...state,
            facility: action.facility
        }
        default:
            return state;
    }
}

