class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  toJson() {
    return JSON.stringify(this);
  }

}

function fromJson() {
  return JSON.parse(json);
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = fromJson();

console.log(developer);
