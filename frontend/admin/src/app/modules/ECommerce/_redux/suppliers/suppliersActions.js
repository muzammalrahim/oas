import * as requestFromServer from "./suppliersCrud";
import {suppliersSlice, callTypes} from "./suppliersSlice";

const {actions} = suppliersSlice;

export const fetchSuppliers = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllSuppliers(queryParams)
    .then(response => {
      const { count, results } = response.data;
      dispatch(actions.suppliersFetched({ count, results }));
    })
    .catch(error => {
      error.clientMessage = "Can't find suppliers";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchSupplier = id => dispatch => {
  if (!id) {
    return dispatch(actions.supplierFetched({ supplierForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getSupplierById(id)
    .then(response => {
      const supplier = {
        ...response.data, 
        country:response?.data?.country ? response?.data?.country?.id : "",
      };

      dispatch(actions.supplierFetched({ supplierForEdit: supplier }));
    })
    .catch(error => {
      error.clientMessage = "Can't find supplier";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteSupplier = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteSupplier(id)
    .then(response => {
      dispatch(actions.supplierDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete supplier";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createSupplier = supplierForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createSupplier(supplierForCreation)
    .then(response => {
      const { data } = response;
      dispatch(actions.supplierCreated({ supplier:data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create supplier";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateSupplier = supplier => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  console.log('proudct', supplier);
  return requestFromServer
    .updateSupplier(supplier)
    .then(() => {
      dispatch(actions.supplierUpdated({ supplier }));
    })
    .catch(error => {
      error.clientMessage = "Can't update supplier";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateSuppliersStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForSuppliers(ids, status)
    .then(() => {
      dispatch(actions.suppliersStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update suppliers status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteSuppliers = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteSuppliers(ids)
    .then(() => {
      dispatch(actions.suppliersDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete suppliers";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};