/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
  console.log(name + "'s information is " + name + email + pw);
}

  // people capitalize the first letter of classes, just a syntax thing
//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));

// could also do - var ben = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'); but the variable name is lost

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
  var Aryel = new User('Aryel', 'aryel.cianflone@gmail.com', 'blahblah');

  for (var i = 0; i < users.length; i++) {
    console.log(users[i].name)
  }


console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here