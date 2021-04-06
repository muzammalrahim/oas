import React from "react";
import { Route } from "react-router-dom";
import { UsersLoadingDialog } from "./users-loading-dialog/UsersLoadingDialog";
import { UserDeleteDialog } from "./user-delete-dialog/UserDeleteDialog";
import { UsersDeleteDialog } from "./users-delete-dialog/UsersDeleteDialog";
import { UsersFetchDialog } from "./users-fetch-dialog/UsersFetchDialog";
import { UsersUpdateStatusDialog } from "./users-update-status-dialog/UsersUpdateStatusDialog";
import { UsersCard } from "./UsersCard";
import { UsersUIProvider } from "./UsersUIContext";
import {ADMIN_ROUTE} from '../../../../pages/helper/api'

export function UsersPage({ history }) {
  const usersUIEvents = {
    newUserButtonClick: () => {
      history.push(`/${ADMIN_ROUTE}/users/new`);
    },
    openEditUserPage: (id) => {
      history.push(`/${ADMIN_ROUTE}/users/${id}/edit`);
    },
    openDeleteUserDialog: (id) => {
      history.push(`/${ADMIN_ROUTE}/users/${id}/delete`);
    },
    openDeleteUsersDialog: () => {
      history.push(`/${ADMIN_ROUTE}/users/deleteUsers`);
    },
    openFetchUsersDialog: () => {
      history.push(`/${ADMIN_ROUTE}/users/fetch`);
    },
    openUpdateUsersStatusDialog: () => {
      history.push("/"+ADMIN_ROUTE+"/users/updateStatus");
    },
  };

  return (
    <UsersUIProvider usersUIEvents={usersUIEvents}>
      <UsersLoadingDialog />
      <Route path={"/"+ADMIN_ROUTE+"/users/deleteUsers"}>
        {({ history, match }) => (
          <UsersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/users");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/users/:id/delete"}>
        {({ history, match }) => (
          <UserDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/users");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/users/fetch"}>
        {({ history, match }) => (
          <UsersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/users");
            }}
          />
        )}
      </Route>
      <Route path={"/"+ADMIN_ROUTE+"/users/updateStatus"}>
        {({ history, match }) => (
          <UsersUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/"+ADMIN_ROUTE+"/users");
            }}
          />
        )}
      </Route>
      <UsersCard />
    </UsersUIProvider>
  );
}
