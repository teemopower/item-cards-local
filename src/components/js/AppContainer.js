import React from "react";
import "../styles/Layout.css";
import { Header } from "./Header";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllFurniture, getItems } from "../../store/actions";

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log("AppContainer props", props);
  }

  componentDidMount() {
    const { getAllFurniture, getItems } = this.props;

    getItems();
    getAllFurniture();
  }

  componentDidUpdate() {
    console.log("payload", this.props.items);
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
      // getNextImage,
      // getImg,
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
