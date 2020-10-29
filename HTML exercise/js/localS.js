
function setTextColor() {
    localStorage.txtC = document.getElementById("color_list").value;
    document.getElementById("localSID").style.color = localStorage.txtC;
    console.log("text color set to "+localStorage.txtC);
}

function loadTextColor() {

    if (localStorage.txtC.length == 0) {
        localStorage.txtC = "black";
    }
    else {
        document.getElementById("localSID").style.color = localStorage.txtC;
        document.getElementById("color_list").value = localStorage.txtC;
    }


}
