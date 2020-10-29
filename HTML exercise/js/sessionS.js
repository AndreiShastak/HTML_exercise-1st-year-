
function setBgColor() {
    sessionStorage.bgC = document.getElementById("color_listBg").value;
    document.getElementById("sessionSID").style.backgroundColor = sessionStorage.bgC;
	console.log("background color set to "+sessionStorage.bgC);
}

function loadBgColor() {

    if (sessionStorage.bgC == null) {
        sessionStorage.bgC = "navajowhite";
    }
    else {
        document.getElementById("sessionSID").style.backgroundColor = sessionStorage.bgC;
        document.getElementById("color_listBg").value = sessionStorage.bgC;
    }


}
