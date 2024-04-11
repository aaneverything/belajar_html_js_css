//ini komentar
document.writeln("halo");
document.writeln("<br>");

//tipe data number
document.writeln(100);
document.writeln("<br>");
document.writeln(100.1);
document.writeln("<br>");
document.writeln(0b111101);
document.writeln("<br>");

//boolean
document.writeln(true);
document.writeln("<br>");
document.writeln(false);
document.writeln("<br>");

//string
document.writeln("ini adalah string");
document.writeln("<br>");
document.writeln("aan triya vinanta");
document.writeln("<br>");
document.writeln("nama : " + "aan" + " vinanta");

//escape sequence
document.writeln("<textarea cols = '100' rows = '10'>");
document.writeln("aan \ntriya \nvinanta"); //membuat enter
document.writeln("\\aan\\triya"); //membuat garis miring
document.writeln('"bismilah"'); //membuat tanda kutip
document.writeln("'belajar javascript'"); //membuat tanda kutip satu
document.writeln("</textarea>");

//variabel

//var
// var firstName = "aan"
// var lastName = " vinanta"
// var fullName = "aan" + " " + "vinanta"
// document.writeln("<br>");
// document.writeln(firstName + lastName);
// document.writeln("<br>");
// document.writeln(fullName);
//var sudah tidak dipakai dan digantikan dengan let

//let
let firstName = "aan";
let lastName = " vinanta";
let fullName = "aan" + " " + "vinanta";
document.writeln("<br>");
document.writeln(firstName + lastName);
document.writeln("<br>");
document.writeln(fullName);

//const (beda let dan const adalah const tidak bisa dirubah nilainya)
document.writeln("<br>");
const application = "hai";
document.writeln(application);

//operator aritmatika
let hasil = 1 + 2;
document.writeln("<p>1 + 2 : " + hasil + "</p>");
let hasilAsli = hasil;

hasil -= 1;
document.writeln("<p>" + hasilAsli + " - 1 : " + hasil + "</p>");
hasilAsli = hasil;

hasil *= 2;
document.writeln("<p>" + hasilAsli + " * 2 : " + hasil + "</p>");

//unary
let Hasil = +1;
document.writeln("<p>" + Hasil + "</p>");

Hasil--;
document.writeln("<p>" + Hasil + "</p>");

Hasil++;
document.writeln("<p>" + Hasil + "</p>");

Hasil = -Hasil;
document.writeln("<p>" + Hasil + "</p>");

//operasi perbandingan
let Hassil = 5 == "5"; //true
document.writeln("<p>" + Hassil + "</p>");

Hassil = 5 === "5"; //false
document.writeln("<p>" + Hassil + "</p>");

Hassil = 5 > 10; //false
document.writeln("<p>" + Hassil + "</p>");

Hassil = 5 < 10; //true
document.writeln("<p>" + Hassil + "</p>");

//operator logika
document.writeln("<br>" + "operator logika : ");
const nilaiujian = 70;
const nilaiAbsensi = 70;

const lulusUjian = nilaiujian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
document.writeln("<p>" + lulus + "</p>");

//console (print tanpa di html)
console.info("ini console");
console.warn("ini warning");
console.error("ini error");
console.debug("debug");

//string template
const myname = "aan triya vinanta";
const namaAwal = "aan";
const namaTengah = "triya";
const template = `Nama: ${myname} ${namaAwal} ${namaTengah}`;
console.info(template);

const nilai = 90;
const hasil2 = `Nama" ${myname} Lulus : ${nilai > 70}`;
console.info(hasil2);

//konversi tipe data
document.writeln("<br>" + "konversi tipe data : ");
const val = parseInt("1");
const val2 = 1;
const sum = val + val2;

document.writeln(`<p> ${sum} </p>`);
document.writeln(`<p> ${parseInt("1.1")} </p>`); //hasil : 1
document.writeln(`<p> ${parseFloat("1.1")} </p>`); //hasil : 1.1
document.writeln(`<p> ${Number("1.1")} </p>`); //hasil : 1.1

document.writeln("<br>" + "konversi to string : ");
const a = 1;
const b = 1;
const total = a.toString() + b.toString();
document.writeln(`<p> ${total} </p>`);

//array
let arrayKosong = [];
let arrayNama = ["aan", "triya", "vinanta"];

const namae = [];
namae.push("aan");
namae.push("vinanta", "triya");

console.table(namae);

//object
const person = {
  nim: "22.11.4880",
  kelas: "if 06",
  "nama universitas": "universitas amikom yogyakarta",
};

console.info(`Nim : ${person["nim"]}`);
console.info(`kelas : ${person.kelas}`);
console.info(`kampus : ${person["nama universitas"]}`);

//cara ubah object :
person["nama"] = "aan triya";
person["alamat"] = "sleman";
person["umur"] = 17;

console.table(person);

//if ekspresi
console.info("ekspresi if : ");
const hasilUjian = 70;
if (hasilUjian > 80) {
  console.info("lulus");
} else if (hasilUjian > 60) {
  console.info("hahahh");
} else {
  console.info("anda kurang beruntung");
}

//alert and prompt
// const name = prompt("siapa nama anda?");
// alert(`helo ${name}`);

//konfirm
// const masuk = confirm("anda yakin mau masuk?");
// if (masuk)
// {
//     alert("halo aan")
// }
// else {

// }

//undefined
// let name;
// if(name === undefined){
//     alert("undefined");
// }

//null dan undefined
//null merupakan representasi bilangan kosong
//berbeda dengan undefined null berarti variabel sudah ditambah tapi nilainya ksong
// sedanfkan undefined adalha variabel yang belum ditambah apapun
// let namasaya = null;
// if (namasaya === undefined){
//     alert("undefined")
// }
// else{
//     alert("halo")
// }

//switch
document.writeln("<p>switch statement : </p>");
const nillai = "A";
switch (nillai) {
  case "A":
    document.writeln("<p>anda lulus dengan sangat baik</p>");
    break;
  case "B":
  case "C":
    document.writeln("<p>anda lulus</p>");
    break;
  case "D":
    document.writeln("<p>anda tidak lulus</p>");
    break;
  default:
    document.writeln("<p>anda mungkin salah jurusan</p>");
}

//typeof
let data;
if (typeof data === "undefined") {
  document.writeln("<p> string </p>");
}

//in operator
const orang = {
  namanya: "aan",
  naminyi: "triya",
};
const huasil = "namanya" in orang; //true
document.writeln(`<p>${huasil}</p>`);

//ternary operator
document.writeln("<p>ternary oeprator : </p>");
const nilaiii = 60;
const ucapan = nilaiii >= 75 ? "selamat anda lulus" : "silahkan coba lagi";
document.writeln(`<p>${ucapan}</p>`);

//nulish coalescing operator
let parameter;
let daya = parameter ?? "nilai default";
document.writeln(`<p>${daya}</p>`);

//optional chaining
//bagaimana cara mengakses null variabel
//tanpa optional chaining :
// const ini = {};
// let country;
// if(ini.itu !== undefined && ini.itu !== null){
//     country = ini.itu.country;
// }

const ini = {};
let kota = ini?.itu?.kota;
console.info("ahjj");

//falsy thuthy

//operator di non boolean
// console.info("hello"|| ""); //thurthy falsy
// console.info(""|| []); //falsy thurthy
// console.info("0"|| "nol"); //thurthy thurthy
// console.info(0 || "nol"); //falsy thurthy
// console.info(null || "null"); //falsy thurthy
// console.info(undefined || "undefined"); //falsy thurthy

// const urang = {
//     jeneng : "anjing",
//     akhire : "bangsat"
// };

// const nami = urang.jeneng || urang.akhire;

//for loop
// let counter = 1;
// for(; counter < 10;){
//     document.writeln(`<p>loop ke ${counter}</p>`)
//     counter++;
// }

//atau bisa juga dengan:

// for(let counter = 1; counter < 10;counter++){
//     document.writeln(`<p>loop ke ${counter}</p>`)
// }

//while loop versi sederhana dari dari for
// while(counter < 10){
//          document.writeln(`<p>loop ke ${counter}</p>`)
//          counter++;
// }

//do while loop minimal pasti dieksekusi sekali
let counter = 1;
do {
  document.writeln(`<p>loop ke ${counter}</p>`);
  counter++;
} while (counter <= 10);

//break continue
//penggunaan break
let counter1 = 1;
while (true) {
  document.writeln(`<p>loop ke ${counter1}</p>`);
  counter1++;

  if (counter1 > 10) {
    break;
  }
}

//penggunaan continue //menghentikan perulangan saat ini dan melanjutkan perluangan berikutnuya
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  document.writeln(`<p>perulangan ganjil ${i}</p>`);
}

//label

//for in : melakukan iterasi terhadap properti atau indeks
const aan = {
  h: "huhu",
  i: "haha",
};
for (const yyy in aan) {
  document.writeln(`<p>property ${yyy} : ${aan[yyy]}</p>`);
}

//for of  iterasi trhdp isinya (array)
const uiii = ["aan", "triya", "vinanta"];
for (const iiiu of uiii) {
  document.writeln(`<p>${iiiu}</p>`);
}

//with statement //tidak direkomendasikan
//cara biasa :
console.info(aan.h);
console.info(aan.i);

//debngan with
with (aan) {
  console.info(h);
  console.info(i);
}

//function
function sayHelloWorld() {
  document.writeln(`<p>Hello World</p>`);
}

//memanggil function
sayHelloWorld();

//function parameter
function sayinHelloWorld(namaPertama, namaAkhir) {
  document.writeln(`<p>Hello ${namaPertama} ${namaAkhir}</p>`);
}

//memanggil function dengan parameter
sayinHelloWorld("aan", "triya");

//function return value
function sayYes(namaPertama, namaAkhir) {
  const say = `Hello ${namaPertama} ${namaAkhir}`;
  return say;
}

//memanggil function dan menangkap return valuenya
const hhasil = sayYes("aan", "vinanta");
document.writeln(`<p>${hhasil}</p>`);

//return lebih dari 1
function cekNilaiAkhir(valuee) {
  if (valuee > 90) {
    return "A";
  } else if (valuee > 80) {
    return "B";
  } else {
    return "C";
  }
}

const hasilAkhir = cekNilaiAkhir(90);
document.writeln(`<p>${hasilAkhir}</P`);

//return itu menghentikan anu
function apakahAda(array, nilaiYang) {
  for (const element of array) {
    if (element === nilaiYang) {
      return true;
    }
  }
  return false;
}

const array = [1, 10, 12, 14, 15];
const cari = 10;
const ketemu = apakahAda(array, cari);
document.writeln(`<p>${ketemu}</P`);

//optional parameter
function sayy(nama, ttl) {
  console.info(nama);
  console.info(ttl);
}

sayy("aan");

//default parameter
//skip

//object method
const manusia = {
  namas: "aan",
  hallo: function (namas) {
    console.info(`halo ${namas}`);
  },
};

manusia.hallo("triya");
