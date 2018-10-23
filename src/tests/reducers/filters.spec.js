import filtersReducer from '../../reducers/filters';

describe('Filters Reducer', () => {
    it('should set the test filter',() => {
        const state = filtersReducer( undefined, { type: 'SET_TEXT_FILTER', text: 'test'});
        expect(state.text).toBe('test')
    });
})
