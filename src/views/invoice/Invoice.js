import React, { Component } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CCardTitle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import TheReceipt from "../../containers/receipt/TheReceipt";

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: false,
      receipt_number: "",
      status: "",
      shipment_date: null,
      cod: null,
      shipper: "",
      shipperTel: null,
      consignee: "",
      consigneeTel: null,
      origin: "",
      destination: "",
      details: "",
      file: [null],
      fileName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFiles = (e) => {
    let fileObj = [],
      fileArray = [],
      fileName = "";

    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
      fileName += '"' + fileObj[0][i].name + '" ';
    }
    this.setState({ file: fileArray });
    this.setState({ fileName: fileName });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      receipt_number: Math.floor(Math.random() * 1000000000).toString(),
      status: "DELIVERING",
      shipment_date: new Date().toISOString(),
    });
    this.setState({ invoice: !this.state.invoice });
    await axios
      .post("https://staging.bintex.id/api/invoice/receipts", this.state)
      .post("t")
      .then((res) => {
        console.log(res);
        //this.setState({ invoice: !this.state.invoice });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { fileName } = this.state;
    let fileSelected = null;
    fileSelected = fileName ? (
      <span
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "30ch",
        }}
      >
        {fileName}
      </span>
    ) : (
      <span>Choose files...</span>
    );

    return (
      <>
        <CCard>
          <CCardHeader>
            <big>Input Invoice</big>
          </CCardHeader>
          <CCardBody>
            <CForm
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={this.handleSubmit}
            >
              <CCardTitle>Shipper</CCardTitle>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="shipper">Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="shipper"
                    name="shipper"
                    placeholder="Name"
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="shipperTel">Phone Number</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="shipperTel"
                    name="shipperTel"
                    placeholder="Phone Number"
                    onChange={this.handleChange}
                    required
                    type="tel"
                    pattern="^[0-9-+\s()]*$"
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
                    required
                    type="text"
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
                    required
                    type="text"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="consigneeTel">Phone Number</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="consigneeTel"
                    name="consigneeTel"
                    placeholder="Phone Number"
                    onChange={this.handleChange}
                    required
                    type="tel"
                    pattern="^[0-9-+\s()]*$"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="city">City</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="state">State</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="zip">ZIP Code</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="zip"
                    name="zip"
                    placeholder="ZIP Code"
                    onChange={this.handleChange}
                    required
                    type="number"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="destination">Adress</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="destination"
                    id="destination"
                    rows="5"
                    placeholder="Adress"
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </CCol>
              </CFormGroup>
              <CCardTitle className="mt-4">Packages Information</CCardTitle>{" "}
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="weight">Detail Packages</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="details"
                    id="details"
                    rows="5"
                    placeholder="Details Packages"
                    onChange={this.handleChange}
                    required
                    type="text"
                  />
                </CCol>
              </CFormGroup>{" "}
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="weight">Weight</CLabel>
                </CCol>
                <CCol xs="12" md="3">
                  <CInput
                    id="weight"
                    name="weight"
                    placeholder="Weight (kg)"
                    onChange={this.handleChange}
                    required
                    type="number"
                    min="1"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">Cash on Delivery (COD)</CLabel>
                </CCol>
                <CCol xs="12" md="3">
                  <CInput
                    id="cod"
                    name="cod"
                    placeholder="Price (Rp)"
                    onChange={this.handleChange}
                    required
                    type="number"
                    min="0"
                    step="10000"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CLabel col md="3">
                  Input Photos
                </CLabel>
                <CCol xs="10" md="5" className="ml-3">
                  <CInputFile
                    custom
                    id="file"
                    name="file"
                    multiple
                    onChange={this.handleFiles}
                    required
                    type="file"
                    accept="image/*"
                  />
                  <CLabel htmlFor="photo-input" variant="custom-file">
                    {fileSelected}
                  </CLabel>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CButton
                  type="submit"
                  block
                  size="md"
                  color="primary"
                  className="mt-5 align-items-center"
                >
                  <CIcon name="add" />
                  <span className="pl-2">Submit</span>
                </CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
        {this.state.invoice ? <TheReceipt receipt={this.state} /> : null}
      </>
    );
  }
}

export default Invoice;
