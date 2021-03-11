// var user = {
// 	name: "salman",
// 	age: 21,
// 	hoppy:"videogames",
// 	isMarried:false,
// 	superpower:["flight","partical control", "super stamina"],
// 	shout: function () {
// 		console.log("Silver Starneo knight!");	}
// };

var dataBase = [
{
	username:"sam",
	password:"secret"
},
{
	username:"sally",
	password:"yllas"
},
{
	username:"max",
	password:"mega"
}
];

var newsFeed = 
[
{
	username:"sam",
	timeLine:"earth39"
},
{
	username:"sally",
	timeLine:"earth1"
},
{
	username:"clark",
	timeLine:"earth52"
}
];

function isUserVailed(username,password) {
	for (var i=0; i < dataBase.length; i++){
		if(dataBase[i].username === username && 
			dataBase[i].password === password){
			return true;
		} 
		
	}
	return false;
}

function signIn(username, password) {
  if (isUserVailed(username,password)) {
  	  console.log(newsFeed);
  } else {
  	alert("Sorry, wrong username and password!");
  }
}

var userNamePrompt = prompt ("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);

// // function declaration
// function newFunction(){

// }
// // function expression
// var newFunction =function() {
// 	// body...
// };

// // expression

// 1+3;
// var a =2;
// return true;

// // calling or invoking a function
// alert();
// newFunction(parma1, parma2);

// // function vs method
// function thisIsFunction(){

// }

// var obj = {
// 	thisIsMethod:function(){

// 	}
// }

// thisIsFunction()
// obj.thisIsMethod()