/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/customers/customersActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { CustomerEditForm } from "./CustomerEditForm";
import { Specifications } from "../customer-specifications/Specifications";
import { SpecificationsUIProvider } from "../customer-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../customer-remarks/RemarksUIContext";
import { Remarks } from "../customer-remarks/Remarks";
import { ADMIN_ROUTE } from "../../../../../pages/helper/api";

const initCustomer = {
  id: undefined,
  company_name: "",
  landline_number: "",
  contact_person: "",
  billing_address_one: "",
  billing_address_two: "",
  country: "",
};

export function CustomerEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, customerForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.customers.actionsLoading,
      customerForEdit: state.customers.customerForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchCustomer(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Customer";
    if (customerForEdit && id) {
      _title = `Edit customer - ${customerForEdit.part_number}`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerForEdit, id]);

  const saveCustomer = (values) => {
      console.log('values', values);
    
    if (!id) {
      dispatch(actions.createCustomer(values)).then(() => backToCustomersList());
    } else {

      dispatch(actions.updateCustomer(values)).then(() => backToCustomersList());
    }
  };

  const btnRef = useRef();  
  const saveCustomerClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToCustomersList = () => {
    history.push(`/${ADMIN_ROUTE}/customers`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToCustomersList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>
          {`  `}
          <button className="btn btn-light ml-2">
            <i className="fa fa-redo"></i>
            Reset
          </button>
          {`  `}
          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={saveCustomerClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="mt-5">
            <CustomerEditForm
              actionsLoading={actionsLoading}
              customer={customerForEdit || initCustomer}
              btnRef={btnRef}
              saveCustomer={saveCustomer}
            />
        </div>
      </CardBody>
    </Card>
  );
}
