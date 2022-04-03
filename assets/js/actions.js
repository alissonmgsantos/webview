const querySelector = (element) => document.querySelector(element);

querySelector('#form').addEventListener('submit', (event) => {
  event.preventDefault();
  let url = querySelector('#input_url').value;

  const expression =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  if (expression.test(url)) {
    if (!/(http(s?)):\/\//i.test(url)) {
      url = 'http://' + url;
    }
    window.location.replace(url);
  }
  querySelector('#message_error').innerHTML = 'Your link is invalid.';
});

querySelector('#input_url').addEventListener('keyup', (event) => {
  console.log(!!querySelector('#input_url').value);
  if (!!querySelector('#input_url').value) {
    querySelector('#message_error').innerHTML = null;
  }
});
