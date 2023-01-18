const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

class Convert extends Array {

  constructor(...rest) {
    super(rest);
    const PersonInfo = {
      rest : rest
    }
  }
}
const id = person.id;

let ciao = new Convert(person);

console.log(id, ciao);