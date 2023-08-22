import "./contactUs.css";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

const ContactUs = () => {
  const name = useRef();
  const phoneNo = useRef();

  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = () => {
    const phoneNumber = phoneNo.current.value;
    if (phoneNumber.length === 10) {
      setPhoneError("");
    }
  };

  const handleSendMessage = () => {
    const phoneNumber = phoneNo.current.value;

    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be 10 digits.");
      return;
    } else {
      setPhoneError("");
    }

    toast.success("Message Sent Successfully", {
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
    <div className="contact_us">
      <div className="contact_us-head">
        <div className="head-text">What Makes Us Different from others</div>
        <div className="p-text" style={{ color: "white" }}>
          With an agile approach and outstanding solutions in IT that we
          customize for our clients, we create an unbeatable, unique experience
          in technology
        </div>
      </div>
      <div className="contact_us-head">
        <div className="head-text">Get in touch with us</div>
      </div>

      <form className="contact_us-input-boxes">
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          ref={name}
          required
        />
        <input type="text" name="" id="" placeholder="Company Name" required />
        <input type="email" name="" id="" required placeholder="Email" />

        <input
          type="text"
          name=""
          id=""
          placeholder="Phone Number"
          ref={phoneNo}
          onChange={handlePhoneChange}
          required
        />
        {phoneError && (
          <p style={{ color: "#e53e3e", fontSize: "0.875rem" }}>{phoneError}</p>
        )}
        <input type="text" name="" id="" placeholder="Message" />
      </form>
      <button
        onClick={handleSendMessage}
        style={{ margin: "2rem auto " }}
        className="button app__flex"
      >
        Submit Response
      </button>
    </div>
  );
};

export default ContactUs;
