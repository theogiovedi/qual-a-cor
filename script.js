const colors = {
    "#f4c430": "Açafrão",
    "#00ffff": "Ciano",
    "#7fffd4": "Água-marinha",
    "#66cdaa": "Água-marinha média",
    "#e32636": "Alizarina",
    "#ffffe0": "Amarelo claro",
    "#adff2f": "Amarelo esverdeado",
    "#ffff00": "Amarelo",
    "#fafad2": "Amarelo ouro claro",
    "#eead2d": "Amarelo queimado",
    "#ffbf00": "Âmbar",
    "#dda0dd": "Ameixa",
    "#ffebcd": "Amêndoa",
    "#9966cc": "Ametista",
    "#7ba05b": "Aspargo",
    "#0000ff": "Azul",
    "#4682b4": "Azul aço",
    "#b0c4de": "Azul aço claro",
    "#f0f8ff": "Azul alice",
    "#6a5acd": "Azul ardósia",
    "#8470ff": "Azul ardósia claro",
    "#483d8b": "Azul ardósia escuro",
    "#7b68ee": "Azul ardósia médio",
    "#b8cad4": "Azul areado",
    "#5f9ea0": "Azul cadete",
    "#054f77": "Azul camarada",
    "#007fff": "Azul celeste brilhante",
    "#f0ffff": "Azul celeste",
    "#87ceeb": "Azul céu",
    "#87cefa": "Azul céu claro",
    "#00bfff": "Azul céu profundo",
    "#add8e6": "Azul claro",
    "#0047ab": "Azul cobalto",
    "#00008b": "Azul escuro",
    "#6495ed": "Azul flor de milho",
    "#5d8aa8": "Azul força aérea",
    "#1e90ff": "Azul furtivo",
    "#a6aa3e": "Azul manteiga",
    "#120a8f": "Azul marinho",
    "#0000cd": "Azul médio",
    "#191970": "Azul meia-noite",
    "#084d6e": "Azul petróleo",
    "#b0e0e6": "Azul pólvora",
    "#4169e1": "Azul real",
    "#248eff": "Azul taparuere",
    "#8a2be2": "Azul violeta",
    "#f5f5dc": "Bege",
    "#800000": "Bordô",
    "#900020": "Borgonha",
    "#faebd7": "Branco antigo",
    "#f8f8ff": "Branco fantasma",
    "#ffffff": "Branco",
    "#fffaf0": "Branco floral",
    "#f5f5f5": "Branco fumaça",
    "#ffdead": "Branco navajo",
    "#cd7f32": "Bronze",
    "#bdb76b": "Caqui escuro",
    "#f0e68c": "Caqui",
    "#8b5742": "Caramelo",
    "#d8bfd8": "Cardo",
    "#dc143c": "Carmesim",
    "#712f26": "Carmim",
    "#f5fffb": "Carmim carnáceo",
    "#8b0000": "Castanho avermelhado",
    "#d2b48c": "Castanho claro",
    "#ed9121": "Cenoura",
    "#de3163": "Cereja",
    "#f400a1": "Cereja Hollywood",
    "#d2691e": "Chocolate",
    "#e0ffff": "Ciano claro",
    "#008b8b": "Ciano escuro",
    "#808080": "Cinza",
    "#708090": "Cinza ardósia",
    "#778899": "Cinza ardósia claro",
    "#2f4f4f": "Cinza ardósia escuro",
    "#d3d3d3": "Cinza claro",
    "#a9a9a9": "Cinza escuro",
    "#696969": "Cinza fosco",
    "#dcdcdc": "Cinza médio",
    "#b87333": "Cobre",
    "#fff5ee": "Concha",
    "#f08080": "Coral claro",
    "#ff7f50": "Coral",
    "#f0dc82": "Couro",
    "#ffe4c4": "Creme de marisco",
    "#f5fffa": "Creme de menta",
    "#fffdd0": "Creme",
    "#daa520": "Dourado",
    "#b8860b": "Dourado escuro",
    "#eee8aa": "Dourado pálido",
    "#ff2400": "Escarlate",
    "#50c878": "Esmeralda",
    "#d19275": "Feldspato",
    "#b7410e": "Ferrugem",
    "#ff00ff": "Magenta",
    "#3d2b1f": "Fuligem",
    "#831d1c": "Grená",
    "#2e8b57": "Herbal",
    "#4b0082": "Índigo",
    "#000000": "Preto",
    "#00a86b": "Jade",
    "#ff4500": "Jambo",
    "#ff8c00": "Laranja escuro",
    "#ffa500": "Laranja",
    "#fff0f5": "Lavanda avermelhada",
    "#e6e6fa": "Lavanda",
    "#c8a2c8": "Lilás",
    "#fde910": "Lima",
    "#00ff00": "Limão",
    "#faf0e6": "Linho",
    "#deb887": "Madeira",
    "#8b008b": "Magenta escuro",
    "#e0b0ff": "Malva",
    "#ffefd5": "Mamão batido",
    "#f0fff0": "Maná",
    "#fffff0": "Marfim",
    "#964b00": "Marrom",
    "#f4a460": "Marrom amarelado",
    "#a52a2a": "Marrom claro",
    "#bc8f8f": "Marrom rosado",
    "#8b4513": "Marrom sela",
    "#fff8dc": "Milho Claro",
    "#fbec5d": "Milho",
    "#ffe4b5": "Mocassim",
    "#ffdb58": "Mostarda",
    "#000080": "Naval",
    "#fffafa": "Neve",
    "#cc7722": "Ocre",
    "#808000": "Oliva",
    "#556b2f": "Oliva escura",
    "#6b8e23": "Oliva parda",
    "#da70d6": "Orquídea",
    "#9932cc": "Orquídea escura",
    "#ba55d3": "Orquídea média",
    "#ffd700": "Ouro",
    "#cd853f": "Pele",
    "#ffdab9": "Pêssego",
    "#c0c0c0": "Prata",
    "#800080": "Púrpura",
    "#9370db": "Púrpura média",
    "#111111": "Quantum",
    "#fdf5e6": "Renda antiga",
    "#ff007f": "Rosa brilhante",
    "#fc0fc0": "Rosa chocante",
    "#ffb6c1": "Rosa claro",
    "#ffe4e1": "Rosa embaçado",
    "#ffcbdb": "Rosa",
    "#ff69b4": "Rosa forte",
    "#ff1493": "Rosa profundo",
    "#993399": "Roxo",
    "#6d351a": "Rútilo",
    "#ffa07a": "Salmão claro",
    "#e9967a": "Salmão escuro",
    "#fa7f72": "Salmão",
    "#705714": "Sépia",
    "#ff8247": "Siena",
    "#e2725b": "Terracota",
    "#b22222": "Tijolo refratário",
    "#ff6347": "Tomate",
    "#ff2401": "Triássico",
    "#f5deb3": "Trigo",
    "#40e0d0": "Turquesa",
    "#00ced1": "Turquesa escura",
    "#48d1cc": "Turquesa média",
    "#afeeee": "Turquesa pálida",
    "#ec2300": "Urucum",
    "#008000": "Verde",
    "#9acd32": "Verde amarelado",
    "#008080": "Verde-azulado",
    "#90ee90": "Verde claro",
    "#006400": "Verde escuro",
    "#228b22": "Verde floresta",
    "#ccff33": "Verde fluorescente",
    "#7cfc00": "Verde grama",
    "#32cd32": "Verde lima",
    "#20b2aa": "Verde mar claro",
    "#8fbc8f": "Verde mar escuro",
    "#3cb371": "Verde mar médio",
    "#78866b": "Verde militar",
    "#98fb98": "Verde pálido",
    "#7fff00": "Verde Paris",
    "#00ff7f": "Verde primavera",
    "#00fa9a": "Verde primavera médio",
    "#ff0000": "Vermelho",
    "#cd5c5c": "Vermelho indiano",
    "#d02090": "Vermelho violeta",
    "#c71585": "Vermelho violeta médio",
    "#db7093": "Vermelho violeta pálido",
    "#ee82ee": "Violeta",
    "#9400d3": "Violeta escuro"
}

const darkMode = document.getElementById("toggle-dark-mode");
const logo = document.getElementById("navlogo");
const resultsButton = document.getElementById("results-button");

function toggleDarkMode() {
    const root = document.querySelector(":root");
    const style = getComputedStyle(root);
    const bg = style.getPropertyValue("--background-color");
    const fg = style.getPropertyValue("--foreground-color");
    const black = style.getPropertyValue("--black");
    const white = style.getPropertyValue("--white");
    // To Light Mode
    if (fg == white && bg == black) {
        root.style.setProperty("--foreground-color", black);
        root.style.setProperty("--background-color", white);
        darkMode.classList.toggle("bi-moon-stars-fill");
        darkMode.classList.toggle("bi-brightness-high-fill");
        logo.src = "navlogo-light.png";
        // To Dark Mode
    } else {
        root.style.setProperty("--foreground-color", white);
        root.style.setProperty("--background-color", black);
        darkMode.classList.toggle("bi-moon-stars-fill");
        darkMode.classList.toggle("bi-brightness-high-fill");
        logo.src = "navlogo-dark.png";
    }
}


function getColorDifference(rgb, rgb2) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green =  parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const red2 = parseInt(rgb2[1] + rgb2[2], 16);
    const green2 = parseInt(rgb2[3] + rgb2[4], 16);
    const blue2 = parseInt(rgb2[5] + rgb2[6], 16);

    return Math.sqrt(Math.pow(red2 - red, 2) + Math.pow(green2 - green, 2) + Math.pow(blue2 - blue, 2))
}

function getClosestColor(rgb) {
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

function getColorName(rgb) {
    return colors[rgb];
}


function multiplyMatrix(red, green, blue, matrix) {
    const rgb = [
        [red / 255],
        [green / 255],
        [blue / 255]
    ]

    console.log(matrix);
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

    console.log(simulatedRgb)
    
    return [Math.floor(simulatedRgb[0][0] * 255), Math.floor(simulatedRgb[1][0] * 255), Math.floor(simulatedRgb[2][0] * 255)];
}

function normalToProtanomaly(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green =  parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const protanomalyMatrix = [
        [ 0.152286, 1.052583, -0.204868 ],
        [ 0.114503, 0.786281, 0.099216 ],
        [ -0.003882, -0.048116, 1.051998 ]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, protanomalyMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

function normalToDeuteranomaly(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green =  parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const deuteranomalyMatrix = [
        [ 0.367322, 0.860646, -0.227968 ],
        [ 0.280085, 0.672501, 0.047413 ],
        [ -0.011820, 0.042940, 0.968881 ]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, deuteranomalyMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

function normalToTritanomaly(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green =  parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const tritanomalyMatrix = [
        [ 1.255528, -0.076749, -0.178779 ],
        [ -0.078411, 0.930809, 0.147602 ],
        [ 0.004733, 0.691367, 0.303900 ]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, tritanomalyMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

function showResults() {
    let color = document.getElementById("text").value;
    if (!color) {
        color = document.getElementById("color-picker").value;
    }

    const colorHex = color;
    const closestColor = getClosestColor(colorHex)
    const colorProt = normalToProtanomaly(colorHex);
    const colorDeut = normalToDeuteranomaly(colorHex);
    const colorTrit = normalToTritanomaly(colorHex);
    const colorName = getColorName(closestColor);

    const results = document.getElementById("results");
    results.innerHTML = "";

    const title = document.createElement("h2");
    title.innerHTML = "Resultados";
    results.appendChild(title);

    const colorNameElement = document.createElement("h3");
    colorNameElement.innerHTML = colorName;
    if (colorHex != closestColor) {
        const approxElement = document.createElement("span");
        approxElement.innerHTML = "aprox.";
        approxElement.classList.add("approx");
        colorNameElement.appendChild(approxElement);
    }
    results.appendChild(colorNameElement);

    const colorHexElement = document.createElement("p");
    colorHexElement.innerHTML = "Normal: ";
    results.appendChild(colorHexElement);

    const colorHexSquare = document.createElement("div");
    colorHexSquare.classList.add("color-square");
    colorHexSquare.style.backgroundColor = colorHex;
    colorHexElement.appendChild(colorHexSquare);

    const colorHexNameElement = document.createElement("code");
    colorHexNameElement.innerHTML = colorHex;
    colorHexElement.append(colorHexNameElement);

    const colorProtElement = document.createElement("p");
    colorProtElement.innerHTML = "Protanomalia: ";
    results.appendChild(colorProtElement);

    const colorProtSquare = document.createElement("div");
    colorProtSquare.classList.add("color-square");
    colorProtSquare.style.backgroundColor = colorProt;
    colorProtElement.appendChild(colorProtSquare);

    const colorProtHexElement = document.createElement("code");
    colorProtHexElement.innerHTML = colorProt;
    colorProtElement.append(colorProtHexElement);

    const colorDeutElement = document.createElement("p");
    colorDeutElement.innerHTML = "Deuteranomalia: ";
    results.appendChild(colorDeutElement);

    const colorDeutSquare = document.createElement("div");
    colorDeutSquare.classList.add("color-square");
    colorDeutSquare.style.backgroundColor = colorDeut;
    colorDeutElement.appendChild(colorDeutSquare);

    const colorDeutHexElement = document.createElement("code");
    colorDeutHexElement.innerHTML = colorDeut;
    colorDeutElement.append(colorDeutHexElement);

    const colorTritElement = document.createElement("p");
    colorTritElement.innerHTML = "Tritanomalia: ";
    results.appendChild(colorTritElement);

    const colorTritSquare = document.createElement("div");
    colorTritSquare.classList.add("color-square");
    colorTritSquare.style.backgroundColor = colorTrit;
    colorTritElement.appendChild(colorTritSquare);

    const colorTritHexElement = document.createElement("code");
    colorTritHexElement.innerHTML = colorTrit;
    colorTritElement.append(colorTritHexElement);
}

darkMode.addEventListener("click", toggleDarkMode);
resultsButton.addEventListener("click", showResults);