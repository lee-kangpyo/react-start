import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

class R055_ReactstrapTab extends Component {
    constructor(props) {
        super(props);
        this.state = {TabState:'React'}
    }

    toggle = (tabId) => {
        if(tabId !== this.state.TabState)this.setState({TabState:tabId})
    }

    render() { 
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle("React"); }}>첫번째 탭</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle("2000"); }}>두번째 탭</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId="React"><h3>리액트</h3></TabPane>
                    <TabPane tabId="2000"><h3>이천</h3></TabPane>
                </TabContent>
            </>
        );
    }
}
 
export default R055_ReactstrapTab;