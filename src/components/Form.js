import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const id = event.target.id;
        console.log(id, event.target.value)
        this.setState({
            [id]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
    }


    render() {
        return (
            <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter first name" id="first_name" type="text"></input>
                            <label htmlFor="first_name">First Name</label>
                            <span className="helper-text" data-error="Invalid" data-success="Valid"></span>
                        </div>
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter last name" id="last_name" type="text"></input>
                            <label htmlFor="last_name">Last Name</label>
                            <span className="helper-text" data-error="Invalid" data-success="Valid"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter source" id="source" type="text"></input>
                            <label htmlFor="source">From</label>
                            <span className="helper-text" data-error="Invalid" data-success="Valid"></span>
                        </div>
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter destination" id="destination" type="text"></input>
                            <label htmlFor="destination">To</label>
                            <span className="helper-text" data-error="Invalid" data-success="Valid"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input className="validate" placeholder="Enter number of passengers" id="passengers" type="text"></input>
                            <label htmlFor="passengers">Passengers</label>
                            <span className="helper-text" data-error="Invalid" data-success="Valid"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
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