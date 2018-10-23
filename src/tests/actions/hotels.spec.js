import { addHotel, setHotels } from '../../actions/hotels';
import hotels from '../../fixtures/hotels';

describe('hotel action object', () => {
    it('should setup the add hotel object', () => {
        const action = addHotel(hotels[2]);
        expect(action).toEqual({
            type: 'ADD_HOTEL',
            hotel: hotels[2]
        })
    })
    it('should setup the set hotel action object with data', () => {
        const action = setHotels(hotels);
        expect(action).toEqual({
            type: 'SET_HOTELS',
            hotels
        })
    })
})