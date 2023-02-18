import { securityData } from "../../../Data/ProductsData";

const AccessCard = () => {
  return (
    <div className="products__tabList">
      {securityData.slice(3, 4).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="p-text">{item.desc}</div>

          <div className="products__tablist-img-points">
            <img src={item.img} alt="access control" />
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccessCard;
