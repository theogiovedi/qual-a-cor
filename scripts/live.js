var cam, w, h;
const camDiv = document.getElementById("cam");
const errorMessage = document.createElement("p");
var hasVideoInput = false;

function createCameraCanvas() {
    camDiv.innerHTML = "";
    w = window.innerWidth - 40;
    if (w > 600) {
        w = 600;
    }
    if (window.innerWidth < window.innerHeight) {
        h = w * 4 / 3;
    }
    else {
        h = w * 3 / 4;
    }
    canvas = createCanvas(w, h);
    canvas.parent("cam");
}

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
            cam = createCapture({
                video: {
                    facingMode: { ideal: "environment" },
                }
            });
            cam.hide();
            createCameraCanvas();
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
    switch (type) {

        case "normal":
            image(camFrame, 0, 0, w, h);
            return
        case "prot":
            for (let i = 0; i < camFrame.pixels.length; i += 4) {
                const rgb = [
                    [camFrame.pixels[i] / 255],
                    [camFrame.pixels[i + 1] / 255],
                    [camFrame.pixels[i + 2] / 255]
                ]

                const matrix = [
                    [0.152286, 1.052583, -0.204868],
                    [0.114503, 0.786281, 0.099216],
                    [-0.003882, -0.048116, 1.051998]
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

                camFrame.pixels[i] = Math.floor(simulatedRgb[0][0] * 255);
                camFrame.pixels[i + 1] = Math.floor(simulatedRgb[1][0] * 255);
                camFrame.pixels[i + 2] = Math.floor(simulatedRgb[2][0] * 255);
            }
            break;
        case "deut":
            for (let i = 0; i < camFrame.pixels.length; i += 4) {
                const rgb = [
                    [camFrame.pixels[i] / 255],
                    [camFrame.pixels[i + 1] / 255],
                    [camFrame.pixels[i + 2] / 255]
                ]

                const matrix = [
                    [0.367322, 0.860646, -0.227968],
                    [0.280085, 0.672501, 0.047413],
                    [-0.011820, 0.042940, 0.968881]
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

                camFrame.pixels[i] = Math.floor(simulatedRgb[0][0] * 255);
                camFrame.pixels[i + 1] = Math.floor(simulatedRgb[1][0] * 255);
                camFrame.pixels[i + 2] = Math.floor(simulatedRgb[2][0] * 255);
            }
            break;
        case "trit":
            for (let i = 0; i < camFrame.pixels.length; i += 4) {
                const rgb = [
                    [camFrame.pixels[i] / 255],
                    [camFrame.pixels[i + 1] / 255],
                    [camFrame.pixels[i + 2] / 255]
                ]

                const matrix = [
                    [1.255528, -0.076749, -0.178779],
                    [-0.078411, 0.930809, 0.147602],
                    [0.004733, 0.691367, 0.303900]
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

                camFrame.pixels[i] = Math.floor(simulatedRgb[0][0] * 255);
                camFrame.pixels[i + 1] = Math.floor(simulatedRgb[1][0] * 255);
                camFrame.pixels[i + 2] = Math.floor(simulatedRgb[2][0] * 255);
            }
            break;
    }

    camFrame.updatePixels();
    image(camFrame, 0, 0, w, h);
}

let viewport = window.matchMedia("(orientation: landscape)")

viewport.addEventListener("change", createCameraCanvas);