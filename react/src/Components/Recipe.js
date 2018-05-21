import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      author : "",
      date : "",
      ingredients : "",
      directions : "",
      notes : ""
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/getDirections/'+this.props.match.params.id)
    .then((response) => response.json()).then((responseJson) => {
      //update directions
      this.setState({directions: responseJson});
    })
    fetch('http://localhost:3000/getIngredients/'+this.props.match.params.id)
    .then((response) => response.json()).then((responseJson) => {
      //update ingredients
      this.setState({ingredients: responseJson});
    })
    fetch('http://localhost:3000/getRecipe/'+this.props.match.params.id)
    .then((response) => response.json()).then((responseJson) => {
      //update name, author, notes, date
      this.setState({name: responseJson});
    })
  }
  render() {
    return (
      <div>
        {this.state.name} by {this.state.author}
        {this.state.date}
      </div>
    );
  }
}

export default Recipe;
