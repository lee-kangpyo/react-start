import React, { Component } from 'react';
class R070_onMouseOUt extends Component {
    MouseOut = (tag) => {
        console.log('TAG : ' + tag);
    }
    render() { 
        return (
            <>
                <div onMouseOut={e => this.MouseOut("div")}>
                    <h3>DIV Mouse Out</h3>
                </div>
                <input type="text" onMouseOut={e => this.MouseOut("input")} />
                <select onMouseOut={e => this.MouseOut("select")}>
                    <option value="react">리액트</option>
                    <option value="123">456</option>
                </select>
            </>
        );
    }
}
 
export default R070_onMouseOUt;