import React from "react";
import { CCol, CRow, CListGroupItem } from "@coreui/react";

const Row = (props) => {
  return (
    <CListGroupItem>
      <CRow>
        <CCol col="12" sm="6">
          {props.left}
        </CCol>
        <CCol col="12" sm="6">
          {props.img ? <img src={props.img} alt="a" /> : <p>{props.right}</p>}
        </CCol>
      </CRow>
    </CListGroupItem>
  );
};

const RowImg = (file) => {
  return (
    <CListGroupItem>
      <CRow>
        <CCol col="12" sm="6">
          Images
        </CCol>
        <CCol col="12" sm="6">
          {(file.img || []).map((e) => (
            <img
              src={e}
              alt="..."
              width="300"
              key={Math.random()}
            />
          ))}
        </CCol>
      </CRow>
    </CListGroupItem>
  );
};

export { Row, RowImg };
