import { securityData } from "../../../../Data/ProductsData";
import "./biometric.css";

const Biometric = () => {
  return (
    <div className="products__tabList">
      {securityData.slice(2, 3).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="p-text">{item.desc}</div>
          <img src={item.img} alt="product" />
          <div className="head-text">Technology</div>
          <div className="security__technology__points">
            {item.technologyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </div>
          <div className="head-text mtb-1">Options Availability</div>
          <div className="security__technology__points">
            <div>
              {item.optionsAvailabilityPoints
                .slice(0, 2)
                .map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
            </div>
            <div>
              {item.optionsAvailabilityPoints
                .slice(2, 4)
                .map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
            </div>
          </div>
          <div className="head-text mtb-1">Key Features</div>
          <div className="security__keyFeatures__points">
            <div className="security__keyFeatures__points-col1">
              {item.keyFeaturesPoints.slice(0, 5).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </div>
            <div className="security__keyFeatures__points-col2">
              {item.keyFeaturesPoints.slice(5, 10).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </div>
          </div>
        </div>
      ))}
      <br />
      <button className="button">Book A Demo</button>
    </div>
  );
};

export default Biometric;
