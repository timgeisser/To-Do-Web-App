const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const assigneeInput = document.getElementById('assignee-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

renderTasks();

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskName = taskInput.value.trim();
  const assignee = assigneeInput.value.trim();

  if (taskName === '') return;

  const newTask = {
    id: Date.now(),
    name: taskName,
    assignee: assignee || 'Niemand',
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskForm.reset();
});

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');

    if (task.completed) {
      li.classList.add('completed');
    }

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';

    const title = document.createElement('span');
    title.className = 'task-title';
    title.textContent = task.name;

    const assignee = document.createElement('small');
    assignee.className = 'task-assignee';
    assignee.textContent = 'Zugewiesen an: ' + task.assignee;

    taskInfo.appendChild(title);
    taskInfo.appendChild(assignee);

    const actions = document.createElement('div');
    actions.className = 'actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✅';
    completeBtn.addEventListener('click', function () {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', function () {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actions);

    taskList.appendChild(li);
  });
}