/*
  Fill in the object constructor with the following methods below:

  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)
  Run the tests to see the expected output for each method.

  The methods that take an argument must accept only one argument and it has to be a string.

  These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
    var firstName = firstAndLast.slice(0, firstAndLast.indexOf(' '));
    var lastName = firstAndLast.slice(firstAndLast.indexOf(' ') + 1);


    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };

    this.setFullName = function(str) {
      firstName = str.slice(0, str.indexOf(' '));
      lastName = str.slice(str.indexOf(' ') + 1);
    };

    this.getFirstName = function() {
      return firstName;
    };

    this.setFirstName = function(first) {
      firstName = first;
    };

    this.getLastName = function() {
      return lastName;
    };

    this.setLastName = function(last) {
      lastName = last;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();


/*
  Object.keys(bob).length should return 6.
  bob instanceof Person should return true.
  bob.firstName should return undefined.
  bob.lastName should return undefined.
  bob.getFirstName() should return "Bob".
  bob.getLastName() should return "Ross".
  bob.getFullName() should return "Bob Ross".
  bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
  bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
  bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
  bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
  bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/
