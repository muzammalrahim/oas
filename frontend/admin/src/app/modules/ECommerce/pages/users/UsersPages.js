import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { UsersPage } from "./UsersPage";
import { UserEdit } from "./user-edit/UserEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../../_metronic/layout";
import { ADMIN_ROUTE } from '../../../../pages/helper/api'

export default function UsersPages() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute
          path={"/" + ADMIN_ROUTE + "/users/new"}
          component={UserEdit}
        />
        <ContentRoute
          path={"/" + ADMIN_ROUTE + "/users/:id/edit"}
          component={UserEdit}
        />
        <ContentRoute
          path={"/" + ADMIN_ROUTE + "/users"}
          component={UsersPage}
        />
      </Switch>
    </Suspense>
  );
}
