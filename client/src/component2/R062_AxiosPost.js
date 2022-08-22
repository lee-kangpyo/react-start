import React, { Component } from 'react';
import axios from "axios";

class R062_AxiosPost extends Component {
    componentDidMount (){
        axios.post("http://date.jsontest.com/", {a:"리액트", b:123}).then( res => {alert(res.data.date)})
    }
    render() { 
        return (
            <h1>axios post</h1>
        );
    }
}
 
export default R062_AxiosPost;