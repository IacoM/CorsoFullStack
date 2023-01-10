const person1 = {
  firstName: "Simon",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// La proprietà FirstName cambia in entrambi gli oggetti perchè sono stati copiati quindi abbiamo gli stessi valori sia per uno che per l'altro

console.log(person1);
console.log(person2);
