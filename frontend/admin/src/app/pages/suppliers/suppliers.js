import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
  } from "../../../_metronic/_partials/controls";
  import SuppliersTable from './supplierTable'
export default class Suppliers extends Component {
    render() {
        return (
            <Card>
        <CardHeader title="Suppliers list">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary"
              // onClick={customersUIProps.newCustomerButtonClick}
            >
              New Supplier
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <SuppliersTable />
        </CardBody>
      </Card>
        )
    }
}
