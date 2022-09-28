import React, { Component } from 'react';

class R110ApiGetJson extends Component {
    state={"body":""};

    componentDidMount = async () => {
        const response = await fetch('/users');
        const body = await response.json();
        this.setState({"body":body.message});
        
    };
    render() { 
        return (
            <>
                <h1>Call Node Api Call</h1>
                <h2>{this.state.body}</h2>
            </>
        );
    }
}
 
export default R110ApiGetJson;