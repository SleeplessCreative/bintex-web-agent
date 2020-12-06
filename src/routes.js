import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const PackagesIn = React.lazy(() =>
  import("./views/packages/packagesin/PackagesIn")
);
const PackagesOut = React.lazy(() =>
  import("./views/packages/packagesout/PackagesOut")
);
const Payment = React.lazy(() => import("./views/payment/Payment"));
const Receipt = React.lazy(() => import("./views/receipt/Receipt"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/dashboard", name: "DASHBOARD", component: Dashboard },
  { path: "/packages/packagesin", name: "PACKAGES IN", component: PackagesIn },
  {
    path: "/packages/packagesout",
    name: "PACKAGES OUT",
    component: PackagesOut,
  },
  { path: "/payment", name: "PAYMENT", component: Payment },
  { path: "/receipt", name: "RECEIPT", component: Receipt },
];

export default routes;
