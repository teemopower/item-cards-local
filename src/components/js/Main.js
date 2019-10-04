import React from "react";

import { Cards } from "./Cards";

import "../styles/Main.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllFurniture } from "../../actions/actions";

export class Main extends React.Component {
  constructor(props) {
    super(props);

    console.log("main", this.props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-header" />
        <Cards data={this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllFurniture
    },
    dispatch
  );
}

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
