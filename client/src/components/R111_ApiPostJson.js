import React, { Component } from 'react';
const axios = require('axios');

class R111_ApiPostJson extends Component {
    state={"body":""};

    componentDidMount = async () => {
        console.log("sdf")
        
        axios.post('/users', {
        }).then( res => {
            console.log("response.data.message : "+res.data.message)
        })
    };

    render() { 
        return (
            <>
                <h1>Call Node Api Post</h1>
            </>
        );
    }
}
 
export default R111_ApiPostJson;