import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { Container} from "./components/Grid";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
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
              <Route path="/SearchBooks" component={Search} />
              <Route path="/SearchBooks/bookshelf" component={Saved} />
              <Route exact path="/SearchBooks/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
