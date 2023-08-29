const cal = document.getElementById("cal");
var out = document.getElementById("out");
const t = document.getElementById("tip");
out.style.display = "none";

cal.addEventListener("click", function () {
    const bill = document.getElementById("bill").value;
    const quality = document.getElementById("quality").value;
    const sharing = document.getElementById("sharing").value;
    const tip = (bill * quality)/sharing;
    t.innerText = "Rs " + tip + " !";
    out.style.display = "inline";
})


