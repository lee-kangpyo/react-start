import React, { Component } from 'react';
export default function withHocComponent(InComponent, inComponentName){
    return class OutComponent extends Component {
        componentDidMount(){
            console.log(`3. InComponentName : ${inComponentName}`)
        }
        render(){
            console.log('1. inComponent render');
            return(
                <InComponent {...this.props} />
            );
        }
    }
}