if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => console.log("registration succeeded"))
      .catch(() => console.log("registration failed"));
  });
}
