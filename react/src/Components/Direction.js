import {FormControl} from 'react-bootstrap';
import React, { Component } from 'react';

class Direction extends Component{
  constructor(props){
    super(props)
    this.state = {
      direction : "",
      step : this.props.step
    };
  }
  changeDirection = (e) => {
    this.setState({ direction: e.target.value });
  }
  render(){
    return(
      <div>
          <FormControl
            componentClass="textarea"
            type="text"
            name="directions[]"
            value={this.state.direction}
            placeholder={"Step " + this.state.step}
            onChange={this.changeDirection}
          />
      </div>
    );
  }
}

export default Direction;
