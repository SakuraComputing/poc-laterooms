const hotelReducerDefaultState = [];

export default (state = hotelReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_HOTEL':
            return [
                ...state,
                action.hotel
            ];
        default:
            return state;
    }
};