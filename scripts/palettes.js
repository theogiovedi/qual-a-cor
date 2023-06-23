import { kMeans } from "./lib/calc.js";
import { createPalettes, deletePalettes } from "./lib/interface.js";
import { setupCamera } from "./lib/setup.js";
import { drawSimulationFrame } from "./lib/frame.js";
import { updateCameraCanvas } from "./lib/canvas.js";
import { menu } from "./lib/menu.js";
import { registerServiceWorker } from "./lib/pwa.js";
import { framerate } from "./lib/framerate.js";

// Slider control for K

const slider = document.getElementById("slider");
const sliderLabel = document.getElementById("slider-label");

// Camera Video Element

const cam = document.createElement("video");

// Canvas for drawing camera frames

const camCanvas = document.createElement("canvas");
camCanvas.width = 0;
camCanvas.height = 0;

// Div for storing canvas element

const camDiv = document.getElementById("cam");
camDiv.appendChild(camCanvas);

// Context for getting pixels from frame

const camContext = camCanvas.getContext("2d", { willReadFrequently: true });

// Global variables used in the functions bellow

let w, h;
let camPixels;
let windowSizes = [window.innerWidth, window.innerHeight];
let k = slider.value;

// Update K value when changed

slider.addEventListener("input", () => {
  k = slider.value;
  sliderLabel.innerText = k === "1" ? "1 cor" : `${k} cores`;
});

// Add toggle functionality to palette button

const paletteButton = document.getElementById("palette-button");
paletteButton.addEventListener("click", () => {
  if (cam.paused) {
    deletePalettes();
    cam.play();
  } else {
    cam.pause();
    createPalettes(kMeans(camPixels, k));
  }
});

// Setup Camera

window.addEventListener("load", () => {
  setupCamera(cam, camDiv, () => {
    [windowSizes[0], windowSizes[1], w, h] = updateCameraCanvas(
      camCanvas,
      windowSizes
    );
  });
});

// Loop for generating frames

cam.addEventListener("playing", () => {
  setInterval(() => {
    camPixels = drawSimulationFrame(cam, camContext, "normal", w, h);
  }, framerate);
});

// Screen orientation responsiveness

window.matchMedia("(orientation: landscape)").addEventListener("change", () => {
  [windowSizes[0], windowSizes[1], w, h] = updateCameraCanvas(
    camCanvas,
    windowSizes
  );
});

menu();

registerServiceWorker();
