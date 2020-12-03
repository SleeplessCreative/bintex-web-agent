import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const PackagesIn = React.lazy(() =>
  import("./views/packages/packagesin/PackagesIn")
);
const PackagesOut = React.lazy(() =>
  import("./views/packages/packagesout/PackagesOut")
);
const Payment = React.lazy(() => import("./views/payment/Payment"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/packages", name: "Packages", component: PackagesIn, exact: true },
  { path: "/packages/packagesin", name: "PackagesIn", component: PackagesIn },
  {
    path: "/packages/packagesout",
    name: "PackagesOut",
    component: PackagesOut,
  },
  { path: "/payment", name: "Payment", component: Payment },
];

export default routes;
