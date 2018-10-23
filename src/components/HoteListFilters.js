import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByStarRating, setHotelByFacility } from '../actions/filters';

export class HotelListFilters extends Component {

  state = {
    facilities: []
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

 onSortChange = (e) => {
    this.props.sortByStar(e.target.value);
 }

 onFacilitiesChange = (e) => {
   let facilities;

    facilities = this.state.facilities;
    //  this.props.setHotelByFacility.push(e.target.value)
    if(!this.state.facilities.includes(e.target.value)) {
      facilities.push(e.target.value) 
    } else {
      facilities.splice(facilities.indexOf(e.target.value), 1)
    }
    this.setState({facilities: facilities });
    this.props.setFacility(this.state.facilities);
 }

  render() {
    return (
      <div className="filter-header">
          <input
            type="text"
            placeholder="Hotel Name"
            value={this.props.filters.text}
            onChange={this.onTextChange}
            className="input-box"
          />
          <select className="select"
                  value={this.props.filters.sortBy}
                  onChange={this.onSortChange}
          >
            <option value="">Star Rating</option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
          </select>

          <div className="facilities-group">
            <label>Facilities</label>
            <input type="checkbox" id="carpark" value="car park" onChange={this.onFacilitiesChange} className="facilities-checkbox" />
            <label htmlFor="carpark" className="">Car Park</label>
            <input type="checkbox" id="pool" value="pool" onChange={this.onFacilitiesChange} className="facilities-checkbox" />
            <label htmlFor="pool" className="">Pool</label>
            <input type="checkbox" id="gym" value="gym" onChange={this.onFacilitiesChange} className="facilities-checkbox" />
            <label htmlFor="gym" className="">Gym</label>
          </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByStar: (sortBy) => dispatch(sortByStarRating(sortBy)),
    setFacility: (facility) => dispatch(setHotelByFacility(facility)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelListFilters);
