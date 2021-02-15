/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";

export const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  { openEditCustomerPage, openDeleteCustomerDialog }
) => (
  <>
    <OverlayTrigger
      overlay={<Tooltip id="customers-edit-tooltip">Edit customer</Tooltip>}
    >
      <a
        className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
        onClick={() => openEditCustomerPage(row.id)}
      >
        <span className="svg-icon svg-icon-md svg-icon-primary">
          <SVG
            src={toAbsoluteUrl("/static/media/svg/icons/Communication/Write.svg")}
          />
        </span>
      </a>
    </OverlayTrigger>

    <> </>
    <OverlayTrigger
      overlay={<Tooltip id="customers-delete-tooltip">Delete customer</Tooltip>}
    >
      <a
        className="btn btn-icon btn-light btn-hover-danger btn-sm"
        onClick={() => openDeleteCustomerDialog(row.id)}
      >
        <span className="svg-icon svg-icon-md svg-icon-danger">
          <SVG src={toAbsoluteUrl("/static/media/svg/icons/General/Trash.svg")} />
        </span>
      </a>
    </OverlayTrigger>
  </>
);
