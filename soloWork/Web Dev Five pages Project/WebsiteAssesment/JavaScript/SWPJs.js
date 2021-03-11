var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function myFunction() {
  var b = document.getElementById("myTopnav");
  if (b.className === "topnav") {
    b.className += " responsive";
  } else {
    b.className = "topnav";
  }
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var j;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (j = 0; j < x.length; j++) {
     x[j].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}




function check() {
    document.getElementById("red").checked = true;
       document.getElementById("blue").checked = false;
       document.getElementById("yellow").checked = false;

       return 0;

}

function check2() {
    document.getElementById("blue").checked = true;
    document.getElementById("red").checked = false;
    document.getElementById("yellow").checked = false;

}

function check3() {
document.getElementById("yellow").checked = true;
    document.getElementById("blue").checked = false;
    document.getElementById("red").checked = false;

}


function check() {
    document.getElementById("red").checked = true;
       document.getElementById("blue").checked = false;
       document.getElementById("yellow").checked = false;

}

