import React, { Component } from 'react';
import { Jumbotron, Button } from "reactstrap";

class R046_ReactstrapJumbotron extends Component {
    render() { 
        return (
            <>
                <div className="mt-4 p-5 bg-primary text-white rounded" style={{"text-align":"left"}}>
                    <h1>Jumbotron Example</h1> 
                    <p>점보트론은 부트스트랩 5에서는 더 이상 지원하지는 않지만 임의로 비슷하게 구현해낼 수 있다.</p> 
                </div>

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5" style={{textAlign:"left"}}>
                    <h1 className="display-5 fw-bold">
                        <font style={{"color": "black"}}>맞춤형 점보트론</font>
                    </h1>
                    <p className="col-md-8 fs-4">
                        <font style={{"color": "black"}}>일련의 유틸리티를 사용하여 이전 버전의 Bootstrap과 마찬가지로 이 점보트론을 만들 수 있습니다. </font>
                        <font style={{"color": "black"}}>원하는 대로 리믹스하고 스타일을 변경할 수 있는 방법은 아래 예를 확인하세요.</font></p>
                    <button className="btn btn-primary btn-lg" type="button"><font style={{"vertical-align": "inherit"}}>예시 버튼</font></button>
                </div>
                </div>
            </>
        );
    }
}
 
export default R046_ReactstrapJumbotron;