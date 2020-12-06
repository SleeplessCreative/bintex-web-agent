import React from "react";
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

const Receipt = () => {
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
            <CCardTitle>Sender Data</CCardTitle>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="sender-name">Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="sender-name"
                  name="sender-name"
                  placeholder="Name"
                />
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
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="sender-adress">Adress</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea
                  name="sender-adress"
                  id="sender-adress"
                  rows="5"
                  placeholder="Adress"
                />
              </CCol>
            </CFormGroup>
            <CCardTitle className="mt-4">Reciver Data</CCardTitle>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="receiver-name">Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="receiver-name"
                  name="receiver-name"
                  placeholder="Name"
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
                <CLabel htmlFor="receiver-adress">Adress</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea
                  name="receiver-adress"
                  id="receiver-adress"
                  rows="5"
                  placeholder="Adress"
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
          >
            <CIcon name="add" />
            <span className="pl-2">Submit</span>
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default Receipt;
