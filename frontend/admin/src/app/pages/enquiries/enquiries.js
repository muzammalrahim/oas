import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
  } from "../../../_metronic/_partials/controls";
  import EnquiriesTable from './enquiriesTable'
export default class Enquiries extends Component {
    render() {
        return (
            <Card>
        <CardHeader title="Enquiries list">
          
        </CardHeader>
        <CardBody>
          <EnquiriesTable />
        </CardBody>
      </Card>
        )
    }
}
