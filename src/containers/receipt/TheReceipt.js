import React, { useRef } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CListGroup,
  CCard,
} from "@coreui/react";
import ReactToPrint from "react-to-print";
import Barcode from "react-barcode";
import { Row, RowImg } from "./Row";

const Success = ({ receipt }) => {
  const componentRef = useRef();
  return (
    <CModal show={true} size="lg" closeOnBackdrop={false}>
      <CModalHeader>
        <CModalTitle>Check Out Packages</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CCard className="m-3">
          <CListGroup className="m-3">
            <big className="mb-2">Packages Information</big>
            <Row left="No. Resi" right={receipt.receipt_number} />
            <Row left="Status" right={receipt.status} />
            <Row left="Shipment Date" right={receipt.shipment_date} />
            <Row left="Detail Packages" right={receipt.details} />
            <RowImg img={receipt.file} />
          </CListGroup>
          <CListGroup className="m-3">
            <big className="mb-2 mt-3">Shipper</big>
            <Row left="Name" right={receipt.shipper} />
            <Row left="Phone Number" right={receipt.shipperTel} />
            <Row left="Adress" right={receipt.origin} />
          </CListGroup>
          <CListGroup className="m-3">
            <big className="mb-2 mt-3">Consignee</big>
            <Row left="Name" right={receipt.consignee} />
            <Row left="Phone Number" right={receipt.consigneeTel} />
            <Row left="Adress" right={receipt.destination} />
          </CListGroup>
        </CCard>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => window.location.reload()}>
          Cancel
        </CButton>
        <div>
          <ReactToPrint
            trigger={() => <CButton color="primary">Print this out!</CButton>}
            content={() => componentRef.current}
          />
          <div style={{ display: "none" }}>
            <ComponentToPrint ref={componentRef} />
          </div>
        </div>
      </CModalFooter>
    </CModal>
  );
};

class ComponentToPrint extends React.Component {
  render() {
    const gridContainer = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, auto)",
    };

    const div1 = { gridArea: "1 / 1 / 2 / 2" };
    const div2 = { gridArea: "1 / 2 / 2 / 4" };
    const div3 = { gridArea: "2 / 1 / 3 / 2" };
    const div4 = { gridArea: "2 / 2 / 3 / 4" };
    const div5 = { gridArea: "3 / 1 / 4 / 2" };
    const div6 = { gridArea: "3 / 2 / 4 / 3" };
    const div7 = { gridArea: "3 / 3 / 4 / 4" };
    const div8 = { gridArea: "4 / 1 / 5 / 4" };

    return (
      <div style={gridContainer}>
        <div style={div1}>testsuhhhhh</div>
        <div style={div2}>testiojjjjjjjjj</div>
        <div style={div3}>tesuhhhhhhhhhhhhhhhhhhhhhhhhht</div>
        <div style={div4}>
          testohhhhhhhhhnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnsnsjh
        </div>
        <div style={div5}>testjnohiiiiii</div>
        <div style={div6}>testijjjjjjjjjjjjjjjjjjjjjjjjjjjj</div>
        <div style={div7}>
          testkppppppppppppppppppppmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmppppppppppppssss
        </div>
        <div style={div8}>testsjiiiiiiiiiiii</div>
        <Barcode value="http://github.com/kciter" />
      </div>
    );
  }
}

export default Success;
