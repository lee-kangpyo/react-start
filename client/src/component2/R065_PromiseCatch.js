import React, { Component } from 'react';

class R065_PrimiseCatch extends Component {
    componentDidMount(){
        new Promise((resove, reject) => {
              reject("에러 발생");
        })
        .then(result => console.log("then : " + result))
        .catch(result => console.log("catch : " + result));
    }
    render() { 
        
        return (
            <h1>promise catch</h1>
        );
    }
}
 
export default R065_PrimiseCatch;