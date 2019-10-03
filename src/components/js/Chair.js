import React from "react";
import { connect } from "react-redux";

export class Chair extends React.Component {
  componentDidMount() {
    console.log("chairs.js", this.props);
  }

  render() {
    return (
      <div>
        <button
          style={{ marginTop: "20px" }}
          onClick={this.props.history.goBack}
        >
          Back
        </button>
        <div className="details-container">
          {this.props.location.state ? (
            <div>
              <img
                src={this.props.location.state.src}
                style={{ height: "300px" }}
                alt=""
              />
              <div>{this.props.location.state.name}</div>
              <br />
              <div>{this.props.location.state.description}</div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { items } = state;
  return items;
}

Chair = connect(
  mapStateToProps,
)(Chair);
