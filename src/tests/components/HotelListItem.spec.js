import React from 'react';
import { shallow } from 'enzyme';
import hotels from '../../fixtures/hotels';
import HotelListItem from '../../components/HotelListItem';

describe('Hotel List Item Compnent', () => {
    it('should render hotel list item',() => {
       const wrapper = shallow(<HotelListItem  {...hotels[0]}  />) ;
       expect(wrapper).toMatchSnapshot();
    });    
})

