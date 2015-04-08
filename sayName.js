//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  var Person = function(name, age) {
 this.name = name;
 this.age = age;
};


//Now create three instances of Person with data you make up

  //code here
var person1 = new Person("John Doe", 56);
var person2 = new Person("Abby Normal", 21);
var person3 = new Person("El Salvidor", 400);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function(){
    alert("My name is " + this.name);
};
person2.sayName();
