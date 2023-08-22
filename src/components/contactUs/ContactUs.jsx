import "./contactUs.css";
import { toast } from "react-toastify";

const ContactUs = () => {
  const notify = () => {
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

      <div className="contact_us-input-boxes">
        <input type="text" name="" id="" placeholder="Name" />
        <input type="text" name="" id="" placeholder="Company Name" />
        <input type="email" name="" id="" placeholder="Email" />
        <input type="text" name="" id="" placeholder="Phone Number" />
        <input type="text" name="" id="" placeholder="Message" />
      </div>
      <button
        onClick={notify}
        style={{ margin: "2rem auto " }}
        className="button app__flex"
      >
        Submit Response
      </button>
    </div>
  );
};

export default ContactUs;
