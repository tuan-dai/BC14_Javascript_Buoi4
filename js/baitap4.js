// Nhập dữ liệu
var a = 3;
var b = 5;
var c = 7;

d = Math.sqrt (a * a + b * b);

// Xử lý dữ liệu & Hiển thị kết quả
if (d == c) {
    console.log("Bài tập 4: Tam giác vuông");
} else if (a == b && a == c) {
    console.log("Bài tập 4: Tam giác đều");
} else if (a == b && a != c) {
    console.log("Bài tập 4: Tam giác cân");
} else {
    console.log("Bài tập 4: Tam giác thường");
}