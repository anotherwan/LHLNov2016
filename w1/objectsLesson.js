let persons = {
  person1: {
    name: 'alice',
    age: 39,
    email: 'example@example.com',
    phoneNumber: '423-3234-4444'
  },
  person2: {
    name: 'bob',
    age: 46,
    email: 'example2@example.com',
    phoneNumber: '34443535252'
  }
}

persons['person3'] = {name: 'marvin', age: 40, phoneNumber: '8889993333'}


const compareThisEmail = "example2@example.com" // if email matches this, console.log('we've got a match!')

for (var personKey in persons) {
  let personVal = persons[personKey]
  if (persons[personKey].hasOwnProperty('email')) {
    if (persons[personKey]['email'] === compareThisEmail) {
      console.log("we've got a match! name of person with matching email: " + persons[personKey]['name'])
    }
  }
}
