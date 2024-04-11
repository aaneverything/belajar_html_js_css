const token = ~~[Math.random() * 12345678];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  return { token, username };
}

function getUser(token) {
  if (token) return { apiKey: "xkey123" };
}

function getPictures(apiKey) {
  if (apiKey) return pictures;
}

const user = login("aan_vi");
console.log(user.token);

const { apiKey } = getUser(user.token);
console.log(apiKey);

const getUserPicture = getPictures(apiKey);
console.log(getUserPicture);

//basic async

//timeot  digunakan untuk simulasi pemanggilan kembali proses asynchronous yang sedang/sudah selesai dijalankan. Pemanggilan hanya dilakukan 1 kali.
setTimeout(() => {
  console.log("cuci baju");
}, 1000);
console.log("babi");

//set interval untuk simulasi pemanggilan proses asynchronous yang sedang/sudah dijalankan dalam interval waktu tertentu. Pemanggilan dilakukan berkali-kali sesuai interval waktu yang ditentukan.
// setInterval(() => {
//   console.log("cuci baju");
// }, 3000);



//callback function

function mandi(){
    console.log("Mandi");
}

function sarapan(callback) {
    setTimeout(function() {
        console.log("Sarapan tertunda 3 detik");
        callback();
    }, 3000);
}

function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}

mandi();
sarapan(berangkatSekolah);
