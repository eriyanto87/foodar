//get style
function getStyleTotal() {
  var styleArr = document.getElementsByName("style");
  for (let i = 0; i < styleArr.length; i++) {
    if (styleArr[i].checked) {
      styleTotal = styleArr[i].value;
      Number(styleTotal);
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
  for (let i = 0; i < tipArr.length; i++) {
    if (tipArr[i].checked && styleTotal > 0) {
      tipAmount = tipArr[i].value;
      console.log(tipAmount / 100);
      tipTotal = styleTotal * (1 + tipAmount / 100);
      tipTotal = tipTotal.toFixed(2);
      console.log(styleTotal);
    }
  }
  document.getElementById("totalvalue").innerHTML = tipTotal;
}
