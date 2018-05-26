import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      author : "",
      date : "",
      ingredients : [],
      directions : [],
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
      this.setState({notes: responseJson["notes"]});
      this.setState({author: responseJson["userid"]});
      this.setState({date: responseJson["created"]});
      this.setState({name: responseJson["name"]});
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.state.name} by {this.state.author}
          <br/>
          <small><i>{this.state.date}</i></small>
        </div>
        <div className="container">
          <table className="tbl tbl-default">
            <thead>
              <th>
                Ingredient
              </th>
              <th>
                Amount
              </th>
            </thead>
            {this.state.ingredients.length > 0
              ?
              this.state.ingredients.map((i) => <tr><td>{i["ingredient"]}</td><td>{i["amount"]}</td></tr>)
              :
              <tr><td>No ingredients found</td></tr> }
          </table>
        </div>
        <div className="container">
          <h1>Directions</h1>
          <ul>
            {this.state.directions.length > 0
              ?
              this.state.directions.map((d) => <li>{d["step"]} - {d["direction"]}</li>)
              :
              <li>No directions found</li>}
          </ul>
        </div>
        <div className="container">
          {this.state.notes}
        </div>
      </div>
    );
  }
}

export default Recipe;
