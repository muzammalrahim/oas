import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";
import { ADMIN_ROUTE } from "../../../../pages/helper/api";

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/customers/new");
    },
    openEditCustomerDialog: (id) => {
      history.push(`/customers/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/customers/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/${ADMIN_ROUTE}/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/"+ADMIN_ROUTE+"/customers/updateStatus");
    }
  }

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path={"/"+ADMIN_ROUTE+"/customers/new"}>
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/customers");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/customers/:id/edit"}>
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/customers");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/customers/deleteCustomers"}>
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/customers");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/customers/:id/delete"}>
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/customers");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/customers/fetch"}>
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/customers");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/customers/updateStatus"}>
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
