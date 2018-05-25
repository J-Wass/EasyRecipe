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
      console.log(responseJson);
      this.setState({directions: responseJson});
    })
    fetch('http://localhost:3000/getIngredients/'+this.props.match.params.id)
    .then((response) => response.json()).then((responseJson) => {
      //update ingredients
      console.log(responseJson);
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
            {this.state.ingredients != null
              ?
              this.state.ingredients.map((i) => <tr><td>{i["ingredient"]}</td><td>{i["amount"]}</td></tr>)
              :
              document.write("<tr><td>No directions found</td></tr>") }
          </table>
        </div>
        <div className="container">
          <ul>
            {this.state.directions != null
              ?
              this.state.directions.map((d) => <li>{d["step"] - d["direction"]}</li>)
              :
              document.write('<li>No directions found</li>') }
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
