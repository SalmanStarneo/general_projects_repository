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

//When I try to use this my slide show script does not work

//  function validate(){
// 	prompt.alert('Heyo fella!');


// var age = document.getElementById("age").value;
// var age = age * 1;

// var email = document.getElementById()

// if(document.getElementById("name").value==""){
// 	alert('Name is blank!!');
// 	return false;
// }
// 	//Validate the number (Age)
// 	if(isNaN(age)){
// 		alert('Age is not a number!!');
// 		return false;
// 	}	

// 	//is Email valid
// 	if(valid(email)==false){

// 		alert('Email is not in the correct format!!');
// 	}

// }

// function	validateEmail(email)	{
// 				var	re	=	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-
// 9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 				return	re.test(email);
// }


function check() {
    document.getElementById("red").checked = true;
       document.getElementById("blue").checked = false;
       document.getElementById("yellow").checked = false;

}
