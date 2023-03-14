export function sendDeleteRequest() {
    return fetch('https://httpbin.org/delete', {
      method: 'DELETE'
    })
      .then(response => response.json());
  }
  
  const deleteForm = document.getElementById('httpDeleteForm');
  deleteForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    sendDeleteRequest()
      .then(jsonData => {
        const responseOutput = document.getElementById('response');
        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(jsonData, null, 2);
        responseOutput.innerHTML = '';
        responseOutput.appendChild(pre);
      })
      .catch(error => console.error(error));
  });
  