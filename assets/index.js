function onLoad() {
    console.log("Oh hey there. Michael here");
}
function togglediv() {
    var e = document.getElementById("heart");
    "none" == e.style.display ? (e.style.visibility = "visible", e.style.display = "block") : (e.style.visibility = "hidden", e.style.display = "none")
}
document.getElementById("toggle-heart").addEventListener("change", function() {
    var e = document.getElementById("text"),
        i = document.getElementById("pyro");
    "none" == e.style.display ? (e.style.visibility = "visible", e.style.display = "block", i.style.visibility = "visible", i.style.display = "block") : (e.style.visibility = "hidden", e.style.display = "none", i.style.visibility = "hidden", i.style.display = "none")
});