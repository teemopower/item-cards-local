import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Header.css";
import { Main } from "./Main";
import { Chair } from "./Chair";
import { Form } from "./Form";
import { Login } from "./Login";

export class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className="header-container">
          <nav>
            <Link to="/">Home</Link> | <Link to="/furniture">Furniture</Link> | <Link to="/form">Item</Link> | <Link to="/login">Login</Link>
          </nav>

          <Route exact path="/" component={Main} />
          <Route path="/furniture" component={Chair} />
          <Route path="/form" component={Form} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
