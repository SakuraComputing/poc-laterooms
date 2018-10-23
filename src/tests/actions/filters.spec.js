import { setTextFilter, sortByStarRating, setHotelByFacility } from "../../actions/filters";

describe('filter action object', () => {
    it('should setup the filter object', () => {
        const action = setTextFilter('test');
        expect(action).toEqual = ({
            type: 'SET_TEXT_FILTER',
            text: 'test'
        })
    });
    it('should setup the sort by star rating desc object', () => {
        expect(sortByStarRating('Asc')).toEqual = ({ 
            type: 'SORT_BY_STAR_RATING',
            sortBy: 'Asc'
        })
    });
    it('should filter by Facility', () => {
        const action = setHotelByFacility('pool');
        expect(action).toEqual = ({
            typr: 'SET_HOTEL_BY_FACILITY',
            facility: 'pool'
        })
    })
})