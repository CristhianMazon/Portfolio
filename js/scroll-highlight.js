document.addEventListener('DOMContentLoaded', () => {
    console.log('Script scroll-highlight.js carregado'); // Teste básico
  
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a, .scroll-nav a');
  
    if (!sections.length || !navLinks.length) {
      console.log('Seções ou links não encontrados!');
      return;
    }
  
    function activateSection() {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
  
      console.log('Seção atual:', current);
    }
  
    window.addEventListener('scroll', activateSection);
  });
  