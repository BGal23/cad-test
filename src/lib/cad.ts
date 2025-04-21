import { DxfWriter, LWPolylineFlags, point2d } from "@tarikjabiri/dxf";

const x = 0;
const y = 0;
const grPlyty = 18;
const cokol = 100;

const cad = (width: number, height: number) => {
  const dxf = new DxfWriter();

  const bokLewy = [
    { point: point2d(x, y) },
    { point: point2d(x + grPlyty, y) },
    { point: point2d(x + grPlyty, y + height) },
    { point: point2d(x, y + height) },
  ];

  const bokPrawy = [
    { point: point2d(x + width - grPlyty, y) },
    { point: point2d(x + width, y) },
    { point: point2d(x + width, y + height) },
    { point: point2d(x + width - grPlyty, y + height) },
  ];

  const cokolDol = [
    { point: point2d(x + grPlyty, y) },
    { point: point2d(x + width - grPlyty, y) },
    { point: point2d(x + width - grPlyty, y + cokol) },
    { point: point2d(x + grPlyty, y + cokol) },
  ];
  const wieniecDolny = [
    { point: point2d(x + grPlyty, y + cokol) },
    { point: point2d(x + width - grPlyty, y + cokol) },
    { point: point2d(x + width - grPlyty, y + cokol + grPlyty) },
    { point: point2d(x + grPlyty, y + cokol + grPlyty) },
  ];
  const listwaGora = [
    { point: point2d(x + grPlyty, y + height - grPlyty) },
    { point: point2d(x + width - grPlyty, y + height - grPlyty) },
    { point: point2d(x + width - grPlyty, y + height) },
    { point: point2d(x + grPlyty, y + height) },
  ];

  dxf.addLWPolyline(bokLewy, {
    flags: LWPolylineFlags.Closed,
  });
  dxf.addLWPolyline(bokPrawy, {
    flags: LWPolylineFlags.Closed,
  });
  dxf.addLWPolyline(cokolDol, {
    flags: LWPolylineFlags.Closed,
  });
  dxf.addLWPolyline(wieniecDolny, {
    flags: LWPolylineFlags.Closed,
  });
  dxf.addLWPolyline(listwaGora, {
    flags: LWPolylineFlags.Closed,
  });

  const dxfString = dxf.stringify();
  const blob = new Blob([dxfString], { type: "application/dxf" });
  const url = URL.createObjectURL(blob);

  const cadToDownload = document.createElement("a");
  cadToDownload.href = url;
  cadToDownload.download = "rysunek.dxf";
  cadToDownload.click();

  return cadToDownload;
};

export default cad;
