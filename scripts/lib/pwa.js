export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .catch(() =>
          console.log("Erro: Não foi possível registrar o Service Worker")
        );
    });
  }
}
