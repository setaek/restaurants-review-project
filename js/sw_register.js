// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker
//       .register("./sw.js")
//       .then(() => console.log("registration succeeded"))
//       .catch(() => console.log("registration failed"));
//   });
// }
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(reg => {
      // registration worked
      console.log("Registration succeeded. Scope is " + reg.scope);
    })
    .catch(error => {
      // registration failed
      console.log("Registration failed with " + error);
    });
}
