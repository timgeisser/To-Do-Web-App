<<<<<<< HEAD
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const assigneeInput = document.getElementById('assignee-input');
const taskList = document.getElementById('task-list');

// Task erstellen
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addTask(taskInput.value, assigneeInput.value);
  taskForm.reset();
});

function addTask(taskName, assignee) {
  const li = document.createElement('li');
  
  const taskInfo = document.createElement('div');
  taskInfo.className = 'task-info';
  taskInfo.innerHTML = `<strong>${taskName}</strong><small>Zugewiesen an: ${assignee || 'Niemand'}</small>`;
  
  const actions = document.createElement('div');
  
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✅';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });
  
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  
  li.appendChild(taskInfo);
  li.appendChild(actions);
  
  taskList.appendChild(li);
=======
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const assigneeInput = document.getElementById('assignee-input');
const taskList = document.getElementById('task-list');

// Task erstellen
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addTask(taskInput.value, assigneeInput.value);
  taskForm.reset();
});

function addTask(taskName, assignee) {
  const li = document.createElement('li');
  
  const taskInfo = document.createElement('div');
  taskInfo.className = 'task-info';
  taskInfo.innerHTML = `<strong>${taskName}</strong><small>Zugewiesen an: ${assignee || 'Niemand'}</small>`;
  
  const actions = document.createElement('div');
  
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✅';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });
  
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  
  li.appendChild(taskInfo);
  li.appendChild(actions);
  
  taskList.appendChild(li);
>>>>>>> bbf1c131cccd5eb0dd9a0d9bdb4b7cd20296e0f1
}