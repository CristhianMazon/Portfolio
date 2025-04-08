const scrollHeader = document.getElementById("scroll-header");

window.addEventListener("scroll", () => {
  // Só aplica a lógica de mostrar/ocultar no desktop
  if (window.innerWidth > 768) {
    if (window.scrollY > window.innerHeight - 100) {
      scrollHeader.classList.add("visible");
    } else {
      scrollHeader.classList.remove("visible");
    }
  } else {
    // No mobile, força o header visível SEM depender da classe "visible"
    scrollHeader.classList.add("visible");
  }
});
