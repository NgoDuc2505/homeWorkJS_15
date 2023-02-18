

function tinhTienThue(){
    var hoTen = document.getElementById("hoVaTen").value;
    var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
    var soNguoiPhuThuoc = Number(document.getElementById("soNguoiPhuThuoc").value);
    var thuNhapChiuThue = 0;
    var tongTienSauThue = 0;
    thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc*1600000;
    tongTienSauThue = chiuThue(thuNhapChiuThue);
    document.getElementById("ten").innerHTML= "Họ và tên: "+hoTen;
    document.getElementById("tienThue").innerHTML=tongTienSauThue.toLocaleString() + "đ";
    document.getElementById("tienThue").style.fontSize = "30px"
}
document.getElementById("thueBTN").onclick = tinhTienThue;

function chiuThue(TrcThue){
    if(TrcThue >0 && TrcThue <= 60000000){
        return TrcThue*0.95;
    }else if(TrcThue > 60000000 && TrcThue <= 120000000){
        return TrcThue*0.9;
    }else if(TrcThue > 120000000 && TrcThue <= 210000000){
        return TrcThue*0.85;
    }else if(TrcThue > 210000000 && TrcThue <= 384000000){
        return TrcThue*0.8;
    }else if(TrcThue > 384000000 && TrcThue <= 624000000){
        return TrcThue*0.75;
    }else if(TrcThue > 624000000 && TrcThue <= 960000000){
        return TrcThue*0.7;
    }else{
        return TrcThue*0.65;
    }
}