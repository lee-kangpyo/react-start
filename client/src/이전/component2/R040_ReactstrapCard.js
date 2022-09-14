import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

class R040_ReactstrapCard extends Component {
    render() { 
        return (
            <div>
                <Card style={{width:"300px"}}>
                    <CardImg top height="200px" src="https://drive.google.com/uc?export=view&id=1J38uh31Z9FK5tmodYX64NN6Vj_p_S8bc" alt='CardImg' />
                    <CardBody>
                        <CardTitle>타이틀 제목</CardTitle>
                        <CardSubtitle>부제목</CardSubtitle>
                        <CardText>카드내용카드내용카드내용카드내용카드내용카드내용카드내용카드내용</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
 
export default R040_ReactstrapCard;