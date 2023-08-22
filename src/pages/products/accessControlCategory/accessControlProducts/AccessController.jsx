import "./accessController.css";
import { accessControlData } from "../../../../Data/ProductsData";
import DemoModal from "../../../../components/demoModal/DemoModal";

const AccessController = () => {
  return (
    <div className="products__tabList">
      {accessControlData.slice(0, 1).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="p-text">{item.desc}</div>
          <br />
          <div className="p-text bold-text">{item.boldText}</div>

          <div className="products__tablist-img-points">
            <img src={item.primaryImg} alt="access control" />
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <br />
              <DemoModal />
            </ul>
          </div>
          <div className="product__tablist-product-img-features">
            <div className="head-text">Hand key, Hand punch, Palm</div>
            <div className="p-text">{item.productFeaturesDescription}</div>
            <div className="product__tablist-product-img-features-cards">
              {item.productFeaturesImages.map((item, index) => (
                <div
                  key={index}
                  className="product__tablist-product-img-features-card"
                >
                  <img src={item.img} alt="product" />
                  <div className="p-text">{item.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccessController;
