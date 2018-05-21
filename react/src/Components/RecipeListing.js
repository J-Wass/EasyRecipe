import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import NewRecipeModal from './NewRecipeModal.js';
import RecipePane from './RecipePane.js';

class RecipeListing extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: null
    };
  }


  componentDidMount(){
    //pull all recipes from database and put them into state
    /*fetch('http://localhost:3000/recipelisting/')
    .then((response) => response.json()).then((responseJson) => {
      this.setState({recipes: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });*/
    let sampleJSON = '[{ "id": 7,"name": "jonahs recipe","notes": "works sometimes","created": \
    "2018-05-21 01:41:49" },{ "id": 8,"name": "awdad","notes": "awdad","created": "2018-05-21 \
     01:42:28" }]';
    this.setState({recipes: JSON.parse(sampleJSON)});
  }


  showModal = () => {
    this.refs.recipeModal.refs.newRecipeModal.className = "modal show";
  }
  render() {
    return (
      <div>
        <Button onClick={this.showModal}>
          <FontAwesome name='plus' />
          &nbsp;New Recipe
        </Button>
        <div className="clearfix"></div>
        {this.state.recipes != null
          ?
          this.state.recipes.map((r) => <RecipePane rid={r['id']} name={r['name']} notes={r['notes']} created={r['created']} />)
          :
          "No recipes found" }
        <NewRecipeModal ref="recipeModal" />
      </div>
    );
  }
}

export default RecipeListing;
