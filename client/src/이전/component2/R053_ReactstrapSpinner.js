import React, { Component } from 'react';
import { Spinner } from "reactstrap";

class R053_ReactStrapSpinner extends Component {
    render() { 
        return (
            <>
            <Spinner color='secondary' />
            <Spinner color='success' />
            <Spinner type="grow" color='dark' />
            <Spinner type="grow" color='info' />
            <Spinner size="sm" color='primary' />
            <Spinner style={{width:"10rem", height:"0.5rem"}} color='dark' /><br/>
            <Spinner style={{width:"10rem", height:"10rem"}} color='secondary' /><br/>
            <Spinner style={{width:"3rem", height:"10rem"}} color='primary' type='grow' /><br/>
            </>
        );
    }
}
 
export default R053_ReactStrapSpinner;