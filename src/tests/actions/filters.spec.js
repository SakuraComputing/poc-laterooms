import { setTextFilter, sortByStarRatingAsc, sortByStarRatingDesc } from "../../actions/filters";

describe('filter action object', () => {
    it('should setup the filter object', () => {
        const action = setTextFilter('test');
        expect(action).toEqual = ({
            type: 'SET_TEXT_FILTER',
            text: 'test'
        })
    });
    it('should setup the sort by star rating desc object', () => {
        expect(sortByStarRatingAsc()).toEqual = ({ type: 'SORT_BY_STAR_RATING_ASC'})
    });
    it('should setup the sort by star rating asc object', () => {
        expect(sortByStarRatingDesc()).toEqual = ({ type: 'SORT_BY_STAR_RATING_DESC'})
    });
})