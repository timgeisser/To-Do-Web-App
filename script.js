const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const assigneeInput = document.getElementById('assignee-input');
const taskList = document.getElementById('task-list');

const featureFlags = {
  newUI: false
};

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

  if (featureFlags.newUI) {
    taskList.classList.add('new-ui');
  } else {
    taskList.classList.remove('new-ui');
  }

  tasks.forEach(task => {
    const li = document.createElement('li');

    if (task.completed) {
      li.classList.add('completed');
    }

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';

    const title = document.createElement('span');
    title.className = 'task-title';
    title.textContent = featureFlags.newUI ? `✨ ${task.name}` : task.name;

    const assignee = document.createElement('small');
    assignee.className = 'task-assignee';
    assignee.textContent = featureFlags.newUI
      ? `👤 ${task.assignee}`
      : 'Zugewiesen an: ' + task.assignee;

    taskInfo.appendChild(title);
    taskInfo.appendChild(assignee);

    if (featureFlags.newUI) {
      const badge = document.createElement('span');
      badge.className = 'feature-badge';
      badge.textContent = 'New UI';
      taskInfo.appendChild(badge);
    }

    const actions = document.createElement('div');
    actions.className = 'actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = featureFlags.newUI ? 'Erledigen' : '✔';
    completeBtn.addEventListener('click', function () {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = featureFlags.newUI ? 'Löschen' : '🗑';
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
