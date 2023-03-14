const form = document.getElementById('httpForm');

export function sendPutRequest(formData) {
  const data = {
    id: formData.get('id'),
    article_name: formData.get('article_name'),
    article_body: formData.get('article_body')
  };

  const currentDate = new Date();
  data.date = currentDate.toLocaleString();

  return fetch('https://httpbin.org/put', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json());
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  sendPutRequest(formData)
    .then(jsonData => {
      const responseOutput = document.getElementById('response');
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(jsonData, null, 2);
      responseOutput.innerHTML = '';
      responseOutput.appendChild(pre);
    })
    .catch(error => console.error(error));
});
