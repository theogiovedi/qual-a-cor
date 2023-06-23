export function menu() {
  const navlogo = document.getElementById("navlogo");
  const menu = document.getElementById("menu");
  const closeMenu = document.getElementById("close-menu");
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  navlogo.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.zIndex = 999;
    menu.style.opacity = 1;
    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
    let cameraOnly = ["live-link", "palettes-link", "hues-link"];
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      devices.forEach((device) => {
        if (device.kind == "videoinput") {
          for (let i = 0; i < cameraOnly.length; i++) {
            document.getElementById(cameraOnly[i]).style.display = "block";
          }
          if (/(Android|iPhone)/.test(navigator.userAgent)) {
            document.getElementById("ar-link").style.display = "block";
          }
        }
      });
    });
  });
  closeMenu.addEventListener("click", () => {
    menu.style.opacity = 0;
    menu.style.display = "none";
    menu.style.zIndex = -999;
    header.style.display = "block";
    main.style.display = "block";
    footer.style.display = "block";
  });
}
