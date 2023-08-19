// BT1:
// b1: xác định input
// điểm chuẩn: benchMark;
// điểm môn 1: subject1;
// điểm môn 2: subject2;
// điểm môn 3: subject3;
// khu vực: area;
// đối tượng: object;

// b2:xử lý
function handleMark() {
  var benchMark = +document.querySelector("#benchmark").value;
  var subject1 = +document.querySelector("#subject1").value;
  var subject2 = +document.querySelector("#subject2").value;
  var subject3 = +document.querySelector("#subject3").value;
  var area = +document.querySelector("#area").value;
  var object = +document.querySelector("#object").value;
  var sumMark = subject1 + subject2 + subject3;
  var lastMark;
  if (subject1 !== 0 && subject2 !== 0 && subject3 !== 0) {
    if (area === "x" && object === 0) {
      lastMark = sumMark;
    } else if (area === "x") {
      lastMark = sumMark + object;
    } else if (object === 0) {
      lastMark = sumMark + area;
    } else {
      lastMark = sumMark + area + object;
    }

    if (lastMark >= benchMark) {
      document.querySelector("#result").innerHTML = `
            <p>Tổng điểm: ${lastMark}</p>
            <p style="color: rgb(216, 216, 10); text-align: center; background-color: brown;">Bạn đã ĐẬU</p>`;
    } else {
      document.querySelector("#result").innerHTML = `
            <p>Tổng điểm: ${lastMark}</p>
            <p style="color: rgb(216, 216, 10); text-align: center;background-color: brown;">Bạn đã RỚT</p>`;
    }
  } else {
    document.querySelector("#result").innerHTML = `
            <p style="color: rgb(216, 216, 10); text-align: center;background-color: brown;">Bạn không đủ điều kiện xét tuyển</p>`;
  }
}
// b3: in ra kết quả
document.querySelector("#handleMark").onclick = handleMark;

//------------------------------------------------------------

// BT2:
// b1:xác định input:
// tên: name;
// số điện sử dụng: eleUse;

// b2: xử lý:
function handlePay() {
  var name = document.querySelector("#nameCus").value;
  var eleUse = +document.querySelector("#eleUse").value;
  var bill2;
  var x = 1000;
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });

  if (eleUse <= 50) {
    bill2 = eleUse * 500;
  } else if (eleUse <= 100) {
    bill2 = 50 * 500 + (eleUse - 50) * 650;
  } else if (eleUse <= 200) {
    bill2 = 50 * 500 + 50 * 650 + (eleUse - 100) * 850;
  } else if (eleUse <= 350) {
    bill2 = 50 * 500 + 50 * 650 + 100 * 850 + (eleUse - 200) * 1100;
  } else {
    bill2 =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (eleUse - 350) * 1300;
  }

  document.querySelector("#resultPay").innerHTML = `
  <p>Tên khách hàng: ${name}</p>
  <p>Tổng tiền điện:${bill2.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}</p>`;
}
// b3: in ra kết quả
document.querySelector("#handlePay").onclick = handlePay;

//------------------------------------------------------------

// BT3:
// b1: xác đinh input:
// tên: name3;
// tổng thu nhập: yearSalary;
// số người phụ thuộc: person3;

// b2: xử lý
function roundToThree(num) {
  return +(Math.round(num + "e+3") + "e-3");
}
function handleTax() {
  var name3 = document.querySelector("#name3").value;
  var yearSalary = +document.querySelector("#yearSalary").value;
  var person3 = +document.querySelector("#person3").value;
  var taxSalary = yearSalary - 4 - person3 * 1.6;
  var tax;
  if (taxSalary > 0) {
    if (taxSalary <= 60) {
      tax = taxSalary * 0.05;
    } else if (taxSalary <= 120) {
      tax = 60 * 0.05 + (taxSalary - 60) * 0.1;
    } else if (taxSalary <= 210) {
      tax = 60 * 0.05 + 60 * 0.1 + (taxSalary - 120) * 0.15;
    } else if (taxSalary <= 384) {
      tax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (taxSalary - 210) * 0.2;
    } else if (taxSalary <= 624) {
      tax =
        60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (taxSalary - 384) * 0.25;
    } else if (taxSalary <= 960) {
      tax =
        60 * 0.05 +
        60 * 0.1 +
        90 * 0.15 +
        174 * 0.2 +
        240 * 0.25 +
        (taxSalary - 624) * 0.3;
    } else {
      tax =
        60 * 0.05 +
        60 * 0.1 +
        90 * 0.15 +
        174 * 0.2 +
        240 * 0.25 +
        336 * 0.3 +
        (taxSalary - 960) * 0.35;
    }
    document.querySelector("#resultTax").innerHTML = `
    <p>Tổng thuế thu nhập cá nhân: ${roundToThree(tax)} triệu</p>`;
  } else {
    document.querySelector("#resultTax").innerHTML = `
    <p>Bạn không cần đóng thuế</p>`;
  }
}
// b3: in ra kết quả
document.querySelector("#handleTax").onclick = handleTax;

//------------------------------------------------------------

// BT4:
// b1: xác định input
// mã khách hàng: cusCode;
// Loại khách hàng: cusType;
// số kết nối: numConnect;
// số kênh cao cấp: vipChannel;

// b2: xử lý:
function showHide() {
  var cusType = document.querySelector("#cusType").value;
  if (cusType == 1) {
    document.querySelector("#connect").style.display="block";
    document.querySelector("#numConnect").style.display="block"
  } else {
    document.querySelector("#connect").style.display="none"
  }
}

function handleBill4() {
  var cusCode = document.querySelector("#cusCode").value;
  var cusType = document.querySelector("#cusType").value;
  var numConnect = +document.querySelector("#numConnect").value;
  var vipChannel = +document.querySelector("#vipChannel").value;
  var bill4;

  if (cusType == 1) {
    if (numConnect < 10) {
      bill4 = 15 + 7.5 * numConnect + 50 * vipChannel;
    } else {
      bill4 = 15 + 75 + (numConnect - 10) * 5 + 50 * vipChannel;
    }
  } else {
    document.querySelector("#numConnect").style.display = "none";
    bill4 = 4.5 + 20.5 + 7.5 * vipChannel;
  }

  document.querySelector("#resultBill4").innerHTML = `
    <p>Tổng hóa đơn: ${bill4} $</p>`;
}

document.querySelector("#handleBill4").onclick = handleBill4;
