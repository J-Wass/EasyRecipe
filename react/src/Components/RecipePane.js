import {Panel} from 'react-bootstrap';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class RecipePane extends Component{
  constructor(props){
    super(props)
    this.state = {
      id : this.props.rid,
      name : this.props.name,
      notes : this.props.notes,
      created : this.props.created.split(" ")[0]
    };
  }
  lookupRecipe = () => {
    this.props.history.push('/recipe/' + this.state.id);
  }
  render(){
    return(
      <div className="col-md-6">
        <Panel onClick={this.lookupRecipe}>
          <Panel.Heading>
             <Panel.Title componentClass="h3">
               {this.state.name} - {this.state.created}
             </Panel.Title>
          </Panel.Heading>
          <Panel.Body>{this.state.notes}</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default withRouter(RecipePane);
