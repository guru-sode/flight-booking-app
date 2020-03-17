import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import FlightCard from './FlightCard';
import moment from 'moment';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class Flights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: this.props.location.state.flights,
            copyForSearch: this.props.location.state.flights
        }
        this.onChangeSlider = this.onChangeSlider.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
        this.handleAirLine = this.handleAirLine.bind(this);
        this.handleDeparture = this.handleDeparture.bind(this);
        this.handleArrival = this.handleArrival.bind(this);
    }

    onChangeSlider(value) {
        const lowerBoundPrice = value[0];
        const upperBoundPrice = value[1];
        this.setState({
            lowerBoundPrice,
            upperBoundPrice
        })
        let filteredFlight = this.state.copyForSearch.filter((flight) => {
            if (parseFloat(flight.Price) >= parseFloat(lowerBoundPrice) && parseFloat(flight.Price) <= parseFloat(upperBoundPrice))
                return flight
        })
        this.setState({
            flights: filteredFlight
        })
    }

    // filterFlights() {
    //     const lowerBoundPrice = this.state.lowerBoundPrice;
    //     const upperBoundPrice = this.state.upperBoundPrice;
    //     const upperArrival = this.state.upperArrival;
    //     const lowerArrival = this.state.lowerArrival;
    //     const upperDeparture = this.state.upperDeparture;
    //     const lowerDepartue = this.state.lowerDepartue;
    //     const airline = this.state.preferredAirline;
    //     const duration = this.state.preferredDuration;
    //     let filterFlights = this.state.copyForSearch.filter((flight)=>{
    //         if()
    //     })
    // }

    handleDuration(e) {
        if(e.target.value){
            let filteredFlight = this.state.copyForSearch;
            if (e.target.value === 'lesser') {
                this.setState({
                    preferredDuration: 'lesser'
                });
                filteredFlight = this.state.copyForSearch.filter((flight) => {
                    if (parseFloat(flight.Duration) < 2)
                        return flight
                })
            }
            if (e.target.value === 'between') {
                this.setState({
                    preferredDuration: 'between'
                })
                filteredFlight = this.state.copyForSearch.filter((flight) => {
                    if (parseFloat(flight.Duration) >= 2 && parseFloat(flight.Duration) <= 3)
                        return flight
                })
            }
            if (e.target.value === 'greater') {
                this.setState({
                    preferredDuration: 'greater'
                })
                filteredFlight = this.state.copyForSearch.filter((flight) => {
                    if (parseFloat(flight.Duration) > 3)
                        return flight
                })
            }
            this.setState({
                flights: filteredFlight
            })
        }
        else{
            let filteredFlight = this.state.copyForSearch;
            this.setState({
                flights: filteredFlight
            })
        }
    }

    handleAirLine(e) {
        const airline = e.target.value;
        if (airline) {
            this.setState({
                preferredAirline: airline
            })
            let filteredFlight = this.state.copyForSearch.filter((flight) => {
                if (flight.Airline === airline)
                    return flight
            })
            this.setState({
                flights: filteredFlight
            })
        }
        else {
            let filteredFlight = this.state.copyForSearch;
            this.setState({
                flights: filteredFlight
            })
        }
    }

    handleDeparture(e) {
        const time = e.target.value.split('-');
        if (time[0] && time[1]) {
            const lowerBound = moment(parseFloat(time[0])).valueOf();
            const upperBound = moment(parseFloat(time[1])).valueOf();
            this.setState({
                lowerDepartue: lowerBound,
                upperDeparture: upperBound
            })
            let filteredFlight = this.state.copyForSearch.filter((flight) => {
                const departure = moment(parseFloat(flight.Departure)).valueOf();
                if (departure >= lowerBound && departure <= upperBound)
                    return flight
            })
            console.log(filteredFlight)
            this.setState({
                flights: filteredFlight
            })
        }
        else {
            let filteredFlight = this.state.copyForSearch;
            this.setState({
                flights: filteredFlight
            })
        }
    }

    handleArrival(e) {
        const time = e.target.value.split('-');
        if (time[0] && time[1]) {
            const lowerBound = moment(parseFloat(time[0])).valueOf();
            const upperBound = moment(parseFloat(time[1])).valueOf();
            this.setState({
                lowerArrival: lowerBound,
                upperArrival: upperBound
            })
            let filteredFlight = this.state.copyForSearch.filter((flight) => {
                const departure = moment(parseFloat(flight.Arrival)).valueOf();
                if (departure >= lowerBound && departure <= upperBound)
                    return flight
            })
            console.log(filteredFlight)
            this.setState({
                flights: filteredFlight
            })
        }
        else {
            let filteredFlight = this.state.copyForSearch;
            this.setState({
                flights: filteredFlight
            })
        }
    }

    getOptionForTime() {
        return (
            <React.Fragment>
                <option value="00:00-2:59">12:00AM-2:59AM</option>
                <option value="3:00-5:59">3:00AM-5:59AM</option>
                <option value="6:00-8:59">6:00AM-8:59AM</option>
                <option value="9:00-11:59">9:00AM-11:59AM</option>
                <option value="12:00-14:59">12:00PM-2:59PM</option>
                <option value="15:00-17:59">3:00PM-5:59PM</option>
                <option value="18:00-21:59">6:00PM-8:59PM</option>
                <option value="22:00-23:59">9:00PM-11:59PM</option>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col s2">
                    <div className="row filter-menu">
                        <div style={{padding: '25px'}}>
                            <p>Select price range</p>
                            <Range min={2000} max={10000} defaultValue={[2000, 10000]} onChange={this.onChangeSlider} tipFormatter={value => `${value}`} handle={handle} />
                        </div>
                    </div>
                    <div className="row">
                        <select className="browser-default" onChange={this.handleDuration}>
                            <option value="">Duration</option>
                            <option value="lesser">{'< 2hrs'}</option>
                            <option value="between">2hrs-3hrs</option>
                            <option value="greater">> 3hrs</option>
                        </select>
                    </div>
                    <div className="row">
                        <select className="browser-default" onChange={this.handleAirLine}>
                            <option value="">Choose Airline</option>
                            <option value="Air India">Air India</option>
                            <option value="Indigo">Indigo</option>
                            <option value="Jet Airways">Jet Airways</option>
                        </select>
                    </div>
                    <div className="row">
                        <select className="browser-default" onChange={this.handleDeparture}>
                            <option value="">Departure</option>
                            {this.getOptionForTime()}
                        </select>
                    </div>
                    <div className="row">
                        <select className="browser-default" onChange={this.handleArrival}>
                            <option value="">Arrival</option>
                            {this.getOptionForTime()}
                        </select>
                    </div>
                </div>
                <div className="col s10 flight-cards">
                    <FlightCard flights={this.state.flights} />
                </div>
            </div>
        );
    }
}

export default Flights;