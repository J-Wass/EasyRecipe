import {FormControl} from 'react-bootstrap';
import React, { Component } from 'react';

class Ingredient extends Component{
  constructor(props){
    super(props)
    this.state = {
      ingredient : "",
      amount : ""
    };
  }
  changeIngredient = (e) => {
    this.setState({ ingredient: e.target.value });
  }
  changeAmount = (e) => {
    this.setState({ amount: e.target.value });
  }
  render(){
    return(
      <div>
        <div className="col-md-6">
          <FormControl
            type="text"
            name="ingredients[]"
            value={this.state.ingredient}
            placeholder="Ingredient"
            onChange={this.changeIngredient}
          />
        </div>
        <div className="col-md-6">
          <FormControl
            type="text"
            name="amounts[]"
            value={this.state.amount}
            placeholder="Amount (1oz, 2 stalks, a dash, etc...)"
            onChange={this.changeAmount}
          />
        </div>
      </div>
    );
  }
}

export default Ingredient;
