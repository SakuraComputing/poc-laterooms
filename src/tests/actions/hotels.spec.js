import { addHotel } from '../components/hotels';
import hotels from '../../fixtures/hotels';

describe('hotel action object', () => {
    it('should setup the add hotel object', () => {
        const action = addHotel(hotels[2]);
        expect(action).toEqual({
            type: 'ADD_HOTEL',
            hotel: hotels[2]
        })
    })
})