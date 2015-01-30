//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        alert(this.name);
    };
};


//Now create three instances of Person with data you make up

  //code here

var ben = new Person("Ben", 20);

var tyler = new Person("Tyler", 50);

var jeremy = new Person("Jeremy", 48);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
ben.sayName();
tyler.sayName();
jeremy.sayName();