// Accessible mobile menu toggle. Keeps aria-expanded in sync with the panel's
// visibility, closes on Escape, and closes when the viewport reaches desktop.
(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var panel = document.getElementById("mobile-nav");
  if (!toggle || !panel) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // A desktop-width viewport shows the inline nav, so drop any open state.
  var desktop = window.matchMedia("(min-width: 60rem)");
  desktop.addEventListener("change", function (event) {
    if (event.matches) setOpen(false);
  });
})();
