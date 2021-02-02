import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import {ADMIN_ROUTE} from './pages/helper/api'
import { CustomersPage } from "./modules/ECommerce/pages/customers/CustomersPage";
import { ProductsPage } from "./modules/ECommerce/pages/products/ProductsPage";
import Partrequest from "./pages/partrequests/partrequest";


const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to={"/"+ADMIN_ROUTE+"/dashboard"} />
        }
        <ContentRoute path={"/"+ADMIN_ROUTE+"/dashboard"} component={DashboardPage} />
        <ContentRoute path={"/"+ADMIN_ROUTE+"/builder"} component={BuilderPage} />
        <ContentRoute path={"/"+ADMIN_ROUTE+"/my-page"} component={MyPage} />
        <ContentRoute path={"/"+ADMIN_ROUTE+"/requests"} component={Partrequest} />
        {/* <Route path={"/"+ADMIN_ROUTE+"/e-commerce"} component={ECommercePage} /> */}
        <Route path={"/"+ADMIN_ROUTE+"/customers"} component={CustomersPage} />
        <Route path={"/"+ADMIN_ROUTE+"/products"} component={ProductsPage} />
        <Route path={"/"+ADMIN_ROUTE+"/user-profile"} component={UserProfilepage} />
        <Redirect to={"/"+ADMIN_ROUTE+"/error/error-v1" }/>
      </Switch>
    </Suspense>
  );
}
