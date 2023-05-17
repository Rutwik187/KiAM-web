import React from "react";

const CareersApplicationForm = () => {
  return (
    <div className="careersApplicationForm app__container app__flex-col">
      <div className="p-text">
        <b>COME JOIN US</b>
      </div>
      <div className="head-text">Career Openings</div>
      <div className="p-text" style={{ textAlign: "center" }}>
        "Unlock your potential with our career openings."
      </div>
      <br />

      <div className="careersApplicationFormSection">
        <div>
          <form>
            <div className="careersApplicationFormContainer">
              <div style={{ margin: "0.5rem 0" }} className="sub_head-text ">
                Application From
              </div>

              <div>
                <label for="fname">Full Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fullname"
                  placeholder="Your name.."
                />
              </div>
              <div className="division">
                <div>
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                  />
                </div>
                <div>
                  <label for="number">Contact Number</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="Your contact number.."
                  />
                </div>
              </div>
              <div>
                <label for="number">Address</label>
                <textarea
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Your address.."
                />
              </div>
            </div>

            <div className="careersApplicationFormContainer">
              <div className="division">
                <div>
                  <label for="appliedFor">Post applied for</label>
                  <input type="text" id="text" name="text" />
                </div>
                <div>
                  <label for="workExp">Work Experience</label>
                  <input type="text" id="workexp" name="workexp" />
                </div>
              </div>
              <div className="division">
                <div>
                  <label for="text">Location Preferred</label>
                  <input type="text" id="email" name="email" />
                </div>
                <div>
                  <label for="number">Notice Period</label>
                  <input type="text" id="number" name="number" />
                </div>
              </div>
              <div>
                <label for="number">Education</label>
                <input type="text" name="address" />
              </div>
              <div>
                <label for="number">Reference</label>
                <input type="text" name="address" />
              </div>
              <div
                style={{ width: "100%", margin: "0.5rem 0" }}
                className="button"
              >
                Submit
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareersApplicationForm;
