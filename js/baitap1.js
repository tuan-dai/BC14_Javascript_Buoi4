// Nhập dữ liệu
var d = 256;
var e = 69;
var f = 13;

// Xử lý dữ liệu & Hiển thị kết quả
if (d < e && e < f) {
    console.log("Bài tập 1:",d,e,f);
} else if (e < d && d < f) {
    console.log("Bài tập 1:",e,d,f);
} else if (d < e && d > f) {
    console.log("Bài tập 1:",f,d,e);
} else if (d < f && f < e) {
    console.log("Bài tập 1:",d,f,e);
} else if (e < f && f < d) {
    console.log("Bài tập 1:",e,f,d);
} else {
    console.log("Bài tập 1:",f,e,d);
}


