import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CBadge,
  CButton,
  CCollapse,
  CDataTable,
} from "@coreui/react";
import usersDataIn from "../../data/UsersDataIn";
import TheReceipt from "../../containers/receipt/TheReceipt";

const PackagesIn = () => {
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    "resi",
    "sender",
    "receiver",
    { key: "phone", label: "Phone Number" },
    "from",
    "to",
    { key: "status", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <CCard>
      <CCardBody>
        <CDataTable
          items={usersDataIn}
          fields={fields}
          columnFilter
          tableFilter
          footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
            show_details: (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(item.id);
                    }}
                  >
                    {details.includes(item.id) ? "Hide" : "Show"}
                  </CButton>
                </td>
              );
            },
            details: (item) => {
              return (
                <CCollapse show={details.includes(item.id)}>
                </CCollapse>
              );
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default PackagesIn;
