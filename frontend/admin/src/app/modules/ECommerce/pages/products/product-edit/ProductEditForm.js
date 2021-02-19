// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, DatePickerField, Select as MSelect } from "../../../../../../_metronic/_partials/controls";
import Creatable from "react-select/creatable";
import { withAsyncPaginate, AsyncPaginate } from "react-select-async-paginate";

import Select from 'react-select';
import {
  AVAILABLE_COLORS,
  AVAILABLE_MANUFACTURES,
  ProductStatusTitles,
  YES_NO_OPTIONS,
  UOM_CHOICES,
  ProductConditionTitles,
} from "../ProductsUIHelpers";
import { list, loadOptions, DROPDOWN_WAIT, post } from "../../../../../pages/helper/api";

const CreatableAsyncPaginate = withAsyncPaginate(Creatable);
// Validation schema
const ProductEditSchema = Yup.object().shape({
  part_number: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Part number is required"),
  // alt_part_number: Yup.string()
  //   .min(2, "Minimum 2 symbols")
  //   .max(50, "Maximum 50 symbols")
  //   .required("Alt part number is required"),
  // product_category: Yup.string(),
  // supplier: Yup.string(),
  // product_manufacturer: Yup.string(),
  // unit_price: Yup.number(),
  // condition: Yup.string()
  //   .min(2, "Minimum 2 symbols")
  //   .max(50, "Maximum 2 symbols"),
  // quantity: Yup.number()
  //   .min(0, "Quantity can'be negative"),
  // tag_date: Yup.date(),
  // turn_around_time: Yup.string(),
  // hazmat: Yup.string(),
  // certification: Yup.string(),
  // unit_of_measure: Yup.string(),
  // hot_sale_item: Yup.string(),
  // status: Yup.string(),
});

export function ProductEditForm({
  product,
  btnRef,
  saveProduct,
}) {

  const [categories, setCategories] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    loadModels();
  }, []);

  function loadModels() {
    let models = {
      'Manufacturer':{},
      'Supplier':{},
      'ProductCategory':{},
    }
    post('oas-models', {models:models}).then(function(response){
      for(let opt in response.data){
        response.data[opt].map((row, i) => {
          response.data[opt][i].label = row.name ? row.name : row.company_name;
          response.data[opt][i].value = row.id;
        })
      }

      setCategories(response.data.ProductCategory);
      setManufacturers(response.data.Manufacturer);
      setSuppliers(response.data.Supplier);
      setModelsLoaded(true);
    })
  }

  function createCategory(option) {
    post('product-category', {name:option}).then(function(response){
      setCategories([...categories, {label:response.name, value:response.id}]);
    })
  }

  function createManfacturer(option) {
    post('manufacturer', {name:option}).then(function(response){
      setCategories([...manufacturers, {label:response.name, value:response.id}]);
    })
  }

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={product}
        validationSchema={ProductEditSchema}
        onSubmit={(values) => {
          saveProduct(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="part_number"
                    component={Input}
                    placeholder="e.g AB123"
                    label="Part Number"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="alt_part_number"
                    component={Input}
                    placeholder="e.g AB123"
                    label="Alternative Part Number"
                  />
                </div>
                <div className="col-lg-4">
                  <label>Select Category</label>
                  <CreatableAsyncPaginate
                    debounceTimeout={!modelsLoaded ? DROPDOWN_WAIT : 0}
                    name="product_category"
                    onCreateOption={createCategory}
                    isClearable = {true}
                    loadOptions={(search, prevOptions) => loadOptions(search, prevOptions, categories, modelsLoaded)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-4">
                  <label>Select Manufacturer</label>
                  <CreatableAsyncPaginate 
                    debounceTimeout={!modelsLoaded ? DROPDOWN_WAIT : 0}
                    isClearable = {true}
                    name="product_manufacturer" 
                    onCreateOption={createManfacturer}
                    loadOptions={(search, prevOptions) => loadOptions(search, prevOptions, manufacturers, modelsLoaded)}
                  />
                </div>
                <div className="col-lg-4">
                  <label>Select Supplier</label>
                  <AsyncPaginate 
                    debounceTimeout={!modelsLoaded ? DROPDOWN_WAIT : 0}
                    isClearable = {true}  
                    name="supplier" 
                    loadOptions={(search, prevOptions) => loadOptions(search, prevOptions, suppliers, modelsLoaded)}
                  />
                </div>
                <div className="col-lg-4">
                  <MSelect name="condition" label="Condition">
                    {ProductConditionTitles.map((condition, index) => (
                      <option key={condition} value={condition}>
                        {condition}
                      </option>
                    ))}
                  </MSelect>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="quantity"
                    component={Input}
                    placeholder="Default 0"
                    label="Quantity"
                  />
                </div>
                <div className="col-lg-4">
                   <Field
                      component={Input}
                      type="date"
                      name="tag_date"
                      // placeholder="12/1/2021"
                      label="Tag Date"
                    />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="turn_around_time"
                    component={Input}
                    placeholder=""
                    label="Turn around time"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <MSelect name="hazmat" label="Hazmat">
                    {YES_NO_OPTIONS.map((status, index) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </MSelect>
                </div>
                <div className="col-lg-4">
                  <Field
                    name="certification"
                    component={Input}
                    placeholder=""
                    label="Certification"
                  />
                </div>
                <div className="col-lg-4">
                  <MSelect name="unit_of_measure" label="Unit of measure">
                    {UOM_CHOICES.map((status, index) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </MSelect>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="unit_price"
                    component={Input}
                    placeholder=""
                    label="Unit price"
                  />
                </div>
                <div className="col-lg-4">
                  <MSelect name="hot_sale_item" label="Hot sale item">
                    {YES_NO_OPTIONS.map((status, index) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </MSelect>
                </div>
                <div className="col-lg-4">
                  <MSelect name="status" label="Status">
                    {ProductStatusTitles.map((status, index) => (
                      <option key={status} value={index}>
                        {status}
                      </option>
                    ))}
                  </MSelect>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <Field
                  name="description"
                  as="textarea"
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
