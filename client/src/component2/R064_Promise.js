import React, { Component } from 'react';

class R064_Promise extends Component {
    componentDidMount(){
        new Promise(resolve => {
            setTimeout(function(){
                resolve('리액트');
            }, 1500);
        }).then(function(result){
            console.log(result);
            return result + 123;
        }).then(function(result){
            console.log(result)
        });
    }
    render() { 
        return (
            <h1>promise</h1>
        );
    }
}
 
export default R064_Promise;