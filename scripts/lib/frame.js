import { normalToProt, normalToDeut, normalToTrit } from "./calc.js";

export function drawSimulationFrame(img, imgContext, type, w, h) {
  imgContext.drawImage(img, 0, 0, w, h);
  let imgPixels = imgContext.getImageData(0, 0, w, h);

  switch (type.value) {
    case "normal":
      break;
    case "prot":
      for (let i = 0; i < imgPixels.data.length; i += 4) {
        [imgPixels.data[i], imgPixels.data[i + 1], imgPixels.data[i + 2]] =
          normalToProt([
            imgPixels.data[i],
            imgPixels.data[i + 1],
            imgPixels.data[i + 2],
          ]);
      }
      break;
    case "deut":
      for (let i = 0; i < imgPixels.data.length; i += 4) {
        [imgPixels.data[i], imgPixels.data[i + 1], imgPixels.data[i + 2]] =
          normalToDeut([
            imgPixels.data[i],
            imgPixels.data[i + 1],
            imgPixels.data[i + 2],
          ]);
      }
      break;
    case "trit":
      for (let i = 0; i < imgPixels.data.length; i += 4) {
        [imgPixels.data[i], imgPixels.data[i + 1], imgPixels.data[i + 2]] =
          normalToTrit([
            imgPixels.data[i],
            imgPixels.data[i + 1],
            imgPixels.data[i + 2],
          ]);
      }
      break;
  }
  imgContext.putImageData(imgPixels, 0, 0);
  return imgPixels;
}