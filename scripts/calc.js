import { colors } from './colors.js'

function multiplyMatrix(red, green, blue, matrix) {
    const rgb = [
        [red / 255],
        [green / 255],
        [blue / 255]
    ]

    const simulatedRgb = [
        [(rgb[0][0] * matrix[0][0]) + (rgb[1][0] * matrix[0][1]) + (rgb[2][0] * matrix[0][2])],
        [(rgb[0][0] * matrix[1][0]) + (rgb[1][0] * matrix[1][1]) + (rgb[2][0] * matrix[1][2])],
        [(rgb[0][0] * matrix[2][0]) + (rgb[1][0] * matrix[2][1]) + (rgb[2][0] * matrix[2][2])]
    ]

    if (simulatedRgb[0][0] < 0) {
        simulatedRgb[0][0] = 0;
    } else if (simulatedRgb[0][0] > 1) {
        simulatedRgb[0][0] = 1;
    }

    if (simulatedRgb[1][0] < 0) {
        simulatedRgb[1][0] = 0;
    } else if (simulatedRgb[1][0] > 1) {
        simulatedRgb[1][0] = 1;
    }


    if (simulatedRgb[2][0] < 0) {
        simulatedRgb[2][0] = 0;
    } else if (simulatedRgb[2][0] > 1) {
        simulatedRgb[2][0] = 1;
    }

    return [Math.floor(simulatedRgb[0][0] * 255), Math.floor(simulatedRgb[1][0] * 255), Math.floor(simulatedRgb[2][0] * 255)];
}

function getColorDifference(rgb, rgb2) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const red2 = parseInt(rgb2[1] + rgb2[2], 16);
    const green2 = parseInt(rgb2[3] + rgb2[4], 16);
    const blue2 = parseInt(rgb2[5] + rgb2[6], 16);

    return Math.sqrt(Math.pow(red2 - red, 2) + Math.pow(green2 - green, 2) + Math.pow(blue2 - blue, 2))
}

export function normalToProt(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const protMatrix = [
        [0.152286, 1.052583, -0.204868],
        [0.114503, 0.786281, 0.099216],
        [-0.003882, -0.048116, 1.051998]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, protMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

export function normalToDeut(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const deutMatrix = [
        [0.367322, 0.860646, -0.227968],
        [0.280085, 0.672501, 0.047413],
        [-0.011820, 0.042940, 0.968881]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, deutMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

export function normalToTrit(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const tritMatrix = [
        [1.255528, -0.076749, -0.178779],
        [-0.078411, 0.930809, 0.147602],
        [0.004733, 0.691367, 0.303900]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, tritMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

export function getRelativeLuminance(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);

    const rsRgb = red / 255;
    const gsRgb = green / 255;
    const bsRgb = blue / 255;

    const r = rsRgb <= 0.03928 ? rsRgb / 12.92 : ((rsRgb + 0.055) / 1.055) ** 2.4;
    const g = gsRgb <= 0.03928 ? gsRgb / 12.92 : ((gsRgb + 0.055) / 1.055) ** 2.4;
    const b = bsRgb <= 0.03928 ? bsRgb / 12.92 : ((bsRgb + 0.055) / 1.055) ** 2.4;

    return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
}

export function getContrast(rgb, rgb2) {
    const l = getRelativeLuminance(rgb);
    const l2 = getRelativeLuminance(rgb2);

    let c;

    if (l > l2) {
        c = (l + 0.05) / (l2 + 0.05)
    } else {
        c = (l2 + 0.05) / (l + 0.05)
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