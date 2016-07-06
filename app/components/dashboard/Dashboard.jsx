import React from 'npm:react';

const { Component, PropTypes } = React;
const { Chart, numeral } = window;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [
        { name: 'Copper', unit: 'LBS', value: 102458, color: '#F3A036' },
        { name: 'Plastic', unit: 'LBS', value: 79458, color: '#3DC28F' },
        { name: 'Paper', unit: 'LBS', value: 57348, color: '#13B2C1' },
        { name: 'Steel', unit: 'LBS', value: 34586, color: '#E64D1B' }
      ]
    };
  }

  componentDidMount() {
    this.chart = new Chart(this.refs.pieChart, {
      type: 'pie',
      data: {
        labels: this.state.materials.map((material) => material.name),
        datasets: [
          {
            data: this.state.materials.map((material) => material.value),
            backgroundColor: this.state.materials.map((material) => material.color)
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  render() {
    return (
      <div className="dashboard container">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-4">
                <div className="list-group">
                  {this.state.materials.map((material, index) => {
                    return (
                      <div key={`material-${index}`} className="list-group-item">
                        <div className="material-title">
                          <span className="dot" style={{ backgroundColor: material.color }}></span>
                          {material.name} ({material.unit})
                        </div>
                        <div className="material-value">
                          {numeral(material.value).format('0,0')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-xs-8">
                <div>
                  Activity from
                </div>
                <div>
                  <span>{this.props.fromDate.format('MM/DD/YYYY')}</span>
                  todo
                  <span>{this.props.toDate.format('MM/DD/YYYY')}</span>
                </div>
                <canvas ref="pieChart" className="pie-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  fromDate: PropTypes.instanceOf(moment).isRequired,
  toDate: PropTypes.instanceOf(moment).isRequired
};
