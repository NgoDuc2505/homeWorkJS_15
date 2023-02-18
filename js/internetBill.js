var nhaDanBTN = document.getElementById("nhaDan")
var doanhNghiep = document.getElementById("doanhNghiep")
var soKetNoiLable = document.getElementById("soKetNoiLable")
var soKetNoi = document.getElementById("soKetNoi")
nhaDanBTN.onclick = function () {
    nhaDanBTN.classList.add('click')
    doanhNghiep.classList.remove('click')
    soKetNoiLable.classList.add('hidden')
    soKetNoi.classList.add('hidden')
}
doanhNghiep.onclick = function () {
    doanhNghiep.classList.add('click')
    nhaDanBTN.classList.remove('click')
    soKetNoiLable.classList.remove('hidden')
    soKetNoi.classList.remove('hidden')
}

function tinhTienCap() {
    var maKh = document.getElementById("xuLyBill").value
    var kenhCaoCap = Number(document.getElementById("kenhCaoCap").value)
    var soKetNoi = Number(document.getElementById("soKetNoi").value)
    var loaiKH = "";
    var tongTien = 0;
    var tienSoKetNoi = 0;
    tienSoKetNoi = tienSoKetNOI(soKetNoi)
    tongTien = xuLyTinhTien(nhaDanBTN, doanhNghiep, kenhCaoCap, tienSoKetNoi,loaiKH)
    loaiKH = xuLyKH(nhaDanBTN,doanhNghiep)
    document.getElementById("maKH").innerHTML = "Mã khách hàng:" + maKh +loaiKH;
    document.getElementById("tienCap").innerHTML = "Tiền cáp:" + tongTien.toLocaleString() + "$";
}
document.getElementById("btnInternetBill").onclick = tinhTienCap;

function tienSoKetNOI(soKetNoi) {
    if (soKetNoi <= 10 && soKetNoi > 0) {
        return soKetNoi * 75;
    } else if (soKetNoi > 10) {
        return 10 * 75 + (soKetNoi - 10) * 80
    } else {
        return 0;
    }
}
function xuLyTinhTien(giatriA, giatriB, giatriC, giatriD) {
    if (giatriA.classList.contains('click')) {
        return giatriC * 7.5 + 4.5 + 20.5 + giatriD;
    } else if (giatriB.classList.contains('click')) {
        return giatriC * 50 + 15 + giatriD;
    } else {
        alert("Hay chon nhom kh!")
    }
} 
function xuLyKH(giatriA,giatriB) {
    if (giatriA.classList.contains('click')) {
        return "--(Nhà dân)"
    } else if (giatriB.classList.contains('click')) {
        return "--(Doanh Nghiệp)"
    } else {
        alert("Hay chon nhom kh!")
    }
} 