import React, { Component } from 'react';

class R066_ClickEvt extends Component {

    buttonClick = (param) => {
        if (typeof param != "string") param = "a 클릭";
        console.log("param : " + param);
    }

    render() { 
        return (
            <>
                <button onClick={e => this.buttonClick("버튼 클릭")}>버튼클릭</button>
                <div onClick={e => this.buttonClick("div 클릭")}>div 클릭</div>
                <a href='#/' onClick={this.buttonClick}>a클릭</a>
            </>
        );
    }
}
 
export default R066_ClickEvt;