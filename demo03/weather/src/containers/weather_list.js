import React, { Component } from 'react';
import {connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    renderWeather (cityData) {
        const name = cityData.city.name;
        const temperature = cityData.list.map(data => data.main.temp);
        const humidity = cityData.list.map(data => data.main.humidity);
        const pressure = cityData.list.map(data => data.main.pressure);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temperature} color="orange" units="K" /></td>
                <td><Chart data={pressure} color="blue" units="hPa" /></td>
                <td><Chart data={humidity} color="gray" units="%" /></td>
            </tr>
        );
    }
    
    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
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
    return { weather }; //Lembre-se, definimos isso no reducer.
}

export default connect(mapStateToProps)(WeatherList);