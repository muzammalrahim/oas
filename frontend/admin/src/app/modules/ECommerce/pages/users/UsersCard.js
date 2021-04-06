import React, {useMemo} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { UsersFilter } from "./users-filter/UsersFilter";
import { UsersTable } from "./users-table/UsersTable";
import { UsersGrouping } from "./users-grouping/UsersGrouping";
import { useUsersUIContext } from "./UsersUIContext";

export function UsersCard() {
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      queryParams: usersUIContext.queryParams,
      setQueryParams: usersUIContext.setQueryParams,
      newUserButtonClick: usersUIContext.newUserButtonClick,
      openDeleteUsersDialog: usersUIContext.openDeleteUsersDialog,
      openEditUserPage: usersUIContext.openEditUserPage,
      openUpdateUsersStatusDialog:
        usersUIContext.openUpdateUsersStatusDialog,
      openFetchUsersDialog: usersUIContext.openFetchUsersDialog,
    };
  }, [usersUIContext]);

  return (
    <Card>
      <CardHeader title="Users">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-info"
            onClick={usersUIProps.newUserButtonClick}
          >
            Add User
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <UsersFilter /> */}
        {usersUIProps.ids.length > 0 && (
          <>
            <UsersGrouping />
          </>
        )}
        <UsersTable />
      </CardBody>
    </Card>
  );
}
