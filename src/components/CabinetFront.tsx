interface ICabinetFront {
  width: number;
  height: number;
}

const grPlyty = 18;
const cokol = 100;

const CabinetFront: React.FC<ICabinetFront> = ({ width, height }) => {
  const x = 0;
  const y = 0;

  return (
    <>
      {/* bok lewy */}
      <rect
        x={x}
        y={y}
        width={grPlyty}
        height={height}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* bok prawy */}
      <rect
        x={x + width - grPlyty}
        y={y}
        width={grPlyty}
        height={height}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* cokół dolny */}
      <rect
        x={x + grPlyty}
        y={y}
        width={width - 2 * grPlyty}
        height={cokol}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* wieniec dolny */}
      <rect
        x={x + grPlyty}
        y={y + cokol}
        width={width - 2 * grPlyty}
        height={grPlyty}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* listwa górna */}
      <rect
        x={x + grPlyty}
        y={y + height - grPlyty}
        width={width - 2 * grPlyty}
        height={grPlyty}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />
    </>
  );
};

export default CabinetFront;
