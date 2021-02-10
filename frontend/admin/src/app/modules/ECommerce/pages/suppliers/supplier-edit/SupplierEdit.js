/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/suppliers/suppliersActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { SupplierEditForm } from "./SupplierEditForm";
import { Specifications } from "../supplier-specifications/Specifications";
import { SpecificationsUIProvider } from "../supplier-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../supplier-remarks/RemarksUIContext";
import { Remarks } from "../supplier-remarks/Remarks";
import { ADMIN_ROUTE } from "../../../../../pages/helper/api";

const initSupplier = {
  id: undefined,
  condition: "",
  supplier_manufacturer: "",
  supplier: "",
  supplier_category: "",
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

export function SupplierEdit({
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
  const { actionsLoading, supplierForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.suppliers.actionsLoading,
      supplierForEdit: state.suppliers.supplierForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchSupplier(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Supplier";
    if (supplierForEdit && id) {
      _title = `Edit supplier - ${supplierForEdit.part_number}`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supplierForEdit, id]);

  const saveSupplier = (values) => {
      console.log('values', values);
    
    if (!id) {
      dispatch(actions.createSupplier(values)).then(() => backToSuppliersList());
    } else {

      dispatch(actions.updateSupplier(values)).then(() => backToSuppliersList());
    }
  };

  const btnRef = useRef();  
  const saveSupplierClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToSuppliersList = () => {
    history.push(`/${ADMIN_ROUTE}/suppliers`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToSuppliersList}
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
            onClick={saveSupplierClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="mt-5">
            <SupplierEditForm
              actionsLoading={actionsLoading}
              supplier={supplierForEdit || initSupplier}
              btnRef={btnRef}
              saveSupplier={saveSupplier}
            />
        </div>
      </CardBody>
    </Card>
  );
}
