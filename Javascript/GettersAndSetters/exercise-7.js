class Person {
  #firstName = undefined;
  #lastName = undefined;
  #age = undefined;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  set firstName(value){
    this.#firstName = value;
  }
  get firstName(){
    return this.#firstName
  }
  set firstName(value){
    this.#lastName = value;
  }
  get firstName(){
    return this.#lastName
  }
  get fullName(){
    return ${this.#firstName} ${this.#lastName};
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);