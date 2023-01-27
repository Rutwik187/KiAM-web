import { brandsData } from "../../Data/brandsData";
import { images } from "../../constants";
import "./dummyHero.css";

const DummyHero = () => {
  return (
    <div className="orbit app__container">
      <div className="center-image">
        <img src={images.logo} alt="" />
        {/* <img src="assets/man.png" alt="" /> */}
      </div>
      <ul>
        {brandsData.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <p>name</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DummyHero;
