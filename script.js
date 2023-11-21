function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype called greet()
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor to set name and age
  Person.call(this, name, age);

  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Add a method to the Employee prototype called jobGreet()
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change the code below
window.Person = Person;
window.Employee = Employee;