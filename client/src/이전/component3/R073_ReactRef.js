import React, { Component } from 'react';
class R073_ReactRef extends Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }

    RefFocus = (e) => {
        this.InputRef.current.focus()
    }

    javascriptFocus(){
        document.getElementById("id").focus()
    }

    render() { 
        return ( 
            <>
                <input id="id" type="text" ref={this.InputRef}/>
                <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
                <input type="button" value="javascript Focus" onClick={this.javascriptFocus}/>
            </>
         );
    }
}
 
export default R073_ReactRef;