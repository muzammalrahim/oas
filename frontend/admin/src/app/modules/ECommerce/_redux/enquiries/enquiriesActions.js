import * as requestFromServer from "./enquiriesCrud";
import {enquiriesSlice, callTypes} from "./enquiriesSlice";

const {actions} = enquiriesSlice;

export const fetchEnquiries = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllEnquiries(queryParams)
    .then(response => {
      const { count, results, next } = response.data;
      let pageNumber = null;
      if(next) {
        let url = new URL(next);
        pageNumber = url.searchParams.get('page') ;
      }
      dispatch(actions.enquiriesFetched({ count, results, pageNumber}));
    })
    .catch(error => {
      error.clientMessage = "Can't find enquiries";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchEnquiry = id => dispatch => {
  if (!id) {
    return dispatch(actions.enquiryFetched({ enquiryForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getEnquiryById(id)
    .then(response => {
      const enquiry = {
        ...response.data, 
        supplier:response.data.supplier ? response.data.supplier.id : "",
        enquiry_manufacturer:response.data.enquiry_manufacturer ? response.data.enquiry_manufacturer.id : "",
        enquiry_category:response.data.enquiry_category ? response.data.enquiry_category.id : "",
      };

      dispatch(actions.enquiryFetched({ enquiryForEdit: enquiry }));
    })
    .catch(error => {
      error.clientMessage = "Can't find enquiry";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteEnquiry = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteEnquiry(id)
    .then(response => {
      dispatch(actions.enquiryDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete enquiry";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createEnquiry = enquiryForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createEnquiry(enquiryForCreation)
    .then(response => {
      const { data } = response;
      dispatch(actions.enquiryCreated({ enquiry:data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create enquiry";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateEnquiry = enquiry => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  console.log('proudct', enquiry);
  return requestFromServer
    .updateEnquiry(enquiry)
    .then(() => {
      dispatch(actions.enquiryUpdated({ enquiry }));
    })
    .catch(error => {
      error.clientMessage = "Can't update enquiry";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateEnquiriesStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForEnquiries(ids, status)
    .then(() => {
      dispatch(actions.enquiriesStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update enquiries status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteEnquiries = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteEnquiries(ids)
    .then(() => {
      dispatch(actions.enquiriesDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete enquiries";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
