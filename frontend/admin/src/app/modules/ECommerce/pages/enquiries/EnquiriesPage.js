import React from "react";
import { Route } from "react-router-dom";
import { EnquiriesLoadingDialog } from "./enquiries-loading-dialog/EnquiriesLoadingDialog";
import { EnquiryDeleteDialog } from "./enquiry-delete-dialog/EnquiryDeleteDialog";
import { EnquiriesDeleteDialog } from "./enquiries-delete-dialog/EnquiriesDeleteDialog";
import { EnquiriesFetchDialog } from "./enquiries-fetch-dialog/EnquiriesFetchDialog";
import { EnquiriesUpdateStatusDialog } from "./enquiries-update-status-dialog/EnquiriesUpdateStatusDialog";
import { EnquiriesCard } from "./EnquiriesCard";
import { EnquiriesUIProvider } from "./EnquiriesUIContext";
import {ADMIN_ROUTE} from '../../../../pages/helper/api'

export function EnquiriesPage({ history }) {
  const enquiriesUIEvents = {
    newEnquiryButtonClick: () => {
      history.push(`/${ADMIN_ROUTE}/enquiries/new`);
    },
    openEditEnquiryPage: (id) => {
      history.push(`/${ADMIN_ROUTE}/enquiries/${id}/edit`);
    },
    openDeleteEnquiryDialog: (id) => {
      history.push(`/${ADMIN_ROUTE}/enquiries/${id}/delete`);
    },
    openDeleteEnquiriesDialog: () => {
      history.push(`/${ADMIN_ROUTE}/enquiries/deleteEnquiries`);
    },
    openFetchEnquiriesDialog: () => {
      history.push(`/${ADMIN_ROUTE}/enquiries/fetch`);
    },
    openUpdateEnquiriesStatusDialog: () => {
      history.push("/"+ADMIN_ROUTE+"/enquiries/updateStatus");
    },
  };

  return (
    <EnquiriesUIProvider enquiriesUIEvents={enquiriesUIEvents}>
      <EnquiriesLoadingDialog />
      <Route path={"/"+ADMIN_ROUTE+"/enquiries/deleteEnquiries"}>
        {({ history, match }) => (
          <EnquiriesDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/enquiries");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/enquiries/:id/delete"}>
        {({ history, match }) => (
          <EnquiryDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/enquiries");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/enquiries/fetch"}>
        {({ history, match }) => (
          <EnquiriesFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/enquiries");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/enquiries/updateStatus"}>
        {({ history, match }) => (
          <EnquiriesUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/enquiries");
            }}
          />
        )}
      </Route>
      <EnquiriesCard />
    </EnquiriesUIProvider>
  );
}
