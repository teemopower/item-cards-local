import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   withRouter
// } from "react-router-dom";

import "../styles/Cards.css";

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val) {
    console.log("item details val", val);

    this.props.data.history.push({
      pathname: "/Chair",
      search: "?query=abc",
      state: val
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="cards-row">
        {data.cards.payload.map((val, index) => {
          return (
            <div className="cards-container" key={index}>
              <div className="cards-body" onClick={() => this.handleClick(val)}>
                <div className="cards-header">{val.name}</div>
                <div className="cards-img">
                  <img src={val.src} alt="" />
                </div>
                <div className="cards-description">{val.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
