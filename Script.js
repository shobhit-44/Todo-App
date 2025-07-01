let todoList = [
  {
    item: 'Complete HTML👩‍💻',
    dueDate: '2025-07-01'
  },
  {
    item: 'Holiday😇😇',
    dueDate: '2025-07-02'
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem === '' || todoDate === '') {
    alert("Please fill both fields!");
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <div>
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="deleteTodo(${i})">Delete</button>
      </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}
