const scrollHeader = document.getElementById("scroll-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 100) {
    scrollHeader.classList.add("visible");
  } else {
    scrollHeader.classList.remove("visible");
  }
});
