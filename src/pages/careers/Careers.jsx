import "./careers.css";
import icon1 from "../../assets/team_work-icon.png";
import icon2 from "../../assets/secured_future-icon.png";
import icon3 from "../../assets/learning_opportunity-icon.png";
import icon4 from "../../assets/upgrading_skills-icons.png";
const Careers = () => {
  return (
    <div className="careers">
      <div className="careers__cover app__flex-col app__container">
        <div className="head-text" style={{ color: "white" }}>
          JOIN US
        </div>

        <div className="p-text" style={{ color: "white", textAlign: "center" }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </div>
        <div
          style={{ gap: "2rem", marginTop: "2rem" }}
          className="careers__call-to-action app__flex"
        >
          <div className="button ">Join the team</div>
          <div
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
            }}
            className="button"
          >
            Culture
          </div>
        </div>
      </div>

      <div style={{ gap: "2rem" }} className="app__container division">
        <div style={{ flex: "0.8" }}>
          <div className="p-text">
            <b>BENEFITS </b>
            <div className="head-text">
              Why you Should Join Our Awesome Team
            </div>
          </div>

          <div className="p-text">
            we want to feel like home when you are working at JMC(Japan
            Marketing & Consultancy Limited) & for that we have curated a great
            set of benefits for you.It all starts with the free lunch!
          </div>
        </div>
        <div
          style={{ flex: "1", display: "flex", flexWrap: "wrap", gap: "2rem" }}
        >
          <div className="career-features">
            <img src={icon1} style={{ width: "4.2rem" }} alt="" />

            <div className="p-text">
              <b>Team Work</b>{" "}
            </div>

            <div className="p-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </div>
          </div>
          <div className="career-features">
            <img src={icon2} style={{ width: "4.2rem" }} alt="" />

            <div className="p-text">
              <b>Secured Future</b>{" "}
            </div>

            <div className="p-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </div>
          </div>
          <div className="career-features">
            <img src={icon3} style={{ width: "4.2rem" }} alt="" />

            <div className="p-text">
              <b>Learning Opportunity</b>{" "}
            </div>

            <div className="p-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </div>
          </div>
          <div className="career-features">
            <img src={icon4} style={{ width: "4.2rem" }} alt="" />

            <div className="p-text">
              <b>Upgrade Skills</b>{" "}
            </div>

            <div className="p-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
