document.getElementById('btnElectric').onclick = function () {
    var hoVaTen = document.getElementById("hoTenDien").value;
    var soKw = Number(document.getElementById("soKw").value)
    var tienDien = 0;

    // tinh tien dien
    tienDien = tienDienTinh(soKw)
    document.getElementById("EBname").innerHTML = "Họ và tên: " +hoVaTen;
    document.getElementById("EBresult").innerHTML = "Tiền điện: "+tienDien.toLocaleString() + "đ";
}
function tienDienTinh(soKW){
    if(soKW <= 50){
        return soKW * 500;
   }else if(soKW > 50 && soKW <= 100){
     return 50* 500 + (soKW-50)*650;
   }else if(soKW > 100 && soKW <= 200 ){
    return 50*(500 + 650) + (soKW - 100)*850;
   }else if(soKW >200 && soKW <= 350){
    return 50*(500 + 650) + 100*850 + (soKW - 200)*1100;
   }else{
    return 50*(500 + 650) + 100*850 + 150* 1100 + (soKW-350)*1300;
   }
}
