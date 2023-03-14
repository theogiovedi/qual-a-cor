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

function normalToProtanomaly(r, g, b) {
    const protanomalyMatrix = [
        [0.152286, 1.052583, -0.204868],
        [0.114503, 0.786281, 0.099216],
        [-0.003882, -0.048116, 1.051998]
    ]
    const simulatedRgb = multiplyMatrix(r, g, b, protanomalyMatrix);
    return simulatedRgb;
}

function normalToDeuteranomaly(r, g, b) {
    const deuteranomalyMatrix = [
        [0.367322, 0.860646, -0.227968],
        [0.280085, 0.672501, 0.047413],
        [-0.011820, 0.042940, 0.968881]
    ]
    const simulatedRgb = multiplyMatrix(r, g, b, deuteranomalyMatrix);
    return simulatedRgb;
}

function normalToTritanomaly(r, g, b) {
    const tritanomalyMatrix = [
        [1.255528, -0.076749, -0.178779],
        [-0.078411, 0.930809, 0.147602],
        [0.004733, 0.691367, 0.303900]
    ]
    const simulatedRgb = multiplyMatrix(r, g, b, tritanomalyMatrix);
    return simulatedRgb;
}

var cam, canvasWidth, canvasHeight;
const camDiv = document.getElementById("cam");
const errorMessage = document.createElement("p");
var hasVideoInput = false;

function setup() {

    navigator.mediaDevices.enumerateDevices().then((devices) => {
        devices.forEach((device) => {
            if (device.kind == "videoinput") {
                hasVideoInput = true;
            }
        })
    }).catch(() => {
        errorMessage.innerHTML = "Erro: Não foi possível verificar se seu navegador possui uma câmera";
        camDiv.appendChild(errorMessage);
        return;
    }).then(() => {
        if (!hasVideoInput) {
            errorMessage.innerHTML = "Erro: Seu navegador não possui uma câmera";
            camDiv.appendChild(errorMessage);
            return;
        } else {
            cam = createCapture(VIDEO);
            cam.hide();
            canvasWidth = windowWidth - 40;
            if (canvasWidth > 600) {
                canvasWidth = 600;
            }
            canvasHeight = canvasWidth * 3 / 4;
            canvas = createCanvas(canvasWidth, canvasHeight);
            canvas.parent("cam");
        }
    });


}

function draw() {

    if (!hasVideoInput) {
        return;
    }

    camFrame = cam.get();

    camFrame.loadPixels();
    const type = document.getElementById("type").value;
    if (type == "normal") {
        image(camFrame, 0, 0, canvasWidth, canvasHeight);
        return
    } else if (type == "prot") {
        for (let i = 0; i < camFrame.pixels.length; i += 4) {
            const r = camFrame.pixels[i];
            const g = camFrame.pixels[i + 1];
            const b = camFrame.pixels[i + 2];
            const rgbSimulated = normalToProtanomaly(r, g, b);
            camFrame.pixels[i] = rgbSimulated[0];
            camFrame.pixels[i + 1] = rgbSimulated[1];
            camFrame.pixels[i + 2] = rgbSimulated[2];
        }
    } else if (type == "deut") {
        for (let i = 0; i < camFrame.pixels.length; i += 4) {
            const r = camFrame.pixels[i];
            const g = camFrame.pixels[i + 1];
            const b = camFrame.pixels[i + 2];
            const rgbSimulated = normalToDeuteranomaly(r, g, b);
            camFrame.pixels[i] = rgbSimulated[0];
            camFrame.pixels[i + 1] = rgbSimulated[1];
            camFrame.pixels[i + 2] = rgbSimulated[2];
        }
    } else if (type == "trit") {
        for (let i = 0; i < camFrame.pixels.length; i += 4) {
            const r = camFrame.pixels[i];
            const g = camFrame.pixels[i + 1];
            const b = camFrame.pixels[i + 2];
            const rgbSimulated = normalToTritanomaly(r, g, b);
            camFrame.pixels[i] = rgbSimulated[0];
            camFrame.pixels[i + 1] = rgbSimulated[1];
            camFrame.pixels[i + 2] = rgbSimulated[2];
        }
    }

    camFrame.updatePixels();
    image(camFrame, 0, 0, canvasWidth, canvasHeight);
}
