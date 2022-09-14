import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";

class R045_ReactstrapInputGruop extends Component {
    render() { 
        return (
            <>
            <InputGroup>
                <Input placeholder='userid' />
                <InputGroupText>
                    @example.com
                </InputGroupText>
            </InputGroup>
            <InputGroup>
                <Button>버튼</Button>
                <Input />
            </InputGroup>
            </>
        );
    }
}
 
export default R045_ReactstrapInputGruop;