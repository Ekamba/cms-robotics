import "./category.css";
import Zones from "./zones/Zones";

const Category = () => {
  return (
    <div className="category__container">
      <div className="category__header">
        <img
          src="/assets/COSMIC COBALT logo 1.png"
          alt="app/logo"
          className="logo"
        />
        <h1 className="category__title">Add Pending Trolley</h1>
      </div>
      <h1 className="category__sub__title">Zones</h1>
      <Zones />
    </div>
  );
};

export default Category;
