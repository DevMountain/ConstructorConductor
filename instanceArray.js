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
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
  var Users = [];


//Now create and push into your users array 3 separate instances of User using the data from 
//above in that exact order

  //code here
Users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
Users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
Users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));


console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here
for (var i = 0; i < Users.length; i++) {
  if(Users[i]['name'] === 'Tyler') {
    console.log(Users[i])
    break;
  }
};

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
for (var i = 0; i < Users.length; i++) {
  if(Users[i]['name'] === 'Lenny') {
    console.log(Users[i])
    break;
  }
};

//Now create another instance of User using your own information and then add that to your 
//users array.

  //code here
Users.push(new User('Tony', 'ARC@theBOMB.com', 'cerealpls'));

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
for (var i = 0; i < Users.length; i++) {
  console.log(Users[i])
};
