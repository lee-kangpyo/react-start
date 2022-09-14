import React, { Component } from 'react';
import { Table } from "reactstrap";

class R054_ReactstrapTable extends Component {
    render() { 
        return (
            <>
            <Table >
            {/*<Table dark bordered>
            <Table striped horver>
            <Table borderless size="sm">*/}
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>2</th>
                        <th>react</th>
                        <th>\2000</th>
                    </tr>
                </tbody>
            </Table>
            </>
        );
    }
}
 
export default R054_ReactstrapTable;