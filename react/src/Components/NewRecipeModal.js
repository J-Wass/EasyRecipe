import {Button,Modal,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import React, { Component } from 'react';
import Ingredient from './Ingredient.js';
import Direction from './Direction.js';

class NewRecipeModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipeName: "",
      notes: ""
    };
  }
  changeRecipeName = (e) => {
    this.setState({ recipeName: e.target.value });
  }
  changeRecipeNotes = (e) => {
    this.setState({ recipeNotes: e.target.value });
  }
  close = () => {
    this.refs.newRecipeModal.className = 'modal fade';
  }
  submitForm = () => {
    this.refs.newRecipeModal.className = 'modal fade';
  }
  render(){
    return(
      <div ref="newRecipeModal" className="modal fade">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Create a new Recipe</Modal.Title>
          </Modal.Header>
          <form action="/submit-recipe" method="post">
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl
                  name="recipename"
                  type="text"
                  value={this.state.recipeName}
                  placeholder="My recipe..."
                  onChange={this.changeRecipeName}
                />
                <div className="clearfix"></div>
                <ControlLabel>Ingredients</ControlLabel>
                <Button bsStyle="success">Add Ingredient</Button>
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <div className="clearfix"></div>
                <ControlLabel>Directions</ControlLabel>
                <Button bsStyle="success">Add Step</Button>
                <Direction step='1' />
                <Direction step='2' />
                <div className="clearfix"></div>
                <ControlLabel>Recipe Notes</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  name="notes"
                  type="text"
                  value={this.state.recipeNotes}
                  placeholder="Recipe Notes (serves 4, ready to serve in 50 minutes, contains nuts, etc...)"
                  onChange={this.changeRecipeNotes}
                />
              </FormGroup>
              </Modal.Body>
              <div className="clearfix"></div>
              <Modal.Footer>
                <Button onClick={this.close} bsStyle="danger" id="recipe-close">Close Without Saving</Button>
                <Button onClick={this.submitForm} type="submit" bsStyle="primary" id="recipe-save">Submit</Button>
              </Modal.Footer>
            </form>
          <div className="clearfix"></div>
        </Modal.Dialog>
      </div>
    );
  }
}

export default NewRecipeModal;
