function mOver(obj) {
    console.log("mouse over image");
    document.getElementById("tresc").style.backgroundImage = "url('" + obj.src + "')";
}
function mOut(obj) {
    console.log("mouse out of image");
    document.getElementById("tresc").style.backgroundImage = 'url(jpg/wood1.jpg)';
}


