import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar, Nav, NavItem,FormGroup,FormControl,InputGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

//REGION - ROUTER
const MainRouter = () => (
  <Router>
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <Navbar light collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="nav-link" to="/home">Easy Recipe</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#">
              <Link className="nav-link" to="/recipes">Recipes</Link>
            </NavItem>
            <NavItem href="#">
              <Link className="nav-link" to="/help">Help</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
             <Navbar.Form pullLeft>
              <FormGroup>
                <InputGroup>
                  <FormControl id="search" type="text" placeholder="Search (recipe, ingredients, author, etc...)" />
                  <InputGroup.Addon>
                    <FontAwesome name='search' />
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </Navbar.Form>
            <NavItem href="#">
              <Link className="nav-link" to="/e/f">Login</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route path="/:user/:name" component={Child} />
      <Route path="/home" component={Home} />
      <Route path="/help" component={Help} />
      <Route path="/recipes" component={Recipes} />
    </div>
  </Router>
);
//ENDREGION - ROUTER
//REGION - ROUTE CONSTANTS
const Child = ({ match }) => (
  <Box user={match.params.user} name={match.params.name}/>
);
const Help = ({ match }) => (
  <HelpComponent />
);
const Recipes = ({ match }) => (
  <RecipeComponent />
);
//ENDREGION - ROUTE CONSTANTS
//REGION - COMPONENTS
class RecipeComponent extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class HelpComponent extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Box extends Component{
  constructor(props){
    super(props);
    fetch('http://localhost:3000/test/'+this.props.user+'/'+this.props.name+'.json')
    /*.then((response) => response.json()).then((responseJson) => {
      console.log(responseJson);
    })*/
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render(){
    return (
      <div>
        <div>{this.props.user}</div>
        <div>{this.props.name}</div>
      </div>
    )
  }
}
//ENDREGION - COMPONENTS

export default MainRouter;
