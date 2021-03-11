
function myFunction() {
  var b = document.getElementById("myTopnav");
  if (b.className === "topnav") {
    b.className += " responsive";
  } else {
    b.className = "topnav";
  }
}

// When I try to use this my slide show script does not work

 function validate(){
	alert('Heyo fella!');


var age = document.getElementById("age").value;
var age = age * 1;

var email = document.getElementById("myEmail").value;

if(document.getElementById("name").value==""){
	alert('Name is blank!!');
	return false;
}
	//Validate the number (Age)
	if(isNaN(age)){
		alert('Age is not a number!!');
		return false;
	}	

	//is Email valid
	if(valid(email)==false){

		alert('Email is not in the correct format!!');
	}

}

function inputEmail() {
    document.getElementById("myEmail").required = true;
    document.getElementById("demo").innerHTML = "The required property was set. The email field must now be filled out before submitting the form.";
}

function myFunction() {
  var b = document.getElementById("myTopnav");
  if (b.className === "topnav") {
    b.className += " responsive";
  } else {
    b.className = "topnav";
  }
}


function check() {
    document.getElementById("red").checked = true;
       document.getElementById("blue").checked = false;
       document.getElementById("yellow").checked = false;

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


function myFunction() {
  var b = document.getElementById("myTopnav");
  if (b.className === "topnav") {
    b.className += " responsive";
  } else {
    b.className = "topnav";
  }
}