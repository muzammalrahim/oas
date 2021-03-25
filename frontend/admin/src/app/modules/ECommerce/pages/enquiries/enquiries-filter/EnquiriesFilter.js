import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useEnquiriesUIContext } from "../EnquiriesUIContext";
import {EnquiryConditionTitles, YES_NO_OPTIONS, UOM_CHOICES} from "../EnquiriesUIHelpers";

const prepareFilter = (queryParams, values) => {
  const { searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  // Filter by all fields
  filter.search = searchText;

  newQueryParams.filter = filter;
  return newQueryParams;
};

export function EnquiriesFilter({ listLoading }) {
  // Enquiries UI Context
  const enquiriesUIContext = useEnquiriesUIContext();
  const enquiriesUIProps = useMemo(() => {
    return {
      setQueryParams: enquiriesUIContext.setQueryParams,
      queryParams: enquiriesUIContext.queryParams,
    };
  }, [enquiriesUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(enquiriesUIProps.queryParams, values);
    if (!isEqual(newQueryParams, enquiriesUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      enquiriesUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          searchText: "", 
        }}
        onSubmit={(values) => {
          applyFilter(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
                        
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search"
                  onBlur={handleBlur}
                  value={values.searchText}
                  onChange={(e) => {
                    setFieldValue("searchText", e.target.value);
                    handleSubmit();
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in all fields
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
