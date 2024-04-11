const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papanSkor");

let tanahSebelum;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelum) {
    return randomTanah(tanah);
  }
  return tRandom;
}

function rndWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = rndWaktu(300, 1500);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = skor;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  papanSkor.textContent = skor;
  this.parentNode.classList.remove('muncul');
}

tikus.forEach((t) => {
  t.addEventListener('click', pukul);
});
