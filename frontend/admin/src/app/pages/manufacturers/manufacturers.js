import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
  } from "../../../_metronic/_partials/controls";
import ManufactureTable from './manufacturerTable';
export default class Manufacturers extends Component {
    render() {
        return (
            <Card>
        <CardHeader title="Manufacturers list">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary"
              // onClick={customersUIProps.newCustomerButtonClick}
            >
              New Manufacturer
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <ManufactureTable />
        </CardBody>
      </Card>
        )
    }
}
