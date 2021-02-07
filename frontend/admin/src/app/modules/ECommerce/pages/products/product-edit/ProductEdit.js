/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/products/productsActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { ProductEditForm } from "./ProductEditForm";
import { Specifications } from "../product-specifications/Specifications";
import { SpecificationsUIProvider } from "../product-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../product-remarks/RemarksUIContext";
import { Remarks } from "../product-remarks/Remarks";
import { ADMIN_ROUTE } from "../../../../../pages/helper/api";

const initProduct = {
  id: undefined,
  condition: "",
  product_manufacturer: "",
  supplier: "",
  product_category: "",
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

export function ProductEdit({
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
  const { actionsLoading, productForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.products.actionsLoading,
      productForEdit: state.products.productForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Product";
    if (productForEdit && id) {
      _title = `Edit product - ${productForEdit.part_number}`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productForEdit, id]);

  const saveProduct = (values) => {
      console.log('values', values);
    
    if (!id) {
      dispatch(actions.createProduct(values)).then(() => backToProductsList());
    } else {

      dispatch(actions.updateProduct(values)).then(() => backToProductsList());
    }
  };

  const btnRef = useRef();  
  const saveProductClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToProductsList = () => {
    history.push(`/${ADMIN_ROUTE}/products`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToProductsList}
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
            onClick={saveProductClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="mt-5">
            <ProductEditForm
              actionsLoading={actionsLoading}
              product={productForEdit || initProduct}
              btnRef={btnRef}
              saveProduct={saveProduct}
            />
        </div>
      </CardBody>
    </Card>
  );
}
