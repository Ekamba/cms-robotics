import React, { useEffect } from "react";
import FreshGoods from "./freshGoods/FreshGoods";
import FruitVeg from "./fruit_veg/Fruit_Veg";
import Frozen from "./frozen/Frozen";
import Deli from "./deli/Deli";
import WineSpritz from "./wineSpritz/WineSpritz";

const Zones = () => {
  useEffect(() => {
    document.title = "Zones";
  });

  return (
    <div className="prepare__container">
      <FreshGoods />
      <FruitVeg />
      <Deli />
      <Frozen />
      <WineSpritz />
      {/* <div className="prepare prepare__undraw"> */}
      <img
        className="undraw"
        src="/assets/undraw_gone_shopping_re_2lau 1.png"
        alt="undraw"
      />
      {/* </div> */}
    </div>
  );
};

export default Zones;
