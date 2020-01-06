if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => console.log("registration succeeded"))
    .catch(() => console.log("registration failed"));
}
