import { deleteData } from "./delete.js";
import { getData } from "./get.js";
import { postData } from "./post.js";
import { deleteData } from "./delete.js";

const postBtn = document.getElementById('postBtn');
const getBtn = document.getElementById('getBtn');
const putBtn = document.getElementById('putBtn');
const deleteBtn = document.getElementById('deleteBtn');
const form = document.getElementById('httpForm');
const responseOutput = document.getElementById('response');

postBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  postData(formData, responseOutput);
});

getBtn.addEventListener('click', (event) =>{
  event.preventDefault();
  const id = document.querySelector('#id').value;
  getData(id, responseOutput);
});

putBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  putData(formData, responseOutput);
});

deleteBtn.addEventListener('click', (event) =>{
  event.preventDefault();
  deleteData(responseOutput);
});

