document.querySelector('#form').addEventListener('submit', (event) => {
  event.preventDefault();
  const url = document.querySelector('#input_url').value;
  window.location.replace(url);
});
