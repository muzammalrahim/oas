import React from "react";
import {
  EnquiryStatusCssClasses,
  EnquiryStatusTitles
} from "../../EnquiriesUIHelpers";

export const StatusColumnFormatter = (cellContent, row) => (
  <span
    className={`label label-lg label-light-${
      EnquiryStatusCssClasses[row.status]
    } label-inline`}
  >
    {EnquiryStatusTitles[row.status]}
  </span>
);
