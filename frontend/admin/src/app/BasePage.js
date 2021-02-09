import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import {ADMIN_ROUTE} from './pages/helper/api'
import { CustomersPage } from "./modules/ECommerce/pages/customers/CustomersPage";
import { ProductsPage } from "./modules/ECommerce/pages/products/ProductsPage";
import Suppliers from "./pages/suppliers/suppliers";
import Enquiries from "./pages/enquiries/enquiries";
import Categories from "./pages/categories/categories";


const ProductsPages = lazy(() =>
  import("./modules/ECommerce/pages/products/ProductsPages")
);

const ManufacturesPages = lazy(() =>
  import("./modules/ECommerce/pages/manufacturers/ManufacturesPages")
);

const CategoriesPages = lazy(() =>
  import("./modules/ECommerce/pages/categories/CategoriesPages")
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
        <Redirect exact from="/admin" to={"/"+ADMIN_ROUTE+"/dashboard"} />
        <ContentRoute path={"/"+ADMIN_ROUTE+"/dashboard"} component={DashboardPage} />
        <ContentRoute path={"/"+ADMIN_ROUTE+"/builder"} component={BuilderPage} />
        <ContentRoute path={"/"+ADMIN_ROUTE+"/my-page"} component={MyPage} />
        <Route path={"/"+ADMIN_ROUTE+"/suppliers"} component={Suppliers} />
        <Route path={"/"+ADMIN_ROUTE+"/enquiries"} component={Enquiries} />
        <Route path={"/"+ADMIN_ROUTE+"/categories"} component={CategoriesPages} />
        <Route path={"/"+ADMIN_ROUTE+"/manufactures"} component={ManufacturesPages} />
        <Route path={"/"+ADMIN_ROUTE+"/customers"} component={CustomersPage} />
        <Route path={"/"+ADMIN_ROUTE+"/products"} component={ProductsPages} />
        <Route path={"/"+ADMIN_ROUTE+"/user-profile"} component={UserProfilepage} />
        <Redirect to={"/"+ADMIN_ROUTE+"/error/error-v1" }/>
      </Switch>
    </Suspense>
  );
}
