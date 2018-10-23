import filtersReducer from '../../reducers/filters';

describe('Filters Reducer', () => {
    it('should set the test filter',() => {
        const state = filtersReducer( undefined, { type: 'SET_TEXT_FILTER', text: 'test'});
        expect(state.text).toBe('test')
    });
    it('should sort by starRating desc', () => {
        const currentState = {
            name: '',
            sortBy: 'Desc',
        };
        const action = { 
            type: 'SORT_BY_STAR_RATING',
            sortBy: 'Asc'
        };
        const state = filtersReducer(currentState, action);
        expect(state.sortBy).toBe('Asc');
    })
    it('should sort by starRating asc', () => {
        const currentState = {
            name: '',
            sortBy: 'Asc',
        };
        const action = { 
            type: 'SORT_BY_STAR_RATING',
            sortBy: 'Desc'
        };
        const state = filtersReducer(currentState, action);
        expect(state.sortBy).toBe('Desc');
    
    })
})
