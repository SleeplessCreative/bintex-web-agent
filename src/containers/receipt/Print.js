import React from "react";
import ReactToPrint from "react-to-print";
import { CCol, CContainer, CRow } from "@coreui/react";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <CContainer>
        <CRow>
          <CCol>logo</CCol>
          <CCol>barcode</CCol>
        </CRow>
        <CRow>
          <CCol>from</CCol>
          <CCol>to</CCol>
        </CRow>
        <CRow>
          <CCol>resi</CCol>
          <CCol>weight</CCol>
          <CCol>cod</CCol>
        </CRow>
        <CRow>
          <CCol>aaaaa</CCol>
        </CRow>
      </CContainer>
    );
  }
}

class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Print;
