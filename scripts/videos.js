import { updateFileCanvas } from "./lib/canvas.js";
import { drawSimulationFrame } from "./lib/frame.js";
import { menu } from "./lib/menu.js";
import { registerServiceWorker } from "./lib/pwa.js";
import { setupFile } from "./lib/setup.js";
import { framerate } from "./lib/framerate.js";

// File Input Element

const file = document.getElementById("file");

// CVD Type Selector

const type = document.getElementById("type");

// Video Element

const video = document.createElement("video");
video.style.display = "none";

// Canvas for drawing the photo

const videoCanvas = document.createElement("canvas");
videoCanvas.width = 0;
videoCanvas.height = 0;

// Div for storing canvas element

const videoDiv = document.getElementById("video");
videoDiv.appendChild(videoCanvas);

// Context for getting pixels from photo

const videoContext = videoCanvas.getContext("2d", { willReadFrequently: true });

// Global Variables

let w, h;
let windowSizes = [window.innerWidth, window.innerHeight];

// Setup photo when user enters a file into file input

file.addEventListener("change", () => {
  setupFile(type, video, file);
});

video.addEventListener("loadedmetadata", () => {
  [w, h] = updateFileCanvas(
    videoCanvas,
    windowSizes[0],
    video.videoWidth,
    video.videoHeight
  );
});

video.addEventListener("canplaythrough", () => {
  document.getElementById("video-details").style.display = "block";
  video.play();
  setInterval(() => {
    drawSimulationFrame(video, videoContext, type, w, h);
  }, framerate);
});

video.addEventListener("playing", () => {
  const progress = document.getElementById("progress-bar");
  setInterval(() => {
    progress.value = video.currentTime / video.duration;
  }, 1000);
});

// Setup buttons for video control

// Go Backwards button

document.getElementById("backward").addEventListener("click", () => {
  video.currentTime = video.currentTime - 5 > 0 ? video.currentTime - 5 : 0;
});

// Play/Pause toggle button

document.getElementById("toggle").addEventListener("click", (event) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Rewind video button

document.getElementById("rewind").addEventListener("click", () => {
  video.currentTime = 0;
});

// Go Forwards button

document.getElementById("forward").addEventListener("click", () => {
  let paused = video.paused;
  video.currentTime =
    video.currentTime + 5 < video.duration
      ? video.currentTime + 5
      : video.duration;
  if (paused) {
    video.pause();
  }
});

// Screen orientation responsiveness

window.matchMedia("(orientation: portrait)").addEventListener("change", () => {
  [windowSizes[0], windowSizes[1]] = [windowSizes[1], windowSizes[0]];
  if (video.src) {
    [w, h] = updateFileCanvas(
      videoCanvas,
      windowSizes[0],
      video.videoWidth,
      video.videoHeight
    );
  }
});

menu();

registerServiceWorker();
