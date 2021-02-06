import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const PackagesIn = React.lazy(() => import("./views/packagesin/PackagesIn"));
const PackagesOut = React.lazy(() => import("./views/packagesout/PackagesOut"));
const Payment = React.lazy(() => import("./views/payment/Payment"));
const Invoice = React.lazy(() => import("./views/invoice/Invoice"));
const Ongkir = React.lazy(() => import("./views/ongkir/Ongkir"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/dashboard", name: "DASHBOARD", component: Dashboard },
  { path: "/packagesin", name: "PACKAGES IN", component: PackagesIn },
  {
    path: "/packagesout",
    name: "PACKAGES OUT",
    component: PackagesOut,
  },
  { path: "/payment", name: "PAYMENT", component: Payment },
  { path: "/invoice", name: "INVOICE", component: Invoice },
  { path: "/ongkir", name: "ONGKIR", component: Ongkir },
];

export default routes;
