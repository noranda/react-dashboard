import React from 'npm:react';

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
      <form className="filter form-inline" onSubmit={(event) => { event.preventDefault() }}>
        <div className="form-group">
          <label htmlFor="filterLocation">Location</label>

          <select id="filterLocation" className="form-control" defaultValue="All">
            <option value="All">All</option>
            {this.state.locations.map((location, index) => {
              return (
                <option key={`location-${index}`} value={location}>{location}</option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="filterFrom">From</label>
          <DateSelector id="filterFrom" value={this.props.fromDate} onChange={this.fromDateChangedFn} />
        </div>

        <div className="form-group">
          <label htmlFor="filterTo">To</label>
          <DateSelector id="filterTo" value={this.props.toDate} onChange={this.toDateChangedFn} />
        </div>

        <button type="submit" className="btn btn-default">Go</button>
      </form>
    );
  }
}

Filter.propTypes = {
  fromDate: PropTypes.instanceOf(moment).isRequired,
  toDate: PropTypes.instanceOf(moment).isRequired,
  onFilterChange: PropTypes.func
};
