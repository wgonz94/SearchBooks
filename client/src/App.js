import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {DispatchContext, StateContext } from './loginReducer/user/SDContext'
import loginReducer from './loginReducer/user/userReducer'
import { useImmerReducer } from 'use-immer';

import Register from './pages/Register';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container} from "./components/Grid";


import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const [state, dispatch] = useImmerReducer(loginReducer, initialState);
const initialState = {
  token: localStorage.getItem('token'),
  isLoggedIn: false,
  isLoading: false,
  user: {},
  error: '',
  username: '',
  password: '',
  firstname:'',
  lastname: '',
  email: '',
  password: '',
  password2: '',
};

class App extends Component {
  render() {
    return (
      <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
      <div>
        <Nav/>
        <Jumbotron />
        <Router>
          <Container>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            transition={Zoom}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseOnHover
          />
            <Switch>
              <Route path="/" component={Register} />
              <Route path="/home" component={Search} />
              <Route path="/bookshelf" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      </div>
      </StateContext.Provider>
      </DispatchContext.Provider>
    );
  }
}

export default App;
