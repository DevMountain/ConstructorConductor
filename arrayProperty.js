//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  String.prototype.reverse = function(){
  	if(this.length <= 1) return this;
  	var res = this.substring(0, this.length - 1).reverse();
  	return this[this.length - 1] + res;
  }

  var str = 'abcdefghij';
  str.reverse();



 