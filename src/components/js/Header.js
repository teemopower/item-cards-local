import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Header.css";
import { Main } from "./Main";
import { Chair } from "./Chair";
import { Form } from "./Form";

export class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className="header-container">
          <nav>
            <Link to="/">Home</Link> | <Link to="/chair">Chairs</Link> | <Link to="/form">Item</Link>
          </nav>

          <Route exact path="/" component={Main} />
          <Route path="/chair" component={Chair} />
          <Route path="/form" component={Form} />
        </div>
      </Router>
    );
  }
}
