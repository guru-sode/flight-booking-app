import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Flights extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onChangeSlider = this.onChangeSlider.bind(this);
    }

    onChangeSlider(value){
        console.log(value)
    }

    render() {
        return (
            <div className="row">
                <div className="col s2">
                    <Range defaultValue={[2000, 10000]} onChange={this.onChangeSlider} allowCross={false} min={2000} max={10000}/>
                </div>
                <div className="col s10">

                </div>
            </div>
        );
    }
}

export default Flights;