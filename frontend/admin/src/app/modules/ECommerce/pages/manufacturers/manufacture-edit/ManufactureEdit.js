/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/manufactures/manufacturesActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { ManufactureEditForm } from "./ManufactureEditForm";
import { Specifications } from "../manufacture-specifications/Specifications";
import { SpecificationsUIProvider } from "../manufacture-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../manufacture-remarks/RemarksUIContext";
import { Remarks } from "../manufacture-remarks/Remarks";
import { ADMIN_ROUTE } from "../../../../../pages/helper/api";
import { Snackbar, SnackbarContent, IconButton} from "@material-ui/core"
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';
import clsx from 'clsx';
import {
    Delete as DeleteIcon, Close as CloseIcon, CheckCircle as CheckCircleIcon, Error as ErrorIcon, Info as InfoIcon,
    Warning as WarningIcon
} from '@material-ui/icons'


const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStylesSnackbarContent = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function SnackbarContentWrapper(props) {
  const classes = useStylesSnackbarContent();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {/* <Icon className={clsx(classes.icon, classes.iconVariant)} /> */}
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

SnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const initManufacture = {
  id: undefined,
  name: "",
  
};

export function ManufactureEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, manufactureForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.manufactures.actionsLoading,
      manufactureForEdit: state.manufactures.manufactureForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchManufacture(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Manufacture";
    if (manufactureForEdit && id) {
      _title = `Edit manufacture - ${manufactureForEdit.name}`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manufactureForEdit, id]);

  const saveManufacture = (values) => {
    
    if (!id) {
      dispatch(actions.createManufacture(values)).then((response) => {
        if(response){
          setOpen(true)
          setMessage("Can't create manufacturer")
          setMessageType('error')
        }else{
          backToManufacturesList()
        }
      })
    } else {

      dispatch(actions.updateManufacture(values)).then((response) => {
        if(response){
          setOpen(true)
          setMessage("Can't update manufacturer")
          setMessageType('error')
        }else{
          backToManufacturesList()
        }
      });
    }
  };

  const btnRef = useRef();  
  const saveManufactureClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToManufacturesList = () => {
    history.push(`/${ADMIN_ROUTE}/manufactures`);
  };

  const handleCloseSnackbar = (event, reason) => {
    setOpen(false);
  }

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToManufacturesList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>
          {`  `}
          <button
            type="submit"
            className="btn btn-info ml-2"
            onClick={saveManufactureClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="mt-5">
            <ManufactureEditForm
              actionsLoading={actionsLoading}
              manufacture={manufactureForEdit || initManufacture}
              btnRef={btnRef}
              saveManufacture={saveManufacture}
            />
            <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <SnackbarContentWrapper
              onClose={handleCloseSnackbar}
              variant={messageType}
              message={message}
            />
        </Snackbar>
        </div>
      </CardBody>
    </Card>
  );
}
