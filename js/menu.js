document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu-mobile");
  
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      menu.classList.toggle("active");
    });
  
    // Fechar o menu ao clicar em algum link
    const links = menu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        menu.classList.remove("active");
      });
    });
  });
  