import React, { Component } from 'react';

class R074_ReactCurrying extends Component {
    plusNumOrString(c, d){
        return c + d
    }

    plusFunc1(a){
        return function(b){
            return this.plusNumOrString(a, b)
        }.bind(this)
    }

    plusFunc2 = a => b => this.plusNumOrString(a, b)

    plusFunc(a){
        return this.plusFunc1(a)(123)
    }

    render() { 
        return (
            <>
                <input type="button" value="NumberPlus" onClick={e => alert(this.plusFunc(100))} />
                <input type="button" value="Stringplus" onClick={e => alert(this.plusFunc("react"))} />
            </>
        );
    }
}
 
export default R074_ReactCurrying;