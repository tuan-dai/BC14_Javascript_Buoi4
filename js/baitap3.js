// Nhập dữ liệu
var number1 = 69;
var number2 = 123;
var number3 = 246;


// Xử lý dữ liệu
if (number1 % 2 == 0) {
    var soChan1 = 1;
    var soLe1 = 0;
} else {
    var soChan1 = 0;
    var soLe1 = 1;
}

if (number2 % 2 == 0) {
    var soChan2 = 1;
    var soLe2 = 0;
} else {
    var soChan2 = 0;
    var soLe2 = 1;
}

if (number3 % 2 == 0) {
    var soChan3 = 1;
    var soLe3 = 0;
} else {
    var soChan3 = 0;
    var soLe3 = 1;
}

var soChan = soChan1 + soChan2 + soChan3;
var soLe = soLe1 + soLe2 + soLe3;

// Hiển thị kết quả
console.log("Bài tập 3 - Số chẵn:",soChan);
console.log("Bài tập 3 - Số lẻ:",soLe);