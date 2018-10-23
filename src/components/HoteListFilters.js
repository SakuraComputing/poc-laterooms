import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class HotelListFilters extends Component {

    
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

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
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelListFilters);
