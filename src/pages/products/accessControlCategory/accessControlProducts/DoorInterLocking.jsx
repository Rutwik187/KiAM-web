import { accessControlData } from "../../../../Data/ProductsData";
import DemoModal from "../../../../components/demoModal/DemoModal";

const DoorInterLocking = () => {
  return (
    <div className="products__tabList">
      {accessControlData.slice(7, 8).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="p-text">{item.desc1}</div>
          <br />

          <div className="products__tablist-img-points">
            <img src={item.primaryImg} alt="access control" />
            <div>
              <div className="p-text">{item.desc2}</div>
              <DemoModal />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoorInterLocking;
