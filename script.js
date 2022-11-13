const transBtns = document.querySelectorAll('.btn');
let selectedLang = 'pt';

const translateDataset = (language) => {
  const texts = document.querySelectorAll(`[data-${language}]`);
  texts.forEach((text) => (text.textContent = text.dataset[language]));
};

translateDataset(selectedLang);

transBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    selected_lang = e.target.dataset.lang;
    translateDataset(selected_lang);
  });
});
