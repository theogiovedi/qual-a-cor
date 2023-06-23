import { setupCamera } from "./lib/setup.js";
import { updateCameraCanvas } from "./lib/canvas.js";
import { drawSimulationFrame } from "./lib/frame.js";
import { menu } from "./lib/menu.js";
import { registerServiceWorker } from "./lib/pwa.js";
import { framerate } from "./lib/framerate.js";

// Camera Video Element

const cam = document.createElement("video");

// Simulation Type Selector

const type = document.getElementById("type");

// Slider

const slider = document.getElementById("slider");
const sliderLabel = document.getElementById("slider-label");

// Start Button

const start = document.getElementById("start-button");

// Cameras div

const camDiv = document.getElementById("cam");

// Canvas for drawing camera frames

const left = document.getElementById("left");
const right = document.getElementById("right");

// Context for getting pixels from frame

const leftContext = left.getContext("2d", { willReadFrequently: true });
const rightContext = right.getContext("2d", { willReadFrequently: true });

// Other UI components

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

// Global variables used in the functions bellow

let offset = 150;
let w = (Math.max(window.screen.width, window.screen.height) / 2) + offset,
  h = w;
let clickCounter = 0;

left.width = right.width = w;
left.height = right.height = h;

// Handle simulation type selection

type.addEventListener("change", () => {
  if (type.value === "hues") {
    slider.style.display = "block";
    sliderLabel.style.display = "block";
  } else {
    slider.style.display = "none";
    sliderLabel.style.display = "none";
    left.style.filter = "hue-rotate(0deg)";
    right.style.filter = "hue-rotate(0deg)";
  }
});

slider.addEventListener("input", () => {
  sliderLabel.innerText = `${slider.value}º`;
  left.style.filter = `hue-rotate(${slider.value}deg)`;
  right.style.filter = `hue-rotate(${slider.value}deg)`;
});

// Start Button

start.addEventListener("click", () => {
  camDiv
    .requestFullscreen()
    .then(() => {
      screen.orientation.lock("landscape").catch(() => {
        console.log("Erro: Não foi possível travar a tela no modo paisagem");
      });
    })
    .catch(() => {
      console.log("Erro: Não foi possível entrar no modo fullscreen");
    });
});

camDiv.addEventListener("click", () => {
  clickCounter++;
  if (clickCounter === 2) {
    document.exitFullscreen();
    screen.orientation.unlock();
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    camDiv.style.display = "block";
    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
  } else {
    camDiv.style.display = "none";
    header.style.display = "block";
    main.style.display = "block";
    footer.style.display = "block";
    clickCounter = 0;
  }
});

// Setup camera

window.addEventListener("load", () => {
  setupCamera(cam, camDiv, () => {});
});

// Loop for generating frames

cam.addEventListener("playing", () => {
  setInterval(() => {
    if (type.value === "hues") {
      leftContext.drawImage(cam, 0, 0, w, h);
      rightContext.drawImage(left, 0, 0, w, h);
      left.style.filter = `hue-rotate(${slider.value}deg)`;
      right.style.filter = `hue-rotate(${slider.value}deg)`;
    } else {
      drawSimulationFrame(cam, leftContext, type, w, h);
      rightContext.drawImage(left, 0, 0, w, h);
      left.style.filter = `hue-rotate(0deg)`;
      right.style.filter = `hue-rotate(0deg)`;
    }
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
