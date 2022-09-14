import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from "reactstrap";

class R044_ReactstrapForm extends Component {
    render() { 
        return (
            <Form>
                <Label for="Gender">성별</Label>
                <Input type="select" bsSize="lg">
                    <option>선택 안함</option>
                    <option>여자</option>
                    <option>남자</option>
                </Input>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="address">주소</Label>
                            <Input type="text" name='address' id='address' />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="hpNo">전화번호</Label>
                            <Input type='text' name='hpNo' id='hpNo' />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="age">나이</Label>
                            <Input type='text' name="age" id="age" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}
 
export default R044_ReactstrapForm;