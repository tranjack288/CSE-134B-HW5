export function sendGetRequest(id) {
    return fetch(`https://httpbin.org/get?id=${id}`, {
      method: 'GET'
    })
      .then(response => response.json());
  }
  
  const getForm = document.getElementById('httpGetForm');
  getForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.querySelector('#id').value;
  
    sendGetRequest(id)
      .then(data => {
        const responseOutput = document.getElementById('response');
        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(data, null, 2);
        responseOutput.innerHTML = '';
        responseOutput.appendChild(pre);
      })
      .catch(error => console.error(error));
  });
  