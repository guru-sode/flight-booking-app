import React, { Component } from 'react';

class Flights extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() { 
        console.log(this.props.location.state)
        return ( 
            <h1>Flights</h1>
         );
    }
}
 
export default Flights;