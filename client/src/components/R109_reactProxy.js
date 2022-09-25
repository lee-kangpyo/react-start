import React, { Component } from 'react';

class R109_reactProxy extends Component {
    state={"body":""};
    componentDidMount = async () => {
        const response = await fetch("/users")
        const body = await response.text()
        console.log("body : "+body)
        this.setState({"body":body})
    }

    render() { 
        return (
            <>
                <h1>Proxy Call</h1>
                <h2>{this.state.body}</h2>
            </>
        );
    }
}
 
export default R109_reactProxy;