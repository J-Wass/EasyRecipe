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
    fetch('http://localhost:3000/recipelisting/')
    .then((response) => response.json()).then((responseJson) => {
      this.setState({recipes: responseJson});
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
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
