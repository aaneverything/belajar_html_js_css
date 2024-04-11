const toggel = document.querySelectorAll(".toggle");
const bagus = document.querySelector("#good");
const murah = document.querySelector("#cheap");
const cepat = document.querySelector("#fast");

toggel.forEach((toggel) => toggel.addEventListener('change', (e) => triknya(e.target)));

function triknya(klikan) {
  if (bagus.checked && murah.checked && cepat.checked) {
    if (bagus === klikan) {
      cepat.checked = false;
    }
    if (murah === klikan) {
      bagus.checked = false;
    }
    if (cepat === klikan) {
      murah.checked = false;
    }
  }
}
