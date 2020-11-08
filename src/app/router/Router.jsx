import React, { useEffect, useState, Suspense } from "react";
import routes from "./routerConfigs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExternalLayout from "../layout/external";
import InternalLayout from "../layout/internal";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../store/actions/authAction";
import AuthService from "../pages/auth/AuthService";

export default function RouterMounted() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.Auth.logged);
  const Layout = logged ? InternalLayout : ExternalLayout;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      (async () => {
        const user = await AuthService.getUserDataByToken(
          localStorage.getItem("token")
        );
        // console.log(JSON.parse(user));
        if (user) dispatch(authActions.setUserData(user));
      })();
    }
  }, [logged]);

  return (
    <Router>
      <Switch>
        <Layout>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact>
              {/* route.component */}
              <Suspense fallback={<div>Loading...</div>}>
                {React.createElement(route.component)}
              </Suspense>
            </Route>
          ))}
        </Layout>
      </Switch>
    </Router>
  );
}
