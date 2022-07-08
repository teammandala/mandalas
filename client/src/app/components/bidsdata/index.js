import React from 'react'
import { Table } from "react-bootstrap";
import { Modal, Button } from "antd";


const Bidsdata = () => {
  return (
    <>
    <Table responsive stripped borderes hover varient="dark">
        <thead>
            <tr>
                <th>Bidder</th>
                <th>Bid</th>
            </tr>
        </thead>
        <tbody>
            <td>sagar prasad chaulagain</td>
            <td>2000</td>
        </tbody>

    </Table>
    </>
  )
}

export default Bidsdata