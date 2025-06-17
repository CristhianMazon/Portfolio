function toggleComentario(el, comentario) {
    const original = el.dataset.original;
  
    if (!original) {
      el.dataset.original = el.innerHTML;
      el.innerHTML = `<span class="comentario-Conhecimentos">${comentario}</span>`;
    } else {
      el.innerHTML = el.dataset.original;
      delete el.dataset.original;
    }
  }
  