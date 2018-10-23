import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByStarRating } from '../actions/filters';

export class HotelListFilters extends Component {

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

 onSortChange = (e) => {
    this.props.sortByStar(e.target.value);
 }

  render() {
    return (
      <div>
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
    // sortByStarDesc: () => dispatch(sortByStarRatingDesc()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelListFilters);
