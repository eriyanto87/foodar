function zipcodeChecker() {
    event.preventDefault();
const zipcode = document.getElementById("zipcode").value;
const zip = parseInt(zipcode, 10);
const notification = document.getElementById("result")
    if (zip >= 91000) {
        notification.innerHTML = "We've got your area covered!";
    }
    else {
        notification.innerHTML = "Sorry, we haven't expanded to that area yet."
       }
    }
   
    
