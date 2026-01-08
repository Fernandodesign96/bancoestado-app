document.getElementById("transferForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  // Guardado automático del estado
  localStorage.setItem("transferSaved", "true");

  // Simular intermitencia (50% probabilidad)
  const error = Math.random() < 0.5;

  if (error) {
    window.location.href = "error.html";
  } else {
    window.location.href = "resume.html";
  }
});
