import PendingTrolley from "./pendingTrolley/PendingTrolley";
import "./trolleys.css";

const Trolleys = () => {
  return (
    <div className="trolleys__container">
      <div className="trolleys__header">
        <img
          src="/assets/COSMIC COBALT logo 1.png"
          alt="app/logo"
          className="logo"
        />
        <h1 className="trolleys__title">Pending Trolleys</h1>
      </div>
      <PendingTrolley />
    </div>
  );
};

export default Trolleys;
