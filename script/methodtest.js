const postBtn = document.getElementById('postBtn');
const getBtn = document.getElementById('getBtn');
const putBtn = document.getElementById('putBtn');
const deleteBtn = document.getElementById('deleteBtn');
const form = document.getElementById('httpForm');
const responseOutput = document.getElementById('response');

postBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {
    id: formData.get('id'),
    article_name: formData.get('article_name'),
    article_body: formData.get('article_body')
  };
  const currentDate = new Date();
  data.date = currentDate.toLocaleString();

  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(jsonData => {
      const responseOutput = document.getElementById('response');
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(jsonData, null, 2);
      //clears the existing content of the response to make it easier to read
      responseOutput.innerHTML = '';
      responseOutput.appendChild(pre);
    })
    .catch(error => console.error(error));
});

getBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = document.querySelector('#id').value;

  fetch(`https://httpbin.org/get?id=${id}`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      const responseOutput = document.getElementById('response');
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(data, null, 2);
      responseOutput.innerHTML = '';
      responseOutput.appendChild(pre);
    })
    .catch(error => console.error(error));
});

putBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
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
      const responseOutput = document.getElementById('response');
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(jsonData, null, 2);
      responseOutput.innerHTML = '';
      responseOutput.appendChild(pre);
    })
    .catch(error => console.error(error));
});


deleteBtn.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('https://httpbin.org/delete', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(jsonData => {
      const responseOutput = document.getElementById('response');
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(jsonData, null, 2);
      responseOutput.innerHTML = '';
      responseOutput.appendChild(pre);
    })
    .catch(error => console.error(error));
});
