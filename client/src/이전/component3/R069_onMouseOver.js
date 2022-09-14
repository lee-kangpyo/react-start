import React, { Component } from 'react';

class R069_onMouseOver extends Component {
    MouseOver(tag){
        console.log("TAG : " + tag);
    }
    render() { 
        return (
            <>
                <div onMouseOver={e => this.MouseOver("div")}>
                    <h3>마우스 오버</h3>
                </div>
                <input type="text" onMouseOver={e => this.MouseOver("input")} />
                <select onMouseOver={e => this.MouseOver("select")}>
                    <option value="react">리액트</option>
                    <option value="456">456</option>
                </select>
            </>
        );
    }
}
 
export default R069_onMouseOver;