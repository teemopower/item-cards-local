import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem, deleteItem } from "../../actions/actions";

export class Form extends React.Component {
    constructor(props){
        super(props);
        console.log('forms props',props);

        this.state = {
            id: '',
            name: '',
            description: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleFocus = ev => {
        this.setState({
          isFocused: true,
        });
    };
    
    handleBlur = ev => {
        this.setState({
          isFocused: false,
        });
    };

    handleSubmit = () => {
        // action
        const { addItem } = this.props;
        addItem(this.state)
    }

    handleDeleteItem = () => {
        console.log('delete state', this.state.id);
        // action
        const { deleteItem } = this.props;
        deleteItem(this.state.id)
    }

    render() {
      return (
        <div>
            <form>
                <label>Name</label>
                <input type="text"
                    name="name" 
                    className="fieldInput"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                />
                <label>Description</label>
                <input type="text" 
                    name="description"
                    className="fieldInput"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                />
            </form>
            <button onClick={this.handleSubmit}>Submit</button>
            <br /><br />
            <form>
                <label>ID</label>
                <input type="text" name="id" 
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                />
            </form>
                <button onClick={this.handleDeleteItem}>Submit</button>
        </div>
        )  
    }
}


function mapStateToProps(state) {
    return state;
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItem,
        deleteItem
    },
        dispatch
    );
}

Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
