import { sendPostRequest } from './post';
import { sendGetRequest } from './get';
import { sendPutRequest } from './put';
import { sendDeleteRequest } from './delete';

const postBtn = document.getElementById('postBtn');
const getBtn = document.getElementById('getBtn');
const putBtn = document.getElementById('putBtn');
const deleteBtn = document.getElementById('deleteBtn');
const form = document.getElementById('httpForm');
const responseOutput = document.getElementById('response');

postBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  sendPostRequest(formData);
});

getBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = document.querySelector('#id').value;
  sendGetRequest(id);
});

putBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  sendPutRequest(formData);
});

deleteBtn.addEventListener('click', (event) => {
  event.preventDefault();
  sendDeleteRequest();
});
