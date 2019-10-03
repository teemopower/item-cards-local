import React from 'react';

export class Form extends React.Component {
    constructor(props){
        super(props);
        console.log('forms props',props);

        this.state = {
            name: '',
            description: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log('handleSubmit', this.state);
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

        </div>
        )  
    }
}

