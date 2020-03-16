import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Flights extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onChangeSlider = this.onChangeSlider.bind(this);
    }

    onChangeSlider(value) {
        this.setState({
            lowerBoundPrice: value[0],
            upperBoundPrice: value[1]
        })
    }

    getOptionForTime(){
        return(
            <React.Fragment>
            <option value="12:00AM-2:59AM">12:00AM-2:59AM</option>
            <option value="3:00AM-5:59AM">3:00AM-5:59AM</option>
            <option value="6:00AM-8:59AM">6:00AM-8:59AM</option>
            <option value="9:00AM-11:59AM">9:00AM-11:59AM</option>
            <option value="12:00PM-2:59PM">12:00PM-2:59PM</option>
            <option value="3:00PM-5:59PM">3:00PM-5:59PM</option>
            <option value="6:00PM-8:59PM">6:00PM-8:59PM</option>
            <option value="9:00PM-11:59PM">9:00PM-11:59PM</option>
            </React.Fragment>
        );
    }

    render() {
        console.log('flights')
        return (
            <div className="row">
                <div className="col s2">
                    <div className="row">
                        <Range defaultValue={[2000, 10000]} onChange={this.onChangeSlider} allowCross={false} min={2000} max={10000} />
                    </div>
                    <div className="row">
                        <select className="browser-default">
                            <option value="">Duration</option>
                            <option value="lesser">{'< 2hrs'}</option>
                            <option value="between">2hrs-3hrs</option>
                            <option value="greater">> 2hrs</option>
                        </select>
                    </div>
                    <div className="row">
                        <select className="browser-default">
                            <option value="">Airline</option>
                            <option value="airIndia">Air India</option>
                            <option value="indigo">Indigo</option>
                            <option value="jetAirways">Jet Airways</option>
                        </select>
                    </div>
                    <div className="row">
                        <select className="browser-default">
                            <option value="">Departure</option>
                            <option value="12:00AM-2:59AM">12:00AM-2:59AM</option>
                            <option value="3:00AM-5:59AM">3:00AM-5:59AM</option>
                            <option value="6:00AM-8:59AM">6:00AM-8:59AM</option>
                            <option value="9:00AM-11:59AM">9:00AM-11:59AM</option>
                            <option value="12:00PM-2:59PM">12:00PM-2:59PM</option>
                            <option value="3:00PM-5:59PM">3:00PM-5:59PM</option>
                            <option value="6:00PM-8:59PM">6:00PM-8:59PM</option>
                            <option value="9:00PM-11:59PM">9:00PM-11:59PM</option>
                        </select>
                    </div>
                    <div className="row">
                        <select className="browser-default">
                            <option value="">Arrival</option>
                            <option value="12:00AM-2:59AM">12:00AM-2:59AM</option>
                            <option value="3:00AM-5:59AM">3:00AM-5:59AM</option>
                            <option value="6:00AM-8:59AM">6:00AM-8:59AM</option>
                            <option value="9:00AM-11:59AM">9:00AM-11:59AM</option>
                            <option value="12:00PM-2:59PM">12:00PM-2:59PM</option>
                            <option value="3:00PM-5:59PM">3:00PM-5:59PM</option>
                            <option value="6:00PM-8:59PM">6:00PM-8:59PM</option>
                            <option value="9:00PM-11:59PM">9:00PM-11:59PM</option>
                        </select>
                    </div>
                </div>
                <div className="col s10">

                </div>
            </div>
        );
    }
}

export default Flights;