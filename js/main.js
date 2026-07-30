/* ============================================================
   main.js — přepínač motivu, rok v patičce, ukázkový formulář
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Přepínač světlého / tmavého režimu ---------- */
  var SUN =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  var MOON =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var mode = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  function apply(next) {
    mode = next;
    root.setAttribute("data-theme", mode);
    if (!toggle) return;
    toggle.innerHTML = mode === "dark" ? SUN : MOON;
    toggle.setAttribute(
      "aria-label",
      mode === "dark" ? "Přepnout na světlý režim" : "Přepnout na tmavý režim",
    );
  }

  apply(mode);

  if (toggle) {
    toggle.addEventListener("click", function () {
      apply(mode === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Aktuální rok v patičce ---------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Ukázkový kontaktní formulář ---------- */
  var form = document.querySelector(".contact-form");
  var note = document.querySelector("[data-form-note]");

  if (form && note) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.querySelector("#jmeno");
      var email = form.querySelector("#email");
      var message = form.querySelector("#zprava");

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        note.textContent = "Vyplňte prosím všechna pole.";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        note.textContent = "Zadejte prosím platnou e-mailovou adresu.";
        return;
      }

      note.textContent = "Omlouváme se, ale tento formulář zatím není funkční.";
      form.reset();
    });
  }
})();
