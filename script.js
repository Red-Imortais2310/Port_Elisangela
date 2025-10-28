function abrirGitHub() {
  window.open("https://github.com/seuusuario", "_blank");
}

function abrirPopup(tipo) {
  const popup = document.getElementById(`popup-${tipo}`);
  popup.style.display = "block";
  popup.style.opacity = 0;
  popup.style.transform = "scale(0.9)";
  setTimeout(() => {
    popup.style.opacity = 1;
    popup.style.transform = "scale(1)";
  }, 10);
  popup.setAttribute("aria-hidden", "false");
}

function fecharPopup(tipo) {
  const popup = document.getElementById(`popup-${tipo}`);
  popup.style.opacity = 0;
  popup.style.transform = "scale(0.9)";
  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
  popup.setAttribute("aria-hidden", "true");
}

// Fechar popups com tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".popup").forEach(popup => {
      popup.style.opacity = 0;
      popup.style.transform = "scale(0.9)";
      setTimeout(() => {
        popup.style.display = "none";
      }, 300);
      popup.setAttribute("aria-hidden", "true");
    });
  }
});
