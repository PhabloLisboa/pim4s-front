import React from "react";
import Login from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import Conta from "./account/Account";
import Investimentos from "./investimentos/Investimentos";
import Contratos from "./contratos/Contratos";
const Routes = [
  {
    path: "/",
    component: React.lazy(() => import("./auth/Login")),
  },
  {
    path: "/dashboard",
    component: React.lazy(() => import("./dashboard/Dashboard")),
  },
  {
    path: "/conta",
    component: React.lazy(() => import("./account/Account")),
  },
  {
    path: "/investimentos",
    component: React.lazy(() => import("./investimentos/Investimentos")),
  },
  {
    path: "/contratos",
    component: React.lazy(() => import("./contratos/Contratos")),
  },
];
export default Routes;
