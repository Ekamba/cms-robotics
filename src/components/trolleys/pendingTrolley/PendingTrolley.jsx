import "./pendingTrolley.css";
import { useEffect } from "react";
import PendingFreshGoods from "./pendingFreshGoods/PendingFreshGoods";
import PendingDeli from "./pendingDeli/PendingDeli";
import PendingFrozen from "./pendingFrozen/PendingFrozen";
import PendingWineSpritz from "./pendingWineSpritz/PendingWineSpritz";
import PendingFruitVeg from "./pendingFruitVeg/PendingFruitVeg";

const PendingTrolley = () => {
  useEffect(() => {
    document.title = "Pending Trolley";
  });

  return (
    <div className="prepared__container">
      <div className="prepared__list">
        <PendingFreshGoods />
        <PendingFruitVeg />
        <PendingDeli />
        <PendingFrozen />
        <PendingWineSpritz />
      </div>
    </div>
  );
};

export default PendingTrolley;
