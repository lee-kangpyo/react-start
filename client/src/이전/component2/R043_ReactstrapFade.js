import React, { Component } from 'react';
import { Button, Fade } from "reactstrap";

class R043_ReactstrapFade extends Component {
    constructor(props) {
        super(props);
        this.state = {fadeInOut:true, btnTxt:"fade Out"}
    }
    
    toggle = (e) => {
        var isfade = !this.state.fadeInOut;
        var txt = (isfade)?"fade Out":"fade In";
        this.setState({fadeInOut:isfade, btnTxt:txt})
    }

    render() { 
        return ( 
            <div>
                <Button color='success' onClick={this.toggle}>{this.state.btnTxt}</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    숨김항목 숨김항목 숨김항목 숨김항목 숨김항목 숨김항목 숨김항목 숨김항목
                </Fade>
            </div>
         );
    }
}
 
export default R043_ReactstrapFade;