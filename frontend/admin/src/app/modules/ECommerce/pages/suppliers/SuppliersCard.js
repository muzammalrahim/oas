import React, {useMemo} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { SuppliersFilter } from "./suppliers-filter/SuppliersFilter";
import { SuppliersTable } from "./suppliers-table/SuppliersTable";
import { SuppliersGrouping } from "./suppliers-grouping/SuppliersGrouping";
import { useSuppliersUIContext } from "./SuppliersUIContext";

export function SuppliersCard() {
  const suppliersUIContext = useSuppliersUIContext();
  const suppliersUIProps = useMemo(() => {
    return {
      ids: suppliersUIContext.ids,
      queryParams: suppliersUIContext.queryParams,
      setQueryParams: suppliersUIContext.setQueryParams,
      newSupplierButtonClick: suppliersUIContext.newSupplierButtonClick,
      openDeleteSuppliersDialog: suppliersUIContext.openDeleteSuppliersDialog,
      openEditSupplierPage: suppliersUIContext.openEditSupplierPage,
      openUpdateSuppliersStatusDialog:
        suppliersUIContext.openUpdateSuppliersStatusDialog,
      openFetchSuppliersDialog: suppliersUIContext.openFetchSuppliersDialog,
    };
  }, [suppliersUIContext]);

  return (
    <Card>
      <CardHeader title="Suppliers">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={suppliersUIProps.newSupplierButtonClick}
          >
            Add Supplier
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <SuppliersFilter /> */}
        {suppliersUIProps.ids.length > 0 && (
          <>
            <SuppliersGrouping />
          </>
        )}
        <SuppliersTable />
      </CardBody>
    </Card>
  );
}