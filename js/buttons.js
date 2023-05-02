var childButton = document.getElementById("childButton");
var adultButton = document.getElementById("adultButton");
var uses = document.getElementById("uses")
var culture = document.getElementById("culture")

childButton.addEventListener("click", function (e) {
    uses.textContent = "Uses but for kids."
    culture.textContent = "Culture but for kids"
});

adultButton.addEventListener("click", function (e) {
    uses.textContent = "This place was used for all sorts of things like placing and placing."
    culture.textContent = "The place on which you are standing has historically been used as a place in which place things occur."
});