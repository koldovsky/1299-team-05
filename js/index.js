function init() {
  import("./index.header.js");
  import("./index.want-to-make-a-step-forward.js");
//  import("./index.why-choose-us-card.js");
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});