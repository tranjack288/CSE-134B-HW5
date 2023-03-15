export function getData(id, responseOutput) {
  fetch(`https://httpbin.org/get?id=${id}`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(data, null, 2);
      responseOutput.innerHTML = '';
      responseOutput.appendChild(pre);
    })
    .catch(error => console.error(error));
}