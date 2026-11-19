const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const scanButton = document.querySelector("#scan-button");
const scanMessage = document.querySelector("#scan-message");

scanButton.addEventListener("click", () => {
  scanButton.disabled = true;
  scanButton.innerHTML = 'Scanning <span aria-hidden="true">…</span>';
  scanMessage.textContent = "";

  window.setTimeout(() => {
    scanButton.disabled = false;
    scanButton.innerHTML = 'Try a demo scan <span aria-hidden="true">↗</span>';
    scanMessage.textContent = "Nice find! Daily Greens added to your good list.";
  }, 1100);
});
