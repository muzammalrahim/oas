/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/enquiries/enquiriesActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { EnquiryEditForm } from "./EnquiryEditForm";
import { Specifications } from "../enquiry-specifications/Specifications";
import { SpecificationsUIProvider } from "../enquiry-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../enquiry-remarks/RemarksUIContext";
import { Remarks } from "../enquiry-remarks/Remarks";
import { ADMIN_ROUTE } from "../../../../../pages/helper/api";

const initEnquiry = {
  id: undefined,
  condition: "",
  enquiry_manufacturer: "",
  supplier: "",
  enquiry_category: "",
  part_number: "",
  alt_part_number: "",
  description: "",
  tag_date: "2021-12-12",
  status: 0,
  hazmat: "",
  unit_price: 0,
  unit_of_measure:"",
  quantity:0,
  turn_around_time:"",
  hot_sale_item:"",
  certification:""
};

export function EnquiryEdit({
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
  const { actionsLoading, enquiryForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.enquiries.actionsLoading,
      enquiryForEdit: state.enquiries.enquiryForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchEnquiry(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Enquiry";
    if (enquiryForEdit && id) {
      _title = `Edit enquiry - ${enquiryForEdit.part_number}`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enquiryForEdit, id]);

  const saveEnquiry = (values) => {
      console.log('values', values);
    
    if (!id) {
      dispatch(actions.createEnquiry(values)).then(() => backToEnquiriesList());
    } else {

      dispatch(actions.updateEnquiry(values)).then(() => backToEnquiriesList());
    }
  };

  const btnRef = useRef();  
  const saveEnquiryClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToEnquiriesList = () => {
    history.push(`/${ADMIN_ROUTE}/enquiries`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToEnquiriesList}
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
            onClick={saveEnquiryClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="mt-5">
            <EnquiryEditForm
              actionsLoading={actionsLoading}
              enquiry={enquiryForEdit || initEnquiry}
              btnRef={btnRef}
              saveEnquiry={saveEnquiry}
            />
        </div>
      </CardBody>
    </Card>
  );
}
