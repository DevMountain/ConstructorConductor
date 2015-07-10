//Create a Person constructor that accepts name and age as parameters and sets those properties 
//accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

  //code here
var Person1 = new Person('Bob', 30);
var Person2 = new Person('Jim', 20);
var Person3 = new Person('Hal', 40);

//Now add a sayName method on your Person class that will alert the name of whatever Person 
//instance called it.

  //code here
Person.prototype.sayName = function() {
	alert('Hello, my hame is ' + this.name);
}