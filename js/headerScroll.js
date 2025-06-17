const scrollHeader = document.getElementById("scroll-header");

function handleHeaderVisibility() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // No mobile, força o header sempre visível
    scrollHeader.classList.add("visible");
  } else {
    // No desktop, mostra o header só após rolar além da tela inicial
    if (window.scrollY > window.innerHeight - 100) {
      scrollHeader.classList.add("visible");
    } else {
      scrollHeader.classList.remove("visible");
    }
  }
}

// Ativa na rolagem
window.addEventListener("scroll", handleHeaderVisibility);
// Ativa ao redimensionar (ex: virar o celular ou mudar de desktop pra mobile)
window.addEventListener("resize", handleHeaderVisibility);
// Ativa ao carregar a página
document.addEventListener("DOMContentLoaded", handleHeaderVisibility);
