import * as requestFromServer from "./usersCrud";
import { usersSlice, callTypes } from "./usersSlice";

const {actions} = usersSlice;

export const fetchUsers = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllUsers(queryParams)
    .then(response => {
      const { count, results, next } = response.data;
      let pageNumber = null;
      if(next) {
        let url = new URL(next);
        pageNumber = url.searchParams.get('page') ;
      }
      dispatch(actions.usersFetched({ count, results, pageNumber }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      return dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchUser = id => dispatch => {
  if (!id) {
    return dispatch(actions.userFetched({ userForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getUserById(id)
    .then(response => {
      const user = {
        ...response.data, 
        supplier:response.data.supplier ? response.data.supplier.id : "",
        user_manufacturer:response.data.user_manufacturer ? response.data.user_manufacturer.id : "",
        user_user:response.data.user_user ? response.data.user_user.id : "",
      };

      dispatch(actions.userFetched({ userForEdit: user }));
    })
    .catch(error => {
      error.clientMessage = "Can't find user";
      return dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteUser = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteUser(id)
    .then(response => {
      dispatch(actions.userDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete user";
      return dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createUser = userForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createUser(userForCreation)
    .then(response => {
      const { data } = response;
      dispatch(actions.userCreated({ user:data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create user";
      return dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateUser = user => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateUser(user)
    .then(() => {
      dispatch(actions.userUpdated({ user }));
    })
    .catch(error => {
      error.clientMessage = "Can't update user";
      return dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateUsersStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForUsers(ids, status)
    .then(() => {
      dispatch(actions.usersStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update users status";
      return dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteUsers = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteUsers(ids)
    .then(() => {
      dispatch(actions.usersDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete users";
      return dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
