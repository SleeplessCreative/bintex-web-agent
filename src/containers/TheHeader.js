import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CHeader, CHeaderBrand, CHeaderNav, CToggler, CBreadcrumbRouter } from "@coreui/react";
import { TheAddbar } from "./index";
import CIcon from "@coreui/icons-react";

import routes from "../routes";

const TheHeader = () => {
  const dispatch = useDispatch();
  const asideShow = useSelector((state) => state.asideShow);
  const darkMode = useSelector((state) => state.darkMode);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none py-3" to="/">
        <CIcon name="logoBg" height="40" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={() => dispatch({ type: "set", darkMode: !darkMode })}
          title="Toggle Light/Dark Mode"
        >
          <CIcon
            name="cil-moon"
            className="c-d-dark-none"
            alt="CoreUI Icons Moon"
          />
          <CIcon
            name="cil-sun"
            className="c-d-default-none"
            alt="CoreUI Icons Sun"
          />
        </CToggler>
        <CToggler
          inHeader
          className="d-md-down-none"
          onClick={() => dispatch({ type: "set", asideShow: !asideShow })}
        >
          <CIcon className="mr-2" size="lg" name="cil-applications-settings" />
        </CToggler>
      </CHeaderNav>
      {pathname === "/packages/packagesout" ? <TheAddbar /> : null}
    </CHeader>
  );
};

export default TheHeader;
