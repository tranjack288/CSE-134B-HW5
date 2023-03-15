export function putData(formData, responseOutput) {
  const data = {
    id: formData.get('id'),
    article_name: formData.get('article_name'),
    article_body: formData.get('article_body')
  };
  const currentDate = new Date();
  data.date = currentDate.toLocaleString();

  fetch('https://httpbin.org/put', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(jsonData => {
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(jsonData, null, 2);
      responseOutput.innerHTML = '';
      responseOutput.appendChild(pre);
    })
    .catch(error => console.error(error));
}