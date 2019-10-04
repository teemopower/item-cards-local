import React from "react";
import "../styles/Layout.css";
import { Header } from "./Header";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllFurniture, getItems } from "../../actions/actions";

export class AppContainer extends React.Component {

  componentDidMount() {
    const { getAllFurniture, getItems } = this.props;

    getItems();
    getAllFurniture();
  }

  componentDidUpdate() {
    console.log("all items", this.props.items);
  }

  render() {
    const { cards } = this.props;
    return (
      <div>
        <div>
          <Header data={cards.payload} />
        </div>
        <div />
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
      getAllFurniture,
      getItems
    },
    dispatch
  );
}

AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
