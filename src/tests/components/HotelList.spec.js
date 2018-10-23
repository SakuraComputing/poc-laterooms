import React from 'react';
import { shallow } from 'enzyme';
import { HotelList } from '../../components/HotelList';
import hotels from '../../fixtures/hotels';

describe('Hotel List Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<HotelList hotels={hotels} />);
        expect(wrapper).toMatchSnapshot();
    })
})

