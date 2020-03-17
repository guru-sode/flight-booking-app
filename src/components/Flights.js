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
        this.filterFlights = this.filterFlights.bind(this);
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

    filterFlights() {
        const lowerBoundPrice = this.state.lowerBoundPrice ? this.state.lowerBoundPrice: 0;
        const upperBoundPrice = this.state.upperBoundPrice ? this.state.upperBoundPrice: 10000;
        const upperArrival = this.state.upperArrival ? this.state.upperArrival: moment(parseFloat('24:00').valueOf());
        const lowerArrival = this.state.lowerArrival ? this.state.lowerArrival: moment(parseFloat('00:00').valueOf());
        const upperDeparture = this.state.upperDeparture ? this.state.upperDeparture: moment(parseFloat('24:00').valueOf());
        const lowerDeparture = this.state.lowerDeparture ? this.state.lowerDepartue: moment(parseFloat('00:00').valueOf());
        const airline = this.state.preferredAirline;
        const duration = this.state.preferredDuration;
        console.log(airline)
        let filterFlights = this.state.copyForSearch.filter((flight)=>{
            const departure = moment(parseFloat(flight.Departure)).valueOf();
            const arrival = moment(parseFloat(flight.Arrival)).valueOf();
            const testCondition = departure >= lowerDeparture && departure <= upperDeparture &&
            arrival >= lowerArrival && arrival <= upperArrival &&
            parseFloat(flight.Price) >= parseFloat(lowerBoundPrice) && parseFloat(flight.Price) <= parseFloat(upperBoundPrice);
            if(!airline && !duration){
                if(testCondition)
                return flight;
            }
            else if(airline && !duration){
                if(testCondition && flight.Airline === airline)
                return flight
            }
            else if(duration && !airline){
                if(duration == 'lesser'){
                    if(parseFloat(flight.Duration) < 2 && testCondition)
                    return flight;
                }
                else if(duration == 'between'){
                    if(testCondition && parseFloat(flight.Duration) >= 2 && parseFloat(flight.Duration) <= 3)
                    return flight;
                }
                else if(duration == 'greater'){
                    if(parseFloat(flight.Duration) > 3 && testCondition)
                    return flight;
                }
            }
            else if(airline && duration){
                if(duration == 'lesser'){
                    if(parseFloat(flight.Duration) < 2 && testCondition && flight.Airline === airline)
                    return flight;
                }
                else if(duration == 'between'){
                    if(testCondition && parseFloat(flight.Duration) >= 2 && parseFloat(flight.Duration) <= 3 && flight.Airline === airline)
                    return flight;
                }
                else if(duration == 'greater'){
                    if(parseFloat(flight.Duration) > 3 && testCondition && flight.Airline === airline)
                    return flight;
                }
            }
        })
        this.setState({
            flights: filterFlights
        })
    }

    handleDuration(e) {
        if(e.target.value){
            if (e.target.value === 'lesser') {
                this.setState({
                    preferredDuration: 'lesser'
                });
            }
            if (e.target.value === 'between') {
                this.setState({
                    preferredDuration: 'between'
                })
            }
            if (e.target.value === 'greater') {
                this.setState({
                    preferredDuration: 'greater'
                })
            }
        }
        else{
            this.setState({
                preferredDuration: null
            })
        }
        setTimeout(()=>{
            this.filterFlights();
        },1000)
    }

    handleAirLine(e) {
        const airline = e.target.value;
        if (airline) {
            this.setState({
                preferredAirline: airline
            })
        }
        else{
            this.setState({
                preferredAirline: null
            })
        }
        setTimeout(()=>{
            this.filterFlights();
        },1000)
    }

    handleDeparture(e) {
        const time = e.target.value.split('-');
        if (time[0] && time[1]) {
            const lowerBound = moment(parseFloat(time[0])).valueOf();
            const upperBound = moment(parseFloat(time[1])).valueOf();
            this.setState({
                lowerDeparture: lowerBound,
                upperDeparture: upperBound
            })
        }
        else{
            this.setState({
                lowerDeparture: null,
                upperDeparture: null
            })
        }
        setTimeout(()=>{
            this.filterFlights();
        },1000)
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
        }
        else{
            this.setState({
                lowerArrival: null,
                upperArrival: null
            })
        }
        setTimeout(()=>{
            this.filterFlights();
        },1000)
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