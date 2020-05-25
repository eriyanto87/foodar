//display after 5 seconds
function bannerPopUp() {
    var banner = document.getElementById("banner");
    banner.removeAttribute("hidden")
};

setTimeout(bannerPopUp, 5000);

//hide after click
function hidden() {
    var banner = document.getElementById("banner");
    banner.setAttribute("hidden", true);
}

var button = document.getElementById("banner-button");
button.addEventListener("click", hidden);
