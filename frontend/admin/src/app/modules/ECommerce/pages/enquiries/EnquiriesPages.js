import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { EnquiriesPage } from "./EnquiriesPage";
import { EnquiryEdit } from "./enquiry-edit/EnquiryEdit";
import { EnquiryView } from "./enquiry-view/EnquiryView"
import { LayoutSplashScreen, ContentRoute } from "../../../../../_metronic/layout";
import { ADMIN_ROUTE } from '../../../../pages/helper/api'

export default function EnquiriesPages() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute path={"/"+ADMIN_ROUTE+"/enquiries/new"} component={EnquiryEdit} />
        <ContentRoute
          path={"/"+ADMIN_ROUTE+"/enquiries/:id/edit"}
          component={EnquiryEdit}
        />
        <ContentRoute
          path={"/"+ADMIN_ROUTE+"/enquiries/:id/view"}
          component={EnquiryView}
        />
        <ContentRoute path={"/"+ADMIN_ROUTE+'/enquiries'} component={EnquiriesPage} />
      </Switch>
    </Suspense>
  );
}
