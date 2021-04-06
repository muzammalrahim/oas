import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UsersUIHelpers";

const UsersUIContext = createContext();

export function useUsersUIContext() {
  return useContext(UsersUIContext);
}

export const usersUIConsumer = UsersUIContext.Consumer;

export function UsersUIProvider({ usersUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    newUserButtonClick: usersUIEvents.newUserButtonClick,
    openEditUserPage: usersUIEvents.openEditUserPage,
    openDeleteUserDialog: usersUIEvents.openDeleteUserDialog,
    openDeleteUsersDialog: usersUIEvents.openDeleteUsersDialog,
    openFetchUsersDialog: usersUIEvents.openFetchUsersDialog,
    openUpdateUsersStatusDialog:
      usersUIEvents.openUpdateUsersStatusDialog,
  };

  return (
    <UsersUIContext.Provider value={value}>
      {children}
    </UsersUIContext.Provider>
  );
}
