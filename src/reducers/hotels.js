const hotelReducerDefaultState = [];

export default (state = hotelReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_HOTEL':
            return [
                ...state,
                action.hotel
            ];
        case 'SET_HOTELS':
            return action.hotels;
        default:
            return state;
    }
};