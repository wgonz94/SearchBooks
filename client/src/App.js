import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from './utils/setAuthToken'

import Register from './pages/Register';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container} from "./components/Grid";


import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UserState from "./loginReducer/user/UserState";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
    return (

    <UserState>
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
  </UserState>
    )
  }

export default App;
