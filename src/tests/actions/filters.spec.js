import { setTextFilter } from "../../actions/filters";

describe('filter action object', () => {
    it('should setup the filter object', () => {
        const action = setTextFilter('test');
        expect(action).toEqual = ({
            type: 'SET_TEXT_FILTER',
            text: 'test'
        })
    })
})