import React, { Component } from 'react';
import Children from "./contextChildren3";

const {Provider, Consumer} = React.createContext();
export {Consumer}

class R077_ContextApi extends Component {
    constructor(props) {
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value){
        this.setState({name : value});
    }

    // 화살표 함수를 사용하면 bind(this)를 할 필요가 없다.
    // setStateFunc = (value) => this.setState({name : value});

    render() {
        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc
        } 
        return (
            <Provider value={content}>
                <Children/>
            </Provider>
        );
    }
}
 
export default R077_ContextApi;