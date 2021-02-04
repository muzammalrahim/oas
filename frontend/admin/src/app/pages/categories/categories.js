import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import Categorytable from "./categorytable";
export default class Categories extends Component {
    state = {
        categories : []
    }


    componentDidMount() {
        
    }
    

  render() {
    return (
      <Card>
        <CardHeader title="Categories list">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary"
              // onClick={customersUIProps.newCustomerButtonClick}
            >
              New Category
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
            <Categorytable />
        </CardBody>
      </Card>
    );
  }
}
