import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "16px",
};

export default function DemoModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const name = useRef();
  const phoneNo = useRef();
  const address = useRef();

  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handlePhoneChange = () => {
    const phoneNumber = phoneNo.current.value;
    if (phoneNumber.length === 10) {
      setPhoneError("");
    }
  };

  const handleAddressChange = () => {
    const userAddress = address.current.value;
    if (userAddress.length >= 25) {
      setAddressError("");
    }
  };

  const handleSendMessage = () => {
    const phoneNumber = phoneNo.current.value;
    const userAddress = address.current.value;

    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be 10 digits.");
      return;
    } else {
      setPhoneError("");
    }

    if (userAddress.length < 25) {
      setAddressError("Address must be at least 25 characters.");
      return;
    } else {
      setAddressError("");
    }
    toast.success("Confirmed Request", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <button
        onClick={handleOpen}
        style={{ margin: "auto" }}
        className="button app__flex"
      >
        Book a Demo
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ background: "#f0f4f7", borderRadius: "0.6rem" }}>
            <div
              style={{ margin: "0 auto", padding: "32px 0" }}
              className="container"
            >
              <h1
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                Book Your Demo
              </h1>
              <form
                style={{
                  width: "100%",
                  maxWidth: "20rem",
                  margin: "0 auto",
                  background: "#ffffff",
                  padding: "2rem",
                  borderRadius: "0.375rem",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      color: "#4b5563",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Rajesh Verma"
                    ref={name}
                    required
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      color: "#4b5563",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    placeholder="9632587563"
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    ref={phoneNo}
                    required
                    onChange={handlePhoneChange}
                  />
                  {phoneError && (
                    <p style={{ color: "#e53e3e", fontSize: "0.875rem" }}>
                      {phoneError}
                    </p>
                  )}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      color: "#4b5563",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                    htmlFor="password"
                  >
                    Address
                  </label>
                  <textarea
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    id="address"
                    name="address"
                    placeholder="address"
                    ref={address}
                    onChange={handleAddressChange}
                    required
                  />
                  {addressError && (
                    <p style={{ color: "#e53e3e", fontSize: "0.875rem" }}>
                      {addressError}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSendMessage}
                  style={{ margin: "auto" }}
                  className="button app__flex"
                  type="button"
                >
                  Book Demo2
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
