const darkMode = document.getElementById("toggle-dark-mode");

function toggleDarkMode() {
    const root = document.querySelector(":root");
    const style = getComputedStyle(root);
    const bg = style.getPropertyValue("--background-color");
    const fg = style.getPropertyValue("--foreground-color");
    const black = style.getPropertyValue("--black");
    const white = style.getPropertyValue("--white");
    if (fg == white && bg == black) {
        root.style.setProperty("--foreground-color", black);
        root.style.setProperty("--background-color", white);
    } else {
        root.style.setProperty("--foreground-color", white);
        root.style.setProperty("--background-color", black);
    }
}

darkMode.addEventListener("click", toggleDarkMode)