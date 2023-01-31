import "./ServicesInfo.css";
import { images } from "../../../constants";
import { servicesInfo } from "../../../Data/servicesData";

const ServicesInfo = () => {
  return (
    <div className="app__container servicesInfo-container">
      {servicesInfo.map((item) => (
        <div key={item.id}>
          <div className="servicesTextInfo">
            <div className="head-text">{item.InfoTitle}</div>
            <hr />
            <div className="p-text">{item.InfoDesc1}</div>
            <br />
            <div className="p-text">{item.InfoDesc2}</div>
          </div>
          <div className="servicesImages">
            <div className="servicesImages-text">
              <img
                className="corner-rectangle"
                src={images.small_corner_rectangle}
                alt="rectangle"
              />

              <div className="servicesImages-sub_text">
                {item.ImgSecSub_Title}
              </div>
              <div className="head-text">{item.ImgSecTitle}</div>
              <hr />
              <div className="p-text">{item.ImgSecDesc}</div>
            </div>
            <div className="servicesImages-gallery">
              {servicesInfo[0].Imgs.map((item, index) => (
                <div
                  className={`servicesImages-gallery${
                    index + 1
                  } servicesImages-gallery-img`}
                  key={item.caption}
                >
                  <img src={item.img} alt={item.caption} />
                  <div className="servicesImages-gallery-caption">
                    {item.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="servicesVideo">
            <div className="servicesVideo-player">
              <img src={item.video} alt="video" />
            </div>
            <div className="servicesVideo-text">
              <img
                className="corner-rectangle"
                src={images.small_corner_rectangle}
                alt="rectangle"
              />
              <div className="head-text">{item.vidTitle}</div>
              <hr />
              <div className="p-text">{item.vidSubTitle}</div>
              <img
                className="services-vid-dotted-bg"
                src={images.dotted_bg_short}
                alt="dotted-bg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesInfo;
