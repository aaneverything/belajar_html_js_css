let isi = [];

function newTask(task) {
  const tugas = {
    task: task,
  };

  isi.push(tugas);
  muncul();
}

function muncul() {
  const ini = document.getElementById("hasill");
  ini.innerHTML = "";

  isi.forEach((list, index) => {
    const bapak = document.createElement("div");
    bapak.classList.add("iyalah");
    bapak.innerHTML = `<h2>${(list, task)}</h2>`;

    ini.appendChild(bapak);
  });
}

document.getElementById("todoFrom").addEventListener("submit", function (event) {
  event.preventDefault();
  const thisJadwal = document.getElementById("fkegiatan").value;

  newTask(thisJadwal);
  this.reset();
});
document.getElementById("todoForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const jadwalnya = document.getElementById("fkegiatan").value;

  newEl(jadwalnya);
  this.reset();
});
