let translations = {};

// Cargar traducciones al inicio
fetch('lang.json')
  .then(response => response.json())
  .then(data => {
    translations = data;
    setLanguage('es'); // Idioma por defecto
  })
  .catch(err => console.error('Error cargando lang.json:', err));

// Añadir evento a botones
document.getElementById('language-buttons').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const lang = e.target.getAttribute('data-lang');
    setLanguage(lang);
  }
});

function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Idioma ${lang} no encontrado`);
    return;
  }
  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  }
  document.documentElement.lang = lang;
}