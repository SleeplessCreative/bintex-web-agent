import React, { Component } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CCardTitle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

class Receipt extends Component {
  state = {
    receipt: "",
    status: "",
    shipment_date: "",
    shipper: "",
    consignee: "",
    origin: "",
    destination: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const usersData = {
      receipt: Math.floor(Math.random() * 1000000000).toString(),
      shipment_date: new Date().toISOString(),
      shipper: this.state.shipper,
      consignee: this.state.consignee,
      origin: this.state.origin,
      destination: this.state.destinantion,
    };
    console.log(usersData);
    await axios
      .post("https://staging.bintex.id/api/invoice/receipts", usersData)
      .then((res) => {
        console.log(usersData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <CCard>
          <CCardHeader>
            <big>Input Receipt</big>
          </CCardHeader>
          <CCardBody>
            <CForm
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CCardTitle>Shipper</CCardTitle>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="shipper">Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="shipper" name="shipper" placeholder="Name" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="sender-phone">Phone Number</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="sender-phone"
                    name="sender-phone"
                    placeholder="Phone Number"
                    onChange={this.handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="origin">Adress</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="origin"
                    id="origin"
                    rows="5"
                    placeholder="Adress"
                    onChange={this.handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CCardTitle className="mt-4">Consignee</CCardTitle>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="consignee">Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="consignee"
                    name="consignee"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="receiver-phone">Phone Number</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="receiver-phone"
                    name="receiver-phone"
                    placeholder="Phone Number"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="receiver-city">City</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="receiver-city"
                    name="receiver-city"
                    placeholder="City"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="receiver-state">State</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="receiver-state"
                    name="receiver-state"
                    placeholder="State"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="receiver-zip">ZIP Code</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="receiver-zip"
                    name="receiver-zip"
                    placeholder="ZIP Code"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="destinantion">Adress</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="destinantion"
                    id="destinantion"
                    rows="5"
                    placeholder="Adress"
                    onChange={this.handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CCardTitle className="mt-4">Packages Information</CCardTitle>{" "}
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="weight">Weight</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="weight" name="weight" placeholder="Weight (kg)" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">Cash on Delivery (COD)</CLabel>
                </CCol>
                <CCol xs="12" md="3">
                  <CSelect custom name="select" id="select">
                    <option value="0">Select..</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CLabel col md="3">
                  Input Photos
                </CLabel>
                <CCol xs="12" md="3" className="ml-3">
                  <CInputFile
                    custom
                    id="photo-input"
                    name="photo-input"
                    multiple
                  />
                  <CLabel htmlFor="photo-input" variant="custom-file">
                    Choose files...
                  </CLabel>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="md"
              color="primary"
              className="align-items-center"
              onClick={this.handleSubmit}
            >
              <CIcon name="add" />
              <span className="pl-2">Submit</span>
            </CButton>
          </CCardFooter>
        </CCard>
      </>
    );
  }
}

/*

  return (
    
  );
}

*/
export default Receipt;
