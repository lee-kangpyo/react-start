import React, { Component } from 'react';

class R068_onMouseMove extends Component {
    MouseMove(tag){
        console.log("TAG : " + tag);
    }
    render() { 
        return (
            <>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>on Mouse Move evt</h3>
                </div>
                <input type="text" onMouseMove={e => this.MouseMove("input")} />
                <select onMouseMove={e => this.MouseMove("select")} >
                    <option value="리액트">리액트</option>
                    <option value="123">123</option>
                </select>
            </>
        );
    }
}
 
export default R068_onMouseMove;