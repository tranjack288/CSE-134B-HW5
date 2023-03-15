export function deleteData(responseOutput) {
  fetch('https://httpbin.org/delete', {
    method: 'DELETE'
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