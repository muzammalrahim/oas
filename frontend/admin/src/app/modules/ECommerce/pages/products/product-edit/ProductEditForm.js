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
import {CloudUpload as CloudUploadIcon} from "@material-ui/icons";
import {
    Button as ButtonCore,
} from "@material-ui/core";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  const [category, setCategory] = useState({});
  const [manfacturer, setManfacturer] = useState({});
  const [supplier, setSupplier] = useState({});
  const [selectedFile, setSelectFile] = useState(null);
  const [news, setNews] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
  const [productImage, setProductImage] = useState(null);


  useEffect(() => {
    loadModels();
  }, []);

  useEffect(() => {
    if (product.id) {
      categories.map(category => {
        if(category.id === product.product_category) 
          setCategory(category);
      })
      manufacturers.map(manf => {
        if(manf.id === product.product_manufacturer) 
          setManfacturer(manf);
      })
      suppliers.map(supplier => {
        if(supplier.id === product.supplier) 
          setSupplier(supplier);
      })
    }

  }, [product])

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

          if(opt === 'ProductCategory' && row.value === product.product_category)
            setCategory(row);

          if(opt === 'Manufacturer' && row.value === product.product_manufacturer)
            setManfacturer(row);

          if(opt === 'Supplier' && row.value === product.supplier)
            setSupplier(row);

        })
      }

      setCategories(response.data.ProductCategory);
      setManufacturers(response.data.Manufacturer);
      setSuppliers(response.data.Supplier);
      setModelsLoaded(true);
    })
  }

  function createCategory(option, setFieldValue) {
    post('product-category', {name:option}).then(function(response){
      setCategory({label:response.data.name, value:response.data.id});
      setFieldValue('product_category', response.data.id);
    })
  }

  function createManfacturer(option, setFieldValue) {
    post('manufacturer', {name:option}).then(function(response){
      setManfacturer({label:response.data.name, value:response.data.id});
      setFieldValue('product_manufacturer', response.data.id);
    })
  }


  function fileChangedHandler(event)  {
        let file = event.target.files[0];
        setPreviewFile(URL.createObjectURL(file));
        if (file != undefined) {
            file.size_c = file.size / 1024;

            if ((file.size_c) / 1024 > 2) {
                file.size_c = (file.size_c / 1024).toFixed(2) + ' MB';
                file.error = "Error: File is too big";
                setSelectFile(file);
            } else {
                file.error = null;
                file.size_c = file.size_c.toFixed(2) + ' KB';
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setProductImage(reader.result);
                    setSelectFile(file);
                };
            }
        }
    }


  function handleFileRemove(event) {
      setProductImage(null);
      setSelectFile(null);
      document.getElementById('news-image-upload').value = '';
  }  

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={product}
        validationSchema={ProductEditSchema}
        onSubmit={(values) => {
          values.product_image = productImage;
          saveProduct(values);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
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
                    name="product_category"
                    onChange= {(value) => {
                      setFieldValue('product_category', value.value);
                      setCategory(value);
                    }}
                    value={category}
                    onCreateOption={(option) => createCategory(option, setFieldValue)}
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
                    onChange= {(value) => {
                      setFieldValue('product_manufacturer', value.value);
                      setManfacturer(value);
                    }}
                    value={manfacturer}
                    name="product_manufacturer" 
                    onCreateOption={(option) => createManfacturer(option, setFieldValue)}
                    loadOptions={(search, prevOptions) => loadOptions(search, prevOptions, manufacturers, modelsLoaded)}
                  />
                </div>
                <div className="col-lg-4">
                  <label>Select Supplier</label>
                  <AsyncPaginate 
                    debounceTimeout={!modelsLoaded ? DROPDOWN_WAIT : 0}
                    isClearable = {true}  
                    onChange= {(value) => {
                      setFieldValue('supplier', value.value);
                      setSupplier(value);
                    }}
                    name="supplier" 
                    value={supplier}
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
                   <DatePickerField
                      name="tag_date"
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
                  component={Input}
                  placeholder='Descriptiion'
                  label="Description"
                />
              </div>
              <div className="form-group">
                  <input
                      accept="image/*"
                      style={{display: 'none'}}
                      type="file"
                      id="news-image-upload"
                      name="image"
                      onChange={fileChangedHandler}
                  />
                  <br/>
                <label htmlFor="news-image-upload">
                    <ButtonCore variant="outlined" color="inherit" component="span">
                        Select Image
                        <CloudUploadIcon style={{marginLeft: '5px'}}/>
                    </ButtonCore>
                </label>
              </div>
                        <div className="form-group form-group-last row">
                            <div className="col-12 col-md-4">
                                <div className="dropzone dropzone-multi" id="kt_dropzone_5">
                                    <div className="dropzone-items" style={{display: selectedFile ? 'block' : 'none'}}>
                                        <div className="dropzone-item">
                                            <div className="dropzone-file">
                                                {previewFile &&
                                                <div style={{'maxWidth': '250px'}}><img style={{width: "100%"}}
                                                                                         src={previewFile}/>
                                                </div>
                                                }
                                                <div className="dropzone-filename" title="some_image_file_name.jpg">
                                                    <span
                                                        data-dz-name>{selectedFile ? selectedFile.name : 'No file selected'}</span>
                                                    <strong>(<span
                                                        data-dz-size>{selectedFile && selectedFile.size_c ? selectedFile.size_c : ''}</span>)</strong>
                                                </div>
                                                <div className="dropzone-error"
                                                     data-dz-errormessage>{selectedFile && selectedFile.error ? selectedFile.error : ''}</div>
                                            </div>
                                            <div className="dropzone-toolbar">
                                                <span onClick={(e) => handleFileRemove(e)}
                                                      className="dropzone-delete" data-dz-remove><i
                                                    className="flaticon2-cross"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="form-text text-muted">Max file size is 2MB.</span>
                            </div>
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
