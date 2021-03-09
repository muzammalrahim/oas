import React, {useMemo, createRef} from "react";
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


export function ProductsCard() {
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
          <CSVReader
            inputId="airport-csv-reader"
            cssClass="kt-nav__link-text btn btn-danger mr-2"
            cssInputClass="d-none"
            label={<span onClick={() => inputFile.current.click()}>Import Products</span>}
            cssLabelClass="mb-0"
            onFileLoaded={(data) => {
              post('import', {data:data, model:"Inventory"}).then((response) => {
              });
            }}
          />

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
