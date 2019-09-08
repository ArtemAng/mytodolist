import React from 'react';


class AddForm extends React.Component{
    state = {
        content: ''
    };
    onInputHandle = (e) => {
        this.setState({content: e.target.value});
    };

    onAddHandle = () => {
        this.props.addContent(this.state.content);
        this.setState({
            content: ''
        });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.onInputHandle}/>
                <button onClick={this.onAddHandle}>Add</button>
            </div>
        );
    }
};
export default AddForm;