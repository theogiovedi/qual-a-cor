import { toggleDarkMode, createResults, createContrast, createExamples, createLearnMore, createMainFooter } from './interface.js'
import { getClosestColor } from './calc.js'
import { getColorName } from './colors.js'

export const darkMode = document.getElementById("toggle-dark-mode");
const resultsButton = document.getElementById("results-button");

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
if (resultsButton) {
    resultsButton.addEventListener("click", showResults)
}