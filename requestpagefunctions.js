var form = document.getElementById("form");

form.addEventListener(getStyleTotal, addTip, getTotal);

//get style
function getStyleTotal() {
var styleTotal = 0;
var styleArr = document.getElementsByClassName("style");
for (let i=0; i<styleArr.length; i++) {
    if (styleArr[i].checked) {
        styleTotal = styleArr[i].value;
        Number(styleTotal);    
    }
    }
}
//get tip
function addTip() {
    var tipTotal = 0;
    var tipArr = document.getElementsByClassName("tip");
    for (let i=0; i<tipArr.length; i++) {
        if (tipArr[i].checked && styleTotal>0) {
            tipTotal = styleTotal * (tipArr[i]/100);
        }
    }
}

//get total
function getTotal() {
    var total = styleTotal + tipTotal;
    var totalElem = document.getElementById("total");
    totalElem.innerHTML(total);
}

