import { ViewType } from "../App";
import CabinetFront from "./CabinetFront";
import CabinetSide from "./CabinetSide";
import CabinetTop from "./CabinetTop";

interface ICabinet {
  width: number;
  height: number;
  depth: number;
  view: ViewType;
}

const Cabinet: React.FC<ICabinet> = ({ width, height, depth, view }) => {
  const currentCabinetView = () => {
    switch (view) {
      case "PRZÓD":
        return <CabinetFront width={width} height={height} />;
      case "BOK":
        return <CabinetSide height={height} depth={depth} />;
      case "GÓRA":
        return <CabinetTop width={width} depth={depth} />;
      default:
        return null;
    }
  };

  const max = Math.max(width, height, depth);

  return (
    <svg
      viewBox={`0 0 ${max} ${max}`}
      style={{
        background: "#242424",
        transform: "scaleY(-1)",
      }}
    >
      {currentCabinetView()}
    </svg>
  );
};

export default Cabinet;
