//get style
function getStyleTotal() {
    var style = document.getElementsByName("style");
    for (let i=0; i<style.length; i++) {
        if (style[i].checked) {
            styleTotal = style[i].value;
        }
    }
document.getElementById("totalvalue").innerHTML = styleTotal;
return styleTotal;
}

//get tip
function addTip() {
    var tipTotal = 0; 
    var styleTotal = getStyleTotal(); 
    var tipArr = document.getElementsByName("tip");
    for (let i=0; i<tipArr.length; i++) {
        if (tipArr[i].checked) {
            tipAmount = tipArr[i].value;
            tipTotal = styleTotal * (1 + tipAmount/100);
            tipTotal = tipTotal.toFixed(2);
        
        }
       }
document.getElementById("totalvalue").innerHTML = tipTotal;
    }