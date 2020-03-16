import React, { Component } from 'react';

class FlightCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getFlightCard(flights) {
        let cards = [];
        if(flights){
            flights.map((flight, index) => {
                return cards.push(
                    <div className="col s12 m6 l3" key={index}>
                        <div className="card small blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{flight.Airline}</span>
                                <p>{`${flight.From} to ${flight.To}`}</p>
                                <p>{`Departure Time: ${flight.Departure}`}</p>
                                <p>{`Arrival Time: ${flight.Arrival}`}</p>
                                <p>{`Duration: ${flight.Duration}`}</p>
                                <p>{`Price: ${flight.Price}`}</p>
                                <p>{`Seats Available: ${flight['Seats Available']}`}</p>
                            </div>
                            <div className="card-action">
                                <a href="https://www.goindigo.in/" target="_blank">Book Ticket</a>
                            </div>
                        </div>
                    </div>
                );
            })
        }
        else{
            cards.push(

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