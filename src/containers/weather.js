import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(city) {
    if (!city) {
      return <div className="loading">Loading...</div>;
    }

    const temps = city.list.map(weather => weather.main.temp)
    const pressures = city.list.map(weather => weather.main.pressure);
    const humidities = city.list.map(weather => weather.main.humidity);
    

    return (
      <tr>
        <td><Chart data={temps} color="#ffd300" units="&deg;F avg." /></td>
        <td><Chart data={pressures} color="#964b00" units="hPa avg." /></td>
        <td><Chart data={humidities} color="#009f6b" units="% avg." /></td>
      </tr>
    )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>            
            <th>Temperature (&deg;F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>            
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
