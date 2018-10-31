import selectHotel from '../../selectors/hotels';
import hotels from '../../fixtures/hotels';

describe('hotel filter', () => {
    it('should filter on text value', () => {
        const filters = {
            text: 'hotelone',
            sortBy: 'Asc',
            facility: []
        };
        const result = selectHotel(hotels, filters);
        expect(result[0]).toEqual(hotels[0]);
    });
    it('should filter by a single selected checkbox', () => {
        const filters = {
            text: '',
            sortBy: 'Desc',
            facility: [
                'car park'
            ]
        };
        const result = selectHotel(hotels, filters);
        expect(result).toEqual([hotels[0],hotels[1]]);
    });
    it('should filter by more than one selected checkbox', () => {
        const filters = {
            text: '',
            sortBy: 'Asc',
            facility: [
                'car park',
                'pool'
            ]
        };
        const result = selectHotel(hotels, filters);
        expect(result).toEqual([hotels[0]]);
    })
});