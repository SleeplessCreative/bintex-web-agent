import React from "react";
import { CSubheader, CLink } from "@coreui/react";

const TheFooter = () => {
  return (
    <CSubheader>
      <div className="d-md-down-none mfe-2 c-subheader-nav">
        <CLink
          className="c-subheader-nav-link"
          aria-current="page"
          to="/dashboard"
        >
          &nbsp;Dashboard
        </CLink>
      </div>
    </CSubheader>
  );
};

export default React.memo(TheFooter);
