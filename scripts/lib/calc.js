import { colors } from "./colors.js";

export function rgbToHex(rgb) {
  return (
    "#" +
    rgb[0].toString(16).padStart(2, "0").toUpperCase() +
    rgb[1].toString(16).padStart(2, "0").toUpperCase() +
    rgb[2].toString(16).padStart(2, "0").toUpperCase()
  );
}

export function hexToRgb(rgb) {
  return [
    parseInt(rgb[1] + rgb[2], 16),
    parseInt(rgb[3] + rgb[4], 16),
    parseInt(rgb[5] + rgb[6], 16),
  ];
}

function getColorDifference(rgb, rgb2) {
  const [red, green, blue] = hexToRgb(rgb);
  const [red2, green2, blue2] = hexToRgb(rgb2);

  return Math.sqrt(
    Math.pow(red2 - red, 2) +
      Math.pow(green2 - green, 2) +
      Math.pow(blue2 - blue, 2)
  );
}

export function normalToProt(rgb) {
  let red =
    ((rgb[0] / 255) * 0.152286 +
      (rgb[1] / 255) * 1.052583 +
      (rgb[2] / 255) * -0.204868) *
    255;
  let green =
    ((rgb[0] / 255) * 0.114503 +
      (rgb[1] / 255) * 0.786281 +
      (rgb[2] / 255) * 0.099216) *
    255;
  let blue =
    ((rgb[0] / 255) * -0.003882 +
      (rgb[1] / 255) * -0.048116 +
      (rgb[2] / 255) * 1.051998) *
    255;

  red = red < 0 ? 0 : Math.floor(red);
  green = green < 0 ? 0 : Math.floor(green);
  blue = blue < 0 ? 0 : Math.floor(blue);

  red = red > 255 ? 255 : red;
  green = green > 255 ? 255 : green;
  blue = blue > 255 ? 255 : blue;

  return [red, green, blue];
}

export function normalToDeut(rgb) {
  let red =
    ((rgb[0] / 255) * 0.367322 +
      (rgb[1] / 255) * 0.860646 +
      (rgb[2] / 255) * -0.227968) *
    255;
  let green =
    ((rgb[0] / 255) * 0.280085 +
      (rgb[1] / 255) * 0.672501 +
      (rgb[2] / 255) * 0.047413) *
    255;
  let blue =
    ((rgb[0] / 255) * -0.01182 +
      (rgb[1] / 255) * 0.04294 +
      (rgb[2] / 255) * 0.968881) *
    255;

  red = red < 0 ? 0 : Math.floor(red);
  green = green < 0 ? 0 : Math.floor(green);
  blue = blue < 0 ? 0 : Math.floor(blue);

  red = red > 255 ? 255 : red;
  green = green > 255 ? 255 : green;
  blue = blue > 255 ? 255 : blue;

  return [red, green, blue];
}

export function normalToTrit(rgb) {
  let red =
    ((rgb[0] / 255) * 1.255528 +
      (rgb[1] / 255) * -0.076749 +
      (rgb[2] / 255) * -0.178779) *
    255;
  let green =
    ((rgb[0] / 255) * -0.078411 +
      (rgb[1] / 255) * 0.930809 +
      (rgb[2] / 255) * 0.147602) *
    255;
  let blue =
    ((rgb[0] / 255) * 0.004733 +
      (rgb[1] / 255) * 0.691367 +
      (rgb[2] / 255) * 0.3039) *
    255;

  red = red < 0 ? 0 : Math.floor(red);
  green = green < 0 ? 0 : Math.floor(green);
  blue = blue < 0 ? 0 : Math.floor(blue);

  red = red > 255 ? 255 : red;
  green = green > 255 ? 255 : green;
  blue = blue > 255 ? 255 : blue;

  return [red, green, blue];
}

export function getRelativeLuminance(rgb) {
  const [red, green, blue] = hexToRgb(rgb);

  const rsRgb = red / 255;
  const gsRgb = green / 255;
  const bsRgb = blue / 255;

  const r = rsRgb <= 0.03928 ? rsRgb / 12.92 : ((rsRgb + 0.055) / 1.055) ** 2.4;
  const g = gsRgb <= 0.03928 ? gsRgb / 12.92 : ((gsRgb + 0.055) / 1.055) ** 2.4;
  const b = bsRgb <= 0.03928 ? bsRgb / 12.92 : ((bsRgb + 0.055) / 1.055) ** 2.4;

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getContrast(rgb, rgb2) {
  const l = getRelativeLuminance(rgb);
  const l2 = getRelativeLuminance(rgb2);

  let c;

  if (l > l2) {
    c = (l + 0.05) / (l2 + 0.05);
  } else {
    c = (l2 + 0.05) / (l + 0.05);
  }

  return c.toFixed(2);
}

export function getClosestColor(rgb) {
  let minDifference = -1;
  let minDifferenceHex;
  let difference;
  Object.keys(colors).forEach((hex) => {
    difference = getColorDifference(rgb, hex);
    if (minDifference == -1 || difference < minDifference) {
      minDifference = difference;
      minDifferenceHex = hex;
    }
  });
  return minDifferenceHex;
}

export function kMeans(pixels, k = 5) {
  // K-means algorithm for extracting a palette of k colors

  let centroids = new Array(k);
  let oldCentroids = new Array(k);

  // Forgy's Initialization: Randomly choosing k observations from dataset

  // Get k random different numbers

  let randoms = [];
  while (randoms.length < k) {
    let random = Math.floor(Math.random() * pixels.data.length);
    if (randoms.indexOf(random) == -1) {
      randoms.push(random);
    }
  }

  // Get the color channel values for each random number

  for (let i = 0; i < k; i++) {
    centroids[i] = [
      pixels.data[randoms[i] - (randoms[i] % 4)], // get the nearest multiple of 4 less than randoms[i]
      pixels.data[randoms[i] - (randoms[i] % 4) + 1],
      pixels.data[randoms[i] - (randoms[i] % 4) + 2],
    ];
    oldCentroids[i] = [0, 0, 0];
  }

  let maxIterations = 10;
  let convergence = false;

  // Loop through iterations until achieve convergence or exceed max iterations

  for (
    let iterations = 0;
    iterations < maxIterations && !convergence;
    iterations++
  ) {
    let sum = new Array(k);
    let clusterLength = new Array(k);

    for (let i = 0; i < k; i++) {
      sum[i] = [0, 0, 0];
      clusterLength[i] = 0;
    }

    for (let i = 0; i < pixels.data.length; i += 4) {
      // Assignment Step

      // Get the pixel with its color channels

      let rgb = [pixels.data[i], pixels.data[i + 1], pixels.data[i + 2]];

      // Get the closest centroid

      let euclideanDistance;
      let closestEuclideanDistance = Number.MAX_VALUE;
      let closestCentroid;

      for (let j = 0; j < k; j++) {
        // Calculate the squared Euclidean distance between the current pixel and each of the k centroids

        euclideanDistance =
          Math.pow(rgb[0] - centroids[j][0], 2) +
          Math.pow(rgb[1] - centroids[j][1], 2) +
          Math.pow(rgb[2] - centroids[j][2], 2);

        // Check if the current centroid is the closest to the current pixel

        if (euclideanDistance < closestEuclideanDistance) {
          closestEuclideanDistance = euclideanDistance;

          // Assign the current pixel to it's closest centroid

          closestCentroid = j;
        }
      }

      // Update the length of the cluster of the closest centroid

      clusterLength[closestCentroid]++;

      // Update Step

      // Update the sum of all points of the cluster

      sum[closestCentroid][0] += rgb[0];
      sum[closestCentroid][1] += rgb[1];
      sum[closestCentroid][2] += rgb[2];

      // Get the arithmetic mean of all points of the cluster

      centroids[closestCentroid][0] =
        sum[closestCentroid][0] / clusterLength[closestCentroid];
      centroids[closestCentroid][1] =
        sum[closestCentroid][1] / clusterLength[closestCentroid];
      centroids[closestCentroid][2] =
        sum[closestCentroid][2] / clusterLength[closestCentroid];
    }

    // Check for convergence

    convergence = true;

    for (let i = 0; i < k; i++) {
      for (let j = 0; j < centroids[i].length; j++) {
        if (centroids[i][j] != oldCentroids[i][j]) {
          convergence = false;
        }
        oldCentroids[i][j] = centroids[i][j]; // update oldCentroids
      }
    }
  }

  // Round the numbers of the centroids

  for (let i = 0; i < k; i++) {
    centroids[i][0] = Math.floor(centroids[i][0]);
    centroids[i][1] = Math.floor(centroids[i][1]);
    centroids[i][2] = Math.floor(centroids[i][2]);
  }

  return centroids;
}
