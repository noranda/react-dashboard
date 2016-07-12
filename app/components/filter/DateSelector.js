import React, { Component, PropTypes } from 'react';

const DEFAULT_FORMAT = 'MM/DD/YYYY';

export default class DateSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      format: this.props.format || DEFAULT_FORMAT
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      format: nextProps.format || DEFAULT_FORMAT
    });
  }

  componentDidMount() {
    this.buildDatePicker();
    if (this.props.value != null) {
      this.datePicker.setMoment(moment(this.props.value), true);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.format !== this.state.format) {
      this.datePicker.destroy();
      this.buildDatePicker();
    }
  }

  componentWillUnmount() {
    if (this.datePicker) {
      this.datePicker.destroy();
      this.datePicker = null;
    }
  }

  buildDatePicker() {
    let onChange = this.props.onChange;

    this.datePicker = new Pikaday({
      field: this.refs.datePickerField,
      format: this.state.format,
      onSelect() {
        if (onChange) {
          onChange(this.getMoment());
        }
      }
    });
  }

  render() {
    return (
      <input className="form-control"
             type="text"
             id={this.props.id}
             ref="datePickerField"
             aria-describedby={this.props.ariaDescribedBy} />
    );
  }
}

DateSelector.propTypes = {
  id: PropTypes.string.isRequired,
  format: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment)
  ]),
  onChange: PropTypes.func,
  ariaDescribedBy: PropTypes.string
};
