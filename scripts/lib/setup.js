export function setupCamera(cam, camDiv, callback) {
    let hasVideoInput;
    navigator.mediaDevices.enumerateDevices().then((devices) => {
        devices.forEach((device) => {
            if (device.kind == "videoinput") {
                hasVideoInput = true;
            }
        })
    }).then(() => {
        if (!hasVideoInput) {
            let errorMessage = document.createElement("p");
            errorMessage.innerHTML = "Erro: Seu navegador não possui uma câmera";
            camDiv.appendChild(errorMessage);
        } else {
            navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { ideal: "environment" },
                },
                audio: false
            }).then(stream => {
                cam.srcObject = stream;
                cam.play();
                cam.style.display = "none";
                callback();
            });
        }
    }).catch(() => {
        let errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Erro: Não foi possível verificar se seu navegador possui uma câmera";
        camDiv.appendChild(errorMessage);
    });
}

export function setupFile(type, element, file) {
    type.style.display = "block";
    element.src = URL.createObjectURL(file.files[0]);
}
