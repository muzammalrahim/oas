import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import { ADMIN_ROUTE } from '../../../../app/pages/helper/api'

export default function eCommercePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from={"/"+ADMIN_ROUTE+"/e-commerce"}
            to={"/"+ADMIN_ROUTE+"/customers"}
          />
        }
        <ContentRoute path={"/"+ADMIN_ROUTE+"/customers"} component={CustomersPage} />
        <ContentRoute path={"/"+ADMIN_ROUTE+"/products/new"} component={ProductEdit} />
        <ContentRoute
          path={"/"+ADMIN_ROUTE+"/e-commerce/products/:id/edit"}
          component={ProductEdit}
        />

        <ContentRoute path={"/"+ADMIN_ROUTE+"/products"} component={ProductsPage} />
      </Switch>
    </Suspense>
  );
}
