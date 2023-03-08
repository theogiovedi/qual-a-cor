const darkMode = document.getElementById("toggle-dark-mode");
const resultsButton = document.getElementById("results-button");

// COLORS

const colors = {
    "#7FFFD4": "Água-marinha",
    "#66CDAA": "Água-marinha média",
    "#FFFF00": "Amarelo",
    "#FFFFE0": "Amarelo claro",
    "#ADFF2F": "Amarelo esverdeado",
    "#FAFAD2": "Amarelo ouro claro",
    "#DDA0DD": "Ameixa",
    "#FFEBCD": "Amêndoa",
    "#0000FF": "Azul",
    "#F0F8FF": "Azul alice",
    "#6A5ACD": "Azul ardósia",
    "#483D8B": "Azul ardósia escuro",
    "#4682B4": "Azul aço",
    "#B0C4DE": "Azul aço claro",
    "#5F9EA0": "Azul cadete",
    "#F0FFFF": "Azul celeste",
    "#ADD8E6": "Azul claro",
    "#87CEEB": "Azul céu",
    "#87CEFA": "Azul céu claro",
    "#00BFFF": "Azul céu profundo",
    "#00008B": "Azul escuro",
    "#6495ED": "Azul flor de milho",
    "#1E90FF": "Azul furtivo",
    "#191970": "Azul meia-noite",
    "#0000CD": "Azul médio",
    "#B0E0E6": "Azul pólvora",
    "#4169e1": "Azul real",
    "#8A2BE2": "Azul violeta",
    "#F5F5DC": "Bege",
    "#800000": "Bordô",
    "#FFFFFF": "Branco",
    "#FAEBD7": "Branco antigo",
    "#F8F8FF": "Branco fantasma",
    "#FFFAF0": "Branco floral",
    "#FFDEAD": "Branco navajo",
    "#F0E68C": "Caqui",
    "#D8BFD8": "Cardo",
    "#DC143C": "Carmesim",
    "#8B0000": "Castanho avermelhado",
    "#D2B48C": "Castanho claro",
    "#D2691E": "Chocolate",
    "#00FFFF": "Ciano",
    "#E0FFFF": "Ciano claro",
    "#008B8B": "Ciano escuro",
    "#808080": "Cinza",
    "#708090": "Cinza ardósia",
    "#778899": "Cinza ardósia claro",
    "#2F4F4F": "Cinza ardósia escuro",
    "#D3D3D3": "Cinza claro",
    "#A9A9A9": "Cinza escuro",
    "#696969": "Cinza fosco",
    "#DCDCDC": "Cinza médio",
    "#FFF5EE": "Concha",
    "#FF7F50": "Coral",
    "#F08080": "Coral claro",
    "#FFE4C4": "Creme de marisco",
    "#F5FFFA": "Creme de menta",
    "#BDB76B": "Caqui escuro",
    "#DAA520": "Dourado",
    "#B8860B": "Dourado escuro",
    "#EEE8AA": "Dourado pálido",
    "#FF00FF": "Fúchsia",
    "#2E8B57": "Herbal",
    "#4B0082": "Índigo",
    "#FF4500": "Jambo",
    "#FFA500": "Laranja",
    "#FF8C00": "Laranja escuro",
    "#E6E6FA": "Lavanda",
    "#FFF0F5": "Lavanda avermelhada",
    "#00FF00": "Lima",
    "#FAF0E6": "Linho",
    "#DEB887": "Madeira",
    "#8B008B": "Magenta escuro",
    "#FFEFD5": "Mamão batido",
    "#F0FFF0": "Maná",
    "#FFFFF0": "Marfim",
    "#F4A460": "Marrom amarelado",
    "#A52A2A": "Marrom claro",
    "#BC8F8F": "Marrom rosado",
    "#8B4513": "Marrom sela",
    "#FFF8DC": "Milho claro",
    "#FFE4B5": "Mocassim",
    "#000080": "Naval",
    "#FFFAFA": "Neve",
    "#808000": "Oliva",
    "#556B2F": "Oliva escura",
    "#6B8E23": "Oliva parda",
    "#DA70D6": "Orquídea",
    "#9932CC": "Orquídea escura",
    "#BA55D3": "Orquídea média",
    "#FFD700": "Ouro",
    "#CD853F": "Pardo",
    "#C0C0C0": "Prata",
    "#000000": "Preto",
    "#FFDAB9": "Pêssego",
    "#800080": "Púrpura",
    "#9370DB": "Púrpura média",
    "#FDF5E6": "Renda antiga",
    "#FFC0CB": "Rosa",
    "#FFE4E1": "Rosa embaçado",
    "#FF69B4": "Rosa forte",
    "#FF1493": "Rosa profundo",
    "#fa8072": "Salmão",
    "#FFA07A": "Salmão claro",
    "#E9967A": "Salmão escuro",
    "#FF8247": "Siena",
    "#B22222": "Tijolo refratário",
    "#FF6347": "Tomate",
    "#F5DEB3": "Trigo",
    "#00CED1": "Turquesa escura",
    "#48D1CC": "Turquesa média",
    "#AFEEEE": "Turquesa pálida",
    "#008000": "Verde",
    "#9ACD32": "Verde amarelado",
    "#90EE90": "Verde claro",
    "#006400": "Verde escuro",
    "#228B22": "Verde floresta",
    "#32CD32": "Verde lima",
    "#7CFC00": "Verde grama",
    "#20B2AA": "Verde mar claro",
    "#8FBC8F": "Verde mar escuro",
    "#7FFF00": "Verde Paris",
    "#00FF7F": "Verde primavera",
    "#00FA9A": "Verde primavera médio",
    "#98FB98": "Verde pálido",
    "#008080": "Verde-azulado",
    "#FF0000": "Vermelho",
    "#CD5C5C": "Vermelho indiano",
    "#C71585": "Vermelho violeta médio",
    "#DB7093": "Vermelho violeta pálido",
    "#EE82EE": "Violeta",
    "#9400D3": "Violeta escuro",
}

function getColorName(rgb) {
    return colors[rgb];
}

// CALCULATIONS

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

function normalToProtanomaly(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const protanomalyMatrix = [
        [0.152286, 1.052583, -0.204868],
        [0.114503, 0.786281, 0.099216],
        [-0.003882, -0.048116, 1.051998]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, protanomalyMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

function normalToDeuteranomaly(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const deuteranomalyMatrix = [
        [0.367322, 0.860646, -0.227968],
        [0.280085, 0.672501, 0.047413],
        [-0.011820, 0.042940, 0.968881]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, deuteranomalyMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

function normalToTritanomaly(rgb) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const tritanomalyMatrix = [
        [1.255528, -0.076749, -0.178779],
        [-0.078411, 0.930809, 0.147602],
        [0.004733, 0.691367, 0.303900]
    ]
    const simulatedRgb = multiplyMatrix(red, green, blue, tritanomalyMatrix);
    return "#" + simulatedRgb[0].toString(16).padStart(2, "0") + simulatedRgb[1].toString(16).padStart(2, "0") + simulatedRgb[2].toString(16).padStart(2, "0")
}

function getRelativeLuminance(rgb) {
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

function getContrast(rgb, rgb2) {
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

function getColorDifference(rgb, rgb2) {
    const red = parseInt(rgb[1] + rgb[2], 16);
    const green = parseInt(rgb[3] + rgb[4], 16);
    const blue = parseInt(rgb[5] + rgb[6], 16);
    const red2 = parseInt(rgb2[1] + rgb2[2], 16);
    const green2 = parseInt(rgb2[3] + rgb2[4], 16);
    const blue2 = parseInt(rgb2[5] + rgb2[6], 16);

    return Math.sqrt(Math.pow(red2 - red, 2) + Math.pow(green2 - green, 2) + Math.pow(blue2 - blue, 2))
}

// INTERFACE

function toggleDarkMode() {
    
    // Page Elements
    const root = document.querySelector(":root");
    const logo = document.getElementById("navlogo");
    const style = getComputedStyle(root);
    const bg = style.getPropertyValue("--background-color");
    const fg = style.getPropertyValue("--foreground-color");
    const black = style.getPropertyValue("--black");
    const white = style.getPropertyValue("--white");
    const gray = style.getPropertyValue("--gray");
    const darkGray = style.getPropertyValue("--dark-gray");
    
    // SVG Elements
    const svgNormal = document.getElementById("svg-normal");
    const svgProt = document.getElementById("svg-prot");
    const svgDeut = document.getElementById("svg-deut");
    const svgTrit = document.getElementById("svg-trit");

    // To Light Mode
    if (fg == white && bg == black) {
        root.style.setProperty("--foreground-color", black);
        root.style.setProperty("--background-color", white);
        root.style.setProperty("--secondary-color", darkGray)
        darkMode.classList.toggle("bi-moon-stars-fill");
        darkMode.classList.toggle("bi-brightness-high-fill");
        logo.src = "navlogo-light.png";

        // SVG Elements
        
        if (!svgNormal) {
            return;
        }

        // Normal

        const fgNormal = svgNormal.getElementsByClassName("fg-line");
        for (i = 0; i < fgNormal.length; i++) {
            fgNormal[i].setAttribute("stroke", black);
            fgNormal[i].setAttribute("fill", black);
        }
    
        const bgNormal = svgNormal.getElementsByClassName("bg-line");
        for (i = 0; i < bgNormal.length; i++) {
            bgNormal[i].setAttribute("stroke", gray);
            bgNormal[i].setAttribute("fill", gray);
        }

        // Prot
        const fgProt = svgProt.getElementsByClassName("fg-line");
        for (i = 0; i < fgProt.length; i++) {
            fgProt[i].setAttribute("stroke", black);
            fgProt[i].setAttribute("fill", black);
        }
        
        const bgProt = svgProt.getElementsByClassName("bg-line");
        for (i = 0; i < bgProt.length; i++) {
            bgProt[i].setAttribute("stroke", gray);
            bgProt[i].setAttribute("fill", gray);
        }

        // Deut
        const fgDeut = svgDeut.getElementsByClassName("fg-line");
        for (i = 0; i < fgDeut.length; i++) {
            fgDeut[i].setAttribute("stroke", black);
            fgDeut[i].setAttribute("fill", black);
        }
        
        const bgDeut = svgDeut.getElementsByClassName("bg-line");
        for (i = 0; i < bgDeut.length; i++) {
            bgDeut[i].setAttribute("stroke", gray);
            bgDeut[i].setAttribute("fill", gray);
        }
        
        // Trit
        const fgTrit = svgTrit.getElementsByClassName("fg-line");
        for (i = 0; i < fgTrit.length; i++) {
            fgTrit[i].setAttribute("stroke", black);
            fgTrit[i].setAttribute("fill", black);
        }
        const bgTrit = svgTrit.getElementsByClassName("bg-line");
        for (i = 0; i < bgTrit.length; i++) {
            bgTrit[i].setAttribute("stroke", gray);
            bgTrit[i].setAttribute("fill", gray);
        }
        

    // To Dark Mode
    } else {
        root.style.setProperty("--foreground-color", white);
        root.style.setProperty("--background-color", black);
        root.style.setProperty("--secondary-color", gray);
        darkMode.classList.toggle("bi-moon-stars-fill");
        darkMode.classList.toggle("bi-brightness-high-fill");
        logo.src = "navlogo-dark.png";
        
        // SVG Elements
        
        if (!svgNormal) {
            return;
        }

        // Normal
        const fgNormal = svgNormal.getElementsByClassName("fg-line");
        for (i = 0; i < fgNormal.length; i++) {
            fgNormal[i].setAttribute("stroke", white);
            fgNormal[i].setAttribute("fill", white);
        }
        const bgNormal = svgNormal.getElementsByClassName("bg-line");
        for (i = 0; i < bgNormal.length; i++) {
            bgNormal[i].setAttribute("stroke", darkGray);
            bgNormal[i].setAttribute("fill", darkGray);
        }

        // Prot
        const fgProt = svgProt.getElementsByClassName("fg-line");
        for (i = 0; i < fgProt.length; i++) {
            fgProt[i].setAttribute("stroke", white);
            fgProt[i].setAttribute("fill", white);
        }
        const bgProt = svgProt.getElementsByClassName("bg-line");
        for (i = 0; i < bgProt.length; i++) {
            bgProt[i].setAttribute("stroke", darkGray);
            bgProt[i].setAttribute("fill", darkGray);
        }

        // Deut
        const fgDeut = svgDeut.getElementsByClassName("fg-line");
        for (i = 0; i < fgDeut.length; i++) {
            fgDeut[i].setAttribute("stroke", white);
            fgDeut[i].setAttribute("fill", white);
        }
        const bgDeut = svgDeut.getElementsByClassName("bg-line");
        for (i = 0; i < bgDeut.length; i++) {
            bgDeut[i].setAttribute("stroke", darkGray);
            bgDeut[i].setAttribute("fill", darkGray);
        }
        
        // Trit
        const fgTrit = svgTrit.getElementsByClassName("fg-line");
        for (i = 0; i < fgTrit.length; i++) {
            fgTrit[i].setAttribute("stroke", white);
            fgTrit[i].setAttribute("fill", white);
        }
        const bgTrit = svgTrit.getElementsByClassName("bg-line");
        for (i = 0; i < bgTrit.length; i++) {
            bgTrit[i].setAttribute("stroke", darkGray);
            bgTrit[i].setAttribute("fill", darkGray);
        }
    }
}

function updateContrastValues() {
    const normalContrastBox = document.getElementById("normal-contrast-box");
    const protContrastBox = document.getElementById("prot-contrast-box");
    const deutContrastBox = document.getElementById("deut-contrast-box");
    const tritContrastBox = document.getElementById("trit-contrast-box");

    const normalContrastRatio = document.getElementById("normal-contrast-ratio");
    const normalContrastBig = document.getElementById("normal-contrast-big");
    const normalContrastSmall = document.getElementById("normal-contrast-small");

    const protContrastRatio = document.getElementById("prot-contrast-ratio");
    const protContrastBig = document.getElementById("prot-contrast-big");
    const protContrastSmall = document.getElementById("prot-contrast-small");

    const deutContrastRatio = document.getElementById("deut-contrast-ratio");
    const deutContrastBig = document.getElementById("deut-contrast-big");
    const deutContrastSmall = document.getElementById("deut-contrast-small");
    
    const tritContrastRatio = document.getElementById("trit-contrast-ratio");
    const tritContrastBig = document.getElementById("trit-contrast-big");
    const tritContrastSmall = document.getElementById("trit-contrast-small");

    const bgPicker = document.getElementById("bg-picker");
    const fgPicker = document.getElementById("fg-picker");
    const bgHex = document.getElementById("bg-hex");
    const fgHex = document.getElementById("fg-hex");

    const fg = !fgHex.value ? fgPicker.value : fgHex.value;
    const bg = !bgHex.value ? bgPicker.value : bgHex.value;

    const fgProt = normalToProtanomaly(fg);
    const fgDeut = normalToDeuteranomaly(fg);
    const fgTrit = normalToTritanomaly(fg);

    const bgProt = normalToProtanomaly(bg);
    const bgDeut = normalToDeuteranomaly(bg);
    const bgTrit = normalToTritanomaly(bg);

    normalContrastBox.style.backgroundColor = bg;
    protContrastBox.style.backgroundColor = bgProt;
    deutContrastBox.style.backgroundColor = bgDeut;
    tritContrastBox.style.backgroundColor = bgTrit;

    normalContrastBox.style.color = fg;
    protContrastBox.style.color = fgProt;
    deutContrastBox.style.color = fgDeut;
    tritContrastBox.style.color = fgTrit;

    const normalContrast = getContrast(bg, fg);
    const protContrast = getContrast(bgProt, fgProt);
    const deutContrast = getContrast(bgDeut, fgDeut);
    const tritContrast = getContrast(bgTrit, fgTrit);

    normalContrastRatio.innerHTML = "Razão de Contraste: " + normalContrast;

    if (normalContrast >= 4.5) {
        normalContrastBig.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (normalContrast >= 3) {
        normalContrastBig.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        normalContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (normalContrast >= 7) {
        normalContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (normalContrast >= 4.5) {
        normalContrastSmall.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        normalContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }

    protContrastRatio.innerHTML = "Razão de Contraste: " + protContrast;

    if (protContrast >= 4.5) {
        protContrastBig.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (protContrast >= 3) {
        protContrastBig.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        protContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (protContrast >= 7) {
        protContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (protContrast >= 4.5) {
        protContrastSmall.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        protContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }

    deutContrastRatio.innerHTML = "Razão de Contraste: " + deutContrast;

    if (deutContrast >= 4.5) {
        deutContrastBig.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (deutContrast >= 3) {
        deutContrastBig.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        deutContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (deutContrast >= 7) {
        deutContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (deutContrast >= 4.5) {
        deutContrastSmall.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        deutContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }

    tritContrastRatio.innerHTML = "Razão de Contraste: " + tritContrast;

    if (tritContrast >= 4.5) {
        tritContrastBig.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (tritContrast >= 3) {
        tritContrastBig.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        tritContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (tritContrast >= 7) {
        tritContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (tritContrast >= 4.5) {
        tritContrastSmall.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        tritContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
}

function createSVG(type, color1, color2, color3, color4) {
    const examples = document.getElementById("examples");
    const namespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(namespace, "svg");
    svg.setAttribute("id", "svg-" + type)
    svg.setAttribute("width", "1276")
    svg.setAttribute("heigth", "1010")
    svg.setAttribute("viewBox", "0 0 1270 1010");
    svg.setAttribute("fill", "none");

    // Dark Mode

    const gray = getComputedStyle(document.querySelector(":root")).getPropertyValue("--gray");
    const darkGray = getComputedStyle(document.querySelector(":root")).getPropertyValue("--dark-gray");

    // Dark Mode Checking

    const white = getComputedStyle(document.querySelector(":root")).getPropertyValue("--white");
    const black = getComputedStyle(document.querySelector(":root")).getPropertyValue("--black");
    const fg = getComputedStyle(document.querySelector(":root")).getPropertyValue("--foreground-color");
    const bg = getComputedStyle(document.querySelector(":root")).getPropertyValue("--background-color");

    const darkModeEnabled = fg == white && bg == black;

    // Horizontal Lines
    for (i = 0; i < 20; i++) {
        const backgroundLine = document.createElementNS(namespace, "line");
        if (darkModeEnabled) {
            backgroundLine.setAttribute("stroke", darkGray);
        } else {
            backgroundLine.setAttribute("stroke", gray);
        }
        backgroundLine.setAttribute("class", "bg-line")
        backgroundLine.setAttribute("x1", `${317 + (50 * i)}`);
        backgroundLine.setAttribute("y1", "10");
        backgroundLine.setAttribute("x2", `${317 + (50 * i)}`);
        backgroundLine.setAttribute("y2", "1010");
        backgroundLine.setAttribute("stroke-width", "10");
        svg.appendChild(backgroundLine);
    }

    // Vertical Lines
    for (i = 0; i < 20; i++) {
        const backgroundLine = document.createElementNS(namespace, "line");
        if (darkModeEnabled) {
            backgroundLine.setAttribute("stroke", darkGray);
        } else {
            backgroundLine.setAttribute("stroke", gray);
        }
        backgroundLine.setAttribute("class", "bg-line")
        backgroundLine.setAttribute("x1", "262");
        backgroundLine.setAttribute("y1", `${955 - (50 * i)}`);
        backgroundLine.setAttribute("x2", "1262");
        backgroundLine.setAttribute("y2", `${955 - (50 * i)}`);
        backgroundLine.setAttribute("stroke-width", "10");
        svg.appendChild(backgroundLine);
    }

    // Line 1 
    const line1 = document.createElementNS(namespace, "path");
    line1.setAttribute("id", "line1-" + type);
    line1.setAttribute("stroke", color1);
    line1.setAttribute("d", "M267 856L667.5 554.5L868.5 805L1267 504.5");
    line1.setAttribute("stroke-width", "12");
    svg.appendChild(line1);

    // Line 2
    const line2 = document.createElementNS(namespace, "path");
    line2.setAttribute("id", "line2-" + type);
    line2.setAttribute("stroke", color2);
    line2.setAttribute("d", "M266 558.5L615.5 854L817 405L1271 854");
    line2.setAttribute("stroke-width", "12");
    svg.appendChild(line2);

    // Line 3
    const line3 = document.createElementNS(namespace, "path");
    line3.setAttribute("id", "line3-" + type);
    line3.setAttribute("stroke", color3);
    line3.setAttribute("d", "M266 303L618 155L717.5 402.5L1067 206L1271 402.5");
    line3.setAttribute("stroke-width", "12");
    svg.appendChild(line3);

    // Line 4
    const line4 = document.createElementNS(namespace, "path");
    line4.setAttribute("id", "line4-" + type);
    line4.setAttribute("stroke", color4);
    line4.setAttribute("d", "M268.5 461.5L766 209L975 461.5L1268.5 308.5");
    line4.setAttribute("stroke-width", "12");
    svg.appendChild(line4);

    // Rect 1
    const rect1 = document.createElementNS(namespace, "rect");
    rect1.setAttribute("id", "rect1-" + type);
    rect1.setAttribute("fill", color1)
    rect1.setAttribute("y", "376");
    rect1.setAttribute("width", "85");
    rect1.setAttribute("height", "43");
    svg.appendChild(rect1)

    // Rect 2
    const rect2 = document.createElementNS(namespace, "rect");
    rect2.setAttribute("id", "rect2-" + type);
    rect2.setAttribute("fill", color2)
    rect2.setAttribute("y", "446");
    rect2.setAttribute("width", "85");
    rect2.setAttribute("height", "43");
    svg.appendChild(rect2);

    // Rect 3
    const rect3 = document.createElementNS(namespace, "rect");
    rect3.setAttribute("id", "rect3-" + type);
    rect3.setAttribute("fill", color3)
    rect3.setAttribute("y", "516");
    rect3.setAttribute("width", "85");
    rect3.setAttribute("height", "43");
    svg.appendChild(rect3);

    // Rect 4
    const rect4 = document.createElementNS(namespace, "rect");
    rect4.setAttribute("id", "rect4-" + type);
    rect4.setAttribute("fill", color4)
    rect4.setAttribute("y", "586");
    rect4.setAttribute("width", "85");
    rect4.setAttribute("height", "43");
    svg.appendChild(rect4);

    // Vertical Foreground Line
    const vForegroundLine = document.createElementNS(namespace, "line");
    if (darkModeEnabled) {
        vForegroundLine.setAttribute("stroke", white);
    } else {
        vForegroundLine.setAttribute("stroke", black);
    }
    vForegroundLine.setAttribute("class", "fg-line");
    vForegroundLine.setAttribute("x1", "262");
    vForegroundLine.setAttribute("y1", "1005");
    vForegroundLine.setAttribute("x2", "1272");
    vForegroundLine.setAttribute("y2", "1005");
    vForegroundLine.setAttribute("stroke-width", "10");
    svg.appendChild(vForegroundLine)

    // Horizontal Foreground Line
    const hForegroundLine = document.createElementNS(namespace, "line");
    if (darkModeEnabled) {
        hForegroundLine.setAttribute("stroke", white);
    } else {
        hForegroundLine.setAttribute("stroke", black);
    }
    hForegroundLine.setAttribute("class", "fg-line")
    hForegroundLine.setAttribute("x1", "267");
    hForegroundLine.setAttribute("y1", "-2.16393e-07");
    hForegroundLine.setAttribute("x2", "267");
    hForegroundLine.setAttribute("y2", "1010");
    hForegroundLine.setAttribute("stroke-width", "10");
    svg.appendChild(hForegroundLine);

    // Color 1 Label
    const color1Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color1Label.setAttribute("stroke", white);
        color1Label.setAttribute("fill", white);
    } else {
        color1Label.setAttribute("stroke", black);
        color1Label.setAttribute("fill", black);
    }
    color1Label.setAttribute("class", "fg-line")
    color1Label.setAttribute("d", "M116.912 383.568C118.235 383.568 119.344 383.739 120.24 384.08C121.157 384.421 122.085 384.976 123.024 385.744L121.36 387.696C120.016 386.608 118.597 386.064 117.104 386.064C115.269 386.064 113.787 386.768 112.656 388.176C111.547 389.584 110.992 391.845 110.992 394.96C110.992 397.989 111.547 400.229 112.656 401.68C113.765 403.109 115.237 403.824 117.072 403.824C118.011 403.824 118.832 403.664 119.536 403.344C120.24 403.024 120.987 402.576 121.776 402L123.28 403.92C122.597 404.624 121.723 405.211 120.656 405.68C119.589 406.149 118.363 406.384 116.976 406.384C115.184 406.384 113.584 405.947 112.176 405.072C110.789 404.176 109.701 402.875 108.912 401.168C108.144 399.44 107.76 397.371 107.76 394.96C107.76 392.549 108.165 390.491 108.976 388.784C109.787 387.056 110.885 385.755 112.272 384.88C113.659 384.005 115.205 383.568 116.912 383.568ZM132.657 388.752C135.025 388.752 136.86 389.541 138.161 391.12C139.484 392.699 140.145 394.843 140.145 397.552C140.145 399.301 139.847 400.848 139.249 402.192C138.652 403.515 137.788 404.549 136.657 405.296C135.527 406.021 134.183 406.384 132.625 406.384C130.257 406.384 128.412 405.595 127.089 404.016C125.767 402.437 125.105 400.293 125.105 397.584C125.105 395.835 125.404 394.299 126.001 392.976C126.599 391.632 127.463 390.597 128.593 389.872C129.724 389.125 131.079 388.752 132.657 388.752ZM132.657 391.12C129.735 391.12 128.273 393.275 128.273 397.584C128.273 401.872 129.724 404.016 132.625 404.016C135.527 404.016 136.977 401.861 136.977 397.552C136.977 393.264 135.537 391.12 132.657 391.12ZM152.337 388.752C152.934 388.752 153.489 388.816 154.001 388.944L153.457 391.824C152.945 391.696 152.454 391.632 151.985 391.632C150.939 391.632 150.097 392.016 149.457 392.784C148.817 393.552 148.315 394.747 147.953 396.368V406H145.009V389.136H147.537L147.825 392.56C148.273 391.301 148.881 390.352 149.649 389.712C150.417 389.072 151.313 388.752 152.337 388.752ZM173.117 384.592V406H170.173V387.728L165.181 390.768L163.901 388.688L170.525 384.592H173.117Z");
    svg.appendChild(color1Label);

    // Color 2 Label
    const color2Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color2Label.setAttribute("stroke", white);
        color2Label.setAttribute("fill", white);
    } else {
        color2Label.setAttribute("stroke", black);
        color2Label.setAttribute("fill", black);
    }
    color2Label.setAttribute("class", "fg-line")
    color2Label.setAttribute("d", "M116.912 453.568C118.235 453.568 119.344 453.739 120.24 454.08C121.157 454.421 122.085 454.976 123.024 455.744L121.36 457.696C120.016 456.608 118.597 456.064 117.104 456.064C115.269 456.064 113.787 456.768 112.656 458.176C111.547 459.584 110.992 461.845 110.992 464.96C110.992 467.989 111.547 470.229 112.656 471.68C113.765 473.109 115.237 473.824 117.072 473.824C118.011 473.824 118.832 473.664 119.536 473.344C120.24 473.024 120.987 472.576 121.776 472L123.28 473.92C122.597 474.624 121.723 475.211 120.656 475.68C119.589 476.149 118.363 476.384 116.976 476.384C115.184 476.384 113.584 475.947 112.176 475.072C110.789 474.176 109.701 472.875 108.912 471.168C108.144 469.44 107.76 467.371 107.76 464.96C107.76 462.549 108.165 460.491 108.976 458.784C109.787 457.056 110.885 455.755 112.272 454.88C113.659 454.005 115.205 453.568 116.912 453.568ZM132.657 458.752C135.025 458.752 136.86 459.541 138.161 461.12C139.484 462.699 140.145 464.843 140.145 467.552C140.145 469.301 139.847 470.848 139.249 472.192C138.652 473.515 137.788 474.549 136.657 475.296C135.527 476.021 134.183 476.384 132.625 476.384C130.257 476.384 128.412 475.595 127.089 474.016C125.767 472.437 125.105 470.293 125.105 467.584C125.105 465.835 125.404 464.299 126.001 462.976C126.599 461.632 127.463 460.597 128.593 459.872C129.724 459.125 131.079 458.752 132.657 458.752ZM132.657 461.12C129.735 461.12 128.273 463.275 128.273 467.584C128.273 471.872 129.724 474.016 132.625 474.016C135.527 474.016 136.977 471.861 136.977 467.552C136.977 463.264 135.537 461.12 132.657 461.12ZM152.337 458.752C152.934 458.752 153.489 458.816 154.001 458.944L153.457 461.824C152.945 461.696 152.454 461.632 151.985 461.632C150.939 461.632 150.097 462.016 149.457 462.784C148.817 463.552 148.315 464.747 147.953 466.368V476H145.009V459.136H147.537L147.825 462.56C148.273 461.301 148.881 460.352 149.649 459.712C150.417 459.072 151.313 458.752 152.337 458.752ZM170.077 454.272C171.357 454.272 172.477 454.528 173.437 455.04C174.419 455.552 175.176 456.256 175.709 457.152C176.243 458.027 176.509 459.019 176.509 460.128C176.509 461.429 176.211 462.677 175.613 463.872C175.037 465.067 174.141 466.357 172.925 467.744C171.709 469.131 169.864 471.061 167.389 473.536H177.021L176.669 476H164.029V473.664C166.888 470.699 168.915 468.533 170.109 467.168C171.304 465.781 172.157 464.576 172.669 463.552C173.181 462.528 173.437 461.429 173.437 460.256C173.437 459.147 173.117 458.283 172.477 457.664C171.837 457.024 170.984 456.704 169.917 456.704C169.043 456.704 168.275 456.885 167.613 457.248C166.952 457.611 166.248 458.208 165.501 459.04L163.581 457.504C164.456 456.416 165.427 455.605 166.493 455.072C167.56 454.539 168.755 454.272 170.077 454.272Z");
    svg.appendChild(color2Label);

    // Color 3 Label
    const color3Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color3Label.setAttribute("stroke", white);
        color3Label.setAttribute("fill", white);
    } else {
        color3Label.setAttribute("stroke", black);
        color3Label.setAttribute("fill", black);
    }
    color3Label.setAttribute("class", "fg-line")
    color3Label.setAttribute("d", "M116.912 523.568C118.235 523.568 119.344 523.739 120.24 524.08C121.157 524.421 122.085 524.976 123.024 525.744L121.36 527.696C120.016 526.608 118.597 526.064 117.104 526.064C115.269 526.064 113.787 526.768 112.656 528.176C111.547 529.584 110.992 531.845 110.992 534.96C110.992 537.989 111.547 540.229 112.656 541.68C113.765 543.109 115.237 543.824 117.072 543.824C118.011 543.824 118.832 543.664 119.536 543.344C120.24 543.024 120.987 542.576 121.776 542L123.28 543.92C122.597 544.624 121.723 545.211 120.656 545.68C119.589 546.149 118.363 546.384 116.976 546.384C115.184 546.384 113.584 545.947 112.176 545.072C110.789 544.176 109.701 542.875 108.912 541.168C108.144 539.44 107.76 537.371 107.76 534.96C107.76 532.549 108.165 530.491 108.976 528.784C109.787 527.056 110.885 525.755 112.272 524.88C113.659 524.005 115.205 523.568 116.912 523.568ZM132.657 528.752C135.025 528.752 136.86 529.541 138.161 531.12C139.484 532.699 140.145 534.843 140.145 537.552C140.145 539.301 139.847 540.848 139.249 542.192C138.652 543.515 137.788 544.549 136.657 545.296C135.527 546.021 134.183 546.384 132.625 546.384C130.257 546.384 128.412 545.595 127.089 544.016C125.767 542.437 125.105 540.293 125.105 537.584C125.105 535.835 125.404 534.299 126.001 532.976C126.599 531.632 127.463 530.597 128.593 529.872C129.724 529.125 131.079 528.752 132.657 528.752ZM132.657 531.12C129.735 531.12 128.273 533.275 128.273 537.584C128.273 541.872 129.724 544.016 132.625 544.016C135.527 544.016 136.977 541.861 136.977 537.552C136.977 533.264 135.537 531.12 132.657 531.12ZM152.337 528.752C152.934 528.752 153.489 528.816 154.001 528.944L153.457 531.824C152.945 531.696 152.454 531.632 151.985 531.632C150.939 531.632 150.097 532.016 149.457 532.784C148.817 533.552 148.315 534.747 147.953 536.368V546H145.009V529.136H147.537L147.825 532.56C148.273 531.301 148.881 530.352 149.649 529.712C150.417 529.072 151.313 528.752 152.337 528.752ZM169.981 524.272C171.304 524.272 172.435 524.517 173.373 525.008C174.333 525.499 175.059 526.16 175.549 526.992C176.061 527.824 176.317 528.731 176.317 529.712C176.317 531.013 175.933 532.091 175.165 532.944C174.419 533.776 173.416 534.341 172.157 534.64C173.587 534.768 174.749 535.28 175.645 536.176C176.541 537.072 176.989 538.288 176.989 539.824C176.989 541.061 176.691 542.181 176.093 543.184C175.496 544.187 174.643 544.976 173.533 545.552C172.424 546.107 171.144 546.384 169.693 546.384C168.392 546.384 167.197 546.149 166.109 545.68C165.021 545.189 164.072 544.464 163.261 543.504L165.021 541.872C165.725 542.597 166.44 543.131 167.165 543.472C167.912 543.813 168.723 543.984 169.597 543.984C170.941 543.984 171.997 543.611 172.765 542.864C173.533 542.096 173.917 541.072 173.917 539.792C173.917 538.384 173.555 537.392 172.829 536.816C172.104 536.24 171.048 535.952 169.661 535.952H168.061L168.413 533.68H169.501C170.611 533.68 171.528 533.349 172.253 532.688C173 532.027 173.373 531.099 173.373 529.904C173.373 528.901 173.053 528.112 172.413 527.536C171.773 526.939 170.909 526.64 169.821 526.64C168.989 526.64 168.221 526.789 167.517 527.088C166.835 527.387 166.131 527.877 165.405 528.56L163.869 526.8C165.683 525.115 167.72 524.272 169.981 524.272Z");
    svg.appendChild(color3Label);

    // Color 4 Label
    const color4Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color4Label.setAttribute("stroke", white);
        color4Label.setAttribute("fill", white);
    } else {
        color4Label.setAttribute("stroke", black);
        color4Label.setAttribute("fill", black);
    }
    color4Label.setAttribute("class", "fg-line")
    color4Label.setAttribute("d", "M116.912 593.568C118.235 593.568 119.344 593.739 120.24 594.08C121.157 594.421 122.085 594.976 123.024 595.744L121.36 597.696C120.016 596.608 118.597 596.064 117.104 596.064C115.269 596.064 113.787 596.768 112.656 598.176C111.547 599.584 110.992 601.845 110.992 604.96C110.992 607.989 111.547 610.229 112.656 611.68C113.765 613.109 115.237 613.824 117.072 613.824C118.011 613.824 118.832 613.664 119.536 613.344C120.24 613.024 120.987 612.576 121.776 612L123.28 613.92C122.597 614.624 121.723 615.211 120.656 615.68C119.589 616.149 118.363 616.384 116.976 616.384C115.184 616.384 113.584 615.947 112.176 615.072C110.789 614.176 109.701 612.875 108.912 611.168C108.144 609.44 107.76 607.371 107.76 604.96C107.76 602.549 108.165 600.491 108.976 598.784C109.787 597.056 110.885 595.755 112.272 594.88C113.659 594.005 115.205 593.568 116.912 593.568ZM132.657 598.752C135.025 598.752 136.86 599.541 138.161 601.12C139.484 602.699 140.145 604.843 140.145 607.552C140.145 609.301 139.847 610.848 139.249 612.192C138.652 613.515 137.788 614.549 136.657 615.296C135.527 616.021 134.183 616.384 132.625 616.384C130.257 616.384 128.412 615.595 127.089 614.016C125.767 612.437 125.105 610.293 125.105 607.584C125.105 605.835 125.404 604.299 126.001 602.976C126.599 601.632 127.463 600.597 128.593 599.872C129.724 599.125 131.079 598.752 132.657 598.752ZM132.657 601.12C129.735 601.12 128.273 603.275 128.273 607.584C128.273 611.872 129.724 614.016 132.625 614.016C135.527 614.016 136.977 611.861 136.977 607.552C136.977 603.264 135.537 601.12 132.657 601.12ZM152.337 598.752C152.934 598.752 153.489 598.816 154.001 598.944L153.457 601.824C152.945 601.696 152.454 601.632 151.985 601.632C150.939 601.632 150.097 602.016 149.457 602.784C148.817 603.552 148.315 604.747 147.953 606.368V616H145.009V599.136H147.537L147.825 602.56C148.273 601.301 148.881 600.352 149.649 599.712C150.417 599.072 151.313 598.752 152.337 598.752ZM178.845 608.384V610.72H176.061V616H173.213V610.72H164.061V608.608L170.493 594.272L172.957 595.296L167.165 608.384H173.245L173.501 602.624H176.061V608.384H178.845Z");
    svg.appendChild(color4Label);

    examples.appendChild(svg);
}

function updateExamplesValues() {
    const svgNormal = document.getElementById("svg-normal");
    const svgProt = document.getElementById("svg-prot");
    const svgDeut = document.getElementById("svg-deut");
    const svgTrit = document.getElementById("svg-trit");

    const color1 = document.getElementById("color1-hex").value ? document.getElementById("color1-hex").value : document.getElementById("color1-picker").value;
    const color2 = document.getElementById("color2-hex").value ? document.getElementById("color2-hex").value : document.getElementById("color2-picker").value;
    const color3 = document.getElementById("color3-hex").value ? document.getElementById("color3-hex").value : document.getElementById("color3-picker").value;
    const color4 = document.getElementById("color4-hex").value ? document.getElementById("color4-hex").value : document.getElementById("color4-picker").value;

    const line1Normal = svgNormal.getElementById("line1-normal");
    const line2Normal = svgNormal.getElementById("line2-normal");
    const line3Normal = svgNormal.getElementById("line3-normal");
    const line4Normal = svgNormal.getElementById("line4-normal");

    const line1Prot = svgProt.getElementById("line1-prot");
    const line2Prot = svgProt.getElementById("line2-prot");
    const line3Prot = svgProt.getElementById("line3-prot");
    const line4Prot = svgProt.getElementById("line4-prot");

    const line1Deut = svgDeut.getElementById("line1-deut");
    const line2Deut = svgDeut.getElementById("line2-deut");
    const line3Deut = svgDeut.getElementById("line3-deut");
    const line4Deut = svgDeut.getElementById("line4-deut");

    const line1Trit = svgTrit.getElementById("line1-trit");
    const line2Trit = svgTrit.getElementById("line2-trit");
    const line3Trit = svgTrit.getElementById("line3-trit");
    const line4Trit = svgTrit.getElementById("line4-trit");

    const rect1Normal = svgNormal.getElementById("rect1-normal");
    const rect2Normal = svgNormal.getElementById("rect2-normal");
    const rect3Normal = svgNormal.getElementById("rect3-normal");
    const rect4Normal = svgNormal.getElementById("rect4-normal");

    const rect1Prot = svgProt.getElementById("rect1-prot");
    const rect2Prot = svgProt.getElementById("rect2-prot");
    const rect3Prot = svgProt.getElementById("rect3-prot");
    const rect4Prot = svgProt.getElementById("rect4-prot");

    const rect1Deut = svgDeut.getElementById("rect1-deut");
    const rect2Deut = svgDeut.getElementById("rect2-deut");
    const rect3Deut = svgDeut.getElementById("rect3-deut");
    const rect4Deut = svgDeut.getElementById("rect4-deut");

    const rect1Trit = svgTrit.getElementById("rect1-trit");
    const rect2Trit = svgTrit.getElementById("rect2-trit");
    const rect3Trit = svgTrit.getElementById("rect3-trit");
    const rect4Trit = svgTrit.getElementById("rect4-trit");

    line1Normal.setAttribute("stroke", color1);
    line2Normal.setAttribute("stroke", color2);
    line3Normal.setAttribute("stroke", color3);
    line4Normal.setAttribute("stroke", color4);
    
    line1Prot.setAttribute("stroke", normalToProtanomaly(color1));
    line2Prot.setAttribute("stroke", normalToProtanomaly(color2));
    line3Prot.setAttribute("stroke", normalToProtanomaly(color3));
    line4Prot.setAttribute("stroke", normalToProtanomaly(color4));
    
    line1Deut.setAttribute("stroke", normalToDeuteranomaly(color1));
    line2Deut.setAttribute("stroke", normalToDeuteranomaly(color2));
    line3Deut.setAttribute("stroke", normalToDeuteranomaly(color3));
    line4Deut.setAttribute("stroke", normalToDeuteranomaly(color4));
    
    line1Trit.setAttribute("stroke", normalToTritanomaly(color1));
    line2Trit.setAttribute("stroke", normalToTritanomaly(color2));
    line3Trit.setAttribute("stroke", normalToTritanomaly(color3));
    line4Trit.setAttribute("stroke", normalToTritanomaly(color4));

    rect1Normal.setAttribute("fill", color1);
    rect2Normal.setAttribute("fill", color2);
    rect3Normal.setAttribute("fill", color3);
    rect4Normal.setAttribute("fill", color4);
    
    rect1Prot.setAttribute("fill", normalToProtanomaly(color1));
    rect2Prot.setAttribute("fill", normalToProtanomaly(color2));
    rect3Prot.setAttribute("fill", normalToProtanomaly(color3));
    rect4Prot.setAttribute("fill", normalToProtanomaly(color4));
    
    rect1Deut.setAttribute("fill", normalToDeuteranomaly(color1));
    rect2Deut.setAttribute("fill", normalToDeuteranomaly(color2));
    rect3Deut.setAttribute("fill", normalToDeuteranomaly(color3));
    rect4Deut.setAttribute("fill", normalToDeuteranomaly(color4));
    
    rect1Trit.setAttribute("fill", normalToTritanomaly(color1));
    rect2Trit.setAttribute("fill", normalToTritanomaly(color2));
    rect3Trit.setAttribute("fill", normalToTritanomaly(color3));
    rect4Trit.setAttribute("fill", normalToTritanomaly(color4));
}

function createResults(colorHex) {
    const results = document.getElementById("results");
    results.innerHTML = "";
    const closestColor = getClosestColor(colorHex);
    const colorName = getColorName(closestColor);
    const colorProt = normalToProtanomaly(colorHex);
    const colorDeut = normalToDeuteranomaly(colorHex);
    const colorTrit = normalToTritanomaly(colorHex);

    const title = document.createElement("h2");
    title.innerHTML = "Resultados";
    results.appendChild(title);

    const colorNameElement = document.createElement("h3");
    colorNameElement.innerHTML = colorName;
    results.appendChild(colorNameElement);
    if (colorHex.toUpperCase() != closestColor.toUpperCase()) {
        const approxElement = document.createElement("span");
        approxElement.innerHTML = "aprox.";
        approxElement.classList.add("approx");
        colorNameElement.appendChild(approxElement);
    }

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

function createContrast(colorHex) {
    const contrast = document.getElementById("contrast");
    contrast.innerHTML = "";
    const relativeLuminance = getRelativeLuminance(colorHex);
    const colorProt = normalToProtanomaly(colorHex);
    const colorDeut = normalToDeuteranomaly(colorHex);
    const colorTrit = normalToTritanomaly(colorHex);
    let bgColor = colorHex;
    let fgColor;
    if (relativeLuminance < 0.5) {
        fgColor = "#ffffff";
    } else {
        fgColor = "#000000";
    }

    const contrastTitleElement = document.createElement("h2");
    contrastTitleElement.innerHTML = "Contraste";
    contrast.appendChild(contrastTitleElement);

    const contrastElement = document.createElement("div");
    contrastElement.classList.add("columns");
    contrast.appendChild(contrastElement);

    const contrastFgElement = document.createElement("div");
    contrastFgElement.classList.add("column");
    contrastElement.appendChild(contrastFgElement);

    const fgLabelElement = document.createElement("label");
    const fgLabelTitleElement = document.createElement("h4");
    fgLabelTitleElement.innerHTML = "Cor do Texto";
    contrastFgElement.appendChild(fgLabelElement);
    fgLabelElement.appendChild(fgLabelTitleElement);

    const fgHexElement = document.createElement("input");
    fgHexElement.type = "text";
    fgHexElement.maxLength = "7";
    fgHexElement.placeholder = "ex: #E60026";
    fgHexElement.id = "fg-hex";
    fgLabelElement.appendChild(fgHexElement);

    const fgPickerElement = document.createElement("input");
    fgPickerElement.type = "color";
    fgPickerElement.value = fgColor;
    fgPickerElement.id = "fg-picker";
    fgLabelElement.appendChild(fgPickerElement);

    const contrastBgElement = document.createElement("div");
    contrastBgElement.classList.add("column");
    contrastElement.appendChild(contrastBgElement);

    const bgLabelElement = document.createElement("label");
    const bgLabelTitleElement = document.createElement("h4");
    bgLabelTitleElement.innerHTML = "Cor de Fundo";
    contrastBgElement.appendChild(bgLabelElement);
    bgLabelElement.appendChild(bgLabelTitleElement);

    const bgHexElement = document.createElement("input");
    bgHexElement.type = "text";
    bgHexElement.maxLength = "7";
    bgHexElement.placeholder = "ex: #E60026";
    bgHexElement.id = "bg-hex"
    bgLabelElement.appendChild(bgHexElement);

    const bgPickerElement = document.createElement("input");
    bgPickerElement.type = "color";
    bgPickerElement.value = bgColor;
    bgPickerElement.id = "bg-picker";
    bgLabelElement.appendChild(bgPickerElement);

    bgPickerElement.addEventListener("change", updateContrastValues);
    fgPickerElement.addEventListener("change", updateContrastValues);
    bgHexElement.addEventListener("keyup", updateContrastValues);
    fgHexElement.addEventListener("keyup", updateContrastValues);

    const textTitleContrastElement = document.createElement("h5");
    const textContrastElement = document.createElement("span");
    textContrastElement.classList.add("contrast-box-text");
    textTitleContrastElement.innerHTML = "Lorem Ipsum";
    textContrastElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci velit, congue eget enim eget, iaculis luctus risus. Aenean et lectus ornare, suscipit dui at, auctor sapien. Curabitur lobortis nunc a pellentesque finibus. Fusce sed justo tincidunt, ultrices enim convallis, varius sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis urna lacus, et dictum augue bibendum id. Mauris gravida lacus arcu, et volutpat sem malesuada luctus. Duis maximus pellentesque molestie. Cras tellus diam, ullamcorper non vehicula ac, tempus id dolor. Integer imperdiet varius risus sit amet blandit.";

    const titleNormalContrastElement = document.createElement("h4");
    titleNormalContrastElement.innerHTML = "Normal";
    contrast.appendChild(titleNormalContrastElement);
    const normalContrastElement = document.createElement("div");
    normalContrastElement.classList.add("contrast-box");
    normalContrastElement.id = "normal-contrast-box";
    normalContrastElement.appendChild(textTitleContrastElement);
    normalContrastElement.appendChild(textContrastElement);
    normalContrastElement.style.color = fgColor;
    normalContrastElement.style.backgroundColor = bgColor;
    contrast.appendChild(normalContrastElement);
    const titleNormalContrastRatioElement = document.createElement("p");
    const contrastNormal = getContrast(fgColor, bgColor);
    titleNormalContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastNormal;
    titleNormalContrastRatioElement.id = "normal-contrast-ratio";
    contrast.appendChild(titleNormalContrastRatioElement);
    const titleNormalContrastBigElement = document.createElement("p");
    titleNormalContrastBigElement.id = "normal-contrast-big";
    if (contrastNormal >= 4.5) {
        titleNormalContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (contrastNormal >= 3) {
        titleNormalContrastBigElement.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        titleNormalContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleNormalContrastBigElement);
    const titleNormalContrastSmallElement = document.createElement("p");
    titleNormalContrastSmallElement.id = "normal-contrast-small";
    if (contrastNormal >= 7) {
        titleNormalContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (contrastNormal >= 4.5) {
        titleNormalContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        titleNormalContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleNormalContrastSmallElement);

    const titleProtanomalyContrastElement = document.createElement("h4");
    titleProtanomalyContrastElement.innerHTML = "Protanomalia";
    contrast.appendChild(titleProtanomalyContrastElement);
    const protanomalyContrastElement = document.createElement("div");
    protanomalyContrastElement.classList.add("contrast-box");
    protanomalyContrastElement.id = "prot-contrast-box";
    protanomalyContrastElement.appendChild(textTitleContrastElement.cloneNode(true));
    protanomalyContrastElement.appendChild(textContrastElement.cloneNode(true));
    protanomalyContrastElement.style.color = normalToDeuteranomaly(fgColor);
    protanomalyContrastElement.style.backgroundColor = colorProt;
    contrast.appendChild(protanomalyContrastElement);
    const titleProtanomalyContrastRatioElement = document.createElement("p");
    const contrastProtanomaly = getContrast(fgColor, colorProt);
    titleProtanomalyContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastProtanomaly;
    titleProtanomalyContrastRatioElement.id = "prot-contrast-ratio";
    contrast.appendChild(titleProtanomalyContrastRatioElement);
    const titleProtanomalyContrastBigElement = document.createElement("p");
    titleProtanomalyContrastBigElement.id = "prot-contrast-big";
    if (contrastProtanomaly >= 4.5) {
        titleProtanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (contrastProtanomaly >= 3) {
        titleProtanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        titleProtanomalyContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleProtanomalyContrastBigElement);
    const titleProtanomalyContrastSmallElement = document.createElement("p");
    titleProtanomalyContrastSmallElement.id = "prot-contrast-small";
    if (contrastProtanomaly >= 7) {
        titleProtanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (contrastProtanomaly >= 4.5) {
        titleProtanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        titleProtanomalyContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleProtanomalyContrastSmallElement);

    const titleDeuteranomalyContrastElement = document.createElement("h4");
    titleDeuteranomalyContrastElement.innerHTML = "Deuteranomalia";
    contrast.appendChild(titleDeuteranomalyContrastElement);
    const deuteranomalyContrastElement = document.createElement("div");
    deuteranomalyContrastElement.classList.add("contrast-box");
    deuteranomalyContrastElement.id = "deut-contrast-box";
    deuteranomalyContrastElement.appendChild(textTitleContrastElement.cloneNode(true));
    deuteranomalyContrastElement.appendChild(textContrastElement.cloneNode(true));
    deuteranomalyContrastElement.style.color = normalToDeuteranomaly(fgColor);
    deuteranomalyContrastElement.style.backgroundColor = colorDeut;
    contrast.appendChild(deuteranomalyContrastElement);
    const titleDeuteranomalyContrastRatioElement = document.createElement("p");
    const contrastDeuteranomaly = getContrast(fgColor, colorDeut);
    titleDeuteranomalyContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastDeuteranomaly;
    contrast.appendChild(titleDeuteranomalyContrastRatioElement);
    titleDeuteranomalyContrastRatioElement.id = "deut-contrast-ratio";
    const titleDeuteranomalyContrastBigElement = document.createElement("p");
    titleDeuteranomalyContrastBigElement.id = "deut-contrast-big";
    if (contrastDeuteranomaly >= 4.5) {
        titleDeuteranomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (contrastDeuteranomaly >= 3) {
        titleDeuteranomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        titleDeuteranomalyContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleDeuteranomalyContrastBigElement);
    const titleDeuteranomalyContrastSmallElement = document.createElement("p");
    titleDeuteranomalyContrastSmallElement.id = "deut-contrast-small";
    if (contrastDeuteranomaly >= 7) {
        titleDeuteranomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (contrastDeuteranomaly >= 4.5) {
        titleDeuteranomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        titleDeuteranomalyContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleDeuteranomalyContrastSmallElement);

    const titleTritanomalyContrastElement = document.createElement("h4");
    titleTritanomalyContrastElement.innerHTML = "Tritanomalia";
    contrast.appendChild(titleTritanomalyContrastElement);
    const tritanomalyContrastElement = document.createElement("div");
    tritanomalyContrastElement.classList.add("contrast-box");
    tritanomalyContrastElement.id = "trit-contrast-box";
    tritanomalyContrastElement.appendChild(textTitleContrastElement.cloneNode(true));
    tritanomalyContrastElement.appendChild(textContrastElement.cloneNode(true));
    tritanomalyContrastElement.style.color = normalToTritanomaly(fgColor);
    tritanomalyContrastElement.style.backgroundColor = colorTrit;
    contrast.appendChild(tritanomalyContrastElement);
    const titleTritanomalyContrastRatioElement = document.createElement("p");
    const contrastTritanomaly = getContrast(fgColor, colorTrit);
    titleTritanomalyContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastTritanomaly;
    titleTritanomalyContrastRatioElement.id = "trit-contrast-ratio";
    contrast.appendChild(titleTritanomalyContrastRatioElement);
    const titleTritanomalyContrastBigElement = document.createElement("p");
    titleTritanomalyContrastBigElement.id = "trit-contrast-big";
    if (contrastTritanomaly >= 4.5) {
        titleTritanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA";
    } else if (contrastTritanomaly >= 3) {
        titleTritanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AA";
    } else {
        titleTritanomalyContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleTritanomalyContrastBigElement);
    const titleTritanomalyContrastSmallElement = document.createElement("p");
    titleTritanomalyContrastSmallElement.id = "trit-contrast-small";
    if (contrastTritanomaly >= 7) {
        titleTritanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA";
    } else if (contrastTritanomaly >= 4.5) {
        titleTritanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA";
    } else {
        titleTritanomalyContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleTritanomalyContrastSmallElement);
}

function createExamples(colorHex) {
    const examples = document.getElementById("examples");
    examples.innerHTML = "";
    const examplesTitleElement = document.createElement("h2");
    examplesTitleElement.innerHTML = "Exemplos";
    examples.appendChild(examplesTitleElement);   
    const examplesColumns = document.createElement("div");
    examplesColumns.classList.add("columns");
    examples.appendChild(examplesColumns);

    let color1 = colorHex;
    let color2 = "#F6DA00";
    let color3 = "#908121";
    let color4 = "#004A9C";

    const examplesColors1and2 = document.createElement("div");
    examplesColors1and2.classList.add("column");
    examplesColumns.appendChild(examplesColors1and2);

    const examplesColor1Label = document.createElement("label");
    const examplesColor1Title = document.createElement("h4");
    examplesColor1Title.innerHTML = "Cor 1";
    examplesColors1and2.appendChild(examplesColor1Label);
    examplesColor1Label.appendChild(examplesColor1Title);

    const examplesColor1Hex = document.createElement("input");
    examplesColor1Hex.type = "text";
    examplesColor1Hex.maxLength = "7";
    examplesColor1Hex.placeholder = "ex: #E60026";
    examplesColor1Hex.id = "color1-hex";
    examplesColor1Label.appendChild(examplesColor1Hex);

    const examplesColor1Picker = document.createElement("input");
    examplesColor1Picker.type = "color";
    examplesColor1Picker.value = color1;
    examplesColor1Picker.id = "color1-picker";
    examplesColor1Label.appendChild(examplesColor1Picker);

    const examplesColor2Label = document.createElement("label");
    const examplesColor2Title = document.createElement("h4");
    examplesColor2Title.innerHTML = "Cor 2";
    examplesColors1and2.appendChild(examplesColor2Label);
    examplesColor2Label.appendChild(examplesColor2Title);

    const examplesColor2Hex = document.createElement("input");
    examplesColor2Hex.type = "text";
    examplesColor2Hex.maxLength = "7";
    examplesColor2Hex.placeholder = "ex: #E60026";
    examplesColor2Hex.id = "color2-hex";
    examplesColor2Label.appendChild(examplesColor2Hex);

    const examplesColor2Picker = document.createElement("input");
    examplesColor2Picker.type = "color";
    examplesColor2Picker.value = color2;
    examplesColor2Picker.id = "color2-picker";
    examplesColor2Label.appendChild(examplesColor2Picker);

    const examplesColors3and4 = document.createElement("div");
    examplesColors3and4.classList.add("column");
    examplesColumns.appendChild(examplesColors3and4);

    const examplesColor3Label = document.createElement("label");
    const examplesColor3Title = document.createElement("h4");
    examplesColor3Title.innerHTML = "Cor 3";
    examplesColors3and4.appendChild(examplesColor3Label);
    examplesColor3Label.appendChild(examplesColor3Title);

    const examplesColor3Hex = document.createElement("input");
    examplesColor3Hex.type = "text";
    examplesColor3Hex.maxLength = "7";
    examplesColor3Hex.placeholder = "ex: #E60026";
    examplesColor3Hex.id = "color3-hex";
    examplesColor3Label.appendChild(examplesColor3Hex);

    const examplesColor3Picker = document.createElement("input");
    examplesColor3Picker.type = "color";
    examplesColor3Picker.value = color3;
    examplesColor3Picker.id = "color3-picker";
    examplesColor3Label.appendChild(examplesColor3Picker);

    const examplesColor4Label = document.createElement("label");
    const examplesColor4Title = document.createElement("h4");
    examplesColor4Title.innerHTML = "Cor 4";
    examplesColors3and4.appendChild(examplesColor4Label);
    examplesColor4Label.appendChild(examplesColor4Title);

    const examplesColor4Hex = document.createElement("input");
    examplesColor4Hex.type = "text";
    examplesColor4Hex.maxLength = "7";
    examplesColor4Hex.placeholder = "ex: #E60026";
    examplesColor4Hex.id = "color4-hex";
    examplesColor4Label.appendChild(examplesColor4Hex);

    const examplesColor4Picker = document.createElement("input");
    examplesColor4Picker.type = "color";
    examplesColor4Picker.value = color4;
    examplesColor4Picker.id = "color4-picker";
    examplesColor4Label.appendChild(examplesColor4Picker);

    examplesColor1Picker.addEventListener("change", updateExamplesValues);
    examplesColor1Hex.addEventListener("keyup", updateExamplesValues);
    examplesColor2Picker.addEventListener("change", updateExamplesValues);
    examplesColor2Hex.addEventListener("keyup", updateExamplesValues);
    examplesColor3Picker.addEventListener("change", updateExamplesValues);
    examplesColor3Hex.addEventListener("keyup", updateExamplesValues);
    examplesColor4Picker.addEventListener("change", updateExamplesValues);
    examplesColor4Hex.addEventListener("keyup", updateExamplesValues);

    const titleNormalGraphic = document.createElement("h4");
    titleNormalGraphic.innerHTML = "Normal";
    examples.appendChild(titleNormalGraphic);

    createSVG("normal", color1, color2, color3, color4);

    const titleProtGraphic = document.createElement("h4");
    titleProtGraphic.innerHTML = "Protanomalia";
    examples.appendChild(titleProtGraphic);

    createSVG("prot", normalToProtanomaly(color1), normalToProtanomaly(color2), normalToProtanomaly(color3), normalToProtanomaly(color4));

    const titleDeutGraphic = document.createElement("h4");
    titleDeutGraphic.innerHTML = "Deuteranomalia";
    examples.appendChild(titleDeutGraphic);

    createSVG("deut", normalToDeuteranomaly(color1), normalToDeuteranomaly(color2), normalToDeuteranomaly(color3), normalToDeuteranomaly(color4));

    const titleTritGraphic = document.createElement("h4");
    titleTritGraphic.innerHTML = "Tritanomalia";
    examples.appendChild(titleTritGraphic);

    createSVG("trit", normalToTritanomaly(color1), normalToTritanomaly(color2), normalToTritanomaly(color3), normalToTritanomaly(color4));
}

function createLearnMore(colorName) {
    const learnMore = document.getElementById("learn-more");
    learnMore.innerHTML = "";
    const learnMoreElement = document.createElement("a");
    learnMoreElement.href = `https://google.com/search?q=${colorName.replace(" ", "+")}+cor`
    learnMoreElement.innerHTML = `Saiba mais sobre ${colorName}`;
    learnMoreElement.target = "_blank";
    learnMore.appendChild(learnMoreElement);
}

function createMainFooter() {
    const mainFooter = document.getElementById("main-footer");
    mainFooter.innerHTML = "";
    const constrastExplanationElement = document.createElement("p");
    constrastExplanationElement.innerHTML = "O Nível AA indica a conformidade mínima com a WCAG 2.1, com uma razão de contraste de 3:1 para textos grandes (mais de 18 pt em tamanho normal ou 14 pt em negrito) e 4.5:1 para textos pequenos (menores que 18 pt). No nível AAA, que indica a conformidade elevada com a WCAG 2.1, as razões de contraste sobem para 4.5:1 e 7:1, respectivamente.";
    mainFooter.appendChild(constrastExplanationElement);
}

function showResults() {
    let colorHex;
    const color = document.getElementById("text").value;
    if (!color) {
        colorHex = document.getElementById("color-picker").value;
    } else {
        colorHex = color;
    }

    const closestColor = getClosestColor(colorHex);
    const colorName = getColorName(closestColor);

    createResults(colorHex);

    // CONTRAST

    createContrast(colorHex);

    // EXAMPLES

    createExamples(colorHex);

    // LEARN MORE

    createLearnMore(colorName);

    // FOOTNOTES

    createMainFooter();
}

darkMode.addEventListener("click", toggleDarkMode);
resultsButton.addEventListener("click", showResults);