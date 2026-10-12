/* ==========================================================================
   app.js - Les seules interactions indispensables de la maquette.
   Le design reste dans le CSS : le JS ne fait que changer des attributs.
   ========================================================================== */

// Ouverture / fermeture de la navigation sur mobile.

// Ciblage des balises dans le dom et stockage dans des constantes
// Objet JavaScript qui représente un élément dans la structure de la page (ici le type est HTMLButtonElement)
// Ces objets en JS possedent la methode setAttribute qui permet de modifier les attributs
const app = document.querySelector(".app");
const navToggle = document.querySelector("[data-nav-toggle]");

function setNavOpen(isOpen) {
  // fct qui change la valeur d'aria pour le lecteur
  navToggle.setAttribute("aria-expanded", String(isOpen));
  // on ajoute la classe si isOpen vaut true sinon on la retire
  app.classList.toggle("app--nav-open", isOpen);
}

if (app && navToggle) {
  navToggle.addEventListener("click", () => {
    setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  // La touche Echap referme le panneau et rend le focus au bouton.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && app.classList.contains("app--nav-open")) {
      setNavOpen(false);
      navToggle.focus();
    }
  });
}

// Boites de dialogue : un bouton data-dialog-open="id" ouvre la modale <dialog id="id">.
// L'element <dialog> gere seul le piege du focus et la touche Echap.
document.querySelectorAll("[data-dialog-open]").forEach((button) => {
  const dialog = document.getElementById(button.dataset.dialogOpen);
  button.addEventListener("click", () => dialog.showModal());
});
