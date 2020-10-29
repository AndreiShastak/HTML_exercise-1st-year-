function AddBlok() {
    var div = document.createElement("div");
    div.setAttribute("class", "box");
    var p = document.createElement("p");
    div.appendChild(p);

    if (sessionStorage.boxes == null)
        sessionStorage.boxes = 0;
    sessionStorage.boxes = Number(sessionStorage.boxes)+1;
    if (sessionStorage.boxes % 10 == 0) {
        var t = document.createTextNode("It is " + sessionStorage.boxes + "th block in this session");
    } else {
        var t = document.createTextNode("New block");
    }

    p.appendChild(t);
    document.getElementById("tresc").appendChild(div);
    console.log("added a block");
}
