document.getElementById('btnResult').onclick = function () {
    var diemHd = Number(document.getElementById("diemHD").value)
    var diem1 = Number(document.getElementById("diem1").value)
    var diem2 = Number(document.getElementById("diem2").value)
    var diem3 = Number(document.getElementById("diem3").value)
    var doiTuong = Number(document.getElementById("doiTuong").value)
    var khuA = document.getElementById("khuA").checked
    var khuB = document.getElementById("khuB").checked
    var khuC = document.getElementById("khuC").checked
    var khuX = document.getElementById("khuX").checked
    var soDiem = document.getElementById("soDiem")
    var dauRot = document.getElementById("dauRot")
    var tongCong = 0
    var ketQua = "";
    var diemHdSS = 0;
    tongCong = doiTuongUuTien(doiTuong) + uuTienKhuVuc(khuA, khuB, khuC, khuX) + sumQL(diem1, diem2, diem3) 
    diemHdSS = diemHdd(diemHd);
    ketQua = soSanh(tongCong,diemHdSS)
    console.log(ketQua)
    soDiem.innerHTML = tongCong+ " Điểm";
    dauRot.innerHTML = "-->"+ketQua;
}
function sumQL(d1, d2, d3) {
    return d1 + d2 + d3;
}
function uuTienKhuVuc(k1, k2, k3, k4) {
    if (k1) {
        return 2;
    } else if (k2) {
        return 1;
    } else if (k3) {
        return 0.5;
    } else if (k4) {
        return 0;
    } else {
        alert("Hãy chọn khu vực")
    }
}
function doiTuongUuTien(doiTuong){
    switch (doiTuong) {
        case 1:
            return 2.5;
        case 2:
            return 1.5;
        case 3:
            return 1;
        default:
            alert("Hãy nhập đối tượng ưu tiên từ 1 - 3")
            break;
    }
}
function soSanh(a,b){
    if(a >= b){
        return "Đậu"
    }else if(a < b){
        return "Trượt"
    }else{
        return "Không xác định!"
    }
}
function diemHdd(diemHD){
    if(diemHD>15 && diemHD <=30){
        return diemHD;
    }else{
        alert("Hãy nhập điểm hội đồng đúng!!")
        return "null"; 
    }
}