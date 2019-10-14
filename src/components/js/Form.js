import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem, deleteItem, updateItem, getAllFurniture } from "../../actions/actions";

import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;
const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

export class Form extends React.Component {
    constructor(props){
        super(props);
        console.log('forms props',props);

        this.state = {
            id: '',
            editId: '',
            name: '',
            description: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
        this.setUpdateItemId = this.setUpdateItemId.bind(this);
    }

    componentDidMount(){
        getAllFurniture()   
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

    handleDeleteItem = (id) => {
        // action
        const { deleteItem } = this.props;
        deleteItem(id)
    }

    handleUpdateItem = () => {
        const { editId } = this.state;
        const editedItem = {
            name: this.state.name,
            description: this.state.description
        }
        const { updateItem } = this.props;
        updateItem(editId, editedItem)
    }

    setUpdateItemId = id => {
       this.setState({ editId: id}); 
    }

    render() {
        const { items } = this.props;
    
    return (
        <div>
            <Bounce>
                <h4>Add Item</h4>
            </Bounce>
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

            <FadeIn>
                <h4>Delete Item</h4>
            </FadeIn>
            
            <form>
                <label>ID</label>
                <input type="text" name="id" 
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleDeleteItem}>Delete</button>
            </form>
            
            <br /><br />
            <div>
                <h4>Edit Item</h4>
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
                    <button onClick={this.handleUpdateItem}>Edit</button>
                </form>
            </div>    

            <div>
                { items && items.items && items.items.length > 0 ? items.items.map((val) => (
                    <div key={val._id}>
                        <br />
                        <div>Name</div>
                        <div>
                            {val.name}
                        </div>
                        <br />
                        <div>ID</div>
                        <div>
                            {val._id}
                        </div>
                        <button onClick={e => this.setUpdateItemId(val._id)}>Edit</button>
                        <button onClick={e => this.handleDeleteItem(val._id)}>Delete</button>
                    </div>
                ))
                : null }
            </div>

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
        deleteItem,
        updateItem,
        getAllFurniture
    },
        dispatch
    );
}

Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
