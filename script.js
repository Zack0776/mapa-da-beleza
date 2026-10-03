window.addEventListener('load', () => {
  window.setTimeout(() => {
    document.getElementById('loader').classList.add('done');
    document.body.classList.add('ready');
  }, 1900);
});
