import { getColorName } from './colors.js'
import { darkMode } from './main.js';
import { normalToProtanomaly, normalToDeuteranomaly, normalToTritanomaly, getRelativeLuminance, getContrast, getClosestColor } from './calc.js'
import { createSVG } from './svg.js';

export function toggleDarkMode() {

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
        logo.src = "./images/navlogo-light.png";

        // SVG Elements

        if (!svgNormal) {
            return;
        }

        // Normal
        const fgNormal = svgNormal.getElementsByClassName("fg-line");
        for (let i = 0; i < fgNormal.length; i++) {
            fgNormal[i].setAttribute("stroke", black);
            fgNormal[i].setAttribute("fill", black);
        }

        const bgNormal = svgNormal.getElementsByClassName("bg-line");
        for (let i = 0; i < bgNormal.length; i++) {
            bgNormal[i].setAttribute("stroke", gray);
            bgNormal[i].setAttribute("fill", gray);
        }

        // Prot
        const fgProt = svgProt.getElementsByClassName("fg-line");
        for (let i = 0; i < fgProt.length; i++) {
            fgProt[i].setAttribute("stroke", black);
            fgProt[i].setAttribute("fill", black);
        }

        const bgProt = svgProt.getElementsByClassName("bg-line");
        for (let i = 0; i < bgProt.length; i++) {
            bgProt[i].setAttribute("stroke", gray);
            bgProt[i].setAttribute("fill", gray);
        }

        // Deut
        const fgDeut = svgDeut.getElementsByClassName("fg-line");
        for (let i = 0; i < fgDeut.length; i++) {
            fgDeut[i].setAttribute("stroke", black);
            fgDeut[i].setAttribute("fill", black);
        }

        const bgDeut = svgDeut.getElementsByClassName("bg-line");
        for (let i = 0; i < bgDeut.length; i++) {
            bgDeut[i].setAttribute("stroke", gray);
            bgDeut[i].setAttribute("fill", gray);
        }

        // Trit
        const fgTrit = svgTrit.getElementsByClassName("fg-line");
        for (let i = 0; i < fgTrit.length; i++) {
            fgTrit[i].setAttribute("stroke", black);
            fgTrit[i].setAttribute("fill", black);
        }
        const bgTrit = svgTrit.getElementsByClassName("bg-line");
        for (let i = 0; i < bgTrit.length; i++) {
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
        logo.src = "./images/navlogo-dark.png";

        // SVG Elements

        if (!svgNormal) {
            return;
        }

        // Normal
        const fgNormal = svgNormal.getElementsByClassName("fg-line");
        for (let i = 0; i < fgNormal.length; i++) {
            fgNormal[i].setAttribute("stroke", white);
            fgNormal[i].setAttribute("fill", white);
        }
        const bgNormal = svgNormal.getElementsByClassName("bg-line");
        for (let i = 0; i < bgNormal.length; i++) {
            bgNormal[i].setAttribute("stroke", darkGray);
            bgNormal[i].setAttribute("fill", darkGray);
        }

        // Prot
        const fgProt = svgProt.getElementsByClassName("fg-line");
        for (let i = 0; i < fgProt.length; i++) {
            fgProt[i].setAttribute("stroke", white);
            fgProt[i].setAttribute("fill", white);
        }
        const bgProt = svgProt.getElementsByClassName("bg-line");
        for (let i = 0; i < bgProt.length; i++) {
            bgProt[i].setAttribute("stroke", darkGray);
            bgProt[i].setAttribute("fill", darkGray);
        }

        // Deut
        const fgDeut = svgDeut.getElementsByClassName("fg-line");
        for (let i = 0; i < fgDeut.length; i++) {
            fgDeut[i].setAttribute("stroke", white);
            fgDeut[i].setAttribute("fill", white);
        }
        const bgDeut = svgDeut.getElementsByClassName("bg-line");
        for (let i = 0; i < bgDeut.length; i++) {
            bgDeut[i].setAttribute("stroke", darkGray);
            bgDeut[i].setAttribute("fill", darkGray);
        }

        // Trit
        const fgTrit = svgTrit.getElementsByClassName("fg-line");
        for (let i = 0; i < fgTrit.length; i++) {
            fgTrit[i].setAttribute("stroke", white);
            fgTrit[i].setAttribute("fill", white);
        }
        const bgTrit = svgTrit.getElementsByClassName("bg-line");
        for (let i = 0; i < bgTrit.length; i++) {
            bgTrit[i].setAttribute("stroke", darkGray);
            bgTrit[i].setAttribute("fill", darkGray);
        }
    }
}

export function updateContrastValues() {
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

export function updateExamplesValues() {
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

export function createResults(colorHex) {
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

export function createContrast(colorHex) {
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

export function createExamples(colorHex) {
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

export function createLearnMore(colorName) {
    const learnMore = document.getElementById("learn-more");
    learnMore.innerHTML = "";
    const learnMoreElement = document.createElement("a");
    learnMoreElement.href = `https://google.com/search?q=${colorName.replace(" ", "+").toLowerCase()}+cor`
    learnMoreElement.innerHTML = `Saiba mais sobre ${colorName}`;
    learnMoreElement.target = "_blank";
    learnMore.appendChild(learnMoreElement);
}

export function createMainFooter() {
    const mainFooter = document.getElementById("main-footer");
    mainFooter.innerHTML = "";
    const constrastExplanationElement = document.createElement("p");
    constrastExplanationElement.innerHTML = "O Nível AA indica a conformidade mínima com a WCAG 2.1, com uma razão de contraste de 3:1 para textos grandes (mais de 18 pt em tamanho normal ou 14 pt em negrito) e 4.5:1 para textos pequenos (menores que 18 pt). No nível AAA, que indica a conformidade elevada com a WCAG 2.1, as razões de contraste sobem para 4.5:1 e 7:1, respectivamente.";
    mainFooter.appendChild(constrastExplanationElement);
}