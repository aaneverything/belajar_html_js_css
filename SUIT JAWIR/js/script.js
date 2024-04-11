let tanya = true;
while (tanya) {
  let p = prompt("pilih : gajah, semut, orang");

  let bot = Math.random();

  if (bot < 0.34) {
    bot = "gajah";
  } else if (bot >= 0.34 && bot < 0.67) {
    bot = "orang";
  } else {
    bot = "semut";
  }

  let hasil = "";

  if (p == bot) {
    alert("hasilnya seri");
  } else if (p == "gajah") {
    hasil = bot == "orang" ? "menang" : "kalah";
  } else if (p == "orang") {
    hasil = bot == "gajah" ? "kalah" : "menang";
  } else if (p == "semut") {
    hasil = bot == "orang" ? "kalah" : "menang";
  } else {
    hasil = "gaada njir";
  }

  alert("kamu memilih" + p + " komputer memilih" + bot + "\nMaka hasilnya : kamu " + hasil);

  tanya = confirm("lagi?");
}

alert("terimakasih sudah bermain");
