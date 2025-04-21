interface ICabinetSide {
  height: number;
  depth: number;
}

const grPlyty = 18;
const cokol = 100;

const CabinetSide: React.FC<ICabinetSide> = ({ height, depth }) => {
  const x = 0;
  const y = 0;

  return (
    <>
      {/* bok */}
      <rect
        x={x}
        y={y}
        width={depth}
        height={height}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* cokół dolny */}
      <rect
        x={x + depth - grPlyty - 10}
        y={y}
        width={grPlyty}
        height={cokol}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* wieniec dolny */}
      <rect
        x={x}
        y={y + cokol}
        width={depth}
        height={grPlyty}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* listwa górna przód */}
      <rect
        x={x + depth - cokol}
        y={y + height - grPlyty}
        width={cokol}
        height={grPlyty}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* listwa górna tył */}
      <rect
        x={x}
        y={y + height - grPlyty}
        width={cokol}
        height={grPlyty}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />
    </>
  );
};

export default CabinetSide;
