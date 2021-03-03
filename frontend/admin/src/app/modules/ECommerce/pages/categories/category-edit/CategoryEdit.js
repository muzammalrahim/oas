/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/categories/categoriesActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { CategoryEditForm } from "./CategoryEditForm";
import { Specifications } from "../category-specifications/Specifications";
import { SpecificationsUIProvider } from "../category-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../category-remarks/RemarksUIContext";
import { Remarks } from "../category-remarks/Remarks";
import { ADMIN_ROUTE } from "../../../../../pages/helper/api";

const initCategory = {
  id: undefined,
  name: "",
 
};

export function CategoryEdit({
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
  const { actionsLoading, categoryForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.categories.actionsLoading,
      categoryForEdit: state.categories.categoryForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchCategory(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Category";
    if (categoryForEdit && id) {
      _title = `Edit category - ${categoryForEdit.name}`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryForEdit, id]);

  const saveCategory = (values) => {
      console.log('values', values);
    
    if (!id) {
      dispatch(actions.createCategory(values)).then(() => backToCategoriesList());
    } else {

      dispatch(actions.updateCategory(values)).then(() => backToCategoriesList());
    }
  };

  const btnRef = useRef();  
  const saveCategoryClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToCategoriesList = () => {
    history.push(`/${ADMIN_ROUTE}/categories`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToCategoriesList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>
          {`  `}
          <button
            type="submit"
            className="btn btn-info ml-2"
            onClick={saveCategoryClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="mt-5">
            <CategoryEditForm
              actionsLoading={actionsLoading}
              category={categoryForEdit || initCategory}
              btnRef={btnRef}
              saveCategory={saveCategory}
            />
        </div>
      </CardBody>
    </Card>
  );
}
