import React, { Component } from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter first name" id="first_name" type="text"></input>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter last name" id="last_name" type="text"></input>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter source" id="source" type="text"></input>
                            <label htmlFor="first_name">From</label>
                        </div>
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter destination" id="destination" type="text"></input>
                            <label htmlFor="destination">To</label>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Form;