import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem, deleteItem, updateItem, getAllFurniture } from "../../actions/actions";

import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn } from 'react-animations';

export class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <form>
                    <h4>New User</h4>
                    <label>Name</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="text" />
                    <button>Submit</button>
                </form>
                <form>
                    <h4>Login</h4>
                    <label>Name</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        
    },
        dispatch
    );
}

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);