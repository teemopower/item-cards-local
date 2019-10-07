import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem, deleteItem, updateItem, getAllFurniture } from "../../actions/actions";

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
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
    }

    componentDidMount(){
        getAllFurniture()   
    }

    componentDidUpdate(){
        const { items } = this.props;
        console.log('items', items);
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
        const { updateItem } = this.props;
        updateItem("5d97b2a8868deb43a4241195", this.state)
    }

    render() {
        const { items } = this.props;
    
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
                <button onClick={this.handleUpdateItem}>Edit</button>

            <div>
                { items.items.map((val) => (
                    <div key={val._id}>
                        <br />
                        <div>Name</div>
                        <div>
                            {val.name}
                        </div>
                        <div>ID</div>
                        <div>
                            {val._id}
                        </div>
                        <button onClick={e => this.handleDeleteItem(val._id)}>Delete</button>
                    </div>
                ))}
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
