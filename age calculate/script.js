const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalc() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date").value);
  let birthMonth, birthDate, birthYear;
  let birthDetail = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };

  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();

  leapChecker(currentYear);

  if (birthDetail.year > currentYear || (birthDetail.month > currentMonth && birthDetail.year == currentYear) || (birthDetail.date > currentDay && birthDetail.month == currentMonth && birthDetail.year == currentYear)) {
    alert("Enter Valid Date");
    return;
  }

  birthYear = currentYear - birthDetail.year;
  if (currentMonth >= birthDetail.month) {
    birthMonth = currentMonth - birthDetail.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetail.month;
  }

  if (currentDay >= birthDetail.date) {
    birthDate = currentDay - birthDetail.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = days + currentDay - birthDetail.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }

  display(birthDate, birthMonth, birthYear);
}

function display(bdate, bmonth, byear) {
  document.getElementById("years").textContent = byear;
  document.getElementById("months").textContent = bmonth;
  document.getElementById("days").textContent = bdate;
}

function leapChecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
