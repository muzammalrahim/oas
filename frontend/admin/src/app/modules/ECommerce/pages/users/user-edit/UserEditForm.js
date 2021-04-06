// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select as MSelect } from "../../../../../../_metronic/_partials/controls";
import Creatable from "react-select/creatable";
import { withAsyncPaginate, AsyncPaginate } from "react-select-async-paginate";
const CreatableAsyncPaginate = withAsyncPaginate(Creatable);
// Validation schema
const UserEditSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  last_name: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  email: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  password: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  // category_category: Yup.string(),
  // supplier: Yup.string(),
  // category_manufacturer: Yup.string(),
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

export function UserEditForm({
  user,
  btnRef,
  saveUser,
}) {

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={user}
        validationSchema={UserEditSchema}
        onSubmit={(values) => {
          saveUser(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-6">
                  <Field
                    name="first_name"
                    component={Input}
                    placeholder="First Name"
                    label="First Name"
                  />
                </div>
                <div className="col-lg-6">
                  <Field
                    name="last_name"
                    component={Input}
                    placeholder="Last Name"
                    label="Last Name"
                  />
                </div>
                <div className="col-lg-6">
                  <Field
                    name="email"
                    component={Input}
                    placeholder="Email"
                    label="Email"
                  />
                </div>
                <div className="col-lg-6">
                  <Field
                    name="password"
                    component={Input}
                    placeholder="Password"
                    label="Password"
                  />
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
