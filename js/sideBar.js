document.getElementById("side_barBTN").onclick = function(){
    document.getElementById("side_bar").classList.toggle('close')
    
}
var internetBill = document.getElementById("internetBill")
var studentManage = document.getElementById("student__manager")
var electricBill = document.getElementById("electricBill")
var tinhThue = document.getElementById("tinhThue")

document.getElementById("sidebarItem").onclick = function(){
    studentManage.classList.remove('hidden')
    electricBill.classList.add('hidden')
    internetBill.classList.add('hidden')
    tinhThue.classList.add('hidden')
}
document.getElementById("itemTienDien").onclick =  function(){
    electricBill.classList.remove('hidden')
    studentManage.classList.add('hidden')
    internetBill.classList.add('hidden')
    tinhThue.classList.add('hidden')
}
document.getElementById("itemTienCap").onclick = function(){
    internetBill.classList.remove('hidden')
    studentManage.classList.add('hidden')
    electricBill.classList.add('hidden')
    tinhThue.classList.add('hidden')
};
document.getElementById("itemThue").onclick = function(){
    tinhThue.classList.remove('hidden')
    internetBill.classList.add('hidden')
    studentManage.classList.add('hidden')
    electricBill.classList.add('hidden')
};
