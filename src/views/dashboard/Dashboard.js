import React from "react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from "@coreui/react";
import MainChartExample from "./MainChartExample";

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="mb-0 card-title">
                Packages Status
              </h4>
              <div className="small text-muted">January 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButtonGroup className="float-right mr-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-primary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-0 mb-sm-2 d-md-down-none">
              <div className="text-muted">Pending</div>
              <strong>220 Users (20%)</strong>
              <CProgress
                className="mt-2 progress-xs"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-0 mb-sm-2">
              <div className="text-muted">Delivering</div>
              <strong>192 Packages (40%)</strong>
              <CProgress
                className="mt-2 progress-xs"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-0 mb-sm-2">
              <div className="text-muted">Delivered</div>
              <strong>786 Packages (60%)</strong>
              <CProgress
                className="mt-2 progress-xs"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default Dashboard;
