let translations = {};

fetch('traducciones.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        setLanguage('es');
    });

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            elem.textContent = translations[lang][key];
        }
    });

    // Cambiar también el título del documento
    if (translations[lang] && translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }
}