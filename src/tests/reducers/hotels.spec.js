import hotelReducer from '../../reducers/hotels';
import hotels from '../../fixtures/hotels';

describe('Hotel reducer', () => {
    it('should set the default state', () => {
        const state = hotelReducer(undefined, { type: '@@INIT'}); 
        expect(state).toEqual([]);
    });
    it('should add a hotel', () => {
        const hotel = {
            name: 'New Hotel',
            starRating: 4,
            facilities: []
        };
        const action = {
            type: 'ADD_HOTEL',
            hotel
        };
        const state = hotelReducer(hotels, action);
        expect(state).toEqual([...hotels, hotel]);
    });
    it('should set the hotel data', () => {
        const action = {
            type: 'SET_HOTELS',
            hotels
        };
        const state = hotelReducer(hotels, action);
        expect(state).toEqual(hotels);
    })
})

