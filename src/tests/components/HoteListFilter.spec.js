import React from 'react';
import { shallow } from 'enzyme';
import { HotelListFilters } from '../../components/HoteListFilters';

let setTextFilter, wrapper;


beforeEach(() => {
    setTextFilter = jest.fn();
    const filters = {
        name: '',
    }
    wrapper = shallow(
        <HotelListFilters
            filters = {filters}
            setTextFilter={setTextFilter}
        />
    )
});

describe('Hotel List Filter Compnonet', () => {
    it('should render expense list filter form correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });
    // it('should render expense list filter with alt data correctly correctly', () => {
    //     wrapper.setProps({
    //        filters: altFilters
    //     });
    //     expect(wrapper).toMatchSnapshot()
    // });
    // it('should handle text change',() => {
    //     const value = 'New text';
    //     wrapper.find('input').at(0).simulate('change', {
    //         target: { value }
    //     });
    //     expect(setTextFilter).toHaveBeenLastCalledWith(value);
    // });
})




