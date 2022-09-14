import React, { Component } from 'react';
import { Consumer } from "./R077_ContextApi";

class ContextChildren3 extends Component {
    render() { 
        return (
            <Consumer>
                {contextValue => 
                    <button onClick={e => contextValue.setStateFunc("리액투")}>
                        {contextValue.name}_button
                    </button>
                }
                
            </Consumer>
        );
    }
}
 
export default ContextChildren3;