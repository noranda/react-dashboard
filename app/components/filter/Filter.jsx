import React from 'npm:react';
import FontAwesome from 'npm:react-fontawesome';

import DateSelector from './DateSelector';

const { Component, PropTypes } = React;

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [
        'Mordor',
        'Westeros',
        'Alderaan',
        'Risa'
      ]
    };
    this.fromDateChangedFn = this.fromDateChanged.bind(this);
    this.toDateChangedFn = this.toDateChanged.bind(this);
  }

  fromDateChanged(value) {
    if (this.props.onFilterChange) {
      this.props.onFilterChange('fromDate', value);
    }
  }

  toDateChanged(value) {
    if (this.props.onFilterChange) {
      this.props.onFilterChange('toDate', value);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <form className="filter form-inline row" onSubmit={(event) => { event.preventDefault() }}>
          <div className="form-group col-lg-4 col-lg-offset-1 col-sm-5">
            <label htmlFor="filterLocation">Location</label>

            <div className="input-container">
              <select id="filterLocation" className="form-control" defaultValue="All">
                <option value="All">All</option>
                {this.state.locations.map((location, index) => {
                  return (
                    <option key={`location-${index}`} value={location}>{location}</option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="date-select form-group col-lg-2 col-sm-3">
            <label htmlFor="filterFrom">From</label>
            <div className="input-container">
              <div className="input-group">
                <DateSelector id="filterFrom"
                              value={this.props.fromDate}
                              onChange={this.fromDateChangedFn}
                              ariaDescribedBy="icon-addon1" />
                <span className="input-group-addon" id="icon-addon1"><FontAwesome name="calendar" /></span>
              </div>
            </div>
          </div>

          <div className="date-select form-group col-lg-2 col-sm-3">
            <label htmlFor="filterTo">To</label>
            <div className="input-container">
              <div className="input-group">
                <DateSelector id="filterTo"
                              value={this.props.toDate}
                              onChange={this.toDateChangedFn}
                              ariaDescribedBy="icon-addon2" />
                <span className="input-group-addon" id="icon-addon2"><FontAwesome name="calendar" /></span>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-default col-sm-1">GO</button>
        </form>
      </div>
    );
  }
}

Filter.propTypes = {
  fromDate: PropTypes.instanceOf(moment).isRequired,
  toDate: PropTypes.instanceOf(moment).isRequired,
  onFilterChange: PropTypes.func
};
