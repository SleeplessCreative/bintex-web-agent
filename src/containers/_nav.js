export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: "dashboard",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-1",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Action"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add Invoice",
    to: "/invoice",
    icon: "add",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Payment",
    to: "/payment",
    icon: "creditCard",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tariff",
    to: "/ongkir",
    icon: "send",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-1",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Packages"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "In",
    to: "/packagesin",
    icon: "inbox",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Out",
    to: "/packagesout",
    icon: "outbox",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];
