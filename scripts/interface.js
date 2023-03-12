import { getColorName } from './colors.js'
import { darkMode } from './main.js';
import { normalToProtanomaly, normalToDeuteranomaly, normalToTritanomaly, getRelativeLuminance, getContrast, getClosestColor } from './calc.js'
import { createSVG } from './svg.js';

export function toggleDarkMode() {

    // Get Page Elements
    const root = document.querySelector(":root");
    const logo = document.getElementById("navlogo");

    // Get Styles and Variables
    const style = getComputedStyle(root);
    const bg = style.getPropertyValue("--background-color");
    const fg = style.getPropertyValue("--foreground-color");
    const black = style.getPropertyValue("--black");
    const white = style.getPropertyValue("--white");
    const gray = style.getPropertyValue("--gray");
    const darkGray = style.getPropertyValue("--dark-gray");

    // Get SVG Elements

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
        logo.src = "./images/navlogo-light.svg";

        // Modify SVG Elements

        if (!svgNormal) {
            return;
        }

        // Normal Graphic

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

        // Prot Graphic

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

        // Deut Graphic

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

        // Trit Graphic

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
        logo.src = "./images/navlogo-dark.svg";

        // Modify SVG Elements

        if (!svgNormal) {
            return;
        }

        // Normal Graphic

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

        // Prot Graphic

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

        // Deut Graphic

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

        // Trit Graphic

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

    // Get Contrast Box Elements

    const normalContrastBox = document.getElementById("normal-contrast-box");
    const protContrastBox = document.getElementById("prot-contrast-box");
    const deutContrastBox = document.getElementById("deut-contrast-box");
    const tritContrastBox = document.getElementById("trit-contrast-box");

    // Get Contrast Information Elements

    // Normal Contrast

    const normalContrastRatio = document.getElementById("normal-contrast-ratio");
    const normalContrastBig = document.getElementById("normal-contrast-big");
    const normalContrastSmall = document.getElementById("normal-contrast-small");

    // Prot Constrast

    const protContrastRatio = document.getElementById("prot-contrast-ratio");
    const protContrastBig = document.getElementById("prot-contrast-big");
    const protContrastSmall = document.getElementById("prot-contrast-small");

    // Deut Contrast

    const deutContrastRatio = document.getElementById("deut-contrast-ratio");
    const deutContrastBig = document.getElementById("deut-contrast-big");
    const deutContrastSmall = document.getElementById("deut-contrast-small");

    // Trit Contrast

    const tritContrastRatio = document.getElementById("trit-contrast-ratio");
    const tritContrastBig = document.getElementById("trit-contrast-big");
    const tritContrastSmall = document.getElementById("trit-contrast-small");

    // Get Text Input / Color Picker Elements

    const bgPicker = document.getElementById("bg-picker");
    const fgPicker = document.getElementById("fg-picker");
    const bgHex = document.getElementById("bg-hex");
    const fgHex = document.getElementById("fg-hex");

    // Get Text Input / Color Picker Values

    const fg = !fgHex.value ? fgPicker.value : fgHex.value;
    const bg = !bgHex.value ? bgPicker.value : bgHex.value;

    // Simulate foreground colors

    const fgProt = normalToProtanomaly(fg);
    const fgDeut = normalToDeuteranomaly(fg);
    const fgTrit = normalToTritanomaly(fg);

    // Simulate background colors

    const bgProt = normalToProtanomaly(bg);
    const bgDeut = normalToDeuteranomaly(bg);
    const bgTrit = normalToTritanomaly(bg);

    // Update background colors

    normalContrastBox.style.backgroundColor = bg;
    protContrastBox.style.backgroundColor = bgProt;
    deutContrastBox.style.backgroundColor = bgDeut;
    tritContrastBox.style.backgroundColor = bgTrit;

    // Update foreground colors    

    normalContrastBox.style.color = fg;
    protContrastBox.style.color = fgProt;
    deutContrastBox.style.color = fgDeut;
    tritContrastBox.style.color = fgTrit;

    // Calculate contrast for the newly simulated colors

    const normalContrast = getContrast(bg, fg);
    const protContrast = getContrast(bgProt, fgProt);
    const deutContrast = getContrast(bgDeut, fgDeut);
    const tritContrast = getContrast(bgTrit, fgTrit);

    // Update constrast information for Normal

    normalContrastRatio.innerHTML = "Razão de Contraste: " + normalContrast;

    if (normalContrast >= 4.5) {
        normalContrastBig.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (normalContrast >= 3) {
        normalContrastBig.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        normalContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (normalContrast >= 7) {
        normalContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (normalContrast >= 4.5) {
        normalContrastSmall.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        normalContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }

    // Update contrast information for Prot

    protContrastRatio.innerHTML = "Razão de Contraste: " + protContrast;

    if (protContrast >= 4.5) {
        protContrastBig.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (protContrast >= 3) {
        protContrastBig.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        protContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (protContrast >= 7) {
        protContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (protContrast >= 4.5) {
        protContrastSmall.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        protContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }

    // Update constrast information for Deut

    deutContrastRatio.innerHTML = "Razão de Contraste: " + deutContrast;

    if (deutContrast >= 4.5) {
        deutContrastBig.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (deutContrast >= 3) {
        deutContrastBig.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        deutContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (deutContrast >= 7) {
        deutContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (deutContrast >= 4.5) {
        deutContrastSmall.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        deutContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }

    // Update constrast information for Trit

    tritContrastRatio.innerHTML = "Razão de Contraste: " + tritContrast;

    if (tritContrast >= 4.5) {
        tritContrastBig.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (tritContrast >= 3) {
        tritContrastBig.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        tritContrastBig.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }

    if (tritContrast >= 7) {
        tritContrastSmall.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (tritContrast >= 4.5) {
        tritContrastSmall.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        tritContrastSmall.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
}

export function updateExamplesValues() {

    // Get SVG Elements

    const svgNormal = document.getElementById("svg-normal");
    const svgProt = document.getElementById("svg-prot");
    const svgDeut = document.getElementById("svg-deut");
    const svgTrit = document.getElementById("svg-trit");

    // Get Color 1, 2, 3 and 4

    const color1 = document.getElementById("color1-hex").value ? document.getElementById("color1-hex").value : document.getElementById("color1-picker").value;
    const color2 = document.getElementById("color2-hex").value ? document.getElementById("color2-hex").value : document.getElementById("color2-picker").value;
    const color3 = document.getElementById("color3-hex").value ? document.getElementById("color3-hex").value : document.getElementById("color3-picker").value;
    const color4 = document.getElementById("color4-hex").value ? document.getElementById("color4-hex").value : document.getElementById("color4-picker").value;

    // Get SVG Lines for Normal Graphic

    const line1Normal = svgNormal.getElementById("line1-normal");
    const line2Normal = svgNormal.getElementById("line2-normal");
    const line3Normal = svgNormal.getElementById("line3-normal");
    const line4Normal = svgNormal.getElementById("line4-normal");

    // Get SVG Lines for Prot Graphic

    const line1Prot = svgProt.getElementById("line1-prot");
    const line2Prot = svgProt.getElementById("line2-prot");
    const line3Prot = svgProt.getElementById("line3-prot");
    const line4Prot = svgProt.getElementById("line4-prot");

    // Get SVG Lines for Deut Graphic

    const line1Deut = svgDeut.getElementById("line1-deut");
    const line2Deut = svgDeut.getElementById("line2-deut");
    const line3Deut = svgDeut.getElementById("line3-deut");
    const line4Deut = svgDeut.getElementById("line4-deut");

    // Get SVG Lines for Trit Graphic
    
    const line1Trit = svgTrit.getElementById("line1-trit");
    const line2Trit = svgTrit.getElementById("line2-trit");
    const line3Trit = svgTrit.getElementById("line3-trit");
    const line4Trit = svgTrit.getElementById("line4-trit");

    // Get Label's Color Rectangle for Normal

    const rect1Normal = svgNormal.getElementById("rect1-normal");
    const rect2Normal = svgNormal.getElementById("rect2-normal");
    const rect3Normal = svgNormal.getElementById("rect3-normal");
    const rect4Normal = svgNormal.getElementById("rect4-normal");

    // Get Label's Color Rectangle for Prot
    
    const rect1Prot = svgProt.getElementById("rect1-prot");
    const rect2Prot = svgProt.getElementById("rect2-prot");
    const rect3Prot = svgProt.getElementById("rect3-prot");
    const rect4Prot = svgProt.getElementById("rect4-prot");

    // Get Label's Color Rectangle for Deut

    const rect1Deut = svgDeut.getElementById("rect1-deut");
    const rect2Deut = svgDeut.getElementById("rect2-deut");
    const rect3Deut = svgDeut.getElementById("rect3-deut");
    const rect4Deut = svgDeut.getElementById("rect4-deut");

    // Get Label's Color Rectangle for Trit

    const rect1Trit = svgTrit.getElementById("rect1-trit");
    const rect2Trit = svgTrit.getElementById("rect2-trit");
    const rect3Trit = svgTrit.getElementById("rect3-trit");
    const rect4Trit = svgTrit.getElementById("rect4-trit");

    // Set Color for Lines in Normal Graphic

    line1Normal.setAttribute("stroke", color1);
    line2Normal.setAttribute("stroke", color2);
    line3Normal.setAttribute("stroke", color3);
    line4Normal.setAttribute("stroke", color4);

    // Set Color for Lines in Prot Graphic
    
    line1Prot.setAttribute("stroke", normalToProtanomaly(color1));
    line2Prot.setAttribute("stroke", normalToProtanomaly(color2));
    line3Prot.setAttribute("stroke", normalToProtanomaly(color3));
    line4Prot.setAttribute("stroke", normalToProtanomaly(color4));

    // Set Color for Lines in Deut Graphic

    line1Deut.setAttribute("stroke", normalToDeuteranomaly(color1));
    line2Deut.setAttribute("stroke", normalToDeuteranomaly(color2));
    line3Deut.setAttribute("stroke", normalToDeuteranomaly(color3));
    line4Deut.setAttribute("stroke", normalToDeuteranomaly(color4));

    // Set Color for Lines in Trit Graphic

    line1Trit.setAttribute("stroke", normalToTritanomaly(color1));
    line2Trit.setAttribute("stroke", normalToTritanomaly(color2));
    line3Trit.setAttribute("stroke", normalToTritanomaly(color3));
    line4Trit.setAttribute("stroke", normalToTritanomaly(color4));

    // Set Color for Label's Color Rectangle in Normal Graphic

    rect1Normal.setAttribute("fill", color1);
    rect2Normal.setAttribute("fill", color2);
    rect3Normal.setAttribute("fill", color3);
    rect4Normal.setAttribute("fill", color4);

    // Set Color for Label's Color Rectangle in Prot Graphic
    
    rect1Prot.setAttribute("fill", normalToProtanomaly(color1));
    rect2Prot.setAttribute("fill", normalToProtanomaly(color2));
    rect3Prot.setAttribute("fill", normalToProtanomaly(color3));
    rect4Prot.setAttribute("fill", normalToProtanomaly(color4));

    // Set Color for Label's Color Rectangle in Deut Graphic
    
    rect1Deut.setAttribute("fill", normalToDeuteranomaly(color1));
    rect2Deut.setAttribute("fill", normalToDeuteranomaly(color2));
    rect3Deut.setAttribute("fill", normalToDeuteranomaly(color3));
    rect4Deut.setAttribute("fill", normalToDeuteranomaly(color4));

    // Set Color for Label's Color Rectangle in Trit Graphic

    rect1Trit.setAttribute("fill", normalToTritanomaly(color1));
    rect2Trit.setAttribute("fill", normalToTritanomaly(color2));
    rect3Trit.setAttribute("fill", normalToTritanomaly(color3));
    rect4Trit.setAttribute("fill", normalToTritanomaly(color4));
}

export function createResults(colorHex) {

    // Get Results Container

    const results = document.getElementById("results");

    // Erase Previous Results

    results.innerHTML = "";

    // Set the variables

    const closestColor = getClosestColor(colorHex);
    const colorName = getColorName(closestColor);
    const colorProt = normalToProtanomaly(colorHex);
    const colorDeut = normalToDeuteranomaly(colorHex);
    const colorTrit = normalToTritanomaly(colorHex);

    // Create Title

    const title = document.createElement("h2");
    title.innerHTML = "Resultados";
    results.appendChild(title);

    // Create Color Name Container

    const colorNameElement = document.createElement("h3");
    colorNameElement.innerHTML = colorName;
    results.appendChild(colorNameElement);

    // If necessary, append a "aprox" to indicate that the name may be wrong

    if (colorHex.toUpperCase() != closestColor.toUpperCase()) {
        const approxElement = document.createElement("span");
        approxElement.innerHTML = 'aprox.<sup>[1]</sup>';
        approxElement.classList.add("approx");
        colorNameElement.appendChild(approxElement);
    }

    // Create Normal:
    
    const colorHexElement = document.createElement("p");
    colorHexElement.innerHTML = "Normal: ";
    results.appendChild(colorHexElement);

    // Create Normal:'s color square

    const colorHexSquare = document.createElement("div");
    colorHexSquare.classList.add("color-square");
    colorHexSquare.style.backgroundColor = colorHex;
    colorHexElement.appendChild(colorHexSquare);

    // Create Normal:'s color code

    const colorHexNameElement = document.createElement("code");
    colorHexNameElement.innerHTML = colorHex;
    colorHexElement.append(colorHexNameElement);

    // Create Prot:

    const colorProtElement = document.createElement("p");
    colorProtElement.innerHTML = "Protanopia: ";
    results.appendChild(colorProtElement);

    // Create Prot:'s color square

    const colorProtSquare = document.createElement("div");
    colorProtSquare.classList.add("color-square");
    colorProtSquare.style.backgroundColor = colorProt;
    colorProtElement.appendChild(colorProtSquare);

    // Create Prot:'s color code

    const colorProtHexElement = document.createElement("code");
    colorProtHexElement.innerHTML = colorProt;
    colorProtElement.append(colorProtHexElement);

    // Create Deut:

    const colorDeutElement = document.createElement("p");
    colorDeutElement.innerHTML = "Deuteranopia: ";
    results.appendChild(colorDeutElement);

    // Create Deut:'s color square

    const colorDeutSquare = document.createElement("div");
    colorDeutSquare.classList.add("color-square");
    colorDeutSquare.style.backgroundColor = colorDeut;
    colorDeutElement.appendChild(colorDeutSquare);

    // Create Deut:'s color code
    
    const colorDeutHexElement = document.createElement("code");
    colorDeutHexElement.innerHTML = colorDeut;
    colorDeutElement.append(colorDeutHexElement);

    // Create Trit:'s

    const colorTritElement = document.createElement("p");
    colorTritElement.innerHTML = "Tritanopia: ";
    results.appendChild(colorTritElement);

    // Create Trit:'s color square

    const colorTritSquare = document.createElement("div");
    colorTritSquare.classList.add("color-square");
    colorTritSquare.style.backgroundColor = colorTrit;
    colorTritElement.appendChild(colorTritSquare);

    // Create Trit:'s color code
    
    const colorTritHexElement = document.createElement("code");
    colorTritHexElement.innerHTML = colorTrit;
    colorTritElement.append(colorTritHexElement);
}

export function createContrast(colorHex) {

    // Get Contrast Container

    const contrast = document.getElementById("contrast");

    // Erase Previous Contrast

    contrast.innerHTML = "";

    // Set the variables

    const relativeLuminance = getRelativeLuminance(colorHex);
    const colorProt = normalToProtanomaly(colorHex);
    const colorDeut = normalToDeuteranomaly(colorHex);
    const colorTrit = normalToTritanomaly(colorHex);
    let bgColor = colorHex;
    let fgColor;
    if (relativeLuminance < 0.5) {
        fgColor = "#ffffff"; // Set a white foreground for a dark background
    } else {
        fgColor = "#000000"; // Set a black foreground for a light background
    }

    // Create Title

    const contrastTitleElement = document.createElement("h2");
    contrastTitleElement.innerHTML = "Contraste";
    contrast.appendChild(contrastTitleElement);

    // Create columns' container

    const contrastElement = document.createElement("div");
    contrastElement.classList.add("columns");
    contrast.appendChild(contrastElement);

    // Create foreground's column

    const contrastFgElement = document.createElement("div");
    contrastFgElement.classList.add("column");
    contrastElement.appendChild(contrastFgElement);

    // Create foreground's label

    const fgLabelElement = document.createElement("label");
    const fgLabelTitleElement = document.createElement("h4");
    fgLabelTitleElement.innerHTML = "Cor do Texto";
    contrastFgElement.appendChild(fgLabelElement);
    fgLabelElement.appendChild(fgLabelTitleElement);

    // Create foreground's color code input

    const fgHexElement = document.createElement("input");
    fgHexElement.type = "text";
    fgHexElement.maxLength = "7";
    fgHexElement.placeholder = "ex: #E60026";
    fgHexElement.id = "fg-hex";
    fgLabelElement.appendChild(fgHexElement);

    // Create foreground's color picker

    const fgPickerElement = document.createElement("input");
    fgPickerElement.type = "color";
    fgPickerElement.value = fgColor;
    fgPickerElement.id = "fg-picker";
    fgLabelElement.appendChild(fgPickerElement);

    // Create background's column

    const contrastBgElement = document.createElement("div");
    contrastBgElement.classList.add("column");
    contrastElement.appendChild(contrastBgElement);

    // Create background's label

    const bgLabelElement = document.createElement("label");
    const bgLabelTitleElement = document.createElement("h4");
    bgLabelTitleElement.innerHTML = "Cor de Fundo";
    contrastBgElement.appendChild(bgLabelElement);
    bgLabelElement.appendChild(bgLabelTitleElement);

    // Create background's color code input

    const bgHexElement = document.createElement("input");
    bgHexElement.type = "text";
    bgHexElement.maxLength = "7";
    bgHexElement.placeholder = "ex: #E60026";
    bgHexElement.id = "bg-hex"
    bgLabelElement.appendChild(bgHexElement);

    // Create background's color picker;

    const bgPickerElement = document.createElement("input");
    bgPickerElement.type = "color";
    bgPickerElement.value = bgColor;
    bgPickerElement.id = "bg-picker";
    bgLabelElement.appendChild(bgPickerElement);

    // Add events for updating contrast values

    bgPickerElement.addEventListener("change", updateContrastValues);
    fgPickerElement.addEventListener("change", updateContrastValues);
    bgHexElement.addEventListener("keyup", updateContrastValues);
    fgHexElement.addEventListener("keyup", updateContrastValues);

    // Create Lorem Ipsum's elements

    const textTitleContrastElement = document.createElement("h5");
    const textContrastElement = document.createElement("span");
    textContrastElement.classList.add("contrast-box-text");
    textTitleContrastElement.innerHTML = "Lorem Ipsum";
    textContrastElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci velit, congue eget enim eget, iaculis luctus risus. Aenean et lectus ornare, suscipit dui at, auctor sapien. Curabitur lobortis nunc a pellentesque finibus. Fusce sed justo tincidunt, ultrices enim convallis, varius sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis urna lacus, et dictum augue bibendum id. Mauris gravida lacus arcu, et volutpat sem malesuada luctus. Duis maximus pellentesque molestie. Cras tellus diam, ullamcorper non vehicula ac, tempus id dolor. Integer imperdiet varius risus sit amet blandit.";

    // Create Normal Contrast

    // Create Normal Contrast's title

    const titleNormalContrastElement = document.createElement("h4");
    titleNormalContrastElement.innerHTML = "Normal";
    contrast.appendChild(titleNormalContrastElement);

    // Create Normal Contrast's contrast box

    const normalContrastElement = document.createElement("div");
    normalContrastElement.classList.add("contrast-box");
    normalContrastElement.id = "normal-contrast-box";
    normalContrastElement.appendChild(textTitleContrastElement);
    normalContrastElement.appendChild(textContrastElement);
    normalContrastElement.style.color = fgColor;
    normalContrastElement.style.backgroundColor = bgColor;
    contrast.appendChild(normalContrastElement);

    // Create Normal Contrast's information

    const titleNormalContrastRatioElement = document.createElement("p");
    const contrastNormal = getContrast(fgColor, bgColor);
    titleNormalContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastNormal;
    titleNormalContrastRatioElement.id = "normal-contrast-ratio";
    contrast.appendChild(titleNormalContrastRatioElement);
    
    // Create Normal Contrast's information for big texts

    const titleNormalContrastBigElement = document.createElement("p");
    titleNormalContrastBigElement.id = "normal-contrast-big";
    if (contrastNormal >= 4.5) {
        titleNormalContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (contrastNormal >= 3) {
        titleNormalContrastBigElement.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        titleNormalContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleNormalContrastBigElement);
    
    // Create Normal Contrast's information for small texts
    
    const titleNormalContrastSmallElement = document.createElement("p");
    titleNormalContrastSmallElement.id = "normal-contrast-small";
    if (contrastNormal >= 7) {
        titleNormalContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (contrastNormal >= 4.5) {
        titleNormalContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        titleNormalContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleNormalContrastSmallElement);

    // Create Prot Contrast

    // Create Prot Contrast's title

    const titleProtanomalyContrastElement = document.createElement("h4");
    titleProtanomalyContrastElement.innerHTML = "Protanopia";
    contrast.appendChild(titleProtanomalyContrastElement);

    // Create Prot Contrast's contrast box

    const protanomalyContrastElement = document.createElement("div");
    protanomalyContrastElement.classList.add("contrast-box");
    protanomalyContrastElement.id = "prot-contrast-box";
    protanomalyContrastElement.appendChild(textTitleContrastElement.cloneNode(true));
    protanomalyContrastElement.appendChild(textContrastElement.cloneNode(true));
    protanomalyContrastElement.style.color = normalToDeuteranomaly(fgColor);
    protanomalyContrastElement.style.backgroundColor = colorProt;
    contrast.appendChild(protanomalyContrastElement);

    // Create Prot Contrast's information

    const titleProtanomalyContrastRatioElement = document.createElement("p");
    const contrastProtanomaly = getContrast(fgColor, colorProt);
    titleProtanomalyContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastProtanomaly;
    titleProtanomalyContrastRatioElement.id = "prot-contrast-ratio";
    contrast.appendChild(titleProtanomalyContrastRatioElement);

    // Create Prot Contrast's information for big texts

    const titleProtanomalyContrastBigElement = document.createElement("p");
    titleProtanomalyContrastBigElement.id = "prot-contrast-big";
    if (contrastProtanomaly >= 4.5) {
        titleProtanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (contrastProtanomaly >= 3) {
        titleProtanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        titleProtanomalyContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleProtanomalyContrastBigElement);

    // Create Prot Contrast's information for small texts

    const titleProtanomalyContrastSmallElement = document.createElement("p");
    titleProtanomalyContrastSmallElement.id = "prot-contrast-small";
    if (contrastProtanomaly >= 7) {
        titleProtanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (contrastProtanomaly >= 4.5) {
        titleProtanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        titleProtanomalyContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleProtanomalyContrastSmallElement);

    // Create Deut Contrast

    // Create Deut Contrast's title

    const titleDeuteranomalyContrastElement = document.createElement("h4");
    titleDeuteranomalyContrastElement.innerHTML = "Deuteranopia";
    contrast.appendChild(titleDeuteranomalyContrastElement);

    // Create Deut Contrast's contrast box

    const deuteranomalyContrastElement = document.createElement("div");
    deuteranomalyContrastElement.classList.add("contrast-box");
    deuteranomalyContrastElement.id = "deut-contrast-box";
    deuteranomalyContrastElement.appendChild(textTitleContrastElement.cloneNode(true));
    deuteranomalyContrastElement.appendChild(textContrastElement.cloneNode(true));
    deuteranomalyContrastElement.style.color = normalToDeuteranomaly(fgColor);
    deuteranomalyContrastElement.style.backgroundColor = colorDeut;
    contrast.appendChild(deuteranomalyContrastElement);

    // Create Deut Contrast's information

    const titleDeuteranomalyContrastRatioElement = document.createElement("p");
    const contrastDeuteranomaly = getContrast(fgColor, colorDeut);
    titleDeuteranomalyContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastDeuteranomaly;
    titleDeuteranomalyContrastRatioElement.id = "deut-contrast-ratio";
    contrast.appendChild(titleDeuteranomalyContrastRatioElement);

    // Create Deut Contrast's information for big texts

    const titleDeuteranomalyContrastBigElement = document.createElement("p");
    titleDeuteranomalyContrastBigElement.id = "deut-contrast-big";
    if (contrastDeuteranomaly >= 4.5) {
        titleDeuteranomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (contrastDeuteranomaly >= 3) {
        titleDeuteranomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        titleDeuteranomalyContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleDeuteranomalyContrastBigElement);

    // Create Deut Contrast's information for small texts

    const titleDeuteranomalyContrastSmallElement = document.createElement("p");
    titleDeuteranomalyContrastSmallElement.id = "deut-contrast-small";
    if (contrastDeuteranomaly >= 7) {
        titleDeuteranomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (contrastDeuteranomaly >= 4.5) {
        titleDeuteranomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        titleDeuteranomalyContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleDeuteranomalyContrastSmallElement);

    // Create Trit Contrast

    // Create Trit Contrast's title

    const titleTritanomalyContrastElement = document.createElement("h4");
    titleTritanomalyContrastElement.innerHTML = "Tritanopia";
    contrast.appendChild(titleTritanomalyContrastElement);

    // Create Trit Contrast's contrast box

    const tritanomalyContrastElement = document.createElement("div");
    tritanomalyContrastElement.classList.add("contrast-box");
    tritanomalyContrastElement.id = "trit-contrast-box";
    tritanomalyContrastElement.appendChild(textTitleContrastElement.cloneNode(true));
    tritanomalyContrastElement.appendChild(textContrastElement.cloneNode(true));
    tritanomalyContrastElement.style.color = normalToTritanomaly(fgColor);
    tritanomalyContrastElement.style.backgroundColor = colorTrit;
    contrast.appendChild(tritanomalyContrastElement);

    // Create Trit Contrast's information

    const titleTritanomalyContrastRatioElement = document.createElement("p");
    const contrastTritanomaly = getContrast(fgColor, colorTrit);
    titleTritanomalyContrastRatioElement.innerHTML = "Razão de Contraste: " + contrastTritanomaly;
    titleTritanomalyContrastRatioElement.id = "trit-contrast-ratio";
    contrast.appendChild(titleTritanomalyContrastRatioElement);

    // Create Trit Contrast's information for big texts

    const titleTritanomalyContrastBigElement = document.createElement("p");
    titleTritanomalyContrastBigElement.id = "trit-contrast-big";
    if (contrastTritanomaly >= 4.5) {
        titleTritanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AAA<sup>[2]</sup>";
    } else if (contrastTritanomaly >= 3) {
        titleTritanomalyContrastBigElement.innerHTML = "Para fontes grandes: Nível AA<sup>[2]</sup>";
    } else {
        titleTritanomalyContrastBigElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes grandes";
    }
    contrast.appendChild(titleTritanomalyContrastBigElement);

    // Create Trit Contrast's information for small texts

    const titleTritanomalyContrastSmallElement = document.createElement("p");
    titleTritanomalyContrastSmallElement.id = "trit-contrast-small";
    if (contrastTritanomaly >= 7) {
        titleTritanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AAA<sup>[2]</sup>";
    } else if (contrastTritanomaly >= 4.5) {
        titleTritanomalyContrastSmallElement.innerHTML = "Para fontes pequenas: Nível AA<sup>[2]</sup>";
    } else {
        titleTritanomalyContrastSmallElement.innerHTML = "Sem conformidade com a WCAG 2.1 para fontes pequenas";
    }
    contrast.appendChild(titleTritanomalyContrastSmallElement);
}

export function createExamples(colorHex) {

    // Get Examples container
    const examples = document.getElementById("examples");
    examples.innerHTML = "";

    // Create Examples title

    const examplesTitleElement = document.createElement("h2");
    examplesTitleElement.innerHTML = "Exemplos";
    examples.appendChild(examplesTitleElement);

    // Set variables

    let color1 = colorHex;
    let color2 = "#F6DA00";
    let color3 = "#908121";
    let color4 = "#004A9C";

    // Create Examples' column container

    const examplesColumns = document.createElement("div");
    examplesColumns.classList.add("columns");
    examples.appendChild(examplesColumns);

    // Create Examples' column for Colors 1 and 2

    const examplesColors1and2 = document.createElement("div");
    examplesColors1and2.classList.add("column");
    examplesColumns.appendChild(examplesColors1and2);

    // Create Examples' Color 1 Label

    const examplesColor1Label = document.createElement("label");
    const examplesColor1Title = document.createElement("h4");
    examplesColor1Title.innerHTML = "Cor 1";
    examplesColors1and2.appendChild(examplesColor1Label);
    examplesColor1Label.appendChild(examplesColor1Title);

    // Create Examples' Color 1 color code input

    const examplesColor1Hex = document.createElement("input");
    examplesColor1Hex.type = "text";
    examplesColor1Hex.maxLength = "7";
    examplesColor1Hex.placeholder = "ex: #E60026";
    examplesColor1Hex.id = "color1-hex";
    examplesColor1Label.appendChild(examplesColor1Hex);

    // Create Examples' Color 1 color picker

    const examplesColor1Picker = document.createElement("input");
    examplesColor1Picker.type = "color";
    examplesColor1Picker.value = color1;
    examplesColor1Picker.id = "color1-picker";
    examplesColor1Label.appendChild(examplesColor1Picker);

    // Create Examples' Color 2 Label

    const examplesColor2Label = document.createElement("label");
    const examplesColor2Title = document.createElement("h4");
    examplesColor2Title.innerHTML = "Cor 2";
    examplesColors1and2.appendChild(examplesColor2Label);
    examplesColor2Label.appendChild(examplesColor2Title);

    // Create Examples' Color 2 color code input

    const examplesColor2Hex = document.createElement("input");
    examplesColor2Hex.type = "text";
    examplesColor2Hex.maxLength = "7";
    examplesColor2Hex.placeholder = "ex: #E60026";
    examplesColor2Hex.id = "color2-hex";
    examplesColor2Label.appendChild(examplesColor2Hex);

    // Create Examples' Color 2 color picker

    const examplesColor2Picker = document.createElement("input");
    examplesColor2Picker.type = "color";
    examplesColor2Picker.value = color2;
    examplesColor2Picker.id = "color2-picker";
    examplesColor2Label.appendChild(examplesColor2Picker);

    // Create Examples' column for Colors 3 and 4

    const examplesColors3and4 = document.createElement("div");
    examplesColors3and4.classList.add("column");
    examplesColumns.appendChild(examplesColors3and4);

    // Create Examples' Color 3 Label

    const examplesColor3Label = document.createElement("label");
    const examplesColor3Title = document.createElement("h4");
    examplesColor3Title.innerHTML = "Cor 3";
    examplesColors3and4.appendChild(examplesColor3Label);
    examplesColor3Label.appendChild(examplesColor3Title);

    // Create Examples' Color 3 color code input

    const examplesColor3Hex = document.createElement("input");
    examplesColor3Hex.type = "text";
    examplesColor3Hex.maxLength = "7";
    examplesColor3Hex.placeholder = "ex: #E60026";
    examplesColor3Hex.id = "color3-hex";
    examplesColor3Label.appendChild(examplesColor3Hex);

    // Create Examples' Color 3 color picker
    
    const examplesColor3Picker = document.createElement("input");
    examplesColor3Picker.type = "color";
    examplesColor3Picker.value = color3;
    examplesColor3Picker.id = "color3-picker";
    examplesColor3Label.appendChild(examplesColor3Picker);

    // Create Examples' Color 4 Label

    const examplesColor4Label = document.createElement("label");
    const examplesColor4Title = document.createElement("h4");
    examplesColor4Title.innerHTML = "Cor 4";
    examplesColors3and4.appendChild(examplesColor4Label);
    examplesColor4Label.appendChild(examplesColor4Title);

    // Create Examples' Color 4 color code input

    const examplesColor4Hex = document.createElement("input");
    examplesColor4Hex.type = "text";
    examplesColor4Hex.maxLength = "7";
    examplesColor4Hex.placeholder = "ex: #E60026";
    examplesColor4Hex.id = "color4-hex";
    examplesColor4Label.appendChild(examplesColor4Hex);

    // Create Examples' Color 4 color picker

    const examplesColor4Picker = document.createElement("input");
    examplesColor4Picker.type = "color";
    examplesColor4Picker.value = color4;
    examplesColor4Picker.id = "color4-picker";
    examplesColor4Label.appendChild(examplesColor4Picker);

    // Add events for change in Colors 1/2/3/4 color code input and color picker
    
    examplesColor1Picker.addEventListener("change", updateExamplesValues);
    examplesColor1Hex.addEventListener("keyup", updateExamplesValues);
    examplesColor2Picker.addEventListener("change", updateExamplesValues);
    examplesColor2Hex.addEventListener("keyup", updateExamplesValues);
    examplesColor3Picker.addEventListener("change", updateExamplesValues);
    examplesColor3Hex.addEventListener("keyup", updateExamplesValues);
    examplesColor4Picker.addEventListener("change", updateExamplesValues);
    examplesColor4Hex.addEventListener("keyup", updateExamplesValues);

    // Create Normal Graphic's title

    const titleNormalGraphic = document.createElement("h4");
    titleNormalGraphic.innerHTML = "Normal";
    examples.appendChild(titleNormalGraphic);

    // Create Normal Graphic

    createSVG("normal", color1, color2, color3, color4);

    // Create Prot Graphic's title

    const titleProtGraphic = document.createElement("h4");
    titleProtGraphic.innerHTML = "Protanopia";
    examples.appendChild(titleProtGraphic);

    // Create Prot Graphic

    createSVG("prot", normalToProtanomaly(color1), normalToProtanomaly(color2), normalToProtanomaly(color3), normalToProtanomaly(color4));

    // Create Deut Graphic's title

    const titleDeutGraphic = document.createElement("h4");
    titleDeutGraphic.innerHTML = "Deuteranopia";
    examples.appendChild(titleDeutGraphic);

    // Create Deut Graphic

    createSVG("deut", normalToDeuteranomaly(color1), normalToDeuteranomaly(color2), normalToDeuteranomaly(color3), normalToDeuteranomaly(color4));

    // Create Trit Graphic's title

    const titleTritGraphic = document.createElement("h4");
    titleTritGraphic.innerHTML = "Tritanopia";
    examples.appendChild(titleTritGraphic);

    // Create Trit Graphic

    createSVG("trit", normalToTritanomaly(color1), normalToTritanomaly(color2), normalToTritanomaly(color3), normalToTritanomaly(color4));
}

export function createLearnMore(colorName) {

    // Get Learn More container
    const learnMore = document.getElementById("learn-more");

    // Erase previous Learn More
    learnMore.innerHTML = "";

    const learnMoreElement = document.createElement("a");
    learnMoreElement.href = `https://google.com/search?q=${colorName.replace(" ", "+").toLowerCase()}+cor`
    learnMoreElement.innerHTML = `Saiba mais sobre ${colorName}`;
    learnMoreElement.target = "_blank";
    learnMore.appendChild(learnMoreElement);
}

export function createMainFooter() {

    // Get Main Footer container
    const mainFooter = document.getElementById("main-footer");

    // Erase previous Main Footer

    mainFooter.innerHTML = "";

    const approxExplanationElement = document.createElement("p");
    approxExplanationElement.innerHTML = "[1] O nome da cor é apenas uma aproximação baseada na lista de cores nomeadas. Portanto, os resultados podem não ser compatíveis com a cor pesquisada";
    mainFooter.appendChild(approxExplanationElement);
    
    const constrastExplanationElement = document.createElement("p");
    constrastExplanationElement.innerHTML = "[2] O Nível AA indica a conformidade mínima com a WCAG 2.1, com uma razão de contraste de 3:1 para textos grandes (mais de 18 pt em tamanho normal ou 14 pt em negrito) e 4.5:1 para textos pequenos (menores que 18 pt). No nível AAA, que indica a conformidade elevada com a WCAG 2.1, as razões de contraste sobem para 4.5:1 e 7:1, respectivamente.";
    mainFooter.appendChild(constrastExplanationElement);
}