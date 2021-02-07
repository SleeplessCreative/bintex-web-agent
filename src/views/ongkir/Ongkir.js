import React, { useState } from "react";
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
  CInput,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Suggestions from "./Suggestions"; 

const Ongkir = () => {
  const [data, setData] = useState({
    origin: "",
    destination: "",
    weight: "",
  });

  const [cost, setCost] = useState({
    requested: false,
    cost: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("test", data.origin, data.destination, data.weight);
    await axios
      .post("https://staging.bintex.id/api/delivery/cost", {
        origin: data.origin,
        destination: data.destination,
        weight: data.weight,
      })
      .then((res) => {
        const data = res.data.value;
        setCost({
          requested: true,
          cost: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <big>Tariff Check</big>
        </CCardHeader>
        <CCardBody>
          <CForm
            encType="multipart/form-data"
            className="form-horizontal"
            onSubmit={handleSubmit}
          >
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="origin">Origin</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <Suggestions
                  id="origin"
                  name="origin"
                  inputHolder="Origin"
                  parentCallback={(e) => setData({ ...data, origin: e })}
                  //required
                  type="text"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="destination">Destination</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <Suggestions
                  id="destination"
                  name="destination"
                  inputHolder="Destination"
                  parentCallback={(e) => setData({ ...data, destination: e })}
                  //required
                  type="text"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="weight">Weight</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="weight"
                  name="weight"
                  placeholder="Weight (Kg)"
                  onChange={(e) => setData({ ...data, weight: e.target.value })}
                  //required
                  type="number"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CButton
                type="submit"
                block
                size="md"
                color="primary"
                className="align-items-center mt-5"
              >
                <CIcon name="send" />
                <span className="pl-2">Calclulate</span>
              </CButton>
            </CFormGroup>
          </CForm>
        </CCardBody>
        {cost.requested ? (
          <CCardFooter>
            <CCard
              color="success"
              className="text-white text-center block mt-4"
            >
              <big className="my-3">Rp.{cost.cost}</big>
            </CCard>
          </CCardFooter>
        ) : null}
      </CCard>
    </>
  );
};

export default Ongkir;
