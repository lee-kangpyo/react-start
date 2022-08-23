import React, { Component } from 'react';

class R067_onChange extends Component {
    change = (e) => {
        var val = e.target.value;
        console.log("param : " + val);
    }
    render() { 
        return (
            <>
                <input type="text" onChange={this.change} />
                <select onChange={this.change} >
                    <option value="react">리액트</option>
                    <option value="1234568">213</option>
                </select>
            </>
        );
    }
}
 
export default R067_onChange;