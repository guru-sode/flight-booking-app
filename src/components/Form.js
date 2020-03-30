import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import flights from '../data/flights';

const places = ["Chennai","Delhi","Kolkata","Bangalore"];

window.$( function() {
    window.$( ".autocomplete" ).autocomplete({
      source: places
    });
  } );

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noError: false,
            flights: flights.Flights
        }
    }

    handleChange = (event) => {
        const id = event.target.id;
        this.setState({
            [id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const err = this.validate();
        if(!err){
            let filteredFlights = this.state.flights.filter((flight)=>{
                if(flight.From.toLowerCase() === this.state.source.toLowerCase() && 
                    flight.To.toLowerCase() === this.state.destination.toLowerCase() && 
                    parseInt(flight['Seats Available']) >= parseInt(this.state.passengers))
                return flight
            })
            this.setState({
                noError: true,
                flights: filteredFlights
            })
        }
    }

    validate = () => {
        let err = false;
        if (!this.state.first_name) {
            this.setState({
                errFName: 'Enter valid first name',
            })
            err=true;
        }
        if (!this.state.last_name) {
            this.setState({
                errLName: 'Enter valid last name',
            })
            err=true;
        }
        if (!this.state.source) {
            this.setState({
                errSource: 'Enter valid source name',
            })
            err=true;
        }
        if (!this.state.destination) {
            this.setState({
                errDestination: 'Enter valid destination name',
            })
            err=true;
        }
        if (parseInt(this.state.passengers) <= 0 || !this.state.passengers) {
            this.setState({
                errPassengers: 'Number of passengers should be at least 1',
            })
            err=true;
        }
        return err;
    }


    render() {
        const redirectToReferrer = this.state.noError;
        if (redirectToReferrer) {
            return <Redirect to={{pathname:"/flights", state: this.state}} />
        }
        return (
            <div className="container user-form">
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input className="validate" placeholder="Enter first name" id="first_name" type="text"></input>
                                <label htmlFor="first_name">First Name</label>
                                <span className="helper-text red-text">{this.state.errFName ? this.state.errFName : null}</span>
                            </div>
                            <div className="input-field col s6">
                                <input className="validate" placeholder="Enter last name" id="last_name" type="text"></input>
                                <label htmlFor="last_name">Last Name</label>
                                <span className="helper-text red-text">{this.state.errLName ? this.state.errLName : null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input className="validate autocomplete" placeholder="Enter source" id="source" type="text"></input>
                                <label htmlFor="source">From</label>
                                <span className="helper-text red-text">{this.state.errSource ? this.state.errSource : null}</span>
                            </div>
                            <div className="input-field col s6">
                                <input className="validate autocomplete" placeholder="Enter destination" id="destination" type="text"></input>
                                <label htmlFor="destination">To</label>
                                <span className="helper-text red-text">{this.state.errDestination ? this.state.errDestination : null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input className="validate" placeholder="Enter number of passengers" id="passengers" type="text"></input>
                                <label htmlFor="passengers">Passengers</label>
                                <span className="helper-text red-text">{this.state.errPassengers ? this.state.errPassengers : null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 offset-s3">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Search Flights
                            <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;