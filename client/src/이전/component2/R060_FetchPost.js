import React, { Component } from 'react';

class R060_FetchPost extends Component {
    componentDidMount = async () => {
        const response = await fetch("http://date.jsontest.com/", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:{a:"리액트", b:'1234'}
        });
        const body = await response.json();
        alert(body.date);
    }
    render() { 
        return (
            <h1>fetch post</h1>
        );
    }
}
 
export default R060_FetchPost;