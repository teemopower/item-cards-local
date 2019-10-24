import React from "react";
import { connect } from "react-redux";

import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
export class Chair extends React.Component {
  constructor () {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

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
        <button
          style={{ marginTop: "20px" }}
          onClick={this.openModal}
        >
          Modal
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
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
