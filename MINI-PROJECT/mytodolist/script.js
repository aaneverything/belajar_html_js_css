let todo = [];  //membuat array atau wadah 

function addTodo(task) {  // membuat fungsi addtodo yang berisi task
  const newTodo = {// membuat objek todo baru 
    task: task,   //membuat isi objek 
  };

  todo.push(newTodo);   //memasukan objek task ke array todo
  displayTodo();        //memanggil fungsi display todo
}

function displayTodo() {
  const todoList = document.getElementById("todoList"); //menangkap elemen dengan id todolist dan dimasukan ke wadah baru bernama todolist
  todoList.innerHTML = ""; //mengosongkan todolist

  todo.forEach((list, index) => {
    const todoItem = document.createElement("div"); //membuat div
    todoItem.classList.add("babi"); //membuat class bernama todo di div yang barusan dibuat
    todoItem.innerHTML = `<h2>${list.task}</h2> 
        <button onclick="editTodo(${index})">Edit</button>
        <button onclick="deleteTodo(${index})">Delete</button>`; // mengedit value dari div diatas

    todoList.appendChild(todoItem); //memasukan div yang baru saja dibuat kedalam elemen todolist yang sudah ada di html
  });
}

document.getElementById("todoForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const task = document.getElementById("todoItem").value;

  addTodo(task);
  this.reset();
});

function deleteTodo(index) {
  todo.splice(index, 1);
  displayTodo();
}

function editTodo(index) {
  const editNote = todo[index];

  const editto = prompt("edit notes", editNote.task);

  todo[index].task = editto;

  displayTodo();
}
