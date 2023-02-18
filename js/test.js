document.getElementById("side_barBTN").onclick = function () {
    document.getElementById("side_bar").classList.toggle('close')
}

var internetBill = document.getElementById("internetBill")
var studentManage = document.getElementById("student__manager")
var electricBill = document.getElementById("electricBill")
var tinhThue = document.getElementById("tinhThue")


document.getElementById("sidebarItem").onclick = mainCallFuntion(studentManage)


function mainCallFuntion(a1) {
    return a1.classList.remove('hidden')
};