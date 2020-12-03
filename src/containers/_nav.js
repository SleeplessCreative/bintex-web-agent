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
    _children: ["Packages"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "In",
    to: "/packages/packagesin",
    icon: "inbox",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Out",
    to: "/packages/packagesout",
    icon: "outbox",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Payment",
    to: "/payment",
    icon: "creditCard",
  },
];
