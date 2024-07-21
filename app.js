//  Haniya Fatima
// WEB 180, ASN2
// Apr 5, 2023

// Tabs

function eventName(eventN) {
    var i;
    var x = document.getElementsByClassName("event");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(eventN).style.display = "block";
  }
