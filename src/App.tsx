import { useState } from "react";
import cad from "./lib/cad";
import Cabinet from "./components/Cabinet";

export type ViewType = "PRZÓD" | "BOK" | "GÓRA";

const App = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(700);
  const [depth, setDepth] = useState(550);
  const [downloadXlsx, setDownloadXlsx] = useState(true);
  const [downloadPdf, setDownloadPdf] = useState(true);
  const [downloadCad, setDownloadCad] = useState(true);
  const [zoom, setZoom] = useState(0.5);
  const [view, setView] = useState<ViewType>("PRZÓD");

  const printDxf = (event: React.FormEvent) => {
    event.preventDefault();
    if (downloadCad) {
      const cadToDownload = cad(width, height);
      URL.revokeObjectURL(cadToDownload.href);
    }
  };

  const handleViewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as ViewType;
    setView(value);
  };

  return (
    <>
      <form onSubmit={printDxf}>
        <label>
          <div>SZEROKOŚĆ (mm)</div>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
        <br />
        <br />
        <label>
          <div>WYSOKOŚĆ (mm)</div>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
        <br />
        <br />
        <label>
          <div>GŁĘBOKOŚĆ (mm)</div>
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
          />
        </label>
        <br />
        <br />
        <input
          type="checkbox"
          checked={downloadXlsx}
          onChange={(e) => setDownloadXlsx(e.target.checked)}
        />
        <span>.xlsx</span>
        <br />
        <input
          type="checkbox"
          checked={downloadPdf}
          onChange={(e) => setDownloadPdf(e.target.checked)}
        />
        <span>.pdf</span>
        <br />
        <input
          type="checkbox"
          checked={downloadCad}
          onChange={(e) => setDownloadCad(e.target.checked)}
        />
        <span>.dxf</span>
        <br />
        <button type="submit">Pobierz</button>
      </form>
      <br />
      <div>ZOOM</div>
      <input
        type="range"
        value={zoom}
        min="0.25"
        max="1"
        step="0.025"
        onChange={(e) => setZoom(Number(e.target.value))}
      />
      <div>WIDOK</div>
      <label>
        <input
          type="radio"
          name="view"
          value="PRZÓD"
          checked={view === "PRZÓD"}
          onChange={handleViewChange}
        />
        PRZÓD
      </label>
      <label>
        <input
          type="radio"
          name="view"
          value="BOK"
          checked={view === "BOK"}
          onChange={handleViewChange}
        />
        BOK
      </label>
      <label>
        <input
          type="radio"
          name="view"
          value="GÓRA"
          checked={view === "GÓRA"}
          onChange={handleViewChange}
        />
        GÓRA
      </label>
      <br />
      <br />
      <div
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
        }}
      >
        <Cabinet width={width} height={height} depth={depth} view={view} />
      </div>
    </>
  );
};

export default App;
