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
      <form className="filter form-inline row" onSubmit={(event) => { event.preventDefault() }}>
        <div className="form-group col-xs-3 col-xs-offset-1">
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

        <div className="date-select form-group col-xs-2">
          <label htmlFor="filterFrom">From</label>
          <div className="input-group">
            <DateSelector id="filterFrom"
                          value={this.props.fromDate}
                          onChange={this.fromDateChangedFn}
                          ariaDescribedBy="icon-addon1" />
            <span className="input-group-addon" id="icon-addon1"><FontAwesome name="calendar" /></span>
          </div>
        </div>

        <div className="date-select form-group col-xs-2">
          <label htmlFor="filterTo">To</label>
          <div className="input-group">
            <DateSelector id="filterTo"
                          value={this.props.toDate}
                          onChange={this.toDateChangedFn}
                          ariaDescribedBy="icon-addon2" />
            <span className="input-group-addon" id="icon-addon2"><FontAwesome name="calendar" /></span>
          </div>
        </div>

        <button type="submit" className="btn btn-default col-xs-1">GO</button>
      </form>
    );
  }
}

Filter.propTypes = {
  fromDate: PropTypes.instanceOf(moment).isRequired,
  toDate: PropTypes.instanceOf(moment).isRequired,
  onFilterChange: PropTypes.func
};
