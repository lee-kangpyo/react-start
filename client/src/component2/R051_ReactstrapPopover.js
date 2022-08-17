import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

class R051_ReactstrapPopover extends Component {
    render() { 
        return (
            <>
                <Button id='Popover_id' type='button'>
                    Popover button
                </Button>
                <UncontrolledPopover placeholder='right' target="Popover_id">
                    <PopoverHeader>리액트</PopoverHeader>
                    <PopoverBody>
                        철수와 영희가 리액트를 공부합니다.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        );
    }
}
 
export default R051_ReactstrapPopover;