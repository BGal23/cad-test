interface ICabinetTop {
  width: number;
  depth: number;
}

const grPlyty = 18;
const cokol = 100;

const CabinetTop: React.FC<ICabinetTop> = ({ width, depth }) => {
  const x = 0;
  const y = 0;

  return (
    <>
      {/* bok lewy */}
      <rect
        x={x}
        y={y}
        width={grPlyty}
        height={depth}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* bok prawy */}
      <rect
        x={x + width - grPlyty}
        y={y}
        width={grPlyty}
        height={depth}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* cokół dolny */}
      <rect
        x={x + grPlyty}
        y={y + 10}
        width={width - 2 * grPlyty}
        height={grPlyty}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* wieniec dolny */}
      <rect
        x={x + grPlyty}
        y={y}
        width={width - 2 * grPlyty}
        height={depth}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* listwa górna przód*/}
      <rect
        x={x + grPlyty}
        y={y}
        width={width - 2 * grPlyty}
        height={cokol}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />

      {/* listwa górna tył*/}
      <rect
        x={x + grPlyty}
        y={y + depth - cokol}
        width={width - 2 * grPlyty}
        height={cokol}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />
    </>
  );
};

export default CabinetTop;
