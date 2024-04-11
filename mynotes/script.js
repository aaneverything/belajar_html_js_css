let notes = [];

function addNote(title, content) {
  const newNote = {
    title: title,
    content: content,
  };

  notes.push(newNote);  
  displayNote();
}

function displayNote() {
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("note");
    noteItem.innerHTML = ` <h2>${note.title}</h2>
        <p>${note.content}</p>
        <button onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>`;
    noteList.appendChild(noteItem);
  });
}

document.getElementById("noteForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("noteTitle").value;
  const content = document.getElementById("noteContent").value;

  addNote(title, content);
  this.reset();
});

function deleteNote(index) {
  notes.splice(index, 1);
  displayNote();
}

function editNote(index) {
  const noteToEdit = notes[index];
  const updatedTitle = prompt("Edit Title:", noteToEdit.title);
  const updatedContent = prompt("Edit Content:", noteToEdit.content);
  notes[index].title = updatedTitle;
  notes[index].content = updatedContent;
  displayNote();
}
