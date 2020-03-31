import React, { Component } from 'react';

class FlightCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getFlightCard(flights) {
        let cards = [];
        if (flights.length > 1) {
            flights.map((flight, index) => {
                return cards.push(
                    <div className="col s12 m6 l3" key={index}>
                        <div className="card small blue-white darken-1">
                            <div className="card-content black-text">
                                <span className="card-title">{flight.Airline}
                                <img src={window.location.origin + '/logos/' + flight.Airline + '.jpg'} alt={flight.Airline} width="25"
                                    height="20" className="right"></img>
                                </span>
                                <p>{`${flight.From} to ${flight.To}`}</p>
                                <p>{`Departure Time: ${flight.Departure}`}</p>
                                <p>{`Arrival Time: ${flight.Arrival}`}</p>
                                <p>{`Duration: ${flight.Duration}`}</p>
                                <p>{`Price: ${flight.Price}`}</p>
                                <p>{`Seats Available: ${flight['Seats Available']}`}</p>
                            </div>
                            <div className="card-action blue-grey darken-4">
                                <a href="https://www.goindigo.in/" target="_blank" className="center">Book Ticket<i className="material-icons right">flight</i>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })
        }
        else {
            cards.push(
                <div className="col s12 m12 l12">
                <div className="card small white">
                    <div className="card-content black-text">
                        <span className="card-title center">No Flight Available</span>
                        <p>No flight available for selected source, destination or number of passengers</p>
                    </div>
                </div>
            </div>
            )
        }
        return cards;
    }

    render() {
        const { flights } = this.props;
        return (
            <div className="flight-row">
                <div className="row">
                    {this.getFlightCard(flights)}
                </div>
            </div>
        );
    }
}

export default FlightCard;