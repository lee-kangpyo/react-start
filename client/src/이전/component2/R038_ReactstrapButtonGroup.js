import React, { Component } from 'react';
import { Button, ButtonGroup } from "reactstrap";

class R038_REactstrapButtonGroup extends Component {
    
    constructor(props) {
        super(props);
        this.state = { number : 50 }
    }
    
    move = (type, e) => {
        var num = 50;
        if (type === "Left") {
            this.setState({ number: this.state.number - 1 });
        }else if (type === "Right") {
            this.setState({ number: this.state.number +1 });
        }else if (type === "Middle") {
            this.setState({ number: num });
        }
    }
    
    render() { 
        return ( 
            <div style={{padding:"10px"}}>
                <ButtonGroup style={{padding:"10px"}}>
                    <Button onClick={e => this.move("Left")}>Left</Button>
                    <Button onClick={e => this.move("Middle")}>Middle</Button>
                    <Button onClick={e => this.move("Right")}>Right</Button>
                </ButtonGroup>
                <br/>
                {this.state.number}
            </div>        
         );
    }
}
 
export default R038_REactstrapButtonGroup;