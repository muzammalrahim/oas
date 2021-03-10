import React, {useMemo, createRef, useState} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { ProductsFilter } from "./products-filter/ProductsFilter";
import { ProductsTable } from "./products-table/ProductsTable";
import { ProductsGrouping } from "./products-grouping/ProductsGrouping";
import { useProductsUIContext } from "./ProductsUIContext";
import CSVReader from 'react-csv-reader';
import {post} from '../../../../pages/helper/api';
import Modal from "react-bootstrap/Modal";
import CsvViewer from "react-csv-viewer";




export function ProductsCard() {
  const [csvData, setCsvData] = useState('');
  const [csvModal, setCsvModal] = useState(false);
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      ids: productsUIContext.ids,
      queryParams: productsUIContext.queryParams,
      setQueryParams: productsUIContext.setQueryParams,
      newProductButtonClick: productsUIContext.newProductButtonClick,
      openDeleteProductsDialog: productsUIContext.openDeleteProductsDialog,
      openEditProductPage: productsUIContext.openEditProductPage,
      openViewProductPage: productsUIContext.openViewProductPage,
      openUpdateProductsStatusDialog:
        productsUIContext.openUpdateProductsStatusDialog,
      openFetchProductsDialog: productsUIContext.openFetchProductsDialog,
    };
  }, [productsUIContext]);

  const inputFile = createRef();
  return (
    <Card>
      <CardHeader title="Products">
        <CardHeaderToolbar>
          <a
            href="/static/Product_Sample.csv"
            ref={inputFile}
            download
            style={{display:'none'}}
          >
          </a>
    
          <button
            type="button"
            className="btn btn-danger mr-2"
            onClick={() => setCsvModal(true)}
          >
            Import Products
          </button>

          <button
            type="button"
            className="btn btn-info"
            onClick={productsUIProps.newProductButtonClick}
          >
            Add Product
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <Modal
          size="xl"
          show={csvModal}
          onHide={() => setCsvModal(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
              <div className="row" style={{width:'100%'}}>
                <div className="col-md-4">
            <Modal.Title id="example-modal-sizes-title-lg">
              Import Data
            </Modal.Title>
                </div>
                <div className="col-md-8 text-right">
                  <button
                    type="button"
                    className="btn btn-danger mr-2"
                    onClick={() => {}}
                  >
                    Confirm Import
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => inputFile.current.click()}
                  >
                    Download Template
                  </button>
                </div>
              </div>
          </Modal.Header>
          <Modal.Body>
          <CsvViewer />
          </Modal.Body>
        </Modal>
        <ProductsFilter />
        {productsUIProps.ids.length > 0 && (
          <>
            <ProductsGrouping />
          </>
        )}
        <ProductsTable />
      </CardBody>
    </Card>
  );
}
