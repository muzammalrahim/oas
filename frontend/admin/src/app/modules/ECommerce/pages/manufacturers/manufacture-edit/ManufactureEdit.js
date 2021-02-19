/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/manufactures/manufacturesActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { ManufactureEditForm } from "./ManufactureEditForm";
import { Specifications } from "../manufacture-specifications/Specifications";
import { SpecificationsUIProvider } from "../manufacture-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../manufacture-remarks/RemarksUIContext";
import { Remarks } from "../manufacture-remarks/Remarks";
import { ADMIN_ROUTE } from "../../../../../pages/helper/api";

const initManufacture = {
  id: undefined,
  name: "",
  
};

export function ManufactureEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, manufactureForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.manufactures.actionsLoading,
      manufactureForEdit: state.manufactures.manufactureForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchManufacture(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Manufacture";
    if (manufactureForEdit && id) {
      _title = `Edit manufacture - ${manufactureForEdit.name}`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manufactureForEdit, id]);

  const saveManufacture = (values) => {
      console.log('values', values);
    
    if (!id) {
      dispatch(actions.createManufacture(values)).then(() => backToManufacturesList());
    } else {

      dispatch(actions.updateManufacture(values)).then(() => backToManufacturesList());
    }
  };

  const btnRef = useRef();  
  const saveManufactureClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToManufacturesList = () => {
    history.push(`/${ADMIN_ROUTE}/manufactures`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToManufacturesList}
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
            className="btn btn-info ml-2"
            onClick={saveManufactureClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="mt-5">
            <ManufactureEditForm
              actionsLoading={actionsLoading}
              manufacture={manufactureForEdit || initManufacture}
              btnRef={btnRef}
              saveManufacture={saveManufacture}
            />
        </div>
      </CardBody>
    </Card>
  );
}
